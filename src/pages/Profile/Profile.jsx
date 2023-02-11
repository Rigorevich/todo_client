import React from "react";
import { useForm } from "react-hook-form";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { textFields } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/slices/auth/authActions";

const Profile = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const { loading, userInfo, error } = useSelector((state) => state.auth);

  const submitForm = (data) => {
    dispatch(updateUser({ ...data, id: userInfo.id }));
    alert("Profile has been updated!");
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Box style={{ padding: "20px" }}>
        <Grid align="center">
          {error && <h5 align="center">{error}</h5>}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MY PROFILE
          </Typography>
        </Grid>
        {textFields.map((item) => (
          <TextField
            key={item.data}
            variant="standard"
            label={item.title}
            {...register(item.data)}
            defaultValue={userInfo[item.data]}
            placeholder={item.placeholder}
            fullWidth
            required
            style={{ marginBottom: "10px" }}
          />
        ))}
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={{ margin: "8px 4px 0 0", width: "200px" }}
        >
          {loading ? "Loading..." : "Update"}
        </Button>
        <Button
          type="submit"
          color="warning"
          variant="contained"
          style={{ margin: "8px 0 0 4px", width: "200px" }}
        >
          Cancel
        </Button>
      </Box>
    </form>
  );
};

export default Profile;
