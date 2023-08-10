import Landing from "./components/landing";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Signuphr from "./components/signuphr";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signupoption from "./components/signupoption";
import Signinoption from "./components/signinoption";
import Profile from "./components/profile";
import Jobdetailsa from "./components/jobdetails-a";
import Jdrounds from "./components/jd-rounds";
import Jobposting from "./components/job-posting";
import Dashboarda from "./components/dashboard-a";
import Application from "./components/application";
import Assesment from "./components/assesment";
import Dashboardhr from "./components/dashboard-hr";
import SigninHR from "./components/signin-hr";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signinhr" element={<SigninHR />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signuphr" element={<Signuphr />} />
        <Route path="/signupoption" element={<Signupoption />} />
        <Route path="/signinoption" element={<Signinoption />} />
        <Route path="/job-posting" element={<Jobposting />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jd-rounds" element={<Jdrounds />} />
        <Route path="/jobdetails-a" element={<Jobdetailsa />} />
        <Route path="/dashboard-a" element={<Dashboarda />} />
        <Route path="/application" element={<Application />} />
        <Route path="/assesment" element={<Assesment />} />
        <Route path="/dashboard-hr" element={<Dashboardhr />} />
      </Routes>
    </>
  );
}

export default App;
