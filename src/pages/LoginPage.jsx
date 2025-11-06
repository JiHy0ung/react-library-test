import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import authStore from "../stores/AuthStore";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const { login } = authStore();
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    login({ name: userName });
    navigate("/");
  };

  return (
    <Box sx={{ backgroundColor: "#2c5851" }}>
      <Container
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={0} sx={{ p: 4, width: "100%" }}>
          <Typography fontWeight={700} variant="h4" textAlign="center" mb={2}>
            환영합니다
          </Typography>
          <Box component="form" onSubmit={(e) => loginUser(e)}>
            <Typography variant="body2" align="left">
              이메일 *
            </Typography>
            <TextField
              size="small"
              fullWidth
              type="email"
              margin="normal"
              variant="outlined"
              sx={{ mb: 2, mt: 1 }}
              onChange={(e) => setUserName(e.target.value)}
              InputProps={{
                sx: {
                  borderRadius: 0,
                  m: 0,
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#010101",
                    borderWidth: "1px",
                  },
                },
              }}
            />
            <Typography variant="body2" align="left">
              비밀번호 *
            </Typography>
            <TextField
              size="small"
              fullWidth
              type="password"
              margin="normal"
              variant="outlined"
              sx={{ mb: 1, mt: 1 }}
              InputProps={{
                sx: {
                  borderRadius: 0,
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#010101",
                    borderWidth: "1px",
                  },
                },
              }}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                mb: 1,
                borderRadius: 0,
                color: "#010101",
                backgroundColor: "#e8d891ff",
              }}
            >
              로그인
            </Button>
            <Typography variant="body2" align="left">
              계정이 없으신가요? <a href="">회원가입</a>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
