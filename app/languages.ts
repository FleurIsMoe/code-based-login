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
}

const languages: { [key: string]: LanguageData } = {
  en: {
    title: "Fleur's Codebase",
    subtitle: "Enter Access Code",
    description: "Please enter your unique access code",
    button: "Submit Code",
    testLuck: "Test your luck!",
    locationUnavailable: "Location unavailable",
    loading: "Loading...",
    invalidCode: "Invalid code. Please try again.",
    languageName: "English"
  },
  es: {
    title: "Base de Códigos de Fleur",
    subtitle: "Ingrese el Código de Acceso",
    description: "Por favor, ingrese su código de acceso único",
    button: "Enviar Código",
    testLuck: "¡Prueba tu suerte!",
    locationUnavailable: "Ubicación no disponible",
    loading: "Cargando...",
    invalidCode: "Código inválido. Por favor, intente de nuevo.",
    languageName: "Español"
  },
  fr: {
    title: "Base de Code de Fleur",
    subtitle: "Entrez le Code d'Accès",
    description: "Veuillez entrer votre code d'accès unique",
    button: "Soumettre le Code",
    testLuck: "Tentez votre chance !",
    locationUnavailable: "Localisation indisponible",
    loading: "Chargement...",
    invalidCode: "Code invalide. Veuillez réessayer.",
    languageName: "Français"
  }
};

export default languages;