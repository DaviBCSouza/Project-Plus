import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import BootstrapClient from "./components/BootstrapClient";
import { ReactQueryClientProvider } from "./components/ReactQueryClient";

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
    <html lang="pt-BR" data-bs-theme="dark">
      <body>
        <ReactQueryClientProvider>
          {children}
          <BootstrapClient />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
