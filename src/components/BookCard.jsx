import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";

const bookCard = ({ book }) => {
  return (
    <Box>
      <Box
        component="img"
        src={
          book.cover_id
            ? `http://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11arezfH2bBOlIOaQ6HmSsKRkRz2DM72zAw&s"
        }
      />
      <Typography>{book.title}</Typography>
      <Typography>{book.authors[0].name}</Typography>
      <Box>
        <FavoriteBorderIcon></FavoriteBorderIcon>
      </Box>
    </Box>
  );
};

export default bookCard;
