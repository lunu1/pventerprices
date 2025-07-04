import { axiosi } from "../../config/axios";

// Fetch all brands
export const fetchAllBrands = async () => {
  try {
    const res = await axiosi.get("/brands");
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch brands" };
  }
};

// Create a new brand
export const createBrand = async (formData) => {
  try {
    const res = await axiosi.post("/brands", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to create brand" };
  }
};

// Update brand
export const updateBrand = async (id, formData) => {
  try {
    const res = await axiosi.put(`/brands/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to update brand" };
  }
};

// Delete brand
export const deleteBrand = async (id) => {
  try {
    const res = await axiosi.delete(`/brands/${id}`);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to delete brand" };
  }
};
