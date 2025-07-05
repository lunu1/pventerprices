import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Stack, Pagination } from "@mui/material";
import { axiosi } from "../../../config/axios";
import { ProductCard } from "../components/ProductCard";
import Lottie from "lottie-react";
import { loadingAnimation } from "../../../assets";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBrandsAsync, selectBrands } from "../../brands/BrandSlice";
import { Navbar } from "../../navigation/components/Navbar";

const BrandProducts = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("loading");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchAllBrandsAsync());
  }, [dispatch]);

  useEffect(() => {
    const fetchBrandProducts = async () => {
      setFetchStatus("loading");
      try {
        const res = await axiosi.get(
          `/products/brand/${encodeURIComponent(brandName)}?page=${page}&limit=12`
        );
        setProducts(res.data.products);
        setTotalPages(res.data.totalPages);
        setFetchStatus("fulfilled");
      } catch (error) {
        setFetchStatus("error");
      }
    };

    fetchBrandProducts();
  }, [brandName, page]);

  if (fetchStatus === "loading") {
    return (
      <Stack alignItems="center" justifyContent="center" height="60vh">
        <Lottie animationData={loadingAnimation} style={{ width: 180 }} />
      </Stack>
    );
  }

  if (fetchStatus === "error") {
    return <p className="text-center text-red-500 py-10">Failed to load products for this brand.</p>;
  }

  return (
    <>
    
      <Navbar/>
    <div className="pt-[80px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* Sidebar */}
      <aside className="md:col-span-1 border-r pr-4">
        <h2 className="text-lg font-semibold mb-4">Brands</h2>
        <ul className="space-y-2">
          {brands.map((brand) => (
            <li
              key={brand._id}
              onClick={() => navigate(`/brands/${brand.name}`)}
              className={`cursor-pointer hover:text-black ${
                brand.name.toLowerCase() === brandName.toLowerCase() ? "text-black font-bold" : "text-gray-600"
              }`}
            >
              {brand.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Products Grid */}
      <section className="md:col-span-4">
        <h1 className="text-2xl font-bold mb-6 text-center capitalize">{brandName} Products</h1>
        {products.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No products found for brand: {brandName}</p>
        ) : (
          <>
            <Grid container spacing={2} justifyContent="center">
              {products.map((product) => (
                <Grid item xs={6} sm={4} md={4} lg={3} key={product._id}>
                  <ProductCard
                    id={product._id}
                    title={product.title}
                    thumbnail={product.thumbnail}
                    price={product.price}
                    description={product.description}
                    onClick={() => navigate(`/product-details/${product._id}`)}
                  />
                </Grid>
              ))}
            </Grid>

            <Stack alignItems="center" spacing={2} sx={{ marginTop: 4 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, val) => setPage(val)}
                color="primary"
              />
            </Stack>
          </>
        )}
      </section>
    </div>
    </>
  );
};

export default BrandProducts;
