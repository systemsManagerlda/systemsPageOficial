import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "O Plano Prémio Máximo é a solução definitiva para empresas de grande porte que exigem uma gestão empresarial completa, com foco em eficiência operacional, atendimento ao cliente de alto nível e conformidade com o comércio internacional. Este plano reúne todas as funcionalidades do Plano Clássico Máximo, adicionando ferramentas avançadas para gestão de reclamações, devoluções e faturação aduaneira completa, oferecendo um controle total sobre todas as áreas da empresa.",
      name: "Plano Prémio Máximo",
      designation: "Software de Gestão Empresarial ERP e de Facturação",
      caracteristicas: "Recursos Exclusivos do Plano Prémio Máximo",
      src: "/planos/Plano Prémio Máximo.jpg",
      listItem1:
        "Gestão de Reclamações: Registo, acompanhamento e resolução de reclamações de clientes.",
      listItem2:
        "Gestão de Devoluções: Processos completos para autorizar, registrar e monitorar devoluções.",
      listItem3:
        "Faturação Aduaneira Completa: Emissão de documentos fiscais para exportação e importação; Cálculo automatizado de taxas e impostos aduaneiros; Conformidade total com as exigências legais de comércio internacional.",
    },
    {
      quote:
        "O Plano Prémio Médio é uma solução avançada para empresas de pequeno a médio porte que precisam de uma gestão empresarial robusta, com funcionalidades de atendimento ao cliente e comércio internacional. Este plano combina todas as funcionalidades do Plano Clássico Médio com recursos adicionais para gestão de reclamações, devoluções e faturação aduaneira completa, proporcionando maior controle e eficiência nas operações.",
      name: "Plano Prémio Médio",
      designation: "Software de Gestão Empresarial ERP e de Facturação",
      caracteristicas: "Recursos Exclusivos do Plano Prémio Médio",
      src: "/planos/Plano Prémio Mádio.jpg",
      listItem1:
        "Gestão de Reclamações: Registo, acompanhamento e resolução de reclamações de clientes.",
      listItem2:
        "Gestão de Devoluções: Processos completos para autorizar, registrar e monitorar devoluções.",
      listItem3:
        "Faturação Aduaneira Completa: Emissão de documentos fiscais para exportação e importação; Cálculo automatizado de taxas e impostos aduaneiros; Conformidade total com as exigências legais de comércio internacional.",
    },
    {
      quote:
        "O Plano Prémio Mini é uma solução aprimorada para pequenas empresas que buscam excelência na gestão empresarial. Este plano combina todas as funcionalidades do Plano Clássico Mini com recursos adicionais para lidar com reclamações, devoluções e faturação aduaneira completa, atendendo a demandas mais complexas de mercado.",
      name: "Plano Prémio Mini",
      designation: "Software de Gestão Empresarial ERP e de Facturação",
      caracteristicas: "Recursos Exclusivos do Plano Prémio Mini",
      src: "/planos/Plano Prémio Mini.jpg",
      listItem1:
        "Gestão de Reclamações: Registo, acompanhamento e resolução de reclamações de clientes.",
      listItem2:
        "Gestão de Devoluções: Processos completos para autorizar, registrar e monitorar devoluções.",
      listItem3:
        "Faturação Aduaneira Completa: Emissão de documentos fiscais para exportação e importação; Cálculo automatizado de taxas e impostos aduaneiros; Conformidade total com as exigências legais de comércio internacional.",
    },
    {
      quote:
        "O Plano Clássico Máximo é a solução definitiva para empresas de médio a grande porte que precisam de uma gestão empresarial completa com integração contábil avançada. Este plano reúne todas as funcionalidades do Plano Básico Máximo, adicionando ferramentas contábeis robustas para controle financeiro, conformidade fiscal e tomada de decisões estratégicas.",
      name: "Plano Clássico Máximo",
      designation: "Software de Gestão Empresarial ERP e de Facturação",
      caracteristicas:
        "Recurso Exclusivo do Plano Clássico Máximo (Contabilidade)",
      src: "/planos/Plano Clássico Máximo.jpg",
      listItem1: "Controle de contas a pagar e a receber.",
      listItem2:
        "Relatórios contábeis detalhados, como balancetes e demonstrações financeiras.",
      listItem3:
        "Suporte à conformidade fiscal com geração de relatórios exigidos por órgãos reguladores.",
    },
    {
      quote:
        "O Plano Clássico Médio é a escolha ideal para empresas de pequeno a médio porte que desejam uma gestão empresarial completa, com integração contábil avançada. Este plano inclui todas as funcionalidades do Plano Básico Médio, adicionando ferramentas contábeis que garantem controle financeiro preciso e conformidade fiscal.",
      name: "Plano Clássico Médio",
      designation: "Software de Gestão Empresarial ERP e de Facturação",
      caracteristicas:
        "Recurso Exclusivo do Plano Clássico Médio (Contabilidade)",
      src: "/planos/Plano Clássico Médio.jpg",
      listItem1: "Controle de contas a pagar e a receber.",
      listItem2:
        "Relatórios contábeis detalhados, como balancetes e demonstrações financeiras.",
      listItem3:
        "Suporte à conformidade fiscal com geração de relatórios exigidos por órgãos reguladores.",
    },
    {
      quote:
        "O Plano Clássico Mini é a solução aprimorada para pequenas empresas que desejam expandir o alcance de sua gestão com ferramentas integradas de contabilidade. Com todas as funcionalidades do Plano Básico Mini, este plano oferece suporte adicional para o controle financeiro e a conformidade fiscal, tornando-o ideal para negócios que buscam um gerenciamento mais completo e profissional.",
      name: "Plano Clássico Mini",
      designation: "Software de Gestão Empresarial ERP e de Facturação",
      caracteristicas:
        "Recurso Exclusivo do Plano Clássico Mini (Contabilidade)",
      src: "/planos/Plano Clássico Mini.jpg",
      listItem1: "Controle de contas a pagar e a receber.",
      listItem2:
        "Relatórios contábeis detalhados, como balancetes e demonstrações financeiras.",
      listItem3:
        "Suporte à conformidade fiscal com geração de relatórios exigidos por órgãos reguladores.",
    },
    {
      quote:
        "O Plano Básico Máximo é a solução definitiva para empresas de médio a grande porte que necessitam de um software ERP e de faturação robusto e com funcionalidades avançadas. Este plano combina todas as características do Plano Simples Máximo com ferramentas adicionais para uma gestão completa e estratégica, abrangendo desde o controle de operações até a gestão de pessoas e relacionamento com clientes.",
      name: "Plano Básico Máximo",
      designation: "Software de Gestão Empresarial ERP e de Facturação",
      caracteristicas: "Características Principais",
      src: "/planos/Plano Básico Máximo.jpg",
      listItem1:
        "Recursos Humanos: Gestão de colaboradores e dados de funcionários.",
      listItem2:
        "Sistema de Controle de Presenças: Registro de entradas e saídas, permitindo acompanhar assiduidade e produtividade da equipa.",
      listItem3:
        "Geração de Folha de Salários: Processamento automático de folhas de pagamento, economizando tempo e reduzindo erros. Também estão inclusos neste plano a gestaão de clientes e controlo de logs",
    },
    {
      quote:
        "O Plano Básico Médio é a escolha perfeita para empresas de pequeno a médio porte que desejam um software de gestão empresarial ERP e de faturação com funcionalidades completas e integração avançada. Este plano combina todas as características do Plano Simples Médio com ferramentas adicionais que otimizam a gestão de pessoas, processos e relacionamento com clientes.",
      name: "Plano Básico Médio",
      designation: "Software de Gestão Empresarial ERP e de Facturação",
      caracteristicas: "Recursos Adicionais Exclusivos do Plano Básico Médio",
      src: "/planos/Plano Básico Médio.jpg",
      listItem1:
        "Recursos Humanos: Gestão de colaboradores e dados de funcionários.",
      listItem2:
        "Sistema de Controle de Presenças: Registro de entradas e saídas, permitindo acompanhar assiduidade e produtividade da equipa.",
      listItem3:
        "Geração de Folha de Salários: Processamento automático de folhas de pagamento, economizando tempo e reduzindo erros. Também estão inclusos neste plano a gestaão de clientes e controlo de logs",
    },
    {
      quote:
        "O Plano Básico Mini é uma evolução do Plano Simples Mini, ideal para pequenas empresas que, além de gerenciar estoque e faturação, desejam integrar funcionalidades avançadas para uma gestão mais abrangente. Este plano combina simplicidade com recursos adicionais que proporcionam maior controle e organização operacional.",
      name: "Plano Básico Mini",
      designation: "Software de Gestão Empresarial ERP e de Facturação",
      caracteristicas: "Recursos Adicionais Exclusivos do Plano Básico Mini",
      src: "/planos/Plano Básico Mini.jpg",
      listItem1:
        "Recursos Humanos: Gestão de colaboradores e dados de funcionários.",
      listItem2:
        "Sistema de Controle de Presenças: Registro de entradas e saídas, permitindo acompanhar assiduidade e produtividade da equipa.",
      listItem3:
        "Geração de Folha de Salários: Processamento automático de folhas de pagamento, economizando tempo e reduzindo erros. Também estão inclusos neste plano a gestaão de clientes e controlo de logs",
    },
    {
      quote:
        "O Plano Simples Máximo é a solução completa para empresas que necessitam de alta capacidade de gestão e flexibilidade total. Desenvolvido para atender às demandas de negócios de médio a grande porte, este plano oferece recursos robustos para gerenciar operações complexas, garantindo escalabilidade e eficiência.",
      name: "Plano Simples Máximo",
      designation: "Software de Gestão Empresarial ERP e de Facturação",
      caracteristicas: "Características Principais",
      src: "/planos/Plano Simples Máximo.jpg",
      listItem1:
        "Produtos no Estoque: Suporte para mais de 500 produtos cadastrados, perfeito para empresas com um portfólio extenso e operações de alto volume.",
      listItem2:
        "Usuários Ilimitados: Permite a colaboração de equipes de qualquer tamanho, sem restrições no número de acessos simultâneos.",
      listItem3:
        "Funcionalidades Avançadas: Inclui gestão de vendas, compras, estoque, faturação, múltiplos pontos de venda, relatórios analíticos personalizados, integração com sistemas externos e suporte para módulos adicionais conforme a necessidade.",
    },
    {
      quote:
        "O Plano Simples Médio é a escolha ideal para empresas de porte pequeno a médio que buscam um software de gestão empresarial ERP e de faturação com recursos mais amplos e flexíveis. Este plano foi desenvolvido para atender a negócios em expansão, que demandam maior capacidade de controle e colaboração entre sua equipa.",
      name: "Plano Simples Médio",
      designation: "Software de Gestão Empresarial ERP e de Facturação",
      caracteristicas: "Características Principais",
      src: "/planos/Plano Simples Médio.jpg",
      listItem1:
        "Limite de Produtos no Estoque: Até 500 produtos cadastrados, garantindo o gerenciamento eficaz de um estoque mais diversificado.",
      listItem2:
        "Usuários Permitidos: Suporte para até 9 usuários simultâneos, promovendo colaboração e organização entre diferentes departamentos ou funções.",
      listItem3:
        "Funcionalidades Ampliadas: Gestão de vendas, compras, estoque, emissão de facturas, relatórios detalhados e suporte a múltiplos pontos de venda.",
    },
    {
      quote:
        "O Plano Simples Mini é a solução ideal para pequenas empresas que buscam um software de gestão empresarial ERP e de faturação eficiente, acessível e de fácil utilização. Este plano foi especialmente concebido para atender às necessidades de negócios em fase inicial ou com operações de menor escala.",
      name: "Plano Simples Mini",
      designation: "Software de Gestão Empresarial ERP e de Facturação",
      caracteristicas: "Características Principais",
      src: "/planos/Plano Simples Mini.jpg",
      listItem1:
        "Limite de Produtos no Estoque: Até 250 produtos cadastrados, ideal para controlar um estoque compacto com eficiência.",
      listItem2:
        "Usuários Permitidos: Suporte para até 3 usuários, perfeito para equipes reduzidas ou empreendedores que gerenciam suas operações em conjunto com um pequeno grupo de colaboradores.",
      listItem3:
        "Funcionalidades Essenciais: Gestão de vendas, controle de estoque, emissão de cotações, facturas, recibos, notas, guias e relatórios.",
    },
  ];
  return (
    <>
      <div className="font-serif font-bold text-3xl text-blue-500 text-center mt-24">
        <p>Planos e Pacotes</p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
}
