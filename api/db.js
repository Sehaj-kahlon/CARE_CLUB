import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sehaj3389@1",
  database: "signup",
});

db.connect(function (error) {
  if (error) throw error;
  else console.log("connected to the database successfull");
});
