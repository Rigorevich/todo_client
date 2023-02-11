import React from "react";
import { useForm } from "react-hook-form";
import { Box, Grid, Paper, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/auth/authActions";

const Auth = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const { register, handleSubmit } = useForm();

  React.useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Box>
        <Paper
          elevation={10}
          style={{
            padding: 20,
            width: 400,
            margin: "200px auto",
          }}
        >
          <Grid align="center">
            {error && <h5 align="center">{error}</h5>}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SIGN IN
            </Typography>
          </Grid>
          <TextField
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
            {...register("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            {...register("password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{ margin: "8px 0" }}
            fullWidth
          >
            {loading ? "Loading" : "Sign in"}
          </Button>
          <Typography>
            {" "}
            Do you have not an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Paper>
      </Box>
    </form>
  );
};

export default Auth;
