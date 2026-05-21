import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import webLogo from "./assets/web-logo.png";
import "./index.css";

function setFavicon(href: string) {
  const links = document.querySelectorAll<HTMLLinkElement>(
    'link[rel="icon"], link[rel="apple-touch-icon"]',
  );
  if (links.length === 0) {
    const icon = document.createElement("link");
    icon.rel = "icon";
    icon.type = "image/png";
    icon.href = href;
    document.head.appendChild(icon);

    const apple = document.createElement("link");
    apple.rel = "apple-touch-icon";
    apple.href = href;
    document.head.appendChild(apple);
    return;
  }
  links.forEach((link) => {
    link.type = "image/png";
    link.href = href;
  });
}

setFavicon(webLogo);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
