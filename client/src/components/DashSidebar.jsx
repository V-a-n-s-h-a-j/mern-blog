import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowCircleDown,
  HiArrowCircleLeft,
  HiArrowSmRight,
  HiUser,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    // console.log(tabFromUrl);
    if (tabFromUrl) setTab(tabFromUrl);
    // else setTab("");
  }, [location.search]);
  return (
    <>
      <Sidebar className="w-full md:w-56">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to="/dashboard?tab=profile">
              <Sidebar.Item
                icon={HiUser}
                label="User"
                labelColor="dark"
                active={tab === "profile"}
              >
                Profile
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard">
            <Sidebar.Item className="cursor-pointer" icon={HiArrowSmRight}>
              Sign Out
            </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
