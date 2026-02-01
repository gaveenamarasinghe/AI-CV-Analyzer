const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { generateToken } = require("../utils/jwt");
const connection = require("../config/mysql");

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, email, password } = req.body;

  // Check if user exists
  const [rows] = await connection.execute("SELECT * FROM users WHERE email = ?", [email]);
  if (rows.length) return res.status(400).json({ message: "User already exists" });

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user
  const [result] = await connection.execute(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );

  const token = generateToken({ id: result.insertId });

  res.status(201).json({ message: "Registration successful", token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await connection.execute("SELECT * FROM users WHERE email = ?", [email]);
  if (!rows.length) return res.status(400).json({ message: "Invalid credentials" });

  const user = rows[0];
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = generateToken({ id: user.id });
  res.json({ message: "Login successful", token });
};
