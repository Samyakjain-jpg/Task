import React from "react";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import LoanCard from "./LoanCard";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const LoanRequestsPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loanRequests, setLoanRequests] = useState([]);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`/api/loan`);
      setLoanRequests(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterRequests = (status) =>
    loanRequests?.filter((request) => request.status === status);

  return (
    <Container maxWidth="md">
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Loan Requests
        </Typography>
        <Tabs
          value={tabValue}
          variant="scrollable"
          scrollButtons="auto"
          onChange={handleChangeTab}
          centered
        >
          <Tab label="All Requests" />
          <Tab label="Pending Requests" />
          <Tab label="Active Loans" />
          <Tab label="Declined Requests" />
        </Tabs>
        <Grid container spacing={4}>
          {tabValue === 0 &&
            loanRequests?.map((request) => (
              <LoanCard key={request._id} fetchData={fetchData} data={request} />
            ))}
          {tabValue === 1 &&
            filterRequests("pending").map((request) => (
              <LoanCard key={request._id} fetchData={fetchData} data={request} />
            ))}
          {tabValue === 2 &&
            filterRequests("approved").map((request) => (
              <LoanCard key={request._id} data={request} />
            ))}
          {tabValue === 3 &&
            filterRequests("declined").map((request) => (
              <LoanCard key={request._id} data={request} />
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default LoanRequestsPage;
