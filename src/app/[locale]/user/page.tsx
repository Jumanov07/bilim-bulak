"use client";
import { Welcome } from "@/widgets/landing/welcome";
import { UserLayout } from "@/widgets/layout/user-layout";
import { useRequireAuth } from "@/shared/lib/hooks/useRequireAuth";

const User = () => {
  const { ready, isAuthed } = useRequireAuth();

  if (!ready) return null;
  if (!isAuthed) return null;

  return (
    <>
      <UserLayout>
        <Welcome />
      </UserLayout>
    </>
  );
};

export default User;
