"use client";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { useAuthStore } from "@/shared/stores/useAuthStore";

interface Props {
  className?: string;
}

export const LogoutButton = ({ className }: Props) => {
  const router = useRouter();

  const logout = useAuthStore((s) => s.logout);

  const onLogout = () => {
    logout();
    router.replace("/auth/sign-in");
  };

  return (
    <Button type="button" className={className} onClick={onLogout}>
      Выйти
    </Button>
  );
};
