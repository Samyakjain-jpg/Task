import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { UserState } from "../Contexts/UserProvider";

const LoanDetail = () => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const { user } = UserState();

  const fetchData = async () => {
    try {
      if (!id) return;
      const { data } = await axios.get(`/api/loan/${id}`);
      setDetails(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    let da = details;
    for (let i = 0; i < da.term; i++) {
      if (da.repayment[i].status === "Unpaid") {
        da.repayment[i].status = "Paid";
        await setDetails({ ...da });
        const { data } = await axios.patch("/api/loan", {
          loanId: id,
          repaymentId: da.repayment[i]._id,
          type: "user",
        });
        await setDetails({ ...data });
        break;
      }
    }
    alert("Payment Successfull");
    handleClose();
  };

  return (
    <Container maxWidth="md">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to pay?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {details._id && (
        <Box
          bgcolor="#FFE7CC"
          borderRadius={2}
          sx={{ p: 2, mx: "auto", my: 5, width: "100%" }}
        >
          <Typography
            textAlign="center"
            variant="h5"
            fontWeight="bold"
            color="#2196f3"
            mb={2}
          >
            Loan Amount: ${details?.amount}
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Loan Term:</TableCell>
                  <TableCell>{details?.term} Weeks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Remaining Repayments:</TableCell>
                  <TableCell>
                    {
                      details?.repayment?.filter(
                        (item) => item?.status === "Unpaid"
                      ).length
                    }
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Loan Start Date</TableCell>
                  <TableCell>
                    {new Date(details?.loanStartDate)?.toDateString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Loan End Date</TableCell>
                  <TableCell>
                    {new Date(
                      details?.repayment[details?.term - 1]?.schedule
                    )?.toDateString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Loan Staus</TableCell>
                  <TableCell>
                    {details.status === "pending"
                      ? "Pending for Approval"
                      : details.status === "approved"
                      ? "Ongoing Loan"
                      : "Rejected"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Typography
              textAlign="center"
              variant="h5"
              fontWeight="bold"
              my={2}
              sx={{ textDecoration: "underline" }}
            >
              Repayment History
            </Typography>

            <Table>
              <TableHead>
                <TableRow bgcolor="black">
                  <TableCell align="center" sx={{ color: "white" }}>
                    Scheduled On
                  </TableCell>
                  <TableCell align="center" sx={{ color: "white" }}>
                    Amount
                  </TableCell>
                  <TableCell align="center" sx={{ color: "white" }}>
                    Status
                  </TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {details?.repayment?.map((item) => (
                  <TableRow
                    key={item._id}
                    bgcolor={item.status === "Paid" ? "green" : "red"}
                  >
                    <TableCell align="center">
                      {new Date(item.schedule).toDateString()}
                    </TableCell>
                    <TableCell align="center">
                      ${(details.amount / details.term).toFixed(3)}
                    </TableCell>
                    <TableCell align="center">{item?.status}</TableCell>
                    <TableCell align="center">
                      {item?.status !== "Paid" &&
                        user.type === "user" &&
                        details.status === "approved" && (
                          <Button
                            onClick={handleClickOpen}
                            size="small"
                            variant="contained"
                          >
                            Pay
                          </Button>
                        )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Container>
  );
};

export default LoanDetail;
