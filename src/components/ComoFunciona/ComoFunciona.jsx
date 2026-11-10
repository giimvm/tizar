import "./ComoFunciona.css";

function ComoFunciona() {

  const etapas = [
  {
    dia: "SEG",
    titulo: "Inteligência e Auditoria",
    tag: "VARREDURA",
    descricao:
      "Varredura analítica de vendas, cálculo de quebras e rupturas, e checagem de preços dos concorrentes regionais."
  },
  {
    dia: "TER",
    titulo: "Mapeamento de Oportunidades",
    tag: "TOP 15",
    descricao:
      "Identificação dos quinze produtos com maior potencial de ganho e definição das prioridades da semana."
  },
  {
    dia: "QUA",
    titulo: "Execução Comercial",
    tag: "AÇÃO",
    descricao:
      "Implementação das oportunidades mapeadas, ajustes de preço e alinhamento com a operação da loja."
  },
  {
    dia: "QUI",
    titulo: "Acompanhamento de Resultados",
    tag: "MONITORAMENTO",
    descricao:
      "Avaliação do desempenho das ações executadas e análise dos indicadores de rentabilidade."
  },
  {
    dia: "SEX",
    titulo: "Consolidação e Planejamento",
    tag: "PLANEJAMENTO",
    descricao:
      "Revisão dos resultados obtidos durante a semana e preparação das ações do próximo ciclo."
  }
];

  return (
    <section className="como-funciona">
      <header className="como-funciona-header">
        <p>CADÊNCIA OPERACIONAL</p>

        <h2>Toda semana onde está o próximo ganho</h2>

        <p>
          Rotina estruturada de segunda a sexta para blindar a
          rentabilidade do seu supermercado.
        </p>
      </header>

      <div className="cards">
        {etapas.map((etapa) => (
          <div className="card" key={etapa.dia}>
            <div className="card-day">
              <span>DIA</span>
              <span>{etapa.dia}</span>
            </div>

            <div className="card-content">
              <div className="card-header">
                <h3>{etapa.titulo}</h3>

                <span className="tag">
                  {etapa.tag}
                </span>
              </div>

              <div className="card-body">
                <p>{etapa.descricao}</p>
              </div>
            </div>
          </div>
        ))}
</div>
    </section>
  );
}

export default ComoFunciona;