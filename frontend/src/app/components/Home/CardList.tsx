"use client";

import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import ProjectCard from "./Card";

const projectList = [
  {
    image: "/bg_card.svg",
    title: "Projeto Example1",
    location: "Manaus/AM",
    createBy: "João Gomes",
    date: "17/07/2024",
  },
  {
    image: "/bg_card.svg",
    title: "Projeto Example2",
    location: "São Paulo/SP",
    createBy: "Paulo Ricardo",
    date: "12/07/2024",
  },
  {
    image: "/bg_card.svg",
    title: "Projeto Example3",
    location: "Rio de Janeiro/RJ",
    createBy: "Bruce Wayne",
    date: "15/07/2024",
  },
];

export default function CardList() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box position="relative" top={-80} left={1130}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          endIcon={<Add />}
        >
          Novo Projeto
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Criar Novo Projeto</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome do Projeto"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Localização"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Criado Por"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Data"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

      <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            location={project.location}
            createBy={project.createBy}
            date={project.date}
          />
        ))}
      </Box>
    </Box>
  );
}
