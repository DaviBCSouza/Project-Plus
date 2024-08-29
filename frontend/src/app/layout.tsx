import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import ProtectedRouter from "./components/ProtectedRouter";
import { AuthProvider } from "./context/AuthProvider";
import theme from "./theme/theme";

export const metadata: Metadata = {
  title: "Project +",
  description: "Um Sistema de Gerenciamento de Projetos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <ProtectedRouter>
                <CssBaseline />
                {children}
              </ProtectedRouter>
            </AuthProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
