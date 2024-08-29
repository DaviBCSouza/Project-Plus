import { useState } from "react";
import { ProjectData } from "../types/project";
import api from "../utils/api";

export const useCreateProject = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createProject = async (projectData: ProjectData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post("/project/", projectData);
      return response.data;
    } catch (err) {
      setError("Erro ao criar o projeto");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    createProject,
    loading,
    error,
  };
};
