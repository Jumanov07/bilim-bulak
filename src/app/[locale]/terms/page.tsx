"use client";
import { useTranslations } from "next-intl";
import { useAuthStore } from "@/shared/stores/useAuthStore";
import { Footer } from "@/widgets/layout/footer";
import { Header } from "@/widgets/layout/header";
import { MobileBottomNav } from "@/widgets/layout/mobile";

const Terms = () => {
  const t = useTranslations("terms");
  const isAuthed = useAuthStore((s) => Boolean(s.token));

  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-3xl px-4 py-6">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="mt-2 text-sm opacity-80">{t("meta")}</p>

        {Array.from({ length: 12 }).map((_, i) => {
          const key = `s${i + 1}` as const;
          return (
            <section key={key} className="mt-6 space-y-3">
              <h2 className="text-lg font-semibold">{t(`${key}.title`)}</h2>

              {/* paragraph */}
              {t.raw(`${key}.p`) ? (
                <p className="opacity-90">{t(`${key}.p`)}</p>
              ) : null}

              {/* list */}
              {t.raw(`${key}.items`) ? (
                <ul className="list-disc pl-5 space-y-1 opacity-90">
                  {(t.raw(`${key}.items`) as string[]).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {/* note */}
              {t.raw(`${key}.note`) ? (
                <p className="opacity-90">{t(`${key}.note`)}</p>
              ) : null}
            </section>
          );
        })}
      </main>

      <Footer />
      {isAuthed && <MobileBottomNav />}
    </>
  );
};

export default Terms;
