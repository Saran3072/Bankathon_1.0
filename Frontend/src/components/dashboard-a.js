import React from "react";
import "./dashboard-a.css";
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

function Dashboarda() {
  return (
    <>
      <div className="dboard-screen">
        <div className="left-part">
          <div className="left-align">
            <div className="lp-button">
              <FontAwesomeIcon icon={faHouse} className="icon" />{" "}
              <Link id="link" to="/dashboard-a">
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
            <p>Dashboard</p>
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
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Axis Bank</p>
                </div>
                <div className="part-2">
                  <h2>Software Developer</h2>
                </div>
                <div className="part-3">
                  <p>
                    We are looking for a Software Developer to build and
                    implement functional programs. You will work with other
                    Developers and Product Managers throughout the software
                    development life cycle. In this role, you should be a team
                    player with a keen eye for detail and problem-solving
                    skills. If you also have experience in Agile frameworks and
                    popular coding languages e.g. JavaScript, wed like to meet
                    you. Your goal will be to build efficient programs and
                    systems that serve user needs.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5"></div>
              </div>
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Axis Bank</p>
                </div>
                <div className="part-2">
                  <h2>Frontend Developer</h2>
                </div>
                <div className="part-3">
                  <p>
                    We are looking for a qualified Front-end developer to join
                    our IT team. You will be responsible for building the
                    ‘client-side’ of our web applications. You should be able to
                    translate our company and customer needs into functional and
                    appealing interactive applications. If you’re interested in
                    creating a user-friendly environment by writing code and
                    moving forward in your career, then this job is for you. We
                    expect you to be a tech-savvy professional, who is curious
                    about new digital technologies and aspires to combine
                    usability with visual design. Ultimately, you should be able
                    to create a functional and attractive digital environment
                    for our company, ensuring great user experience.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5"></div>
              </div>
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Axis Bank</p>
                </div>
                <div className="part-2">
                  <h2>Backend Developer</h2>
                </div>
                <div className="part-3">
                  <p>
                    We are looking for a Back-End Web Developer responsible for
                    managing the interchange of data between the server and the
                    users. Your primary focus will be development of all
                    server-side logic, definition and maintenance of the central
                    database, and ensuring high performance and responsiveness
                    to requests from the front-end. You will also be responsible
                    for integrating the front-end elements built by your
                    coworkers into the application. A basic understanding of
                    front-end technologies is therefore necessary as well.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5"></div>
              </div>
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Axis Bank</p>
                </div>
                <div className="part-2">
                  <h2>Accounts Manager</h2>
                </div>
                <div className="part-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5"></div>
              </div>
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Axis Bank</p>
                </div>
                <div className="part-2">
                  <h2>Manager</h2>
                </div>
                <div className="part-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5"></div>
              </div>
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Axis Bank</p>
                </div>
                <div className="part-2">
                  <h2>Assistant Manager</h2>
                </div>
                <div className="part-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5"></div>
              </div>
              <div className="rpl-list-item-1">
                <div className="part-1">
                  <p>Axis Bank</p>
                </div>
                <div className="part-2">
                  <h2>Associate Manager</h2>
                </div>
                <div className="part-3">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting.
                  </p>
                </div>
                <div className="part-4">
                  <button>
                    <Link to="/application">Apply</Link>
                  </button>
                </div>
                <div className="part-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboarda;
