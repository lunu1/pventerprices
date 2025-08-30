// import React, { useState } from 'react';

// const BrandsSection = () => {
//   const [visibleCount, setVisibleCount] = useState(6); // Show first 8 brands initially

//   // Static brand data - replace with your dynamic data later
//   const brands = [
//     {
//       id: 1,
//       name: "Jaquar",
//       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yQUgyIvFFpKiZkPZa7o_wIEcD3_zwDt_q0s6&s=0"
//     },
//     {
//       id: 2,
//       name: "Kohler",
//       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIA1ZgNyagetEasvXp0VqXAgiCtP4FAIm_B6H&s=0"
//     },
//     {
//       id: 3,
//       name: "Cera",
//       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiuLNjNWGdrYp7s1U5Wf9kS_9__6rAYucIGOc&s=0"
//     },
//     {
//       id: 4,
//       name: "TOTO",
//       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZiZtCeI9Y9Z3E7VsIA2FYS7700YVzxUezbUh&s=0"
//     },
//     {
//       id: 5,
//       name: "Tesla",
//       logo: "https://res.cloudinary.com/dxq0nrirt/image/upload/v1756552265/21783_zrpsrc.jpg"
//     },
//     {
//       id: 6,
//       name: "Parryware",
//       logo: "https://res.cloudinary.com/dxq0nrirt/image/upload/v1756552504/parryware-senetry-Logo-Vector.svg-_uulahr.webp"
//     },
//     {
//       id: 7,
//       name: "Nike",
//       logo: "https://res.cloudinary.com/dxq0nrirt/image/upload/v1756552621/web-183282388_qmdcy9.webp"
//     },
//     {
//       id: 8,
//       name: "Samsung",
//       logo: "https://res.cloudinary.com/dxq0nrirt/image/upload/v1756552808/Samsung-Logo-PNG-Images_v5umwo.webp"
//     },
//     {
//       id: 9,
//       name: "Sony",
//       logo: "https://via.placeholder.com/120x80/000000/FFFFFF?text=SONY"
//     },
//     {
//       id: 10,
//       name: "Meta",
//       logo: "https://via.placeholder.com/120x80/000000/FFFFFF?text=META"
//     },
//     {
//       id: 11,
//       name: "Adobe",
//       logo: "https://via.placeholder.com/120x80/000000/FFFFFF?text=ADOBE"
//     },
//     {
//       id: 12,
//       name: "Intel",
//       logo: "https://via.placeholder.com/120x80/000000/FFFFFF?text=INTEL"
//     },
//     {
//       id: 13,
//       name: "IBM",
//       logo: "https://via.placeholder.com/120x80/000000/FFFFFF?text=IBM"
//     },
//     {
//       id: 14,
//       name: "Oracle",
//       logo: "https://via.placeholder.com/120x80/000000/FFFFFF?text=ORACLE"
//     },
//     {
//       id: 15,
//       name: "Cisco",
//       logo: "https://via.placeholder.com/120x80/000000/FFFFFF?text=CISCO"
//     },
//     {
//       id: 16,
//       name: "HP",
//       logo: "https://via.placeholder.com/120x80/000000/FFFFFF?text=HP"
//     },
//     {
//       id: 17,
//       name: "Dell",
//       logo: "https://via.placeholder.com/120x80/000000/FFFFFF?text=DELL"
//     },
//     {
//       id: 18,
//       name: "Spotify",
//       logo: "https://via.placeholder.com/120x80/000000/FFFFFF?text=SPOTIFY"
//     }
//   ];

//   const showMore = () => {
//     // Add 4 more brands on mobile (2 cols), 6 more on desktop (6 cols)
//     const isMobile = window.innerWidth < 768;
//     const increment = isMobile ? 4 : 6;
//     setVisibleCount(prevCount => prevCount + increment);
//   };

//   const visibleBrands = brands.slice(0, visibleCount);
//   const hasMoreBrands = visibleCount < brands.length;

//   return (
//     <div className="bg-white py-16 px-4">
//       <h1 className='text-center text-3xl font-semibold mb-8 uppercase'>Our Brands</h1>
//       <div className="">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
//           {visibleBrands.map((brand) => (
//             <div 
//               key={brand.id} 
//               className="group cursor-pointer"
//             >
//               <div className="bg-gray-100 border-2 border-gray-200 aspect-square flex flex-col items-center justify-center p-2 md:p-4 transition-all duration-300 group-hover:border-black group-hover:bg-gray-50">
//                 <div className="mb-1 md:mb-2">
//                  <img 
//   src={brand.logo} 
//   alt={brand.name}
//   className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
// />

//                 </div>
//                 <h3 className="text-xs font-medium text-black text-center leading-tight">
//                   {brand.name}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>

        
        
//         {hasMoreBrands && (
//           <div className="text-center mt-8">
//             <button 
//               onClick={showMore}
//               className="px-6 py-3 border-2 border-black bg-white text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
//             >
//               Show More
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BrandsSection;

import React, { useEffect, useMemo, useRef, useState } from "react";

const BrandsSection = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [offset, setOffset] = useState(0);

  const brands = [
    { id: 1, name: "Jaquar", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yQUgyIvFFpKiZkPZa7o_wIEcD3_zwDt_q0s6&s=0" },
    { id: 2, name: "Kohler", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIA1ZgNyagetEasvXp0VqXAgiCtP4FAIm_B6H&s=0" },
    { id: 3, name: "Cera", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiuLNjNWGdrYp7s1U5Wf9kS_9__6rAYucIGOc&s=0" },
    { id: 4, name: "TOTO", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZiZtCeI9Y9Z3E7VsIA2FYS7700YVzxUezbUh&s=0" },
    { id: 5, name: "Tesla", logo: "https://res.cloudinary.com/dxq0nrirt/image/upload/v1756552265/21783_zrpsrc.jpg" },
    { id: 6, name: "Parryware", logo: "https://res.cloudinary.com/dxq0nrirt/image/upload/v1756552504/parryware-senetry-Logo-Vector.svg-_uulahr.webp" },
    { id: 7, name: "Nike", logo: "https://res.cloudinary.com/dxq0nrirt/image/upload/v1756552621/web-183282388_qmdcy9.webp" },
    // add more when you like…
  ];

  const visibleBrands = useMemo(() => brands.slice(0, visibleCount), [brands, visibleCount]);

  // Refs for measuring the single track width
  const trackRef = useRef(null);
  const rafRef = useRef(null);

  // Seamless scroll speed (pixels per second)
  const SPEED = 60; // tweak as needed
  // Gap between items (in pixels)
  const GAP_PX = 24; // tweak as needed

  // Start the RAF loop
  useEffect(() => {
    let last = performance.now();

    const loop = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      // Width of the first track (one copy)
      const singleWidth = trackRef.current?.offsetWidth || 0;

      setOffset((prev) => {
        if (singleWidth <= 0) return prev;
        const next = prev + SPEED * dt;
        // When we've scrolled one full track, wrap around seamlessly
        return next >= singleWidth ? next - singleWidth : next;
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [visibleBrands.length]);

  // Recalculate / reset offset when items change or window resizes
  useEffect(() => {
    setOffset(0);
    const onResize = () => setOffset(0);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [visibleBrands.length]);

  const showMore = () => {
    const isMobile = window.innerWidth < 768;
    setVisibleCount((c) => c + (isMobile ? 4 : 6));
  };

  const hasMore = visibleCount < brands.length;

  // Render one logo card
  const LogoCard = ({ brand }) => (
    <div
      className="bg-gray-100 border-2 border-gray-200 aspect-square flex flex-col items-center justify-center p-2 md:p-4 transition-all duration-300 group-hover:border-black group-hover:bg-gray-50"
      style={{ width: 160, minWidth: 160 }} // keep cards consistent so scrolling is smooth
    >
      <div className="mb-1 md:mb-2">
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-32 h-32 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <h3 className="text-xs font-medium text-black text-center leading-tight">{brand.name}</h3>
    </div>
  );

  return (
    <div className="bg-white py-16 px-4">
      <h1 className="text-center text-3xl font-semibold mb-8 uppercase">Our Brands</h1>

      {/* Seamless continuous scroller (no external CSS, no <marquee>) */}
      <div
        className="overflow-hidden"
        style={{ width: "100%" }}
      >
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



