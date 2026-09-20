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
      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true">
          <img src="/connexion-app/connexion-hero.svg" alt="" />
        </div>
        <div className="hero-soften" aria-hidden="true" />

        <nav className="nav">
          <a className="brand" href="#top">
            <span className="brand-mark">✦</span>
            <span>Connexion</span>
          </a>
          <div className="nav-right">
            <button className="language" type="button" aria-label="Langue française">FR <span>⌄</span></button>
            <a className="login" href="#connexion">J’ai déjà un compte <span>→</span></a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="script">Plus qu’une rencontre,<br />une belle énergie</p>

          <div className="hero-copy">
            <h1>Connexion</h1>
            <p className="tagline">Des personnes. Des affinités.<br /><em>Une connexion choisie.</em></p>
            <p className="intro">Une autre façon de rencontrer.<br />Vous choisissez ce que vous partagez,<br />avec qui vous échangez et jusqu’où<br />vous souhaitez aller.</p>

            <div className="actions">
              <a className="primary" href="#intentions">Créer mon profil <span>→</span></a>
              <a className="secondary" href="#connexion">J’ai déjà un compte <span>→</span></a>
            </div>
          </div>

          <div className="trust">
            <div><strong>♧</strong><b>Confidentialité</b><span>Vos informations personnelles restent protégées.</span></div>
            <div><strong>♡</strong><b>Consentement mutuel</b><span>Une connexion n’est créée que si les deux personnes l’acceptent.</span></div>
            <div><strong>♢</strong><b>Sécurité</b><span>Vous pouvez signaler, bloquer ou mettre une conversation en pause à tout moment.</span></div>
          </div>
        </div>

        <p className="script script-bottom">Des rencontres<br />qui ont du sens</p>
      </section>

      <section className="intentions" id="intentions">
        <div className="section-heading">
          <p className="eyebrow">UNE CONNEXION PEUT PRENDRE PLUSIEURS FORMES</p>
          <h2>Vous choisissez ce que vous recherchez.</h2>
          <p>Amour, amitié, projet, travail, passions ou simplement une conversation : chaque intention est traitée séparément.</p>
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

      <section className="principle" id="connexion">
        <div>
          <p className="eyebrow">LA PHILOSOPHIE CONNEXION</p>
          <h2>L’IA peut ouvrir une porte.<br /><em>C’est vous qui décidez de l’ouvrir.</em></h2>
        </div>
        <p>Connexion analyse les informations que vous choisissez de partager pour identifier des correspondances pertinentes. Elle ne décide pas à votre place, ne révèle pas vos informations privées et ne force jamais une rencontre.</p>
      </section>
    </main>
  );
}
