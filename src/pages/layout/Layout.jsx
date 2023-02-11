import { Outlet, Link } from "react-router-dom";

import React from "react";
import Paper from "@mui/material/Paper";
import Header from "../../components/Header";
import Typography from "@mui/material/Typography";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";

const Layout = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [isSidebar, setIsSidebar] = React.useState(false);

  console.log(userInfo);
  if (!userInfo) {
    return (
      <Paper
        elevation={10}
        style={{
          padding: 20,
          width: 400,
          margin: "200px auto",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{ flexGrow: 1 }}
        >
          Unauthorized :(
        </Typography>
        <Typography align="center">
          <Link to="/login">Login</Link> to gain access
        </Typography>
      </Paper>
    );
  }

  return (
    <>
      <Header open={() => setIsSidebar(true)} />
      <Sidebar
        isSidebar={isSidebar}
        setIsSidebar={(value) => setIsSidebar(value)}
      />
      <Outlet />
    </>
  );
};

export default Layout;
