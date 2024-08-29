import { useCreateProject } from "@/app/hooks/useCreateProject";
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
import { format } from "date-fns";
import { useState } from "react";

export default function ModalAddProject({ onAddProject }: any) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [date, setDate] = useState("");

  const { createProject, loading, error } = useCreateProject();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    const formattedDate = format(
      new Date(date),
      "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    );

    const projectData = {
      title,
      location,
      createdBy,
      date: formattedDate,
      idUser: "ca4bfb7b-8521-4c49-9910-b749d953dbe2",
    };

    const newProject = await createProject(projectData);

    if (newProject) {
      onAddProject(newProject); // Adiciona o novo projeto à lista
    }

    handleClose();
  };

  return (
    <>
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
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Localização"
            type="text"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Criado Por"
            type="text"
            variant="outlined"
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Data"
            type="datetime-local"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="primary" disabled={loading}>
            {loading ? "Salvando..." : "Salvar"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
