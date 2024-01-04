import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#FFFBEB",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  cursor: "pointer",
}));

const LoanListItem = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      onClick={() => navigate(`/loan/${data._id}`)}
      sx={{
        borderRadius: 1,
        my: 2,
        boxShadow: 3,
      }}
    >
      <Grid item xs={3}>
        <CustomPaper>Amount</CustomPaper>
        <CustomPaper>${data.amount}</CustomPaper>
      </Grid>
      <Grid item xs={3}>
        <CustomPaper>Date</CustomPaper>
        <CustomPaper>{new Date(data.loanStartDate).toLocaleDateString()}</CustomPaper>
      </Grid>
      <Grid item xs={3}>
        <CustomPaper>Term</CustomPaper>
        <CustomPaper>{data.term} weeks</CustomPaper>
      </Grid>
      <Grid item xs={3}>
        <CustomPaper>Status</CustomPaper>
        <CustomPaper>{data.status}</CustomPaper>
      </Grid>
    </Grid>
  );
};

export default LoanListItem;
