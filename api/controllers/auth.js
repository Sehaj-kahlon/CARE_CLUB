import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const registerIn = (req, res) => {
  //check for existing user
  const {
    username,
    mail,
    password,
    donatorType,
    firmName,
    name,
    address,
    PinCode,
    city,
    state,
    country,
    contactNumber,
  } = req.body;
  const q = "SELECT * FROM individualsignup where username  = ? OR mail = ?";

  db.query(q, [username, mail], (err, data) => {
    // if (err) return res.status(500).json(err);
    if (err) return res.json("this is a register function error");
    if (data.length) return res.json("User already exists!");

    // using library to encrypt the password
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(password, salt);

    const q1 = "INSERT INTO individualsignup (username,mail,password) SET ? ";
    const values = [username, mail, hash];
    db.query(
      "INSERT INTO individualsignup SET ?",
      {
        username: username,
        mail: mail,
        password: hash,
        donator_type: donatorType,
        name_firm: firmName,
        name: name,
        address: address,
        pincode: PinCode,
        city: city,
        state: state,
        country: country,
        contact: contactNumber,
      },
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          return res.json("User has been created");
        }
      }
    );
  });
};
export const registerN = (req, res) => {
  const {
    username,
    mail,
    password,
    service,
    NgoName,
    address,
    PinCode,
    city,
    state,
    country,
    contactNumber,
  } = req.body;
  const q = "SELECT * FROM ngosignup where username  = ? OR mail = ?";

  db.query(q, [username, mail], (err, data) => {
    // if (err) return res.status(500).json(err);
    if (err) return res.json("this is a register function error");
    if (data.length) return res.json("User already exists!");

    // using library to encrypt the password
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(password, salt);

    const q1 = "INSERT INTO ngosignup (username,mail,password) SET ? ";
    const values = [username, mail, hash];
    db.query(
      "INSERT INTO ngosignup SET ?",
      {
        username: username,
        mail: mail,
        password: hash,
        ngo_name: NgoName,
        service: service,
        address: address,
        pincode: PinCode,
        city: city,
        state: state,
        country: country,
        contact: contactNumber,
      },
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          return res.json("User has been created");
        }
      }
    );
  });
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
