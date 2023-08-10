import React, { useState, useEffect } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
  faBox,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function Profile() {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    // Make API request to fetch profile data
    axios
      .get("http://localhost:8000/api/user-applicant")
      .then((response) => {
        setProfileData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);
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
            <div className="lp-button">
              <FontAwesomeIcon icon={faFile} className="icon" /> Sign Out
            </div>
          </div>
        </div>
        <div className="right-part">
          <div className="rp-upper">
            <p>Profile</p>
          </div>
          <div className="rp-middle">
            <div className="rpm-align">
              <div className="rpm-pic">
                <img src="/assets/Image.png" />
              </div>
              <div className="rpm-text">
                <h3>Aditya Reddy</h3>
                <p>aditya@gmail.com</p>
              </div>
            </div>
            <div>
              <div className="rpm-buttons">
                <div className="rpm-full-btn">
                  <FontAwesomeIcon icon={faBox} className="icon1" />{" "}
                  <button>Overview</button>
                </div>
                <div className="rpm-full-btn">
                  <FontAwesomeIcon icon={faWrench} className="icon1" />{" "}
                  <button>Edit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="rp-lower">
            <div className="rpl-heading">
              <h3>Profile Information</h3>
            </div>
            <div className="rpl-list-items">
              <div className="rpl-list-item">
                <b>Name :</b> Aditya Reddy
              </div>
              <div className="rpl-list-item">
                <b>Email :</b> aditya@gmail.com
              </div>
              <div className="rpl-list-item">
                <b>Mobile :</b> 8143284828
              </div>
              <div className="rpl-list-item">
                <b>Degree :</b> B.Tech
              </div>
              <div className="rpl-list-item">
                <b>Major :</b> CSE (AI & ML)
              </div>
              <div className="rpl-list-item">
                <b>CGPA :</b> 9.8
              </div>
              <div className="rpl-list-item">
                <b>passout :</b> 2024
              </div>
              <div className="rpl-list-item">
                <b>college :</b> B V Raju Institute of Technology
              </div>
              <div className="rpl-list-item">
                <b>Skills :</b> Python, Django, C, C++
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
