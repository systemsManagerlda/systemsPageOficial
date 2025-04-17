import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="container mx-auto px-8 mt-24">
      <div className="font-serif font-bold text-3xl text-blue-500 text-center">
        <p>Nossos Serviços</p>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Gestão Empresarial",
    description:
      "Soluções completas para otimizar os processos internos de empresas, que incluem:",
    link: "#",
    listItem1:
      "Implementação de sistemas ERP (Enterprise Resource Planning) para integrar áreas como vendas, estoque, finanças e recursos humanos.",
    listItem2:
      "Consultoria para melhorar fluxos de trabalho e reduzir custos operacionais.",
    listItem3:
      "Suporte na análise de dados para tomada de decisões estratégicas.",
    listItem4:
      "Personalização de ferramentas para atender às necessidades específicas de cada cliente.",
  },
  {
    title: "Desenvolvimento de Softwares",
    description:
      "Criação de sistemas personalizados e modernos para empresas e organizações:",
    link: "#",
    listItem1: "Desenvolvimento de aplicações web, desktop e mobile.",
    listItem2: "Integração com sistemas existentes e APIs.",
    listItem3: "Foco em segurança, desempenho e facilidade de uso.",
    listItem4:
      "Suporte pós-lançamento e atualizações regulares para melhorias contínuas.",
  },
  {
    title: "Design Gráfico",
    description:
      "Serviços criativos para transmitir a identidade visual de marcas de forma eficaz:",
    link: "#",
    listItem1: "Criação de logotipos, banners e materiais promocionais.",
    listItem2:
      "Desenvolvimento de layouts para websites, aplicativos e apresentações.",
    listItem3:
      "Produção de conteúdos visuais para campanhas publicitárias e redes sociais.",
    listItem4: "Consultoria em branding para fortalecer a imagem da marca.",
  },
  {
    title: "Auditoria de Sistemas de Informação",
    description:
      "Avaliação e validação de sistemas para garantir eficiência e segurança:",
    link: "#",
    listItem1: "Identificação de vulnerabilidades em sistemas e redes.",
    listItem2:
      "Revisão de processos de TI para garantir conformidade com regulamentações.",
    listItem3: "Relatórios detalhados com recomendações de melhorias.",
    listItem4: "Monitoramento e suporte para implementação de mudanças.",
  },
  {
    title: "Manutenção de Sistemas Informáticos",
    description:
      "Serviços para garantir o funcionamento ininterrupto de infraestruturas de TI:",
    link: "#",
    listItem1: "Atualizações de software e hardware.",
    listItem2: "Diagnóstico e resolução de falhas técnicas.",
    listItem3: "Backup e recuperação de dados em caso de falhas.",
    listItem4:
      "Suporte técnico remoto e presencial para atendimento rápido e eficiente.",
  },
  {
    title: "Formações e Capacitações",
    description:
      "Treinamentos personalizados para desenvolver competências em tecnologia e gestão:",
    link: "#",
    listItem1:
      "Cursos práticos em software de gestão, programação, e ferramentas de design.",
    listItem2:
      "Workshops em segurança da informação e gestão de projetos de TI.",
    listItem3: "Certificações reconhecidas internacionalmente.",
    listItem4:
      "Treinamentos personalizados para atender às demandas específicas de cada organização.",
  },
];
