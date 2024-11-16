export interface LanguageData {
  title: string;
  subtitle: string;
  description: string;
  button: string;
  testLuck: string;
  locationUnavailable: string;
  loading: string;
  invalidCode: string;
  languageName: string;
  greeting: string;
}

const languages: { [key: string]: LanguageData } = {
  en: {
    title: "Fleur's Codebase",
    subtitle: "Enter Access Code",
    description: "Please, enter the Access Code",
    button: "Submit Code",
    testLuck: "Test your luck!",
    locationUnavailable: "Location unavailable",
    loading: "Loading...",
    invalidCode: "Invalid code. Please try again.",
    languageName: "English",
    greeting: "Hello, kind stranger from {location}",
  },
  es: {
    title: "Base de Códigos de Fleur",
    subtitle: "Ingrese el Código de Acceso",
    description: "Por favor, ingrese el Código de Acceso",
    button: "Enviar Código",
    testLuck: "¡Prueba tu suerte!",
    locationUnavailable: "Ubicación no disponible",
    loading: "Cargando...",
    invalidCode: "Código inválido. Por favor, intente de nuevo.",
    languageName: "Español",
    greeting: "Hola, amable desconocido de {location}",
  },
  fr: {
    title: "Base de Code de Fleur",
    subtitle: "Entrez le Code d'Accès",
    description: "Veuillez entrer votre Code d'Accès",
    button: "Soumettre le Code",
    testLuck: "Tentez votre chance !",
    locationUnavailable: "Localisation indisponible",
    loading: "Chargement...",
    invalidCode: "Code invalide. Veuillez réessayer.",
    languageName: "Français",
    greeting: "Bonjour, gentil étranger de {location}",
  },
  it: {
    title: "Codebase di Fleur",
    subtitle: "Inserisci il Codice di Accesso",
    description: "Per favore, inserisci il Codice di Accesso",
    button: "Invia il Codice",
    testLuck: "Prova la tua fortuna!",
    locationUnavailable: "Posizione non disponibile",
    loading: "Caricamento...",
    invalidCode: "Codice non valido. Per favore, riprova.",
    languageName: "Italiano",
    greeting: "Ciao, gentile sconosciuto di {location}",
  },
  de: {
    title: "Codebasis von Fleur",
    subtitle: "Geben Sie Ihren persönlichen Zugangscode ein",
    description: "Bitte geben Sie Ihren persönlichen Zugangscode ein",
    button: "Code senden",
    testLuck: "Versuchen Sie Ihr Glück!",
    locationUnavailable: "Standort nicht verfügbar",
    loading: "Laden...",
    invalidCode: "Ungültiger Code. Bitte versuchen Sie es erneut.",
    languageName: "Deutsch",
    greeting: "Hallo, freundlicher Fremder aus {location}",
},
  nl: {
    title: "Codebasis van Fleur",
    subtitle: "Voer de toegangscode in",
    description: "Voer de toegangscode in aub.",
    button: "Code verzenden",
    testLuck: "Probeer je geluk!",
    locationUnavailable: "Locatie niet beschikbaar",
    loading: "Laden...",
    invalidCode: "Ongeldige code. Probeer het opnieuw.",
    languageName: "Nederlands",
    greeting: "Hallo, vriendelijke vreemdeling uit {location}",
  },
  pt: {
    title: "Base de Código de Fleur",
    subtitle: "Digite o Código de Acesso",
    description: "Por favor, digite o Código de Acesso",
    button: "Enviar Código",
    testLuck: "Tente sua sorte!",
    locationUnavailable: "Localização indisponível",
    loading: "Carregando...",
    invalidCode: "Código inválido. Por favor, tente novamente.",
    languageName: "Português",
    greeting: "Olá, amável desconhecido de {location}",
  }
};

export default languages;