import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Meus Projetos</h2>

      <div className="projects-container">
        <ProjectCard
          title="Social Network"
          desc="Desenvolvi esta landing page com foco em conversão e apresentação clara de serviços.

O design foi pensado para guiar o usuário de forma natural, destacando os pontos principais e incentivando a ação. Trabalhei com uma estrutura visual limpa, tipografia bem definida e responsividade completa.

O projeto demonstra minha capacidade de alinhar design e desenvolvimento para criar páginas eficientes e visualmente atraentes."
          tech="HTML • CSS • JavaScript"
          image="/images/logoluiz.png"
        />

        <ProjectCard
          title="Sistema Administrativo"
          desc="Este projeto consiste em um sistema de gestão desenvolvido para organizar e otimizar processos internos.

A aplicação permite o controle de informações de forma eficiente, com uma interface simples e funcional. O foco foi criar uma experiência intuitiva, facilitando o uso mesmo para usuários sem conhecimento técnico.

Durante o desenvolvimento, priorizei a organização do código, separação de responsabilidades e escalabilidade da aplicação.

O resultado foi um sistema estável, funcional e preparado para futuras melhorias."
          tech="React • Node.js • MySQL"
          image="/images/adm.png"
        />
        <ProjectCard
          title="Portfólio Profissional"
          desc="Desenvolvi este portfólio com o objetivo de apresentar minhas habilidades como desenvolvedor front-end de forma clara e profissional.

O projeto foi construído utilizando Next.js, com foco em performance, organização de componentes e responsividade. A interface foi pensada para ser moderna e intuitiva, proporcionando uma navegação fluida em diferentes dispositivos.

Implementei seções bem definidas, sistema de componentes reutilizáveis e um modal para apresentação detalhada dos projetos, permitindo uma melhor visualização das soluções desenvolvidas.

Este projeto reflete minha preocupação com estrutura, experiência do usuário e boas práticas de desenvolvimento."
          tech="React • Next.js • CSS"
          image="/images/portifolio.png"
        />
      </div>
    </section>
  );
}
