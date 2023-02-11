import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import AccordionCard from "./AccordionCard";

const AccordionItem = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          General settings
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          I am an accordion
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <AccordionCard />
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
