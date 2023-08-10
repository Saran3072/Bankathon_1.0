import React from "react";
import { Link } from "react-router-dom";
function Rpllistitem() {
  return (
    <div className="rpl-list-item-1">
      <div className="part-1">
        <p>Company Name</p>
      </div>
      <div className="part-2">
        <h2>Role</h2>
      </div>
      <div className="part-3">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.
        </p>
      </div>
      <div className="part-4">
        <button>
          <Link to="/jd-rounds">View</Link>
        </button>
      </div>
      <div className="part-5">
        <p>
          <b>Status :</b> Selected for Round 1
        </p>
      </div>
    </div>
  );
}

export default Rpllistitem;
