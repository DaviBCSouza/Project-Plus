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

export default function ModalAddProject() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    </>
  );
}
