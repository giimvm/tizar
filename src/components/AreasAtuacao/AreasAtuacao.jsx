import "./AreasAtuacao.css";

function AreasAtuacao() {
  const areas = [
    {
      titulo: "Açougue & Carnes",
      descricao:
        "Gestão de rendimento de carcaça, controle de quebras, negociação direta com frigoríficos e padronização do balcão.",
      imagem: "/placeholder.jpg",
    },
    {
      titulo: "Frios & Laticínios",
      descricao:
        "Controle rigoroso da cadeia de frio e validade curta (shelf-life), além de parcerias com cooperativas regionais.",
      imagem: "/placeholder.jpg",
    },
    {
      titulo: "Hortifrúti",
      descricao:
        "Cotações diretas na fonte produtora e CEASA, com foco em frescor, redução de perdas e abastecimento.",
      imagem: "/placeholder.jpg",
    },
    {
      titulo: "Adegas & Bebidas",
      descricao:
        "Curadoria de rótulos e negociação com distribuidoras para aumento de margem e mix de produtos.",
      imagem: "/placeholder.jpg",
    },
  ];

  return (
    <section className="areas-atuacao">
      <header className="areas-header">
        <p className="section-tag">ESCOPO DE ATUAÇÃO</p>

        <h2 className="section-title">
          Escolha onde a Tizar pode assumir sua carteira.
        </h2>

        <p className="section-description">
          Delegue departamentos pontuais ou múltiplas seções estratégicas do
          seu supermercado.
        </p>
      </header>

      <div className="areas-grid">
        {areas.map((area) => (
          <div className="area-card" key={area.titulo}>
            <img
              src={area.imagem}
              alt={area.titulo}
              className="area-image"
            />

            <div className="area-content">
              <h3>{area.titulo}</h3>

              <p>{area.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AreasAtuacao;