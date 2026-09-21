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
      <section className="hero-reference" id="top">
        <img className="reference-image" src="/connexion-app/connexion-reference.jpg" alt="Connexion — plus qu’une rencontre, une belle énergie" />
        <a className="hero-hotspot profile-hotspot" href="#intentions" aria-label="Créer mon profil" />
        <a className="hero-hotspot account-hotspot" href="#connexion" aria-label="J’ai déjà un compte" />
        <button className="hero-hotspot language-hotspot" type="button" aria-label="Langue française" />
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
