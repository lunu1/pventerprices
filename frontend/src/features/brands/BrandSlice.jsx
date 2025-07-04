import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchAllBrands,
  createBrand,
  updateBrand,
  deleteBrand,
} from './BrandApi';

const initialState = {
  status: 'idle',
  brands: [],
  errors: null,
};

// Thunks
export const fetchAllBrandsAsync = createAsyncThunk(
  'brands/fetchAll',
  async () => {
    const brands = await fetchAllBrands();
    return brands;
  }
);

export const createBrandAsync = createAsyncThunk(
  'brands/create',
  async (formData, { rejectWithValue }) => {
    try {
      const brand = await createBrand(formData);
      return brand;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateBrandAsync = createAsyncThunk(
  'brands/update',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const brand = await updateBrand(id, formData);
      return brand;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteBrandAsync = createAsyncThunk(
  'brands/delete',
  async (id, { rejectWithValue }) => {
    try {
      await deleteBrand(id);
      return id;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Slice
const brandSlice = createSlice({
  name: 'brandSlice',
  initialState,
  reducers: {
    clearBrandErrors: (state) => {
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all
      .addCase(fetchAllBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllBrandsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.brands = action.payload;
      })
      .addCase(fetchAllBrandsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.payload;
      })

      // Create
      .addCase(createBrandAsync.fulfilled, (state, action) => {
        state.brands.push(action.payload);
      })
      .addCase(createBrandAsync.rejected, (state, action) => {
        state.errors = action.payload;
      })

      // Update
      .addCase(updateBrandAsync.fulfilled, (state, action) => {
        const index = state.brands.findIndex(b => b._id === action.payload._id);
        if (index !== -1) state.brands[index] = action.payload;
      })
      .addCase(updateBrandAsync.rejected, (state, action) => {
        state.errors = action.payload;
      })

      // Delete
      .addCase(deleteBrandAsync.fulfilled, (state, action) => {
        state.brands = state.brands.filter((b) => b._id !== action.payload);
      })
      .addCase(deleteBrandAsync.rejected, (state, action) => {
        state.errors = action.payload;
      });
  },
});

// Selectors
export const selectBrandStatus = (state) => state.brandSlice.status;
export const selectBrands = (state) => state.brandSlice.brands;
export const selectBrandErrors = (state) => state.brandSlice.errors;

// Actions
export const { clearBrandErrors } = brandSlice.actions;

export default brandSlice.reducer;
