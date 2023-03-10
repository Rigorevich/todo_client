import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HouseIcon from "@mui/icons-material/House";
import DropdownBtn from "./DropdownBtn";

import { headerButtons } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ open }) => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={open}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
            <Typography variant="div" component="div" sx={{ flexGrow: 1 }}>
              Welcome, {userInfo.firstName}
            </Typography>
            <IconButton
              style={{ color: "inherit" }}
              onClick={() => navigate("/")}
            >
              <HouseIcon />
            </IconButton>
            {headerButtons.map((obj) => {
              return (
                <DropdownBtn key={obj.id} color="inherit" titles={obj.titles}>
                  {obj.icon}
                </DropdownBtn>
              );
            })}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
