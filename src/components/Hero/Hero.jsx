import React from 'react';
import './Hero.css';
import heroImg from '../../assets/images/PessoaComprando.jpeg'; 

const Hero = () => {
  return (
    <section className="hero-container" id="inicio">
      
      {/* Coluna da Esquerda: Conteúdo de Texto */}
      <div className="hero-content">
        <div className="hero-tag">
          <span className="tag-icon">⭐</span> CRESCIMENTO COMO SERVIÇO PARA VAREJO ALIMENTAR
        </div>
        
        <h1 className="hero-title">
          Transformamos <br />
          <span className="highlight-orange">compras</span> em <br />
          crescimento.
        </h1>
        
        <p className="hero-subtitle">
          A Tizar assume carteiras estratégicas do seu supermercado e transforma compras, pricing, mix e estoque em resultado econômico real.
        </p>
        
        <div className="hero-actions">
          <a href="#contato" className="btn-primary">Quero conhecer a Tizar <span>→</span></a>
          <a href="#como-funciona" className="btn-secondary">Como funciona</a>
        </div>

        <div className="hero-disclaimer">
          <span className="disclaimer-icon">✅</span> Sem burocracia comercial - Integração em menos de 10 dias
        </div>
      </div>

      {/* Coluna da Direita: Imagem e Badges Flutuantes */}
      <div className="hero-image-wrapper">
        <div className="image-background-shape">
          <img src={heroImg} alt="Pessoa comprando no setor de hortifruti" className="hero-image-main" />
        </div>
        
        {/* Ícone verde flutuante no topo direito */}
        <div className="floating-icon-green">
          🙋‍♂️
        </div>
          
        {/* Badge flutuante amarelo */}
        <div className="floating-badge yellow-badge">
          <div className="badge-icon-box">↗️</div>
          <div className="badge-text">
            <strong>+24%</strong>
            <span>MARGEM BRUTA MÉDIA</span>
          </div>
        </div>

        {/* Badge flutuante rosa */}
        <div className="floating-badge pink-badge">
          <span>⭐ Foco Total em Resultado</span>
        </div>
      </div>

    </section>
  );
};

export default Hero;