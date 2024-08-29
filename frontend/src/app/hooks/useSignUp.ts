import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  AlertSeverity,
  FormData,
  initialFormState,
  UserResponse,
} from "../types/signup";
import api from "../utils/api";

export const useSignup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<FormData>(initialFormState);

  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState<AlertSeverity>("success");

  const router = useRouter();

  const signup = async (formData: FormData) => {
    setLoading(true);
    setError(null);
    try {
      // Criar o objeto do usuário
      const user = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        status: "ATIVO",
      };

      // Fazer a requisição para criar o usuário
      const userResponse = await api.post<UserResponse>("/auth/signup", user);

      // Definir a resposta do candidato
      setData(userResponse.data);

      // Configurar a mensagem de sucesso e abrir o Snackbar
      setAlertMessage("Cadastro realizado com sucesso!");
      setAlertSeverity("success");
      setOpenAlert(true);

      // Redirecionar para a tela de login
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      setError("Erro ao criar usuário");
      setAlertMessage("Erro ao criar usuário");
      setAlertSeverity("error");
      setOpenAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    signup,
    loading,
    error,
    data,
    openAlert,
    alertMessage,
    alertSeverity,
    setOpenAlert,
  };
};
