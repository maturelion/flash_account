import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useGetActivities } from "../hooks/activity.hook";
import { useGetWallet } from "../hooks/wallet.hook";

const MainLayout = () => {
  const navigate = useNavigate();

  useGetActivities()
  useGetWallet()

  useEffect(() => {
    if (localStorage.getItem("token") === null || localStorage.getItem("token") === "") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;
