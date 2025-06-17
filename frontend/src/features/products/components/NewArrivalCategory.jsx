import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./NewArrivalCategoryCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCategoriesAsync,
  selectCategories,
} from "../../categories/CategoriesSlice";

const NewArrivalCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchAllCategoriesAsync());
  }, [dispatch]);

  return (
    <div className="px-6 md:px-4">
      <h1 className="text-3xl font-semibold text-center mb-10 w-full">Our Products</h1>
     <div className="grid gap-6"
     style={{
       gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
     }}>
  {categories
  .filter((category) => category.name.toLowerCase() !== "brand")
  .map((category, index) => (
    <CategoryCard
      key={index}
      title={category.name}
      buttonText="VIEW PRODUCTS"
      image={category.image || "placeholder.jpg"}
      onClick={() => navigate(`/new-arrivals/${category.name}`)}
    />
))}
</div>

    </div>
  );
};

export default NewArrivalCategory;
