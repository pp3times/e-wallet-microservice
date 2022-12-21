import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Notifications, Logout, Person } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { deleteCookie, getCookie } from "cookies-next";

function ResponsiveAppBar() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const router = useRouter();

  // useEffect(() => {
  //   setName(JSON.parse(getCookie("user")).name);
  //   setStudentId(JSON.parse(getCookie("user")).studentId);
  // }, []);

  const handleLogout = () => {
    deleteCookie("user");
    router.push("/login");
  };

  return (
    <div className="flex justify-between items-center py-3 w-full px-5">
      <div className="rounded-full bg-primary/20 p-1">
        <Person className="text-primary text-3xl" />
      </div>

      <p className="text-lg font-semibold text-primary uppercase">schoolletpay</p>

      <div className="flex items-center gap-x-5">
        <Tooltip title="Open settings">
          <IconButton onClick={handleLogout} sx={{ p: 0 }}>
            <Typography textAlign="center" className="text-white flex items-center">
              <Notifications className="text-primary" />
            </Typography>
          </IconButton>
        </Tooltip>

        <Tooltip title="Open settings">
          <IconButton onClick={handleLogout} sx={{ p: 0 }}>
            <Typography textAlign="center" className="text-white flex items-center">
              <Logout className="text-primary" />
            </Typography>
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
export default ResponsiveAppBar;
