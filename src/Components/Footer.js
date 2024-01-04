import { Paper, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        bottom: 0,
        width: "97%",
        background: "black",
      }}
    >
      <Typography variant="body2" color="white" align="center">
        &copy; 2024 Your Company Name. All rights reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
