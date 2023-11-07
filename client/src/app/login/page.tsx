"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../utils/axios";
import { logout, update } from "../../redux/userSlice";
import Link from "next/link";
// import { toast } from "react-toastify";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { token } = useSelector((state: any) => state?.comb?.user);
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
  }, []);

  const handleSubmit = async () => {
    // e.preventDefault();

    await axiosInstance
      .post("/auth/login", {
        email: userData.email,
        password: userData.password,
      })
      .then((res) => {
        dispatch(update({ token: res.data.token }));
        // toast.success("Login successfully");
        // console.log(res.data);
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
    <div className="login h-max py-20 flex flex-col justify-center bg-teal-100 items-center">
      <span className="loginTitle mb-8 text-3xl">LOGIN</span>
      <div className="bg-white rounded-3xl shadow-md">
        <form
          className="loginForm flex flex-col my-8 mx-10 h-1/2 w-96"
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
            className="loginButton mt-3 bg-red-500 border-none text-white rounded-lg p-2"
            type="submit"
            onClick={handleLinkClick}
          >
            Login
          </button>
          <span className="items-center mt-4">
            Don`&apos;`t have an account?{" "}
            <Link
              href="/register"
              className=" text-blue-600 ml-3 text-lg underline"
            >
              Create an account
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
