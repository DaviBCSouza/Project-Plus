import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { AlertSeverity } from "../types/signup";
import api from "../utils/api";

export const useLogout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState<AlertSeverity>("success");

  const router = useRouter();
  const { setAuthStatus } = useAuth();

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await api.delete("/auth/logout");
      setAlertMessage("Logout realizado com sucesso!");
      setAlertSeverity("success");
      setAuthStatus(false);
      setOpenAlert(true);

      // Redirecionar para a tela de login
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      console.log(err);
      setError("Erro ao fazer logout");
      setAlertMessage("Erro ao fazer logout");
      setAlertSeverity("error");
      setOpenAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    logout,
    loading,
    error,
    openAlert,
    alertMessage,
    alertSeverity,
    setOpenAlert,
  };
};
