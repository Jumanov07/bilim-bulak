"use client";
import { Intro } from "@/widgets/landing/intro";
import { Steps } from "@/widgets/landing/steps";
import { UserLayout } from "@/widgets/layout/user-layout";
import { useScrollRestorer } from "@/shared/lib/hooks/useScrollRestorer";

const Home = () => {
  useScrollRestorer();

  return (
    <>
      <UserLayout>
        <Intro />
        <Steps />
      </UserLayout>
    </>
  );
};

export default Home;
