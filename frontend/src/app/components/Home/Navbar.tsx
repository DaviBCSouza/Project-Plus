"use client";

import {
  AccountCircle,
  AccountTree,
  ExitToApp,
  Notifications,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundImage: "none",
  backgroundColor: "transparent",
  boxShadow: "none",
  marginTop: theme.spacing(1),
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  backdropFilter: "blur(24px)",
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(255, 255, 255, 0.4)"
      : "rgba(0, 0, 0, 0.4)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  borderRadius: "15px",
  boxShadow:
    theme.palette.mode === "light"
      ? "0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)"
      : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
  display: "flex",
  flexShrink: 0,
  justifyContent: "space-between",
  maxHeight: 40,
}));

const CustomTypo = styled(Typography)({
  flexGrow: 1,
});

const CustomBox = styled(Box)({
  flexGrow: 1,
  padding: "1rem",
});

const CustomLink = styled(Link)({
  color: "inherit",
  textDecoration: "none",
  ":hover": {
    textDecoration: "none",
  },
  ":visited": {
    color: "inherit",
  },
});

const CustomMenu = styled(Menu)({
  ".MuiPaper-root": {
    backgroundColor: "white",
  },
});

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CustomBox id="inicio">
      <CustomAppBar position="fixed">
        <CustomToolbar variant="regular">
          <IconButton aria-label="logo" color="inherit" edge="start" href="/">
            <Image alt="Logo" src="/logo.svg" height={50} width={95} priority />
          </IconButton>
          <CustomTypo color="primary" fontWeight="bold" variant="h6">
            Project +
          </CustomTypo>
          <Box display="flex" alignItems="center">
            <IconButton color="primary">
              <Notifications />
            </IconButton>
            <Typography variant="body1" color="primary" sx={{ ml: 2 }}>
              Nome do Usuário
            </Typography>
            <IconButton
              aria-label="profile"
              color="inherit"
              edge="end"
              onClick={handleClick}
            >
              <Avatar
                alt="User Profile"
                src=""
                sx={{ width: 40, height: 40 }}
              />
            </IconButton>
            <CustomMenu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleClose}>
                <AccountCircle fontSize="small" sx={{ mr: 1 }} />
                Gerenciar conta
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CustomLink href="/others/vagas" passHref>
                  <Box display="flex" alignItems="center">
                    <AccountTree fontSize="small" sx={{ mr: 1 }} />
                    <Typography color="inherit">Meus Projetos</Typography>
                  </Box>
                </CustomLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ExitToApp fontSize="small" sx={{ mr: 1 }} />
                <Typography color="inherit">Sair</Typography>
              </MenuItem>
            </CustomMenu>
          </Box>
        </CustomToolbar>
      </CustomAppBar>
    </CustomBox>
  );
}
