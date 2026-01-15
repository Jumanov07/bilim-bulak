import { type ReactNode } from "react";
import { Header } from "../header";
import { Footer } from "../footer";

interface Props {
  children: ReactNode;
}

export const UserLayout = ({ children }: Props) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};
