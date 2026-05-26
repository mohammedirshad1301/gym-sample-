@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Outfit", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

/* Custom global styles for the cinematic dark-mode scrollbars & focus accents */
html {
  scroll-behavior: smooth;
  background-color: #09090b;
}

::selection {
  background-color: #ef4444;
  color: #ffffff;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #09090b;
}

::-webkit-scrollbar-thumb {
  background: #1f2937;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ef4444;
}
