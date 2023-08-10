import React, { useState } from "react";
import "./dashboard-a.css";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
  faBox,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Rpllistitem from "./rpl-list-item";

function Dashboardhr() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/your-backend-logout-endpoint");
      if (response.data.message === "success") {
        // Sign-out successful
        navigate("/login"); // Redirect to your login page after signing out
        alert("Logout Successful")
      } else {
        console.error("Sign-out failed");
      }
    } catch (error) {
      console.error("Error during sign-out:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="dboard-screen">
        <div className="left-part">
          <div className="left-align">
            <div className="lp-button">
              <FontAwesomeIcon icon={faHouse} className="icon" />{" "}
              <Link id="link" to="/dashboard-hr">
                Dashboard
              </Link>
            </div>
            <div className="lp-button">
              <FontAwesomeIcon icon={faChartSimple} className="icon" />
              <Link id="link" to="/job-posting">
                Post A Job
              </Link>
            </div>
            <div>
              <p className="lp-text">ACCOUNT PAGES</p>
            </div>
            <div className="lp-button">
              <FontAwesomeIcon icon={faUser} className="icon" />{" "}
              <Link id="link" to="/profile">
                Profile
              </Link>
            </div>
            <div className="lp-button" onClick={handleSignOut}>
              <FontAwesomeIcon icon={faFile} className="icon" /> Sign Out
            </div>
          </div>
        </div>
        <div className="right-part">
          <div className="rp-upper">
            <p>Dashboard</p>
          </div>
          <div className="rp-middle">
            <div className="rpm-align">
              <div className="rpm-pic">
                <img src="/assets/Image.png" />
              </div>
              <div className="rpm-text">
                <h3>Bokka Shashikanth</h3>
                <p>shashikanthb13@gmail.com</p>
              </div>
            </div>
            <div>
              {/* <div className="rpm-buttons">
                <div className="rpm-full-btn">
                  <FontAwesomeIcon icon={faBox} className="icon1" />{" "}
                  <button>Overview</button>
                </div>
                <div className="rpm-full-btn">
                  <FontAwesomeIcon icon={faWrench} className="icon1" />{" "}
                  <button>Edit</button>
                </div>
              </div> */}
            </div>
          </div>
          <div className="rp-lower">
            <div className="rpl-heading">
              <h3>All Jobs</h3>
            </div>
            <div className="rpl-list-items">
              <Rpllistitem />
              <Rpllistitem />
              <Rpllistitem />
              <Rpllistitem />
              <Rpllistitem />
              <Rpllistitem />
              <Rpllistitem />
              <Rpllistitem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboardhr;
