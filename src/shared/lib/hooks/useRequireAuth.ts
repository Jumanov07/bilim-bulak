"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useRequireAuth = () => {
  const [tokenState, setTokenState] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const authData = localStorage.getItem("auth");

    if (!authData) {
      router.replace("/");
      return;
    }

    let token: string | null = null;

    try {
      const state = JSON.parse(authData);
      token = state?.state?.token ?? null;
    } catch {
      localStorage.removeItem("auth");
      router.replace("/");
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTokenState(token);

    if (!token) router.replace("/");
  }, [router]);

  const ready = tokenState !== null;
  const isAuthed = !!tokenState;

  return { ready, isAuthed };
};
