"use client";
import { cn } from "../../../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const images = [
    {
      img: "/img/FacturaçãoAduaneira.jpg",
      title: "Facturação Aduaneira",
      subTitle:
        "Um sistema especializado para a emissão de facturas e documentação aduaneira necessária no comércio internacional.",
    },
    {
      img: "/img/FacturaçãoAgua.jpg",
      title: "Facturação Agua",
      subTitle:
        "Solução para empresas de fornecimento de água, permitindo: Emissão de facturas com base no consumo registrado, Gestão de pagamentos e dívidas e muito mais...",
    },
    {
      img: "/img/FolhaSalario.jpg",
      title: "Folha de Salário",
      subTitle:
        "Um sistema robusto para gestão de salários, que inclui: Cálculo de vencimentos, deduções e impostos.",
    },
    {
      img: "/img/POS.jpg",
      title: "Fornecimento de POS",
      subTitle:
        "Disponibilizamos terminais de venda para diferentes tipos de negócios.",
    },
    {
      img: "/img/RestaurantesBares.jpg",
      title: "Restaurantes e Bares",
      subTitle:
        "Um sistema projetado para a gestão eficiente de negócios nos sectores de Restaurantes e Bares, com funcionalidades como: Controle de reservas e ocupação de mesas, Gestão de pedidos, desde o recebimento até a entrega.",
    },
    {
      img: "/img/Sistema de Presenças.jpg",
      title: "Sistema de Presenças",
      subTitle:
        "Uma solução para rastrear e gerenciar a presença de funcionários: Registro de entrada e saída com biometria, cartões magnéticos e mobile.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.img;
        img.onload = () => resolve(image.img);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && (
        <>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
            key={currentIndex}
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              {images[currentIndex].title}
            </motion.p>
            <motion.p className="font-bold md:w-1/2 text-sm md:text-xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              {images[currentIndex].subTitle}
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Solicitar →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
            </button>
          </motion.div>
        </>
      )}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};
