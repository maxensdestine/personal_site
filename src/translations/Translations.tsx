import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

function getDefaultLanguage(): string {
  const languages = navigator.languages;
  for (const language of languages) {
    if (!language || language.length < 2)
      continue;
    const lang: string = language.substring(0, 2);
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
          'projects': 'Projects',
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
          'past-work-date-begin-0': '2023',
          'past-work-date-end-0': 'present',
          'past-work-title-0': 'macOS & iOS Developer',
          'past-work-location-0': 'Druide informatique',
          'past-work-desc-0':
            'Augmented the iOS and macOS applications by building a dynamic, \
            responsive and intuitive user interface. Interacted with a C++ \
            backend server to convey the relevant data through the application. \
            Cooperated with other development teams for the creation of new features',
          'past-work-skills-0': 'Objective-C,Swift,C++',
          'past-work-link-0': 'https://www.druide.com/en',
          'past-work-date-begin-1': 'may',
          'past-work-date-end-1': 'aug 2022',
          'past-work-title-1': 'Software Engineer Intern',
          'past-work-location-1': 'O-Possum Solutions',
          'past-work-desc-1':
            'Enhanced the user and transaction history display systems by implementing \
            filtered search. Upgraded a visualization system for sales to allow the \
            creation of statistics, tables and graphs based on different criteria such \
            as the date, the payment method (credit card, online, …), etc',
          'past-work-skills-1': 'JavaScript,ReactJS,Material UI,Java,SpringBoot,SQL',
          'past-work-link-1': 'https://o-possum.com/about-2/?lang=en',
          'past-work-date-begin-2': 'may',
          'past-work-date-end-2': 'aug 2021',
          'past-work-title-2': 'Software Engineer Intern',
          'past-work-location-2': 'O-Possum Solutions',
          'past-work-desc-2':
            'Refined the identity access management to better limit the permissions \
            of cashiers based on their authority. Implemented a checkout feature to \
            allow tracking the number of clients present in the center. Increased the \
            usability of the point of sales application by including relevant \
            error messages',
          'past-work-skills-2': 'Java,SpringBoot,JavaFX',
          'past-work-link-2': 'https://o-possum.com/about-2/?lang=en',
          'past-project-title-0': 'Deaf Literacy',
          'past-project-location-0': 'McGill University',
          'past-project-desc-0':
            'Project whose goal was to explore solutions to improve the rate of literacy \
            in the deaf community (details have been redacted because of a \
            non-disclosure agreement)',
          'past-project-skills-0': 'JavaScript,ReactJS,Material UI',
          'past-project-link-0': 'https://srl.mcgill.ca/',
          'past-project-title-1': 'Lock Screen Picture Finder',
          'past-project-desc-1':
            'GUI app to help windows users find their lock screen pictures',
          'past-project-skills-1': 'Java,Java Swing',
          'past-project-link-1': 'https://github.com/maxensdestine/WindowsLockScreenPictureFinder',
          'past-project-title-2': 'Red Yoinker',
          'past-project-desc-2':
            'Command line application to download media content from Reddit',
          'past-project-skills-2': 'Python',
          'past-project-link-2': 'https://github.com/maxensdestine/Red-Yoinker',
          'past-project-title-3': 'Slick2d game',
          'past-project-desc-3':
            '2D platformer with a wide range of enemies and a point system. \
            Made using the Slick2d library and the MVC design pattern',
          'past-project-skills-3': 'Java',
          'past-project-link-3': 'https://github.com/maxensdestine/JavaPlatformGame',
          'past-project-image-alt': 'Image of the project ',
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
          'projects': 'Projets',
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
          'past-work-date-begin-0': '2023',
          'past-work-date-end-0': 'présent',
          'past-work-title-0': 'Développeur macOS & iOS',
          'past-work-location-0': 'Druide informatique',
          'past-work-desc-0':
            'Enrichir les applications iOS et macOS à l’aide d’une interface \
            utilisateur dynamique, adaptive et intuitive. Interagir avec un \
            serveur dorsale C++ pour acheminer les informations adéquates par \
            le biais des applications',
          'past-work-skills-0': 'Objective-C, Swift, C++',
          'past-work-link-0': 'https://www.druide.com/fr',
          'past-work-date-begin-1': 'mai',
          'past-work-date-end-1': 'août 2022',
          'past-work-title-1': 'Stagiaire en génie logiciel',
          'past-work-location-1': 'O-Possum Solutions',
          'past-work-desc-1':
            'Enrichir le système d’affichage d’utilisateurs et de transactions en \
            implémentant des filtres de recherche. Améliorer un système de \
            visualisation des ventes afin de pouvoir créer des statistiques, des \
            tables et des graphiques selon différents critères, tels que la date, \
            le type d’achat (carte de crédit, en ligne, …), etc',
          'past-work-skills-1': 'JavaScript,ReactJS,Material UI,Java,SpringBoot,SQL',
          'past-work-link-1': 'https://o-possum.com/about-2/?lang=fr',
          'past-work-date-begin-2': 'mai',
          'past-work-date-end-2': 'août 2021',
          'past-work-title-2': 'Stagiaire en génie logiciel',
          'past-work-location-2': 'O-Possum Solutions',
          'past-work-desc-2':
            'Raffiner la gestion des identités des d’accès pour mieux limiter \
            les caissiers selon leur autorité. Implémenter une fonction de déconnexion \
            pour permettre le contrôle du nombre de clients présents sur le site. \
            Augmenter la convivialité du logiciel de point de vente en incluant des \
            messages d’erreur précis',
          'past-work-skills-2': 'Java,SpringBoot,JavaFX',
          'past-work-link-2': 'https://o-possum.com/about-2/?lang=fr',
          'past-project-title-0': 'Littératie des sourds',
          'past-project-location-0': 'Université McGill',
          'past-project-desc-0':
            'Projet ayant pour but d’explorer des solutions pour améliorer le taux de \
            littératie des membres de la société qui ont des défis auditifs \
            (les détails sont retenus en raison d’un accord de non-divulgation)',
          'past-project-skills-0': 'JavaScript,ReactJS,Material UI',
          'past-project-link-0': 'https://srl.mcgill.ca/',
          'past-project-title-1': 'Trouveur de photo d’écran de verrouillage',
          'past-project-desc-1':
            'Logiciel graphique pour aider les utilisateurs Windows à retrouver leur \
            photo d’écran de verrouillage',
          'past-project-skills-1': 'Java,Java Swing',
          'past-project-link-1': 'https://github.com/maxensdestine/WindowsLockScreenPictureFinder',
          'past-project-title-2': 'Attrapeur rouge',
          'past-project-desc-2':
            'Logiciel de ligne de commande pour télécharger des fichiers média de Reddit',
          'past-project-skills-2': 'Python',
          'past-project-link-2': 'https://github.com/maxensdestine/Red-Yoinker',
          'past-project-title-3': 'Jeu Slick2d',
          'past-project-desc-3':
            'Jeu de plateforme en deux dimensions avec des ennemis variés et un système de points. \
            Créé à l’aide de la librairie Slick2d et du modèle de conception MVC',
          'past-project-skills-3': 'Java',
          'past-project-link-3': 'https://github.com/maxensdestine/JavaPlatformGame',
          'past-project-image-alt': 'Image du projet ',
        },
      },
    },
    lng: language,
    fallbackLng: 'en',
  });

export default i18n;