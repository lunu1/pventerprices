import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBrandsAsync, selectBrands } from "../../brands/BrandSlice";

const BrandsSection = () => {
  const dispatch = useDispatch();

  // Fetch brands on mount
  useEffect(() => {
    dispatch(fetchAllBrandsAsync());
  }, [dispatch]);

  // If your slice returns only the array, this is fine.
  // If it returns an object (e.g., { items, status, error }), adapt lines below accordingly.
  const brandsFromStore = useSelector(selectBrands) || [];

  // Local UI state
  const [visibleCount, setVisibleCount] = useState(6);
  const [offset, setOffset] = useState(0);

  // Normalize optional id fields once to keep keys stable
  const normalizedBrands = useMemo(
    () =>
      (brandsFromStore || []).map((b, idx) => ({
        id: b.id ?? b._id ?? idx,
        name: b.name ?? b.title ?? "Untitled",
        image:
          b.image ??
          b.imageURL ??
          b.image ??
          "https://via.placeholder.com/128x128?text=Logo",
      })),
    [brandsFromStore]
  );

  const visibleBrands = useMemo(
    () => normalizedBrands.slice(0, visibleCount),
    [normalizedBrands, visibleCount]
  );

  const hasMore = visibleCount < normalizedBrands.length;

  // Refs for measuring the single track width
  const trackRef = useRef(null);
  const rafRef = useRef(null);

  // Seamless scroll config
  const SPEED = 60; // pixels/sec
  const GAP_PX = 24;

  // Start the RAF loop
  useEffect(() => {
    if (!visibleBrands.length) return;

    let last = performance.now();

    const loop = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      const singleWidth = trackRef.current?.offsetWidth || 0;

      setOffset((prev) => {
        if (singleWidth <= 0) return prev;
        const next = prev + SPEED * dt;
        return next >= singleWidth ? next - singleWidth : next;
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visibleBrands.length]);

  // Reset offset on list changes or resize
  useEffect(() => {
    setOffset(0);
    const onResize = () => setOffset(0);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [visibleBrands.length]);

  const showMore = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    setVisibleCount((c) => c + (isMobile ? 4 : 6));
  };

  // Render one logo card
  const LogoCard = ({ brand }) => (
    <div
      className="border-2 border-gray-200 aspect-square flex flex-col items-center justify-center p-2 md:p-4 transition-all duration-300 group-hover:border-black group-hover:bg-gray-50"
      style={{ width: 160, minWidth: 160 }}
    >
      <div className="mb-1 md:mb-2">
        <img
          src={brand.image}
          alt={brand.name}
          className="w-32 h-32 object-contain  group-hover:grayscale-0 transition-all duration-300"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/128x128?text=Logo";
          }}
          loading="lazy"
        />
      </div>
      <h3 className="text-xs font-medium text-black text-center leading-tight">
        {brand.name}
      </h3>
    </div>
  );

  // Simple loading/empty states (adjust if your slice exposes status/error)
  if (!normalizedBrands.length) {
    return (
      <div className="bg-white py-16 px-4">
        <h1 className="text-center text-3xl font-semibold mb-8 uppercase">
          Our Brands
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-40 bg-gray-100 border-2 border-gray-200 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 px-4">
      <h1 className="text-center text-3xl font-semibold mb-8 uppercase">
        Our Brands
      </h1>

      {/* Seamless continuous scroller */}
      <div className="overflow-hidden" style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            transform: `translateX(-${offset}px)`,
            willChange: "transform",
          }}
        >
          {/* Track A */}
          <div ref={trackRef} style={{ display: "flex" }}>
            {visibleBrands.map((b) => (
              <div key={`A-${b.id}`} style={{ marginRight: GAP_PX }}>
                <LogoCard brand={b} />
              </div>
            ))}
          </div>

          {/* Track B (duplicate) */}
          <div aria-hidden="true" style={{ display: "flex" }}>
            {visibleBrands.map((b) => (
              <div key={`B-${b.id}`} style={{ marginRight: GAP_PX }}>
                <LogoCard brand={b} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={showMore}
            className="px-6 py-3 border-2 border-black bg-white text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default BrandsSection;
