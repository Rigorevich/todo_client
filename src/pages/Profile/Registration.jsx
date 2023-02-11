import React from "react";
import FormControl from "@mui/material/FormControl";
import { useForm } from "react-hook-form";
import { Box, Grid, Paper, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { textFields } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/slices/auth/authActions";

const Registration = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (success) navigate("/login");
    if (userInfo) navigate("/");
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    console.log(data);
    dispatch(registerUser(data));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Box>
        <Paper
          elevation={10}
          style={{
            padding: 20,
            width: 400,
            margin: "100px auto",
          }}
        >
          {error && <h1 align="center">{error}</h1>}

          <Grid align="center">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SIGN UP
            </Typography>
          </Grid>
          {textFields.map((item) => (
            <TextField
              key={item.data}
              variant="standard"
              label={item.title}
              placeholder={item.placeholder}
              fullWidth
              {...register(item.data)}
              required
              style={{ marginBottom: "10px" }}
            />
          ))}
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{ margin: "8px 0" }}
            fullWidth
          >
            {loading ? "Loading..." : "Sign up"}
          </Button>
          <Typography>
            {" "}
            Do you have an account? <Link to="/login">Sign In</Link>
          </Typography>
        </Paper>
      </Box>
    </form>
  );
};

export default Registration;
