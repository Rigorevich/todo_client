import React from "react";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import ListAltTwoToneIcon from "@mui/icons-material/ListAltTwoTone";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

const AccordionCard = () => {
  return (
    <Card>
      <Paper style={{ padding: "15px" }}>
        <div
          className="header"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <ListAltTwoToneIcon />
          <div className="title">
            <p style={{ fontSize: "20px" }}>Title</p>
            <span>Data</span>
          </div>
        </div>
        <Typography
          style={{ marginTop: "15px" }}
          variant="p"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Description
        </Typography>
        <div
          className="buttons"
          style={{
            display: "flex",
            marginTop: "12px",
            justifyContent: "space-between",
          }}
        >
          <div className="left">
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <Checkbox />
          </div>
          <div className="right">
            <IconButton>
              <EditIcon />
            </IconButton>
          </div>
        </div>
      </Paper>
    </Card>
  );
};

export default AccordionCard;
