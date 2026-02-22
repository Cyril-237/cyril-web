/**
 * Bilingual content (DE/EN) for Cyril Silapa Portfolio
 */

const translations = {
   de: {
      'nav.home': 'Home',
      'nav.about': 'Über mich',
      'nav.education': 'Bildung',
      'nav.experience': 'Berufserfahrung',
      'nav.skills': 'Skills',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Kontakt',

      'hero.label': 'Informatik-Student',
      'hero.desc': 'Begeistert von neuen Technologien und Softwareentwicklung. Studiere an der Hochschule Darmstadt mit Schwerpunkten IT-Security & Web-Entwicklung.',
      'hero.cta': 'Mehr erfahren',
      'hero.contact': 'Kontakt aufnehmen',

      'about.tag': '01. Über mich',
      'about.title': 'Über mich',
      'about.text': 'Ich bin Informatikstudent an der Hochschule Darmstadt und baue gerne praktische Anwendungen – vom Backend bis zur Web-Oberfläche. Besonders interessieren mich saubere APIs, Datenbanken, Deployment und Machine-Learning-Anwendungen. Ich arbeite zuverlässig, lerne schnell und fühle mich im Team wohl. Es macht mir Spaß, neue Technologien zu erkunden und meine Fähigkeiten zu erweitern.',
      'about.name': 'Cyril Silapa Nenguem',
      'about.lang1': 'Fließend',
      'about.lang2': 'Gut',
      'about.lang3': 'Muttersprache',
      'about.cv': 'Lebenslauf herunterladen',
      'about.hobbies': 'Klavier · Lesen · Musik · Programmieren',

      'edu.tag': '02. Bildung',
      'edu.title': 'Ausbildung & Weiterbildung',
      'edu.date1': 'Okt. 2023 – Heute',
      'edu.intro': 'Ich studiere Informatik mit Schwerpunkt auf Softwareentwicklung, Systemarchitektur und IT-Sicherheit. Das Studium verbindet theoretische Grundlagen mit praktischen Projekten.',
      'edu.focus1': 'Informationssysteme: Gestaltung, Nutzung und Integration von Enterprise-Anwendungen',
      'edu.focus2': 'Internet Business: Digitale Geschäftsmodelle, E-Commerce, Web-Technologien',
      'edu.focus3': 'IT-Security: Vertrauenswürdige Systeme, Kryptographie, Web- und Netzsicherheit, PKI, Schadsoftwareanalyse',
      'edu.focus4': 'Praktische Projekte: Webanwendungen (PHP, MySQL), Backend-Services (Docker, Kubernetes, CI/CD), Mobile Apps (Flutter), C++/Qt-Systeme',
      'edu.ongoing': 'Kontinuierliches Selbststudium',
      'edu.date2': 'Apr. 2023 – Heute',
      'edu.desc': 'Aus Leidenschaft für Technik erweitere ich ständig meine Fähigkeiten und realisiere persönliche sowie professionelle Projekte.',

      'exp.tag': '02b. Berufserfahrung',
      'exp.title': 'Berufserfahrung',
      'exp.date1': 'Aug.–Okt. 2025',
      'exp.date2': 'Aug.–Okt. 2024',
      'exp.sanofi1': 'PBPK-Modellierung: Aktualisierung von Arzneimittelmodellen mit neuen Expressionsprofilen',
      'exp.sanofi2': 'Parameteridentifikation, Modellanpassung, Auswertung von PK-Parametern',
      'exp.sanofi3': 'Automatisierte Datenaufbereitung & Visualisierung in R (RStudio, VS Code)',
      'exp.sanofi4': 'Simulationen mit PK-Sim und MoBi · Versionsverwaltung mit Git',
      'exp.sanofi5': 'IT-Support und Datenpflege im internationalen Umfeld.',

      'skills.tag': '03. Skills',
      'skills.title': 'Technisches & Sprachen',
      'skills.tech': 'Technologien',
      'skills.langs': 'Sprachen',
      'skills.tools': 'Tools',

      'portfolio.tag': '04. Portfolio',
      'portfolio.title': 'Ausgewählte Projekte',
      'portfolio.university': 'Hochschule & Beruf',
      'portfolio.personal': 'Persönliche Projekte',
      'portfolio.view': 'Ansehen',

      'modal.cascade': 'Eine einfache Webseite mit HTML und CSS, um meine Designfähigkeiten zu entwickeln.',
      'modal.todo': 'Eine To-do-Liste-App mit HTML, CSS und JavaScript für die Frontend-Praxis.',
      'modal.calc': 'Ein Taschenrechner mit HTML, CSS und JavaScript zur Übung meiner JavaScript-Kenntnisse.',
      'modal.portfolio': 'Eine Portfolio-Webseite mit HTML und CSS zur Präsentation meiner Designfähigkeiten.',
      'modal.pizza': 'Webbasierte Bestell- und Auftragsverwaltung in PHP nach MVC. Datenbankdesign (MySQL) für Bestellungen und Artikel, verschiedene Rollen (Kunde, Bäcker, Fahrer), Live-Status, responsive Layout, REST-artige API, Barrierefreiheit.',
      'modal.backend': 'PostgreSQL-Datenbank für Order-Management, Containerisierung mit Docker, Deployment auf Kubernetes, CI/CD mit GitLab, SonarQube, Integrationstests (Pytest, Tavern), Graylog-Logging.',
      'modal.quietspace': 'Flutter-App zur schnellen Suche von Lernorten auf dem Campus. Kartenintegration, Standorterkennung, Filterfunktionen, responsives UI/UX, plattformübergreifend.',
      'modal.nav': 'Entwicklung eines Navigationssystems in C++ mit Qt-GUI. Kartenverwaltung, Standorterstellung, interaktive Kartendarstellung, Entfernungsberechnung (Haversine), Routenplanung (Dijkstra), Unit-Tests.',

      'contact.tag': '05. Kontakt',
      'contact.title': 'Kontakt aufnehmen',
      'contact.text': 'Ich bin offen für neue Möglichkeiten und Zusammenarbeit. Melden Sie sich gerne!',
      'contact.cta': 'E-Mail senden',

      'footer.design': 'Design & Entwicklung von Cyril',
      'a11y.skip': 'Zum Inhalt springen'
   },
   en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.education': 'Education',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',

      'hero.label': 'Computer Science Student',
      'hero.desc': 'Passionate about new technologies and software development. Currently studying at Darmstadt University of Applied Sciences with focus on IT Security & Web Development.',
      'hero.cta': 'Learn more',
      'hero.contact': 'Get in touch',

      'about.tag': '01. About',
      'about.title': 'About Me',
      'about.text': 'I am a Computer Science student at Darmstadt University of Applied Sciences and enjoy building practical applications – from backend to web interfaces. I am particularly interested in clean APIs, databases, deployment and machine learning applications. I work reliably, learn quickly and feel at home in a team. I enjoy exploring new technologies and expanding my skills.',
      'about.name': 'Cyril Silapa Nenguem',
      'about.lang1': 'C1 · TestDaF',
      'about.lang2': 'Good',
      'about.lang3': 'Native',
      'about.cv': 'Download CV',
      'about.hobbies': 'Piano · Reading · Music · Programming',

      'edu.tag': '02. Education',
      'edu.title': 'Education & Training',
      'edu.date1': 'Oct 2023 – Present',
      'edu.intro': 'I am studying Computer Science with a focus on software development, system architecture and IT security. The programme combines theoretical foundations with hands-on projects.',
      'edu.focus1': 'Information Systems: Design, usage and integration of enterprise applications',
      'edu.focus2': 'Internet Business: Digital business models, e-commerce, web technologies',
      'edu.focus3': 'IT Security: Trusted systems, cryptography, web and network security, PKI, malware analysis',
      'edu.focus4': 'Practical projects: Web applications (PHP, MySQL), backend services (Docker, Kubernetes, CI/CD), mobile apps (Flutter), C++/Qt systems',
      'edu.ongoing': 'Ongoing self-paced learning',
      'edu.date2': 'Apr 2023 – Present',
      'edu.desc': 'Driven by my passion for tech, I continuously acquire new skills and deliver personal as well as professional projects.',

      'exp.tag': '02b. Experience',
      'exp.title': 'Professional Experience',
      'exp.date1': 'Aug–Oct 2025',
      'exp.date2': 'Aug–Oct 2024',
      'exp.sanofi1': 'PBPK modelling: Updating drug models with new expression profiles',
      'exp.sanofi2': 'Parameter identification, model fitting, PK parameter analysis (Cmax, AUC)',
      'exp.sanofi3': 'Automated data processing & visualisation in R (RStudio, VS Code)',
      'exp.sanofi4': 'Simulations with PK-Sim and MoBi · Version control with Git',
      'exp.sanofi5': 'IT support and data management in an international environment.',

      'skills.tag': '03. Skills',
      'skills.title': 'Technical & Languages',
      'skills.tech': 'Technologies',
      'skills.langs': 'Languages',
      'skills.tools': 'Tools',

      'portfolio.tag': '04. Portfolio',
      'portfolio.title': 'Selected Projects',
      'portfolio.university': 'University & Professional',
      'portfolio.personal': 'Personal Projects',
      'portfolio.view': 'View',

      'modal.cascade': 'A simple website built with HTML and CSS to develop my design skills.',
      'modal.todo': 'A todo list app built with HTML, CSS and JavaScript to practice frontend development.',
      'modal.calc': 'A calculator app built with HTML, CSS and JavaScript to practice my JavaScript skills.',
      'modal.portfolio': 'A portfolio website built with HTML and CSS to showcase my design abilities.',
      'modal.pizza': 'Web-based order and task management in PHP using MVC. MySQL database design, role-based views (customer, baker, driver), live status, responsive layout, REST-like API, accessibility.',
      'modal.backend': 'PostgreSQL database for order management, Docker containerisation, Kubernetes deployment, GitLab CI/CD, SonarQube, integration tests (Pytest, Tavern), Graylog logging.',
      'modal.quietspace': 'Flutter app for quickly finding study spots on campus. Map integration, location detection, filters, responsive UI/UX, cross-platform.',
      'modal.nav': 'Navigation system in C++ with Qt GUI. Map management, location creation, interactive display, Haversine distance calculation, Dijkstra routing, unit tests.',

      'contact.tag': '05. Contact',
      'contact.title': 'Get In Touch',
      'contact.text': "I'm open to new opportunities and collaborations. Feel free to reach out!",
      'contact.cta': 'Send Email',

      'footer.design': 'Design & Development by Cyril',
      'a11y.skip': 'Skip to content'
   }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'de';

function applyTranslations() {
   document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang] && translations[currentLang][key]) {
         el.textContent = translations[currentLang][key];
      }
   });
}

function setLang(lang) {
   if (!translations[lang]) return;
   currentLang = lang;
   localStorage.setItem('portfolio-lang', lang);
   document.documentElement.lang = lang === 'de' ? 'de' : 'en';
   document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
   });
   applyTranslations();
}

document.addEventListener('DOMContentLoaded', () => {
   applyTranslations();
   document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
   });
});
