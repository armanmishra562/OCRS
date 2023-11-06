import React from "react";
import { useNavigate } from "react-router-dom";

const Complainantdashboard = () => {
  const navigate = useNavigate();
  const gotoCreate = () => {
    navigate("/Createcomplaint");
  };
  // const gotoView = () => {
  //   navigate("/Viewcomplaints");
  // };

  return (
    <>
      <section className="page" id="dashboardpage">
        <h1>Complainant Dashboard</h1>
        <div>
          <p>
            <b>Welcome to the complainant dashboard.</b>
          </p>

          <button type="button" onClick={gotoCreate}>
            Create Complaint
          </button>
          {/* <button type="button" onClick={gotoView}>
            View Complaints
          </button> */}
        </div>
      </section>
    </>
  );
};

export default Complainantdashboard;
