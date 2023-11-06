const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
// const authenticate = require("../middlewares/authenticate");

require("../db/connection");
const User = require("../models/userSchema");
const Complaint = require("../models/complaintSchema");

const bcryptjs = require("bcryptjs");

router.post("/register", async (req, res) => {
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
  } = req.body;
  if (
    !role ||
    !name ||
    !email ||
    !phone ||
    !address ||
    !gender ||
    !dob ||
    !password ||
    !cpassword
  ) {
    return res.status(422).json({ error: "Please fill all the Fields" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "User already Exist" });
    } else if (password != cpassword) {
      return res
        .status(422)
        .json({ error: "Entered Passwords doesn't matches" });
    } else {
      const user = new User({
        role,
        name,
        email,
        phone,
        address,
        gender,
        dob,
        password,
        cpassword,
      });
      await user.save();
      res.status(201).json({ message: "User Registered" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, role, password } = req.body;
    if (!email || !role || !password) {
      return res.status(400).json({ error: "Fill all the details" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcryptjs.compare(password, userLogin.password);
      const token = await userLogin.generateToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 86400000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "Login Successful" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/create-complaint", async (req, res) => {
  try {
    const { contact, date, description, email } = req.body;
    if (!contact || !date || !description || !email) {
      return res.status(400).json({ error: "Fill all the details" });
    }
    let user = await User.findOne({ email: email });
    if (user) {
      const newComplaint = new Complaint({
        contact,
        date,
        description,
        userId: user._id,
      });
      await newComplaint.save();
      res.status(201).json({ message: "Complaint Registered" });
    } else {
      return res.status(422).json({ error: "Entered E-mail doesn't exist" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/view-complaints", (req, res) => {
  res.send(req.rootUser);
});

module.exports = router;
