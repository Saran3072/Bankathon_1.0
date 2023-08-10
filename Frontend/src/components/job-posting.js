import React from "react";
import "./job-posting.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
function Jobposting() {
  return (
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
          <p> Posting a New Job</p>
        </div>
        <div className="rp-form">
          <h1>Job Details</h1>
          <div className="rp-form-inner">
            <div className="rp-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input
                type="text"
                id="jobtitle"
                placeholder="Job Title/Job Role *"
              />
            </div>
            <div className="rp-line-2">
              <div className="rp-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input type="text" id="package" placeholder="Package *" />
              </div>
              <div className="rp-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="noofint"
                  placeholder="Application Limit *"
                />
              </div>
            </div>
            <div className="rp-line-3">
              <div className="rp-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input type="text" id="expcgpa" placeholder="Expected CGPA *" />
              </div>
              <div className="rp-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="noofopen"
                  placeholder="Number of Jobs *"
                />
              </div>
            </div>
            <div className="rp-line-1 rp-line-btn">
              <FontAwesomeIcon icon={faUser} />

              <input type="text" id="jd" placeholder=" Job Description *" />
              <div className="rp-line-4-input">
                <button>ENHANCE</button>
              </div>
            </div>
            <div className="rp-line-1 ">
              <FontAwesomeIcon icon={faUser} />

              <input
                type="text"
                id="eligibility"
                placeholder=" Eligibility Criteria"
              />
            </div>
            <div className="rp-line-4">
              <div className="rp-line-4-input">
                <button>ADD</button>
              </div>
              <div className="rp-line-4-input">
                <button>SAVE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Jobposting;
