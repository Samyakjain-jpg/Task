import React, { useEffect } from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <Container>
      <Typography variant="h3" align="center" mt={4} mb={4} color="primary">
        Page Not Found
      </Typography>
      <Typography variant="body1" align="center">
        The requested page could not be found.
      </Typography>
      <Typography variant="body1" align="center">
        Redirecting to the home page...
      </Typography>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <CircularProgress color="primary" />
      </div>
    </Container>
  );
};

export default NotFoundPage;
