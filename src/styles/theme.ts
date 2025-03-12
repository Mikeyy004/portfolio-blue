export const theme = {
  colors: {
    primary: "#1e90ff", // Dodger Blue
    primaryDark: "#1c86ee", // Dodger Blue Dark
    primaryLight: "#63b8ff", // Light Blue
    accent: "#4682b4", // Steel Blue
    background: "#000000",
    foreground: "#ffffff",
    overlay: "rgba(0, 0, 0, 0.7)",
    overlayLight: "rgba(0, 0, 0, 0.5)",
    overlayDark: "rgba(0, 0, 0, 0.8)",
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.9)",
      tertiary: "rgba(255, 255, 255, 0.7)",
    },
    border: {
      light: "rgba(255, 255, 255, 0.1)",
      medium: "rgba(255, 255, 255, 0.2)",
    },
  },
  gradients: {
    primary: "linear-gradient(to right, #1e90ff, #63b8ff)", // Cool calm blue gradient
    text: "linear-gradient(to right, #1e90ff, #4682b4)", // Cool calm blue gradient for text
  },
  shadows: {
    primary: "0 4px 20px rgba(30, 144, 255, 0.3)",
    glow: "0 0 10px rgba(30, 144, 255, 0.5), 0 0 20px rgba(30, 144, 255, 0.3), 0 0 30px rgba(30, 144, 255, 0.1)",
    textGlow: "0 0 10px rgba(30, 144, 255, 0.5), 0 0 20px rgba(30, 144, 255, 0.3)",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  transitions: {
    default: "0.3s ease",
    slow: "0.5s ease",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "2rem",
    full: "9999px",
  },
}

export type Theme = typeof theme

