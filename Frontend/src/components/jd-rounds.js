import React from "react";
import "./jd-rounds.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faUser,
  faFile,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Jdrounds() {
  return (
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
            <FontAwesomeIcon icon={faUser} className="icon" />
            <Link id="link" to="/profile">
              Profile
            </Link>
          </div>
          <div className="lp-button">
            <FontAwesomeIcon icon={faFile} className="icon" />
            <Link to="/">Sign Out</Link>
          </div>
        </div>
      </div>
      <div className="right-part">
        <div className="rp-upper">
          <p> Job Details</p>
        </div>
        <div className="rp-lower-a">
          <div className="rpl-heading-a">
            <h3>Job Details</h3>
            <div className="rpm-full-btn">
              <FontAwesomeIcon icon={faWrench} className="icon1" />{" "}
              <button>Edit</button>
            </div>
          </div>
          <div className="rpl-list-items">
            <div className="rpl-list-item">
              <b>Job Role :</b> lorem ipsum
            </div>
            <div className="rpl-list-item">
              <b>Company :</b> lorem ipsum
            </div>
            <div className="rpl-list-item">
              <b>Package :</b> lorem ipsum
            </div>
            <div className="rpl-list-item">
              <b>Number of Openings :</b> lorem ipsum
            </div>
            <div className="rpl-list-item">
              <b>Job Description Score :</b> lorem ipsum
            </div>
            <div className="rpl-list-item">
              <b>Job Description :</b> Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
            <div className="rpl-list-item">
              <b>Eligibility Criteria :</b> Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
            <div className="rounds">
              <div className="round-heading">
                <h3>
                  Round 1 - Resume Review Selects ( Written exam to be conducted
                  )
                </h3>
              </div>
              <p>Details</p>
              <div className="round-list">
                <div className="round-list-item">
                  <div className="rli-right">
                    <div className="rli-pic">
                      <img src="/assets/Image.png" />
                    </div>
                    <div className="rli-text">
                      <h3>Bokka Shashikanth</h3>
                      <p>shashikanthb13@gmail.com</p>
                    </div>
                  </div>
                  <div>
                    <p>View Profile</p>
                  </div>
                </div>
                <div className="round-list-item">
                  <div className="rli-right">
                    <div className="rli-pic">
                      <img src="/assets/Image.png" />
                    </div>
                    <div className="rli-text">
                      <h3>Bokka Shashikanth</h3>
                      <p>shashikanthb13@gmail.com</p>
                    </div>
                  </div>
                  <div>
                    <p>View Profile</p>
                  </div>
                </div>
                <div className="round-list-item">
                  <div className="rli-right">
                    <div className="rli-pic">
                      <img src="/assets/Image.png" />
                    </div>
                    <div className="rli-text">
                      <h3>Bokka Shashikanth</h3>
                      <p>shashikanthb13@gmail.com</p>
                    </div>
                  </div>
                  <div>
                    <p>View Profile</p>
                  </div>
                </div>
                <div className="round-list-item">
                  <div className="rli-right">
                    <div className="rli-pic">
                      <img src="/assets/Image.png" />
                    </div>
                    <div className="rli-text">
                      <h3>Bokka Shashikanth</h3>
                      <p>shashikanthb13@gmail.com</p>
                    </div>
                  </div>
                  <div>
                    <p>View Profile</p>
                  </div>
                </div>
                <div className="round-list-item">
                  <div className="rli-right">
                    <div className="rli-pic">
                      <img src="/assets/Image.png" />
                    </div>
                    <div className="rli-text">
                      <h3>Bokka Shashikanth</h3>
                      <p>shashikanthb13@gmail.com</p>
                    </div>
                  </div>
                  <div>
                    <p>View Profile</p>
                  </div>
                </div>
                <div className="round-list-item">
                  <div className="rli-right">
                    <div className="rli-pic">
                      <img src="/assets/Image.png" />
                    </div>
                    <div className="rli-text">
                      <h3>Bokka Shashikanth</h3>
                      <p>shashikanthb13@gmail.com</p>
                    </div>
                  </div>
                  <div>
                    <p>View Profile</p>
                  </div>
                </div>
                <div className="round-list-item">
                  <div className="rli-right">
                    <div className="rli-pic">
                      <img src="/assets/Image.png" />
                    </div>
                    <div className="rli-text">
                      <h3>Bokka Shashikanth</h3>
                      <p>shashikanthb13@gmail.com</p>
                    </div>
                  </div>
                  <div>
                    <p>View Profile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jdrounds;
