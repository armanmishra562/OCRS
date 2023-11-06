import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createcomplaint = () => {
  const navigate = useNavigate();
  const [complaint, setComplaint] = useState({
    contact: "",
    date: "",
    description: "",
    email: "",
  });
  const handleComplaintinputs = (e) => {
    let name, value;
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setComplaint({ ...complaint, [name]: value });
  };

  const postComplaint = async (e) => {
    e.preventDefault();
    const { contact, date, description, email } = complaint;
    const res = await fetch("/create-complaint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contact,
        date,
        description,
        email,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      window.alert("Complaint Registered");
      console.log("Complaint Registered", data);
      navigate("/Complainantdashboard");
    } else {
      window.alert("Invalid Details", res.statusText);
      console.log("Invalid Details", res.statusText);
    }
  };
  return (
    <>
      <section className="page" id="createcomplaintpage">
        <h1 className="text-center page-item">Register Your Complaint</h1>
        <form method="POST">
          <div className="page-item">
            <label htmlFor="contact">
              <i class="zmdi zmdi-phone-in-talk"></i>
            </label>
            <input
              name="contact"
              type="number"
              placeholder="Your Contact"
              autoComplete="off"
              onChange={handleComplaintinputs}
              value={complaint.contact}
            ></input>
          </div>
          <div className="page-item">
            <label htmlFor="date">
              <i class="zmdi zmdi-calendar-note"></i>
            </label>
            <input
              name="date"
              type="date"
              placeholder="Today's Date"
              autoComplete="off"
              onChange={handleComplaintinputs}
              value={complaint.date}
            ></input>
          </div>
          <div className="page-item">
            <label htmlFor="description">
              <i class="zmdi zmdi-comment-alt-text"></i>
            </label>
            <input
              name="description"
              type="text"
              placeholder="Description of Complaint"
              autoComplete="off"
              onChange={handleComplaintinputs}
              value={complaint.description}
            ></input>
          </div>
          <div className="page-item">
            <label htmlFor="email">
              <i class="zmdi zmdi-email"></i>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Your E-mail address"
              autoComplete="off"
              onChange={handleComplaintinputs}
              value={complaint.email}
            ></input>
          </div>
          <div className="page-item">
            <label htmlFor="submit"></label>
            <input
              name="submit"
              type="submit"
              value="Submit"
              onClick={postComplaint}
              className="btn btn-outline-success"
            ></input>
          </div>
        </form>
      </section>
    </>
  );
};

export default Createcomplaint;
