import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/auth/authSlice";

const DropdownBtn = ({ children, color, titles }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path) => {
    setAnchorEl(null);
    if (path === "/login") {
      dispatch(logout());
    }
    navigate(path);
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        style={{ color }}
      >
        {children}
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {titles?.map((item, index) => {
          return (
            <MenuItem key={index} onClick={() => handleClose(item.path)}>
              {item.title}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default DropdownBtn;
