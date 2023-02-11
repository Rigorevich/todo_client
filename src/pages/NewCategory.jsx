import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../store/slices/categories/categoryActions";

const NewCategory = () => {
  const { register, handleSubmit } = useForm();
  const { loading, error } = useSelector((state) => state.category);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const submitForm = (data) => {
    console.log(data);
    dispatch(createCategory({ ...data, user: userInfo }));
    alert("Category has been created");
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Box
        style={{
          padding: 30,
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          New Category
        </Typography>
        <TextField
          id="standard-multiline-flexible"
          label="Name"
          {...register("name")}
          multiline
          maxRows={4}
          variant="standard"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Description"
          {...register("description")}
          multiline
          maxRows={4}
          variant="standard"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Button type="sumbit" variant="contained" color="success">
            {loading ? "Loading" : "Save"}
          </Button>
          <Button variant="contained" color="error">
            Cancel
          </Button>
        </div>
      </Box>
    </form>
  );
};

export default NewCategory;
