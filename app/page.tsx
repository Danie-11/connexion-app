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
        <div className="hero-bg" aria-hidden="true">
          <div className="sun-glow" />
          <div className="dolphin-ring">
            <span className="dolphin d1">🐬</span>
            <span className="dolphin d2">🐬</span>
            <span className="dolphin d3">🐬</span>
          </div>
          <div className="sea sea-1" />
          <div className="sea sea-2" />
          <div className="sea sea-3" />
        </div>

        <nav className="nav">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">✦</span>
            <span>Connexion</span>
          </a>
          <a className="login" href="#connexion">J’ai déjà un compte <span>→</span></a>
        </nav>

        <div className="hero-content" id="top">
          <p className="script">Plus qu’une rencontre,<br />une belle énergie</p>

          <div className="hero-copy">
            <p className="eyebrow">UNE AUTRE FAÇON DE SE RENCONTRER</p>
            <h1>Des personnes.<br />Des affinités.<br /><em>Une connexion choisie.</em></h1>
            <p className="intro">
              Une autre façon de rencontrer. Vous choisissez ce que vous partagez,
              avec qui vous échangez et jusqu’où vous souhaitez aller.
            </p>

            <div className="actions">
              <a className="primary" href="#intentions">Créer mon profil <span>→</span></a>
              <a className="secondary" href="#connexion">J’ai déjà un compte <span>→</span></a>
            </div>
          </div>

          <div className="trust">
            <div><strong>⌑</strong><b>Confidentialité</b><span>Vos informations personnelles restent protégées.</span></div>
            <div><strong>♡</strong><b>Consentement mutuel</b><span>Une connexion n’est créée que si les deux personnes l’acceptent.</span></div>
            <div><strong>♢</strong><b>Sécurité</b><span>Vous pouvez signaler, bloquer ou mettre une conversation en pause.</span></div>
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
