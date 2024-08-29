"use client";

import api from "@/app/utils/api";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "./Card";
import ModalAddProject from "./ModalAddProject";

export default function CardList() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/project/");
        setProjects(response.data);
      } catch (err) {
        setError("Erro ao recuperar dados");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Typography color="error">
        Erro ao carregar os projetos: {error}
      </Typography>
    );
  }
  return (
    <Box>
      <ModalAddProject />
      <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
        {projects.map((project: any) => (
          <Card
            key={project.id}
            image="/assets/images/bg_card.svg"
            title={project.title}
            location={project.location}
            createdBy={project.createdBy}
            date={project.date}
          />
        ))}
      </Box>
    </Box>
  );
}
