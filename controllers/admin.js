import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import express from 'express';
const exp=express();

exp.use(express.json())

let check=-1;
export const admin_register = (req, res) => {
  //CHECK EXISTING USER
  const q = "SELECT * FROM admin_login WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO admin_login(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const admin_login = (req, res) => {
  //CHECK USER

  // console.log(req.body.username);
  const q = "SELECT * FROM admin_login WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    
    if (err) return res.status(500).json(err);
    if (data.length ==0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        
        httpOnly: true,
      })
      .status(200)
      .redirect("/admin_login_page.html");

  })
};

export const admin_logout = (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).redirect("/index.html")
};
