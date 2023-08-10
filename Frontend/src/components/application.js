import React from "react";
import "./application.css";
import { useNavigate } from "react-router-dom";
function Application() {
  const navigate = useNavigate();
  const handleContinueClick = () => {
    navigate("/dashboard-a")
    alert("Application Submitted!"); // Display an alert when the button is clicked
  };
  return (
    <>
      <div className="ap-screen">
        <div className="ap-upper">
          <p>Application</p>
        </div>
        <div className="ap-middle">
          <h3>Resume * ( Upload in text format )</h3>
          <textarea rows="15" cols="100"></textarea>
        </div>
        <div className="ap-lower">
          <h3> Cover Letter </h3>
          <textarea rows="15" cols="100"></textarea>
        </div>
        <div className="ap-btn">
          <button onClick={handleContinueClick}>CONTINUE FOR APPLICATION</button>
        </div>
      </div>
    </>
  );
}

export default Application;
