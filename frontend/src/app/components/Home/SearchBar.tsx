"use client";

import { Search } from "@mui/icons-material";
import { Box, Button, InputBase, Paper, styled } from "@mui/material";

const SearchContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(3),
  width: "100%",
  height: "35vh",
}));

const SearchBox = styled(Paper)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid black",
  borderRadius: theme.shape.borderRadius * 8,
  boxShadow: theme.shadows[1],
  display: "flex",
  padding: theme.spacing(1),
  width: "80%",
  maxWidth: 600,
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  marginLeft: theme.spacing(1),
}));

const IconWrapper = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: "orange",
  border: "1px solid orange",
  borderRadius: "50%",
  minWidth: 0,
  padding: theme.spacing(1),
  ":hover": {
    backgroundColor: "darkorange",
  },
}));

export default function SearchBar() {
  return (
    <SearchContainer>
      <SearchBox>
        <SearchInput
          placeholder="Busque Projetos..."
          inputProps={{ "aria-label": "search" }}
        />
        <IconWrapper>
          <Search />
        </IconWrapper>
      </SearchBox>
    </SearchContainer>
  );
}
