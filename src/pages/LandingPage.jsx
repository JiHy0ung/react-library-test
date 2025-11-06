import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import authStore from "../stores/AuthStore";
import BookCard from "../components/BookCard";
import { useGetPopularBooks } from "../hooks/useGetPopularBooks";

const LandingPage = () => {
  const { user } = authStore();

  const { data, isLoading } = useGetPopularBooks();

  console.log(data);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 4,
          px: 45,
          backgroundColor: "#2c5851",
          color: "#e8d891ff",
        }}
      >
        <Box>
          <Typography fontWeight={700} fontSize={32} color="#e6c88c">
            코딩 알려주는 누나 도서관
          </Typography>
          {user && (
            <Typography color="#e6c88c">{user.name}님 환영합니다!</Typography>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
              },
            }}
            size="small"
            label="책 제목이나 작가를 검색하세요."
          />
          <Button sx={{ backgroundColor: "#e6c88c", color: "#010101" }}>
            검색
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data?.works?.map((book) => (
              <Grid item sm={6} md={4} key={book.id}>
                <BookCard book={book} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default LandingPage;
