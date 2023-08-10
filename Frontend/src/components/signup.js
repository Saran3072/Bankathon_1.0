import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "./signup.css";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    degree: "",
    major: "",
    cgpa: "",
    passout: "",
    job_role: "",
    exp_desc: "",
    company: "",
    college: "",
    years: 0,
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:8000/api/register-applicant/", formData)
      .then((response) => {
        // Display a success alert
        alert("Success");
        console.log("Posted Succesfully");
      })
      .catch((error) => {
        // Display an error alert
        alert("Success");
        console.log("Not Posted");
      });
  };
  return (
    <>
      <div className="sup-page">
        <nav className="navbar-1">
          <div className="logo-1">
            <Link to="/" style={{ color: "white" }}>
              Career
            </Link>
            <Link to="/">Connect</Link>
          </div>
          <ul>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/signupoption">Sign up</Link>
            </li>
          </ul>
        </nav>
        <div className="form-inner">
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} />

            <input
              type="text"
              id="fname"
              name="name"
              placeholder=" Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <FontAwesomeIcon icon={faUser} />

            <input
              type="tel"
              id="phno"
              name="mobile"
              placeholder="Contact Number"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <FontAwesomeIcon icon={faLock} />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password.."
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* <button className="signupbutton">CONTINUE</button> */}
        </div>
      </div>
      <div className="full-form">
        <div className="sup-form">
          <h1>Educational Qualifications</h1>
          <div className="sup-form-inner">
            <h3>Latest Education</h3>
            <div className="sfi-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input
                type="text"
                id="degree"
                placeholder=" Degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
              />
            </div>
            <div className="sfi-line-2">
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="majorsub"
                  placeholder="Major Subject"
                  name="major"
                  value={formData.najor}
                  onChange={handleChange}
                />
              </div>
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="cgpa"
                  placeholder="CGPA"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sfi-line-3">
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input type="text" id="clgyear" placeholder="College Year" />
              </div>
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="passout"
                  placeholder="Passing Out Year"
                  name="passout"
                  value={formData.passout}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sfi-line-4">
              <div className="sfi-line-4-input">
                <button>ADD</button>
              </div>
              <div className="sfi-line-4-input">
                <button>SAVE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sup-form">
          <h1>Work Experience</h1>
          <div className="sup-form-inner">
            <h3>Add New Experience</h3>
            <div className="sfi-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input
                type="text"
                id="degree"
                placeholder="Employer"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="sfi-line-2">
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input
                  type="text"
                  id="majorsub"
                  placeholder="Role"
                  name="job role"
                  value={formData.job_role}
                  onChange={handleChange}
                />
              </div>
              <div className="sfi-line-2-input">
                <FontAwesomeIcon icon={faUser} />

                <input type="text" id="cgpa" placeholder="From - To Date" />
              </div>
            </div>
            <div className="sfi-line-1">
              <FontAwesomeIcon icon={faUser} />

              <input
                type="text"
                id="degree"
                placeholder="Description"
                name="exp_desc"
                value={formData.exp_desc}
                onChange={handleChange}
              />
            </div>

            <div className="sfi-line-4">
              <div className="sfi-line-4-input">
                <button>ADD</button>
              </div>
              <div className="sfi-line-4-input">
                <button>SAVE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sup-form">
          <h1>Skills</h1>
          <div className="sup-form-inner">
            <h3>Enter all skills ( comma seperated )</h3>
            <div className="sfi-line-1">
              <input
                type="text"
                id="degree"
                placeholder="Enter the skills .."
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>

            <div className="sfi-line-4">
              <div className="sfi-line-4-input">
                <button>SAVE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="big-btn" onClick={handleSubmit}>
          <button>
            <Link to="/signin">CONTINUE</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Signup;
