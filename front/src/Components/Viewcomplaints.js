import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Viewcomplaints = () => {
  const navigate = useNavigate();
  const callViewcomplaints = async () => {
    try {
      const res = await fetch("/view-complaints", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const userData = await res.json();
      if (res.ok) {
        console.log(userData);
      } else {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callViewcomplaints();
  });

  return (
    <>
      <section>
        <h1 className="text-center">View Complaints</h1>
      </section>
    </>
  );
};

export default Viewcomplaints;
