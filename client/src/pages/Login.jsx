import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async function (e) {
    e.preventDefault();

    const { email, password } = data;
    try {
      const { data } = await axios.post("/auth/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/home");
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <div className="input-control">
          <label>Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="input-control">
          <label>Password</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="input-control">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
