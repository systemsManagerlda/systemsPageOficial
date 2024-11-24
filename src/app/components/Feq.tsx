import { Accordion, AccordionItem } from "@nextui-org/react";

export const FEQ = () => {
  const defaultContent =
    "Para aderir o Sistema de Gestão Empresarial ERP e de Facturação, você precisa contactar-nos através dos meios descritos nos Contactos e/ou nas nossas redes sociais.";
  const defaultContent2 =
    "Sim, é possível usar o nosso Sistema de Gestão Empresaarial ERP e de Facturação à distância, desde que o usuário o tenha instalado no seu dispositivo, independentemente de onde se encontre pode acedê-lo.";
  const defaultContent3 =
    "Sim, é necessária a conexão à internet para aceder ao sistema, porém a mesma é necessária para efeitos de login, actualização ou mudança de informações dentro do mesmo e que o seu consumo é extremamente baixo.";
  const defaultContent4 =
    "O sistema está habilitado para o uso em vários dispositivos simultaneamente.";
  const defaultContent5 =
    "Sim, o sistema está dividido em pacotes que variam no preço em função dos serviços nele contidos, por sua vez, o usuário faz a escolha do pacote que pretende contratar.";
  const defaultContent6 =
    "SO lançamento dos produtos do stock é feito através das plataformas desktop assim como mobile, bastando para tal preencher um formulário que lhe é apresentado.";

  return (
    <>
      <div className="container mx-auto mt-24">
        <div className="font-serif font-bold text-3xl text-blue-500 text-center py-8">
          <p>Perguntas Frequentes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Accordion isCompact>
              <AccordionItem
                key="1"
                aria-label="Como faço para aderir o sistema?"
                title="Como faço para aderir o sistema?"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="É possivel fazer uso do sistema a distância?"
                title="É possivel fazer uso do sistema a distância?"
              >
                {defaultContent2}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="É necessário o uso de internet?"
                title="É necessário o uso de internet?"
              >
                {defaultContent3}
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion isCompact>
              <AccordionItem
                key="4"
                aria-label="Em quantos dispositivos é possivel usar o sistema?"
                title="Em quantos dispositivos é possivel usar o sistema?"
              >
                {defaultContent4}
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="É possivel fazer uso do sistema a distância?"
                title="É possivel fazer uso do sistema a distância?"
              >
                {defaultContent5}
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="Como poderei fazer o lançamento dos produtos no meu stock?"
                title="Como poderei fazer o lançamento dos produtos no meu stock?"
              >
                {defaultContent6}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
