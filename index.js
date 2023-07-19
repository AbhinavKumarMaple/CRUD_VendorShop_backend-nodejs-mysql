const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const { productRoutes, userRoutes } = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error("DB Connection Error message: " + err.message);
    return;
  }

  console.log("Connected to MySQL database");

  app.listen(5000, () => {
    console.log("Connected to Server on Port 5000");
  });
});

// Close the connection when the server is stopped
process.on("SIGINT", () => {
  connection.end();
  process.exit();
});

// Check if the server is connected to MySQL
connection.query("SELECT 1 + 1 AS solution", (error, results) => {
  if (error) {
    console.error("Error connecting to MySQL:", error);
  } else {
    console.log("MySQL connection is successful. Result:", results[0].solution);
  }
});
