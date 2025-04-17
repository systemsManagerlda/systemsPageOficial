"use client";

import { NextUIProvider } from "@nextui-org/react"; // Para usar o NextUI, se necessário
import { Footer } from "./Footer"; // Componente de rodapé (opcional)
import { HeaderPageCursos } from "./HeaderCursos"; // Componente do cabeçalho
import Sidebar from "./SidebarCursos"; // Componente da barra lateral
import React, { useState, useEffect } from "react";


export default function LayoutPage({ children }) {
  
  return (
      <NextUIProvider>
        <div className="flex flex-col min-h-screen bg-background dark:text-foreground">
          {/* Cabeçalho */}
          <HeaderPageCursos />
          {/* Corpo com Sidebar */}
          <div className="flex flex-1">
            {/* Sidebar */}
            <aside className="w-44 bg-blue-500/5 text-white h-screen fixed">
              <Sidebar />
            </aside>

            {/* Conteúdo Principal */}
            <main className="flex-1 ml-4 p-6">
              {children}{" "}
              {/* Aqui é onde o conteúdo dinâmico de cada página será renderizado */}
            </main>
          </div>
          {/* Rodapé */}
          <Footer />{" "}
          {/* Você pode incluir ou remover o Footer conforme necessário */}
        </div>
      </NextUIProvider>
  );
}
