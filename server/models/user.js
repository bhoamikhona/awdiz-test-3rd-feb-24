import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
