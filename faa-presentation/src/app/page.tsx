import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { PresentationApp } from "@/components/PresentationApp";

export default function Home() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <PresentationApp />
      </ThemeProvider>
    </LanguageProvider>
  );
}
