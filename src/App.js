import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import RequestLoan from "./Components/RequestLoan";
import MyLoans from "./Components/MyLoans";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import LoanDetail from "./Components/LoanDetail";
import LoanRequest from "./Components/LoanRequest";
import Login from "./Components/Login";
import PageNotFound from "./Components/PageNotFound";
import { UserState } from "./Contexts/UserProvider";

function App() {
  const { user } = UserState();
  return (
    <>
      <div style={{ height: "max-content", minHeight: "92vh" }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {user.type === "user" &&<Route path="/requestLoan" element={<RequestLoan />} />}
            {user.type === "user" &&<Route path="/myLoans" element={<MyLoans />} />}
            {user.type === "admin" &&<Route path="/loanRequests" element={<LoanRequest />} />}
            {user.name && <Route path="/loan/:id" element={<LoanDetail />} />}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
