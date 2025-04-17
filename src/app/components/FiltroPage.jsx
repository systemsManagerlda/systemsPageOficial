"use client";

import { createContext, useState, useContext } from "react";

const FiltroContext = createContext(); // Criando o contexto

export function FiltroProvider({ children }) {
  const [filtroText, setFiltroText] = useState("");

  return (
    <FiltroContext.Provider value={{ filtroText, setFiltroText }}>
      {children}
    </FiltroContext.Provider>
  );
}

// Criando um Hook para facilitar o uso do contexto
export function useFiltro() {
  const context = useContext(FiltroContext);
  if (!context) {
    throw new Error("useFiltro deve ser usado dentro de um FiltroProvider");
  }
  return context;
}