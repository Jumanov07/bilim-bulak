"use client";
import { useRequireAuth } from "@/shared/lib/hooks/useRequireAuth";

const Dashboard = () => {
  const { ready, isAuthed } = useRequireAuth();

  if (!ready) return null;
  if (!isAuthed) return null;

  return <h1>Hi</h1>;
};

export default Dashboard;
