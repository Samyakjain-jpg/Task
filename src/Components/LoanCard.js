import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoanCard = ({ data, fetchData }) => {
  const { name, amount, loanStartDate, term, status } = data;
  const navigate = useNavigate();

  const handleSubmit = async (event, status) => {
    event.stopPropagation();
    await axios.patch("/api/loan", {
      loanId: data._id,
      type: "admin",
      status,
    });
    fetchData();
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      onClick={() => navigate(`/loan/${data._id}`)}
      sx={{ cursor: "pointer" }}
    >
      <Card
        sx={{ boxShadow: 3, borderRadius: 4, transition: "transform 0.2s" }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            Amount: ${amount}
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            Date: {new Date(loanStartDate).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            Term: {term} weeks
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Status: {status}
          </Typography>
        </CardContent>
        {status === "pending" && (
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              color="success"
              onClick={(event) => handleSubmit(event, "approved")}
            >
              Accept
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={(event) => handleSubmit(event, "declined")}
              sx={{ ml: 1 }}
            >
              Reject
            </Button>
          </CardActions>
        )}
      </Card>
    </Grid>
  );
};

export default LoanCard;
