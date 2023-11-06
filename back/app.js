const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
require("./db/connection");
app.use(express.json());
app.use(require("./router/authentication"));

const port = process.env.PORT;

app.listen(port, () => console.log(`App listening on port ${port}!`));

// {
//     "role":"admin",
//     "name":"ARMAN",
//     "email":"arman@gmail.com",
//     "phone":123456789,
//     "address":"PUNE",
//     "gender":"male",
//     "dob":"13032004"
//     "password":"123",
//     "cpassword":"123"
// }
