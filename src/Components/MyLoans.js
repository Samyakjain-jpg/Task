import React from "react";
import { Box, Container, Typography } from "@mui/material";
import LoanListItem from "./LoanListItem";
import { UserState } from "../Contexts/UserProvider";

const MyLoans = () => {
  const { user } = UserState();
  return (
    <Container maxWidth="md">
      <Typography variant="h4" textAlign="center" mt={5}>
        Apply for Loan
      </Typography>
      <Box
        sx={{
          bgcolor: "#ECF9FF",
          boxShadow: 3,
          borderRadius: 4,
          p: 4,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: 0,
          my: 5,
        }}
      >
        {user?.loans
          ?.sort(
            (a, b) => new Date(b.loanStartDate) - new Date(a.loanStartDate)
          )
          .map((item, id) => (
            <LoanListItem key={id} data={item} />
          ))}
      </Box>
    </Container>
  );
};

export default MyLoans;
