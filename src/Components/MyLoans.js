import { Box } from "@mui/material";
import React from "react";
import LoanListItem from "./LoanListItem";

const MyLoans = () => {
  return (
    <Box sx={{ width: 1 }}>
      <Box
        sx={{
          width: 1 / 2,
          bgcolor: "#ECF9FF",
          boxShadow: 3,
          borderRadius: 2,
          p: 2,
          minWidth: 350,
          mx: "auto",
          my: 5,
          display: "flex",
          gap: .5,
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        <LoanListItem data={{id:1}} />
        <LoanListItem data={{id:1}} />
        <LoanListItem data={{id:1}} />
        <LoanListItem data={{id:1}} />
        <LoanListItem data={{id:1}} />
        <LoanListItem data={{id:1}} />
      </Box>
    </Box>
  );
};

export default MyLoans;
