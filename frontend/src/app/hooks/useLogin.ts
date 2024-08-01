import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoginData, initialLoginState } from "../types/login";
import api from "../utils/api";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginData>(initialLoginState);

  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState<"success" | "error">(
    "success"
  );

  const router = useRouter();

  const login = async (formData: LoginData) => {
    setLoading(true);
    setError(null);
    try {
      const loginResponse = await api.put<LoginData>("/auth/login", formData);
      setData(loginResponse.data);
      setAlertMessage("Login realizado com sucesso!");
      setAlertSeverity("success");
      setOpenAlert(true);

      // Redirecionar para a tela inicial
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err) {
      setError("Erro ao fazer login");
      setAlertMessage("Erro ao fazer login");
      setAlertSeverity("error");
      setOpenAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
    data,
    openAlert,
    alertMessage,
    alertSeverity,
    setOpenAlert,
  };
};
