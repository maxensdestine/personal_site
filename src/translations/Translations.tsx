import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

function getDefaultLanguage(): string {
  const languages = navigator.languages;
  for (const language of languages) {
    if (!language || language.length < 2)
      continue;
    const lang : string = language.substring(0, 2);
    if (lang === 'en' || lang === 'fr')
      return lang;
  }
  return 'en';
}

const language: string = getDefaultLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          //English translations here
          'portfolio': 'Portfolio',
          'job-title': 'Software Engineer',
          'job-desc': 'I build and augment software to deliver impeccable digital experiences.',
          'image-maxens-alt': 'Image of Maxens Destiné',
          'general': 'General',
          'experience': 'Experience',
          'education': 'Education',
          'projects-interest': 'Projects & Interests',
          'settings': 'Settings',
          'appearance': 'Appearance',
          'language': 'Language',
          'dark-mode': 'Dark',
          'dark-mode-al': 'Use dark mode',
          'light-mode': 'Light',
          'light-mode-al': 'Use light mode',
          'system-mode': 'System',
          'system-mode-al': 'Use system mode',
          'about': 'ABOUT',
          'summary-0': 
            'I am a developer who enjoys working on projects that are meaningful and \
            have a tangible, positive impact on people and society. My passion is \
            creating and maintaining elegant, user-friendly, and robust user \
            interfaces that serve as a bridge between backend software and clients.',
          'summary-1': 
            'Currently, I’m a Front-end Software Engineer at Druide informatique, \
            specializing in macOS & iOS applications. \
            The majority of my tasks involve creating new features and maintaining \
            existing ones to meet our clients’ needs. I meticulously follow industry \
            standards to ensure that the product is visually pleasing, user-friendly \
            and accessible.',
          'summary-2': 
            'I have previously worked on a Point-of-Sale application for \
            O-Possum Solutions. I’ve also had the opportunity to work on a \
            Deaf Literacy project under the supervision of the \
            Werner Graupe Distinguished Chair in Automation Engineering, \
            Jeremy Cooperstock.',
          'summary-3': 
            'When I’m not programming, I read, work out, and \
            practise archery.',
        },
      },
      fr: {
        translation: {
          //French translations here
          'portfolio': 'Portfolio',
          'job-title': 'Ingénieur en logiciel',
          'job-desc': 'Je crée et améliore des logiciels pour offrir une expérience digitale impeccable.',
          'image-maxens-alt': 'Image de Maxens Destiné',
          'general': 'Général',
          'experience': 'Expérience',
          'education': 'Éducation',
          'projects-interest': 'Projets & Intérêts',
          'settings': 'Réglages',
          'appearance': 'Apparence',
          'language': 'Langue',
          'dark-mode': 'Sombre',
          'dark-mode-al': 'Utiliser le mode sombre',
          'light-mode': 'Clair',
          'light-mode-al': 'Utiliser le mode clair',
          'system-mode': 'Système',
          'system-mode-al': 'Utiliser le mode du système',
          'about': 'À PROPOS',
          'summary-0': 
            'Je suis un développeur qui aime travailler sur des projets qui ont un \
            impact réel et significatif sur la société. Ma passion, c’est la \
            conception et le maintien d’interfaces élégantes, conviviales et \
            robustes, qui servent de pont entre un logiciel dorsal et des clients.',
          'summary-1': 
            'Actuellement, je suis un ingénieur logiciel d’interface pour \
            Druide informatique, spécialisé dans les applications macOS & iOS. \
            Mes tâches principales consistent à créer de nouvelles fonctionnalités \
            et à maintenir celles existantes afin de satisfaire les demandes de \
            nos clients. Je suis les standards de l’industrie de manière \
            méticuleuse pour m’assurer que le produit est esthétique, convivial \
            et accessible.',
          'summary-2': 
            'Dans le passé, j’ai travaillé sur un logiciel de caisse au sein de \
            l’équipe d’Opposum Solutions. J’ai aussi eu l’opportunité de travailler \
            sur un projet de Littératie pour Sourd, sous la supervision du Directeur \
            en ingénierie d’automatisation (prix distingué Werner Graupe), \
            Jeremy Cooperstock.',
          'summary-3': 
            'À part programmer, je passe mon temps libre à lire, à m’entraîner \
            et à pratiquer l’archerie.',
        },
      },
    },
    lng: language,
    fallbackLng: 'en',
  });

export default i18n;