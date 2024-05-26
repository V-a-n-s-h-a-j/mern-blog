import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowCircleDown,
  HiArrowCircleLeft,
  HiArrowSmRight,
  HiUser,
  HiDocumentText,
  HiOutlineDocumentText,
  HiOutlineUserGroup
} from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";
export default function DashSidebar() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    // console.log(tabFromUrl);
    if (tabFromUrl) setTab(tabFromUrl);
    // else setTab("");
  }, [location.search]);
  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", { method: "POST" });
      const data = await res.json();
      if (!res.ok) console.log(error.message);
      else dispatch(signoutSuccess());
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Sidebar className="w-full md:w-56">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col gap-1">
            <Link to="/dashboard?tab=profile">
              <Sidebar.Item
                icon={HiUser}
                label={currentUser.isAdmin ? "Admin" : "User"}
                labelColor="dark"
                active={tab === "profile"}
                as="div"
              >
                Profile
              </Sidebar.Item>
            </Link>
            {currentUser.isAdmin && (
              <Link to="/dashboard?tab=posts">
                <Sidebar.Item
                  icon={HiOutlineDocumentText}
                  // label="Admin"
                  // labelColor="dark"
                  active={tab === "posts"}
                  as="div"
                >
                  Posts
                </Sidebar.Item>
              </Link>
            )}
            {currentUser.isAdmin && (
              <Link to="/dashboard?tab=users">
                <Sidebar.Item
                  icon={HiOutlineUserGroup}
                  // label="Admin"
                  // labelColor="dark"
                  active={tab === "users"}
                  as="div"
                >
                  Users
                </Sidebar.Item>
              </Link>
            )}
            {currentUser.isAdmin && (
              <Link to="/dashboard?tab=comments">
                <Sidebar.Item
                  icon={HiOutlineUserGroup}
                  // label="Admin"
                  // labelColor="dark"
                  active={tab === "comments"}
                  as="div"
                >
                  Comments
                </Sidebar.Item>
              </Link>
            )}
            <Sidebar.Item
              onClick={handleSignout}
              className="cursor-pointer"
              icon={HiArrowSmRight}
            >
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
