const intentions = [
  { icon: "❤️", label: "Amour" },
  { icon: "🤝", label: "Amitié" },
  { icon: "💼", label: "Professionnel" },
  { icon: "🎨", label: "Passions" },
  { icon: "🚀", label: "Projets" },
  { icon: "💬", label: "Échanges" }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="sun" aria-hidden="true" />
        <div className="waves" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <nav className="nav">
          <div className="brand">
            <div className="logo" aria-hidden="true">
              <span>◜</span><span>◝</span><span>◡</span>
              <b>✦</b>
            </div>
            <span>Connexion</span>
          </div>
          <button className="login">J’ai déjà un compte</button>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">UNE AUTRE FAÇON DE SE RENCONTRER</p>
          <h1>Des personnes.<br />Des affinités.<br /><em>Une connexion choisie.</em></h1>
          <p className="intro">
            Connexion vous aide à découvrir des personnes avec lesquelles une
            vraie affinité peut exister — sans tout dévoiler, sans pression.
          </p>

          <div className="actions">
            <button className="primary">Créer mon profil <span>→</span></button>
            <button className="secondary">Découvrir Connexion</button>
          </div>

          <div className="trust">
            <span>🔐 Confidentialité</span>
            <span>♡ Consentement mutuel</span>
            <span>✦ Connexion assistée par IA</span>
          </div>
        </div>
      </section>

      <section className="intentions">
        <div className="section-heading">
          <p className="eyebrow">UNE CONNEXION PEUT PRENDRE PLUSIEURS FORMES</p>
          <h2>Vous choisissez ce que vous recherchez.</h2>
          <p>Amour, amitié, projet, travail ou simplement une conversation : chaque intention est traitée séparément.</p>
        </div>
        <div className="cards">
          {intentions.map((item) => (
            <article className="card" key={item.label}>
              <span className="card-icon">{item.icon}</span>
              <h3>{item.label}</h3>
              <span className="arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="principle">
        <div>
          <p className="eyebrow">LA PHILOSOPHIE CONNEXION</p>
          <h2>L’IA peut ouvrir une porte.<br /><em>C’est vous qui décidez de l’ouvrir.</em></h2>
        </div>
        <p>
          Connexion analyse les informations que vous choisissez de partager
          pour identifier des correspondances pertinentes. Elle ne décide pas
          à votre place, ne révèle pas vos informations privées et ne force
          jamais une rencontre.
        </p>
      </section>
    </main>
  );
}