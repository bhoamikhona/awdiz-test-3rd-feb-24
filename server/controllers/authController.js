import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";

export const registerUser = async function (req, res) {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // check if name was entered
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }

    // check if password was entered and if it was more than 6 characters
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and it must be at least 6 characters long",
      });
    }

    // check if email already exists
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already in use",
      });
    }

    // check if password and confirm passwords match
    if (password !== confirmPassword) {
      return res.json({
        error: "Password and Confirm Password do not match",
      });
    }

    // hash the password
    const hashedPassword = await hashPassword(password);

    // create a user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async function (req, res) {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // check if passwords match
    const match = await comparePassword(password, user.password);

    if (match) {
      res.json("passwords match");
      // cookie
    }
    if (!match) {
      res.json({
        error: "Incorrect Password",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
