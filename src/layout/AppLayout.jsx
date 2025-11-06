import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router";
import authStore from "../stores/AuthStore";

const AppLayout = () => {
  const navigate = useNavigate();
  const { user, logout } = authStore();

  const handleLogin = () => {
    if (user) {
      logout();
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 4,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={900}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          코딩 알려주는 누나 도서관
        </Typography>
        <Box>
          <Button sx={{ color: "#010101" }} onClick={() => navigate("/")}>
            메인
          </Button>
          <Button
            sx={{ color: "#010101" }}
            onClick={() => navigate("/my-books")}
          >
            나의 책
          </Button>
          <Button sx={{ color: "#e6c88c" }} onClick={handleLogin}>
            {user ? "로그아웃" : "로그인"}
          </Button>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default AppLayout;
