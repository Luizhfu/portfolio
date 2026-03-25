export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contato</h2>

      <p>Entre em contato comigo!</p>

      <button className="btn primary">Enviar Mensagem</button>

      <div className="contact-icons">
        <div>
          <img src="/images/github.png" />
          <p>GitHub</p>
        </div>

        <div>
          <img src="/images/linkedin.png" />
          <p>LinkedIn</p>
        </div>

        <div>
          <img src="/images/email.png" />
          <p>abreudealmeida</p>
        </div>
      </div>
    </section>
  );
}