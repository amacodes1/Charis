"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../utils/axios";
import { logout, update } from "../../redux/userSlice";
import Link from "next/link";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { token } = useSelector((state: any) => state?.user?.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (token) {
      const targetUrl = sessionStorage.getItem("targetUrl");
      if (targetUrl) {
        sessionStorage.removeItem("targetUrl");
        router.push(targetUrl);
      } else {
        return router.push("/");
      }
    }
  }, [token]);

  const handleSubmit = async () => {
    // e.preventDefault();

    await axiosInstance
      .post("/auth/login", {
        email: userData.email,
        password: userData.password,
      })
      .then((res) => {
        dispatch(update({ token: res.data.token }));
        console.log(res.data);
        const targetUrl = sessionStorage.getItem("targetUrl");
        if (targetUrl) {
          sessionStorage.removeItem("targetUrl");
          router.push(targetUrl);
        } else {
          return router.push("/");
        }
      })
      .catch((err) => {
        if (err.response.data.msg === "Wrong or expired token") {
          dispatch(logout());
        }
      });
  };

  const handleLinkClick = () => {
    const currentPath = location.pathname;
    sessionStorage.setItem("targetUrl", currentPath);
  };

  return (
    <div className="loginContainer bg-teal-100 h-screen flex flex-col justify-center items-center">
      <span className="loginTitle">LOGIN</span>
      <div className="bg-white h-96 w-96 rounded shadow-md shadow-black">
        <form
          className="loginForm flex flex-col"
          onSubmit={handleSubmit}
          action=""
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="loginInput"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="loginInput"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <button
            className="loginButton"
            type="submit"
            onClick={handleLinkClick}
          >
            Login
          </button>
          <span className="items-center">
            Don't have an account?{" "}
            <Link href="/register">Create an account</Link>
          </span>
        </form>
      </div>
    </div>
  );
}
