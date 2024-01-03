import { styled } from "@mui/material/styles";
import { Grid, Paper } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#FFFBEB",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  }));

const LoanListItem = ({data}) => {
    const navigate = useNavigate();
  return (
    <Grid
          container
          onClick={()=>navigate(`/loan/${data.id}`)}
          sx={{
            bgcolor: "#FFFBEB",
            boxShadow: 3,
            borderRadius: 2,
            p: 2,
            my: 1,
            width: { md: "90%", lg: "45%" },
            cursor: "pointer",
          }}
        >
          <Grid xs={3}>
            <Item>Amount:</Item>
          </Grid>
          <Grid xs={3}>
            <Item>Date:</Item>
          </Grid>
          <Grid xs={3}>
            <Item>Term:</Item>
          </Grid>
          <Grid xs={3}>
            <Item>Status:</Item>
          </Grid>
          <Grid xs={3}>
            <Item>$1000</Item>
          </Grid>
          <Grid xs={3}>
            <Item>12/12/2030</Item>
          </Grid>
          <Grid xs={3}>
            <Item>4 weeks</Item>
          </Grid>
          <Grid xs={3}>
            <Item>Ongoing</Item>
          </Grid>
        </Grid>
  )
}

export default LoanListItem