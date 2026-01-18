"use client";

import { useTranslations } from "next-intl";
import { useAuthStore } from "@/shared/stores/useAuthStore";
import { Footer } from "@/widgets/layout/footer";
import { Header } from "@/widgets/layout/header";
import { MobileBottomNav } from "@/widgets/layout/mobile";

export default function PrivacyPage() {
  const t = useTranslations("privacy");
  const isAuthed = useAuthStore((s) => Boolean(s.token));

  return (
    <>
      <Header />

      <div className="mx-auto w-full max-w-3xl px-4 py-6">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="mt-2 text-sm opacity-80">{t("meta")}</p>

        <section className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">{t("s1.title")}</h2>
          <p className="opacity-90">{t("s1.p1")}</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">{t("s2.title")}</h2>
          <ul className="list-disc pl-5 space-y-1 opacity-90">
            <li>{t("s2.li1")}</li>
            <li>{t("s2.li2")}</li>
            <li>{t("s2.li3")}</li>
            <li>{t("s2.li4")}</li>
            <li>{t("s2.li5")}</li>
            <li>{t("s2.li6")}</li>
          </ul>
          <p className="opacity-90">{t("s2.note")}</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">{t("s3.title")}</h2>
          <ul className="list-disc pl-5 space-y-1 opacity-90">
            <li>{t("s3.li1")}</li>
            <li>{t("s3.li2")}</li>
            <li>{t("s3.li3")}</li>
            <li>{t("s3.li4")}</li>
            <li>{t("s3.li5")}</li>
          </ul>
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">{t("s4.title")}</h2>
          <ul className="list-disc pl-5 space-y-1 opacity-90">
            <li>{t("s4.li1")}</li>
            <li>{t("s4.li2")}</li>
            <li>{t("s4.li3")}</li>
          </ul>
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">{t("s5.title")}</h2>
          <p className="opacity-90">{t("s5.p1")}</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">{t("s6.title")}</h2>
          <p className="opacity-90">{t("s6.p1")}</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">{t("s7.title")}</h2>
          <p className="opacity-90">{t("s7.p1")}</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">{t("s8.title")}</h2>
          <p className="opacity-90">{t("s8.p1")}</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">{t("s9.title")}</h2>
          <ul className="list-disc pl-5 space-y-1 opacity-90">
            <li>{t("s9.li1")}</li>
            <li>{t("s9.li2")}</li>
            <li>{t("s9.li3")}</li>
            <li>{t("s9.li4")}</li>
          </ul>
          <p className="opacity-90">{t("s9.contact")}</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">{t("s10.title")}</h2>
          <p className="opacity-90">{t("s10.p1")}</p>
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">{t("s11.title")}</h2>
          <p className="opacity-90">{t("s11.p1")}</p>
        </section>
      </div>

      <Footer />

      {isAuthed && <MobileBottomNav />}
    </>
  );
}
