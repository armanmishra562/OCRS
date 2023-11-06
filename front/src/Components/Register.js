import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    role: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",
    password: "",
    cpassword: "",
  });
  const handleInputs = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const {
      role,
      name,
      email,
      phone,
      address,
      gender,
      dob,
      password,
      cpassword,
    } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        role,
        name,
        email,
        phone,
        address,
        gender,
        dob,
        password,
        cpassword,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      window.alert("SUCCESSFUL REGISTRATION");
      console.log("SUCCESSFUL REGISTRATION", data);
      navigate("/login");
    } else {
      window.alert("INVALID REGISTRATION", res.statusText);
      console.log("INVALID REGISTRATION:", res.statusText);
    }
  };

  return (
    <>
      <section>
        <div className="page" id="registerpage">
          <h2 className="text-center">Register</h2>
          <form method="POST">
            <div className="page-item">
              <label htmlFor="role">
                <i class="zmdi zmdi-account-circle"></i>Role :
              </label>
              <input
                name="role"
                type="radio"
                id="html"
                checked={user.role === "Complainant"}
                onChange={handleInputs}
                value="Complainant"
              />
              <label for="Complainant">Complainant</label>
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
                onChange={handleInputs}
                value={user.email}
              ></input>
            </div>
            <div className="page-item">
              <label htmlFor="name">
                <i class="zmdi zmdi-account"></i>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Full-Name"
                autoComplete="off"
                onChange={handleInputs}
                value={user.name}
              ></input>
            </div>
            <div className="page-item">
              <label htmlFor="phone">
                <i class="zmdi zmdi-phone"></i>
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="Your Phone No."
                onChange={handleInputs}
                value={user.phone}
              ></input>
            </div>
            <div className="page-item">
              <label htmlFor="address">
                <i class="zmdi zmdi-pin"></i>
              </label>
              <input
                name="address"
                type="text"
                placeholder="Your Address"
                onChange={handleInputs}
                value={user.address}
              ></input>
            </div>
            <div className="page-item">
              <label htmlFor="gender">
                <i class="zmdi zmdi-male-female"></i>Gender :
              </label>
              <input
                name="gender"
                type="radio"
                id="male"
                checked={user.gender === "male"}
                onClick={handleInputs}
                value="male"
              />
              <label for="male">Male</label>
              <input
                name="gender"
                type="radio"
                id="female"
                checked={user.gender === "female"}
                onClick={handleInputs}
                value="female"
              />
              <label for="female">Female</label>
            </div>
            <div className="page-item">
              <label htmlFor="dob">
                <i class="zmdi zmdi-calendar-alt"></i>
              </label>
              <input
                name="dob"
                type="date"
                placeholder="Birth Date"
                onChange={handleInputs}
                value={user.dob}
              ></input>
            </div>
            <div className="page-item">
              <label htmlFor="password">
                <i class="zmdi zmdi-shield-security"></i>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Set your password"
                onChange={handleInputs}
                value={user.password}
              ></input>
            </div>
            <div className="page-item">
              <label htmlFor="cpassword">
                <i class="zmdi zmdi-shield-check"></i>
              </label>
              <input
                name="cpassword"
                type="password"
                placeholder="Confirm your password"
                onChange={handleInputs}
                value={user.cpassword}
              ></input>
            </div>
            <div className="page-item">
              <label htmlFor="register"></label>
              <input
                name="register"
                type="submit"
                value="Register"
                onClick={postData}
                className="btn btn-outline-success"
              ></input>
            </div>
          </form>
          <div className="page-item">
            <NavLink className="nav-link" to="/Login">
              Already Registered ?
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
