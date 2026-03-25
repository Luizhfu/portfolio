import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Olá, eu sou <span>Luiz Eduardo</span>
        </h1>

        <h2>Desenvolvedor Frontend</h2>

        <p>
          Crio interfaces modernas, rápidas e responsivas utilizando
          React, Next.js e JavaScript.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            Ver Projetos
          </a>

          <a href="#contact" className="btn secondary">
            Contato
          </a>
        </div>
      </div>

  <div className="hero-image">
  <Image
    src="/images/logo.jpeg"
    alt="Luiz Eduardo"
    width={300}
    height={300}
  />
      </div>
    </section>
  );
}