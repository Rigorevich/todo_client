import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../store/slices/categories/categoryActions";

const Categories = () => {
  const dispatch = useDispatch();
  dispatch(getAllCategories());
  const { categoryInfo } = useSelector((state) => state.category);

  console.log(categoryInfo);

  return (
    <Box>
      <Paper elevation={3} style={{ padding: "10px", marginBottom: "10px" }}>
        Category
      </Paper>
      <Paper elevation={3} style={{ padding: "10px" }}>
        Category
      </Paper>
    </Box>
  );
};

export default Categories;
