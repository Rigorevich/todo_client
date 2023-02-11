import React from "react";
import Box from "@mui/material/Box";
import AccordionItem from "./Accordion/AccordionItem";
import { useSelector } from "react-redux";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <Box>
      <AccordionItem />
    </Box>
  );
};

export default Home;
