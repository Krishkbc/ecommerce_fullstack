/* eslint-disable no-undef */
import { Router } from "express";
const router = Router();
import db from "../database/db.js";
import md5 from "md5";
import jwt from "jsonwebtoken";
import { validateNewUser, validateLogin } from "../validators/validation.js";

router.post("/register", (req, res) => {
  const { name, email, password, country, state } = req.body;
  const userData = req.body;

  const response = validateNewUser(userData);

  if (response.error) {
    console.log("error in validation of user", response.error.details);
    return res.json(response.error.details);
  }
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error checking existing user" });
    }

    if (result.length > 0) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = md5(password);

    db.query(
      "INSERT INTO users (name, email, password, country, state) VALUES (?, ?, ?, ?, ?)",
      [name, email, hashedPassword, country, state],
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Failed to create user" });
        }

        res.status(200).json({ message: "User created successfully" });
      }
    );
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const userData = req.body;

  const response = validateLogin(userData);

  if (response.error) {
    return res.json(response.error.details);
  }

  db.query(
    "SELECT * FROM users WHERE email = ? AND is_deleted = 0",
    [email],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error checking user" });
      }

      if (result.length === 0) {
        return res.status(400).json({ message: "User not found" });
      }

      const user = result[0];
      const hashedPassword = md5(password);

      if (user.password !== hashedPassword) {
        return res.status(400).json({ message: "Invalid password" });
      }

      const token = jwt.sign(
        { id: user.id, name: user.name, email: user.email },
        "my_first_jwt_token",
        { expiresIn: "1h" }
      );

      res.status(200).json({ message: "Login successful", token });
    }
  );
});

export default router;
