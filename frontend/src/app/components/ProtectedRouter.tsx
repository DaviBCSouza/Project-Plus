"use client";

import { useAuth } from "@/app/context/AuthProvider";
import { CircularProgress } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRouter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoggedIn, isAuthChecked } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isAuthChecked && !isLoggedIn && pathname !== "/signup") {
      router.push("/login");
    }
  }, [isAuthChecked, isLoggedIn, router, pathname]);

  if (!isAuthChecked) {
    return (
      <CircularProgress
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      />
    );
  }

  return <>{children}</>;
}
