import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const RequestLoan = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
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
        }}
      >
        <Typography fontSize="24px" align="center">
          Apply for Loan
        </Typography>
        <FormControl sx={{ p: 5, display: "flex", gap: 1 }}>
          <FormLabel sx={{ px: 1 }}>Name:</FormLabel>
          <TextField value="Samyak" variant="outlined" size="small" disabled />
          <FormLabel sx={{ px: 1 }}>Email:</FormLabel>
          <TextField
            value="Samyak@gmail.com"
            variant="outlined"
            size="small"
            disabled
          />
          <FormLabel sx={{ px: 1 }}>Loan Start Date:</FormLabel>
          <TextField
            type="date"
            value={currentDate}
            variant="outlined"
            size="small"
            disabled
          />
          <FormLabel sx={{ px: 1 }}>Loan Amount:</FormLabel>
          <OutlinedInput
            type="number"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            variant="outlined"
            size="small"
          />
          <FormLabel sx={{ px: 1 }}>Loan Term:</FormLabel>
          <TextField type="number" variant="outlined" size="small" />
          <FormHelperText>**No of wee to repay the loan</FormHelperText>
          <Button type="submit" variant="contained">Submit</Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default RequestLoan;
