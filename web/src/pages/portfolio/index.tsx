import { useTranslation } from "react-i18next";

export const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className="container"></header>
      <main className="container">{t("par.helloWorld")}</main>
      <footer className="container"></footer>
    </>
  );
};
