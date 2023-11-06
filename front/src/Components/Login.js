import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userlogin, setUserlogin] = useState({
    email: "",
    role: "",
    password: "",
  });
  const handleLoginInputs = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUserlogin({ ...userlogin, [name]: value });
  };
  const postloginData = async (e) => {
    e.preventDefault();
    try {
      const { email, role, password } = userlogin;
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          role,
          password,
        }),
      });

      // Handle the response
      if (res.ok) {
        const data = await res.json();
        window.alert("LOGIN SUCCESSFUL");
        console.log("LOGIN SUCCESSFUL", data);
        navigate("/Complainantdashboard");
      } else {
        window.alert("INVALID CREDENTIALS");
        console.log("INVALID CREDENTIALS", res.statusText);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <section>
        <div className="page" id="loginpage">
          <h1 className="page-item">Login</h1>
          <form method="post">
            <div className="page-item">
              <label htmlFor="email">
                <i class="zmdi zmdi-email"></i>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your E-mail address"
                autoComplete="off"
                onChange={handleLoginInputs}
                value={userlogin.email}
              ></input>
            </div>
            <div className="page-item">
              <label htmlFor="role">
                <i class="zmdi zmdi-account-circle"></i>Role :
              </label>
              <input
                name="role"
                type="radio"
                id="role"
                checked={userlogin.role === "Complainant"}
                onChange={handleLoginInputs}
                value="Complainant"
              />
              <label for="Complainant">Complainant</label>
            </div>
            <div className="page-item">
              <label htmlFor="password">
                <i class="zmdi zmdi-shield-security"></i>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Your password"
                onChange={handleLoginInputs}
                value={userlogin.password}
              ></input>
            </div>
            <div className="page-item">
              <label htmlFor="login"></label>
              <input
                name="login"
                type="Submit"
                value="Login"
                onClick={postloginData}
                className="btn btn-outline-success"
              ></input>
            </div>
            <div>
              <NavLink className="nav-link" to="/Register">
                Haven't Registered ?
              </NavLink>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
