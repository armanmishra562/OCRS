const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: [true, " Please Enter your Role "],
  },
  email: {
    type: String,
    required: [true, "Please enter your Email"],
  },
  name: {
    type: String,
    required: [true, "Please enter your Name"],
  },
  phone: {
    type: Number,
    required: [true, " Please Enter Phone Number "],
  },
  address: {
    type: String,
    required: [true, " Please Enter Address "],
  },
  gender: {
    type: String,
    required: [true, " Please Enter gender "],
  },
  dob: {
    type: String,
    required: [true, " Please Enter DOB "],
  },
  password: {
    type: String,
    required: [true, " Please Enter Password"],
  },
  cpassword: {
    type: String,
    required: [true, " Please Re-Enter Password"],
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 12);
    this.cpassword = await bcryptjs.hash(this.cpassword, 12);
  }
  next();
});

userSchema.methods.generateToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("USER", userSchema);

module.exports = User;
