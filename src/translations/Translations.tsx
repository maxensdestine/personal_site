import i18n from "i18next";
import { initReactI18next } from "react-i18next";

function getDefaultLanguage(): string {
  const languages = navigator.languages;
  for (const language of languages) {
    if (!language || language.length < 2)
      continue;
    const lang : string = language.substring(0, 2);
    if (lang === 'en' || lang === 'fr')
      return lang;
  }
  return "en";
}

const language: string = getDefaultLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          //English translations here
          "job-title": "Software Engineer",
          "job-title-2": "and so much more",
          "general": "General",
          "experience": "Experience",
          "education": "Education",
          "projects-interest": "Projects & Interests",
          "settings": "Settings",
          "appearance": "Appearance",
          "language": "Language",
          "dark-mode": "Dark",
          "dark-mode-al": "Use dark mode",
          "light-mode": "Light",
          "light-mode-al": "Use light mode",
          "system-mode": "System",
          "system-mode-al": "Use system mode",
        },
      },
      fr: {
        translation: {
          //French translations here
          "job-title": "Ingénieur en logiciel",
          "job-title-2": "et plus encore",
          "general": "Général",
          "experience": "Expérience",
          "education": "Éducation",
          "projects-interest": "Projets & Intérêts",
          "settings": "Réglages",
          "appearance": "Apparence",
          "language": "Langue",
          "dark-mode": "Sombre",
          "dark-mode-al": "Utiliser le mode sombre",
          "light-mode": "Clair",
          "light-mode-al": "Utiliser le mode clair",
          "system-mode": "Système",
          "system-mode-al": "Utiliser le mode du système",
        },
      },
    },
    lng: language,
    fallbackLng: "en",
  });

export default i18n;