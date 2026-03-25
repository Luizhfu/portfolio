import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Meus Projetos</h2>

      <div className="projects-container">
     <ProjectCard
  title="Social Network"
  desc="Aplicação fullstack de rede social com autenticação de usuários, criação de posts e sistema de comentários. Desenvolvida com foco em performance e organização de código."
  tech="React, Node.js, MySQL"
  image="/images/logoluiz.png"
/>

     <ProjectCard
  title="Sistema Administrativo"
  desc="Sistema para gerenciamento de dados e organização de informações com foco em usabilidade e eficiência para ambientes administrativos."
  tech="JavaScript, MySQL"
  image="/images/adm.png"
/>
<ProjectCard
  title="Portfólio Profissional"
  desc="Portfólio moderno e responsivo desenvolvido para apresentar projetos, habilidades e experiências como desenvolvedor frontend."
  tech="Next.js, CSS, JavaScript"
  image="/images/portifolio.png"
/>
      </div>
    </section>
  );
}