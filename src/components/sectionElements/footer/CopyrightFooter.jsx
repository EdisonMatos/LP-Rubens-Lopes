import content from "../../../content/content";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { X, MapPin, Phone, Mail } from "lucide-react";

function CopyrightFooter() {
  const [visible, setVisible] = useState(false);

  const openDialog = async () => {
    await import("primereact/resources/themes/lara-light-cyan/theme.css");
    setVisible(true);
  };

  return (
    <div className={` text-center font-secondFont text-sm`}>
      <p>&copy; 2026 - Rubens Lopes Advocacia - Todos os direitos reservados</p>
      <br />
      <div>
        <button
          onClick={openDialog}
          aria-label="Abre um Modal com os termos da Política de privacidade"
          className="underline cursor-pointer"
        >
          Políticas de privacidade
        </button>{" "}
        - Desenvolvido com excelência por{" "}
        <a
          target="_blank"
          href="https://paperstreet.com.br"
          className="underline"
        >
          Paper Street
        </a>
      </div>

      <p
        className={`font-secondFont text-paragraph2 desktop1:text-paragraph3 mt-4`}
      >
        Esse site não faz parte do Google LLC nem do Facebook Inc. e não
        oferecemos nenhum tipo de serviço oficial do governo.
      </p>

      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{
          "4000px": "641px",
          "1024px": "641px",
          "641px": "85vw",
        }}
      >
        <p>
          <div className="space-y-5 leading-relaxed text-left">
            {" "}
            <div>
              {" "}
              <h2 className="mb-2 text-2xl font-bold">
                Política de Privacidade
              </h2>{" "}
            </div>{" "}
            <section>
              {" "}
              <h3 className="mb-2 text-lg font-semibold">1. Introdução</h3>{" "}
              <p>
                {" "}
                Esta Política de Privacidade descreve como coletamos,
                utilizamos, armazenamos e protegemos as informações dos usuários
                ao utilizar nossos serviços, incluindo a integração com a API
                Oficial do WhatsApp (Meta Platforms, Inc.). Nosso compromisso é
                garantir transparência, segurança e conformidade com as
                políticas do Meta e com a legislação aplicável.{" "}
              </p>{" "}
              <p>
                {" "}
                Ao utilizar nosso site, sistemas ou canais de atendimento
                integrados ao WhatsApp, você concorda com os termos desta
                Política.{" "}
              </p>{" "}
            </section>{" "}
            <section>
              {" "}
              <h3 className="mb-2 text-lg font-semibold">
                2. Informações que coletamos
              </h3>{" "}
              <p>
                {" "}
                Podemos coletar os seguintes dados, de forma limitada e
                necessária para o funcionamento do serviço:{" "}
              </p>{" "}
              <ul className="pl-5 space-y-1 list-disc">
                {" "}
                <li>
                  Nome e número de telefone informados pelo próprio usuário;
                </li>{" "}
                <li>Mensagens enviadas e recebidas via WhatsApp;</li>{" "}
                <li>
                  Informações básicas de atendimento (data, hora e histórico de
                  conversas);
                </li>{" "}
                <li>
                  Dados técnicos relacionados ao uso do sistema (logs, status de
                  mensagens e eventos da API).
                </li>{" "}
              </ul>{" "}
              <p>
                {" "}
                Não coletamos dados sensíveis além do estritamente necessário
                para a prestação do serviço.{" "}
              </p>{" "}
            </section>{" "}
            <section>
              {" "}
              <h3 className="mb-2 text-lg font-semibold">
                3. Uso das informações
              </h3>{" "}
              <p>
                As informações coletadas são utilizadas exclusivamente para:
              </p>{" "}
              <ul className="pl-5 space-y-1 list-disc">
                {" "}
                <li>
                  Permitir a comunicação entre empresa e usuário via WhatsApp;
                </li>{" "}
                <li>
                  Operar, manter e melhorar nossos serviços de atendimento
                  automatizado e humano;
                </li>{" "}
                <li>
                  Cumprir obrigações legais, regulatórias e exigências da Meta;
                </li>{" "}
                <li>
                  Garantir segurança, prevenção a fraudes e uso indevido da
                  plataforma.
                </li>{" "}
              </ul>{" "}
              <p>
                {" "}
                Não utilizamos os dados para fins diferentes daqueles informados
                nesta Política.{" "}
              </p>{" "}
            </section>{" "}
            <section>
              {" "}
              <h3 className="mb-2 text-lg font-semibold">
                4. Compartilhamento de dados
              </h3>{" "}
              <p>
                Os dados poderão ser compartilhados apenas quando necessário
                com:
              </p>{" "}
              <ul className="pl-5 space-y-1 list-disc">
                {" "}
                <li>
                  Meta Platforms, Inc., para viabilizar o uso da API Oficial do
                  WhatsApp;
                </li>{" "}
                <li>
                  Provedores de infraestrutura tecnológica (servidores,
                  hospedagem e segurança);
                </li>{" "}
                <li>Autoridades legais, quando houver obrigação legal.</li>{" "}
              </ul>{" "}
              <p>
                {" "}
                Não vendemos, alugamos ou comercializamos dados pessoais dos
                usuários.{" "}
              </p>{" "}
            </section>{" "}
            <section>
              {" "}
              <h3 className="mb-2 text-lg font-semibold">
                5. Armazenamento e segurança
              </h3>{" "}
              <p>
                {" "}
                Adotamos medidas técnicas e organizacionais adequadas para
                proteger os dados contra acessos não autorizados, perda, uso
                indevido ou divulgação indevida.{" "}
              </p>{" "}
              <p>
                {" "}
                As informações são armazenadas apenas pelo tempo necessário para
                cumprir as finalidades descritas nesta Política, respeitando as
                diretrizes da Meta e a legislação vigente.{" "}
              </p>{" "}
            </section>{" "}
            <section>
              {" "}
              <h3 className="mb-2 text-lg font-semibold">
                6. Direitos dos usuários
              </h3>{" "}
              <p>O usuário pode, a qualquer momento:</p>{" "}
              <ul className="pl-5 space-y-1 list-disc">
                {" "}
                <li>Solicitar informações sobre o uso de seus dados;</li>{" "}
                <li>
                  Solicitar correção ou exclusão de dados, quando aplicável;
                </li>{" "}
                <li>
                  Revogar consentimentos, respeitadas as obrigações legais e
                  contratuais.
                </li>{" "}
              </ul>{" "}
              <p>
                {" "}
                As solicitações podem ser feitas através dos canais de contato
                informados neste site.{" "}
              </p>{" "}
            </section>{" "}
            <section>
              {" "}
              <h3 className="mb-2 text-lg font-semibold">
                7. Conformidade com as Políticas do Meta
              </h3>{" "}
              <p>Nosso uso da API Oficial do WhatsApp segue rigorosamente:</p>{" "}
              <ul className="pl-5 space-y-1 list-disc">
                {" "}
                <li>As Políticas de Privacidade do Meta;</li>{" "}
                <li>As Políticas da Plataforma WhatsApp Business;</li>{" "}
                <li>
                  As diretrizes de uso, segurança e proteção de dados exigidas
                  pela Meta.
                </li>{" "}
              </ul>{" "}
              <p>
                {" "}
                Mensagens são enviadas apenas mediante interação ou
                consentimento do usuário, conforme exigido pela plataforma.{" "}
              </p>{" "}
            </section>{" "}
            <section>
              {" "}
              <h3 className="mb-2 text-lg font-semibold">
                8. Alterações nesta Política
              </h3>{" "}
              <p>
                {" "}
                Esta Política de Privacidade pode ser atualizada a qualquer
                momento para refletir melhorias no serviço, mudanças legais ou
                exigências da Meta. Recomendamos a revisão periódica deste
                documento.{" "}
              </p>{" "}
            </section>{" "}
            <section>
              {" "}
              <h3 className="mb-2 text-lg font-semibold">9. Contato</h3>{" "}
              <p>
                {" "}
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o
                tratamento de dados, entre em contato conosco pelos canais
                oficiais informados neste site.{" "}
              </p>{" "}
            </section>{" "}
            <p className="text-sm opacity-80">
              {" "}
              Última atualização: 22/06/2026.{" "}
            </p>{" "}
          </div>
        </p>
      </Dialog>
    </div>
  );
}

export default CopyrightFooter;
