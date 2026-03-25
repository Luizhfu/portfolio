import { useState } from "react";

export default function ProjectCard({ title, desc, tech, image }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project-card">
        <img src={image} alt={title} />

        <div className="project-card-content">
          <h3>{title}</h3>
          <p>{tech}</p>
          <p>{desc}</p>

          <button className="btn primary" onClick={() => setOpen(true)}>
            Ver Projeto
          </button>
        </div>
      </div>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{title}</h2>

            <p>{desc}</p>

            <p>
              Este projeto possui funcionalidades reais de aplicação,
              incluindo lógica de sistema e manipulação de dados.
              Algumas partes não podem ser exibidas publicamente.
            </p>

            <button className="btn secondary" onClick={() => setOpen(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}