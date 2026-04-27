"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt'); // Default, though we'll force selection

  // Basic translation dictionary for the app UI (content itself handles its own translations)
  const translations = {
    en: {
      "start": "Start Experience",
      "choose_language": "Select your language",
      "auto_mode": "Auto Mode",
      "manual_mode": "Manual Mode",
      "pause": "Pause",
      "play": "Play",
      "restart": "Restart",
      "schedule_meeting": "Schedule Meeting",
      "download_proposal": "Download Proposal",
      "students": "Students",
      "revenue": "Revenue",
      "cost": "Cost",
      "profit": "Profit",
      "break_even": "Break Even Point"
    },
    es: {
      "start": "Comenzar Experiencia",
      "choose_language": "Selecciona tu idioma",
      "auto_mode": "Modo Automático",
      "manual_mode": "Modo Manual",
      "pause": "Pausar",
      "play": "Reproducir",
      "restart": "Reiniciar",
      "schedule_meeting": "Agendar Reunión",
      "download_proposal": "Descargar Propuesta",
      "students": "Estudiantes",
      "revenue": "Ingresos",
      "cost": "Costo",
      "profit": "Ganancia",
      "break_even": "Punto de Equilibrio"
    },
    pt: {
      "start": "Começar Experiência",
      "choose_language": "Selecione seu idioma",
      "auto_mode": "Modo Automático",
      "manual_mode": "Modo Manual",
      "pause": "Pausar",
      "play": "Reproduzir",
      "restart": "Reiniciar",
      "schedule_meeting": "Agendar Conversa",
      "download_proposal": "Baixar Proposta",
      "students": "Alunos",
      "revenue": "Receita",
      "cost": "Custo",
      "profit": "Resultado",
      "break_even": "Ponto de Equilíbrio"
    }
  };

  const t = (key: string): string => {
    // @ts-expect-error Accessing translations dynamically
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
