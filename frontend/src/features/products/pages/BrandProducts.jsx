import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Stack, Pagination, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { ProductCard } from "../components/ProductCard";
import { selectLoggedInUser } from "../../auth/AuthSlice";
import { selectWishlistItems, createWishlistItemAsync, deleteWishlistItemByIdAsync } from "../../wishlist/WishlistSlice";
import { axiosi } from "../../../config/axios";
import Lottie from "lottie-react";
import { loadingAnimation } from "../../../assets";

const BrandProducts = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("loading");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const loggedInUser = useSelector(selectLoggedInUser);
  const wishlistItems = useSelector(selectWishlistItems);
  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchBrandProducts = async () => {
      setFetchStatus("loading");
      try {
        const res = await axiosi.get(`/products/brand/${encodeURIComponent(brandName)}?page=${page}&limit=12`);
        setProducts(res.data.products);
        setTotalPages(res.data.totalPages);
        setFetchStatus("fulfilled");
      } catch (error) {
        console.error("Error fetching brand products:", error);
        setFetchStatus("error");
      }
    };

    fetchBrandProducts();
  }, [brandName, page]);

  const handleAddRemoveFromWishlist = (e, productId) => {
    if (e.target.checked) {
      if (!loggedInUser) {
        navigate("/login");
      } else {
        const data = { user: loggedInUser._id, product: productId };
        dispatch(createWishlistItemAsync(data));
      }
    } else {
      const index = wishlistItems.findIndex(item => item.product._id === productId);
      if (index !== -1) {
        dispatch(deleteWishlistItemByIdAsync(wishlistItems[index]._id));
      }
    }
  };

  if (fetchStatus === "loading") {
    return (
      <Stack alignItems="center" justifyContent="center" height="60vh">
        <Lottie animationData={loadingAnimation} style={{ width: 180 }} />
      </Stack>
    );
  }

  if (fetchStatus === "error") {
    return (
      <p className="text-center text-red-500 py-10">Failed to load products for this brand.</p>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">No products found for brand: {brandName}</p>
    );
  }

  return (
    <div className="pt-[80px] px-4">
      <h1 className="text-2xl font-bold mb-6 text-center capitalize">{brandName} Products</h1>

      <Grid container spacing={isMobile ? 1 : 2} justifyContent="center">
        {products.map(product => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={product._id}>
            <ProductCard
              id={product._id}
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
              description={product.description}
              handleAddRemoveFromWishlist={handleAddRemoveFromWishlist}
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
    </div>
  );
};

export default BrandProducts;
