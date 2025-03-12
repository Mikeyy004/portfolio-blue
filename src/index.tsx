import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"
import App from "./App"
import { GlobalStyles } from "./styles/GlobalStyles"
import { theme } from "./styles/theme"

// Make sure we have a valid root element
const rootElement = document.getElementById("root")
if (!rootElement) {
  throw new Error("Failed to find the root element")
}

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

