"use client";

import { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { axiosInstance } from "../../utils/axios";
import { update } from "../../redux/userSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("");
  const [error, seterror] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const store = useStore();

  const handleSubmit = async () => {
    // e.preventDefault();

    if (firstName === "" || lastName === "" || email === "" || password === "")
      return;
    try {
      const res = await axiosInstance.post("/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      dispatch(update({ token: res.data.token }));
      console.log(res.data);
      toast.success("Logged in successfully");
      return router.push("/login");
    } catch (err) {
      seterror(true);
    }
  };

  return (
    <div className="register h-max flex flex-col justify-center bg-teal-100 items-center">
      <span className="registerTitle mb-2 text-3xl">CREATE AN ACCOUNT</span>
      <div className="bg-white rounded shadow-md shadow-black">
        <form
          className="registerForm mt-2 mx-20 h-1/2 w-96 flex flex-col"
          onSubmit={handleSubmit}
          action=""
        >
          <label htmlFor="">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="registerInput"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="registerInput"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="registerInput"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="registerInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="registerInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="registerButton mt-3 bg-red-500 border-none text-white rounded-lg p-2"
            type="submit"
          >
            Register
          </button>
          <span className="items-center">
            Already have an account? <Link href="/login">Login</Link>
          </span>
        </form>
      </div>
      {error && <span className="text-red">Something went wrong!</span>}
    </div>
  );
}
