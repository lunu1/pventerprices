import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
  Divider,
  Grid,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import {
  addCategoriesAsync,
  addSubcategoryAsync,
  fetchAllCategoriesAsync,
  deleteCategoryAsync,
  deleteSubcategoryAsync,
  selectCategoryAddStatus,
  selectSubcategoryAddStatus,
  selectCategoryErrors,
  selectCategories,
  clearCategoryErrors,
  resetAddCategoryStatus,
  resetAddSubcategoryStatus,
} from "../../categories/CategoriesSlice";

import {
  createBrandAsync,
  deleteBrandAsync,
  selectBrandStatus,
  selectBrandErrors,
  clearBrandErrors,
  fetchAllBrandsAsync,
  selectBrands,
} from "../../brands/BrandSlice";

const AddCategory = () => {
  const dispatch = useDispatch();

  const brands = useSelector(selectBrands);
  const categories = useSelector(selectCategories);
  const addStatus = useSelector(selectCategoryAddStatus);
  const addSubStatus = useSelector(selectSubcategoryAddStatus);
  const brandStatus = useSelector(selectBrandStatus);
  const error = useSelector(selectCategoryErrors);

  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [subName, setSubName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [subImage, setSubImage] = useState(null);
  const [brandName, setBrandName] = useState("");
  const [brandImage, setBrandImage] = useState(null);

  useEffect(() => {
    dispatch(fetchAllCategoriesAsync());
    dispatch(fetchAllBrandsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (addStatus === "fulfilled") {
      toast.success("Category added successfully");
      setCategoryName("");
      setCategoryImage(null);
      dispatch(resetAddCategoryStatus());
    } else if (addStatus === "rejected") {
      toast.error(
        typeof error === "string"
          ? error
          : error?.message || "Failed to add category"
      );
      dispatch(resetAddCategoryStatus());
      dispatch(clearCategoryErrors());
    }
  }, [addStatus, error, dispatch]);

  useEffect(() => {
    if (addSubStatus === "fulfilled") {
      toast.success("Subcategory added successfully");
      setSubName("");
      setSelectedCategoryId("");
      dispatch(resetAddSubcategoryStatus());
    } else if (addSubStatus === "rejected") {
      toast.error(
        typeof error === "string"
          ? error
          : error?.message || "Failed to add subcategory"
      );
      dispatch(resetAddSubcategoryStatus());
      dispatch(clearCategoryErrors());
    }
  }, [addSubStatus, error, dispatch]);

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) {
      toast.error("Category name is required");
      return;
    }
    const formData = new FormData();
    formData.append("name", categoryName.trim());
    if (categoryImage) formData.append("image", categoryImage);
    dispatch(addCategoriesAsync(formData));
  };

  const handleAddSubcategory = (e) => {
    e.preventDefault();
    if (!subName.trim() || !selectedCategoryId) {
      toast.error("Subcategory name and parent category are required");
      return;
    }
    const formData = new FormData();
    formData.append("name", subName.trim());
    formData.append("category", selectedCategoryId);
    if (subImage) formData.append("image", subImage);
    dispatch(addSubcategoryAsync(formData));
  };

  const handleAddBrand = (e) => {
    e.preventDefault();
    if (!brandName.trim()) {
      toast.error("Brand name is required");
      return;
    }
    const formData = new FormData();
    formData.append("name", brandName.trim());
    if (brandImage) formData.append("image", brandImage);
    dispatch(createBrandAsync(formData))
      .unwrap()
      .then(() => {
        toast.success("Brand added successfully");
        setBrandName("");
        setBrandImage(null);
      })
      .catch((err) => {
        toast.error(err.message || "Failed to add brand");
      });
  };

  const handleDeleteCategory = (id) => {
    if (window.confirm("Delete this category and all its subcategories?")) {
      dispatch(deleteCategoryAsync(id));
    }
  };

  const handleDeleteSubcategory = (subId, catId) => {
    if (window.confirm("Delete this subcategory?")) {
      dispatch(deleteSubcategoryAsync({ subcategoryId: subId, categoryId: catId }));
    }
  };

  const handleDeleteBrand = (id) => {
    if (!window.confirm("Are you sure you want to delete this brand?")) return;
    dispatch(deleteBrandAsync(id))
      .unwrap()
      .then(() => toast.success("Brand deleted"))
      .catch((err) => toast.error(err.message || "Failed to delete brand"));
  };

  return (
    <Box sx={{ mt: 5, px: 4 }}>
      <Grid container spacing={4}>
        {/* LEFT - Category & Subcategory */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Category Management
          </Typography>

          <Box sx={{ p: 3, bgcolor: "#fff", borderRadius: 2, mb: 4, boxShadow: 2 }}>
            <Typography variant="subtitle1" mb={2}>Add Category</Typography>
            <form onSubmit={handleAddCategory} encType="multipart/form-data">
              <TextField
                label="Category Name"
                variant="outlined"
                fullWidth
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <input type="file" accept="image/*" onChange={(e) => setCategoryImage(e.target.files[0])} />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Add Category
              </Button>
            </form>
          </Box>

          <Box sx={{ p: 3, bgcolor: "#fff", borderRadius: 2, mb: 4, boxShadow: 2 }}>
            <Typography variant="subtitle1" mb={2}>Add Subcategory</Typography>
            <form onSubmit={handleAddSubcategory}>
              <TextField
                label="Subcategory Name"
                variant="outlined"
                fullWidth
                value={subName}
                onChange={(e) => setSubName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Select Category</InputLabel>
                <Select
                  value={selectedCategoryId}
                  label="Select Category"
                  onChange={(e) => setSelectedCategoryId(e.target.value)}
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat._id} value={cat._id}>{cat.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <input type="file" accept="image/*" onChange={(e) => setSubImage(e.target.files[0])} />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Add Subcategory
              </Button>
            </form>
          </Box>
<Box sx={{ p: 3, bgcolor: "#fff", borderRadius: 2, boxShadow: 2 }}>
  <Typography variant="h6" gutterBottom>
    Existing Categories & Subcategories
  </Typography>

  {categories.map((cat) => (
    <Box
      key={cat._id}
      sx={{
        mt: 2,
        border: "1px solid #eee",
        borderRadius: 2,
        p: 2,
        backgroundColor: "#fafafa",
      }}
    >
      {/* Category Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {cat.image && (
            <img
              src={cat.image}
              alt={cat.name}
              style={{
                width: 40,
                height: 40,
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
          )}
          <Typography variant="subtitle1">{cat.name}</Typography>
        </Box>
        <IconButton color="error" onClick={() => handleDeleteCategory(cat._id)}>
          <Delete />
        </IconButton>
      </Box>

      {/* Subcategories */}
      {cat.subCategory?.length > 0 && (
        <Box sx={{ mt: 1, pl: 4 }}>
          {cat.subCategory.map((sub) => (
            <Box
              key={sub._id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 1,
                p: 1,
                backgroundColor: "#fff",
                borderRadius: 1,
                border: "1px solid #eee",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {sub.image && (
                  <img
                    src={sub.image}
                    alt={sub.name}
                    style={{
                      width: 30,
                      height: 30,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
                  />
                )}
                <Typography variant="body2">{sub.name}</Typography>
              </Box>
              <IconButton
                size="small"
                color="error"
                onClick={() => handleDeleteSubcategory(sub._id, cat._id)}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  ))}
</Box>

        </Grid>

        {/* RIGHT - Brand Management */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Brand Management
          </Typography>

          <Box sx={{ p: 3, bgcolor: "#fff", borderRadius: 2, mb: 4, boxShadow: 2 }}>
            <Typography variant="subtitle1" mb={2}>Add Brand</Typography>
            <form onSubmit={handleAddBrand} encType="multipart/form-data">
              <TextField
                label="Brand Name"
                variant="outlined"
                fullWidth
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <input type="file" accept="image/*" onChange={(e) => setBrandImage(e.target.files[0])} />
              <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                Add Brand
              </Button>
            </form>
          </Box>

          <Box sx={{ p: 3, bgcolor: "#fff", borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="subtitle1" gutterBottom>Existing Brands</Typography>
            {brands?.length > 0 ? (
              brands.map((brand) => (
                <Box key={brand._id} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {brand.image && (
                      <img src={brand.image} alt={brand.name} style={{ width: 40, height: 40, borderRadius: 4 }} />
                    )}
                    <Typography>{brand.name}</Typography>
                  </Box>
                  <IconButton size="small" color="error" onClick={() => handleDeleteBrand(brand._id)}>
                    <Delete fontSize="small" />
                  </IconButton>
                </Box>
              ))
            ) : (
              <Typography color="textSecondary">No brands available.</Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddCategory;