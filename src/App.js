import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import RequestLoan from "./Components/RequestLoan";
import MyLoans from "./Components/MyLoans";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { Container } from "@mui/material";

function App() {
  return (
    <div style={{ height: "max-content", minHeight: "90vh" }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Request Loan" element={<RequestLoan />} />
          <Route path="/My Loans" element={<MyLoans />} />
        </Routes>
      </Router>
        <Footer />
    </div>
  );
}

export default App;
