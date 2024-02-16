import React from "react";
import Animation from "./Animation.jsx";
import Navbar from "./Navbar.jsx";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ m: 0, p: 0 }}>
      <Navbar />
      <Animation />
    </Box>
  );
};

export default App;
