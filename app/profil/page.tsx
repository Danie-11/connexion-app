"use client";

import { useState } from "react";
import Link from "next/link";

const intentions = [
  ["❤️", "Amour"],
  ["🤝", "Amitié"],
  ["💼", "Professionnel"],
  ["🎨", "Passions"],
  ["🚀", "Projets"],
  ["💬", "Échanges"],
] as const;

export default function ProfilPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [step, setStep] = useState(1);

  const toggle = (label: string) =>
    setSelected((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );

  return (
    <main className="onboarding">
      <header className="onboarding-nav">
        <Link href="/" className="mini-brand">
          <span className="mini-logo">✦</span>
          Connexion
        </Link>
        <span>Étape {step} sur 4</span>
      </header>

      <div className="progress"><span style={{ width: `${step * 25}%` }} /></div>

      <section className="onboarding-card">
        {step === 1 && (
          <>
            <p className="eyebrow">COMMENÇONS SIMPLEMENT</p>
            <h1>Qu’est-ce que vous recherchez ?</h1>
            <p className="lead">
              Vous pouvez choisir plusieurs intentions. Elles resteront distinctes
              afin que Connexion comprenne ce que vous recherchez pour chacune.
            </p>

            <div className="intent-grid">
              {intentions.map(([icon, label]) => (
                <button
                  key={label}
                  className={`intent-choice ${selected.includes(label) ? "selected" : ""}`}
                  onClick={() => toggle(label)}
                >
                  <span>{icon}</span>
                  <strong>{label}</strong>
                  {selected.includes(label) && <small>✓</small>}
                </button>
              ))}
            </div>

            <div className="bottom-actions">
              <span>{selected.length} intention{selected.length > 1 ? "s" : ""} sélectionnée{selected.length > 1 ? "s" : ""}</span>
              <button
                className="primary"
                disabled={!selected.length}
                onClick={() => setStep(2)}
              >
                Continuer →
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <p className="eyebrow">VOTRE IDENTITÉ CONNEXION</p>
            <h1>Comment souhaitez-vous être découvert(e) ?</h1>
            <p className="lead">
              Votre vrai nom reste privé. Choisissez un pseudo et une image parmi
              ceux proposés par Connexion.
            </p>
            <label className="field">
              <span>Pseudo</span>
              <input placeholder="Ex. Sillage, Aube, Nova…" />
            </label>
            <div className="suggestions">
              {["Aube", "Sillage", "Nova", "Élan", "Esquisse"].map((name) => (
                <button key={name} onClick={() => {
                  const input = document.querySelector<HTMLInputElement>(".field input");
                  if (input) input.value = name;
                }}>{name}</button>
              ))}
            </div>
            <p className="private-note">🔐 Votre nom réel, votre adresse et vos coordonnées ne seront pas affichés.</p>
            <div className="bottom-actions">
              <button className="back" onClick={() => setStep(1)}>← Retour</button>
              <button className="primary" onClick={() => setStep(3)}>Continuer →</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <p className="eyebrow">PARLEZ-NOUS DE VOUS</p>
            <h1>Qu’aimeriez-vous que Connexion comprenne ?</h1>
            <p className="lead">
              Écrivez librement. Ce texte sert à mieux comprendre vos attentes.
              Il n’est pas affiché publiquement par défaut.
            </p>
            <textarea placeholder="Ce que vous aimez, ce que vous recherchez, votre façon de fonctionner, ce que vous aimeriez construire ou partager…" />
            <div className="private-note">✨ Connexion utilise ce que vous partagez pour rechercher des correspondances pertinentes. Elle n’invente pas les informations manquantes.</div>
            <div className="bottom-actions">
              <button className="back" onClick={() => setStep(2)}>← Retour</button>
              <button className="primary" onClick={() => setStep(4)}>Voir mon récapitulatif →</button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <p className="eyebrow">VOTRE PROFIL EST PRÊT</p>
            <h1>Voici ce que Connexion va utiliser.</h1>
            <div className="recap">
              <div><span>Intentions</span><strong>{selected.join(" · ")}</strong></div>
              <div><span>Identité visible</span><strong>Pseudo + avatar + humeur</strong></div>
              <div><span>Informations privées</span><strong>Utilisées pour le matching, jamais révélées automatiquement</strong></div>
              <div><span>Consentement</span><strong>Aucune connexion sans accord des deux personnes</strong></div>
            </div>
            <div className="private-note">🌊 Vous pourrez modifier votre profil à tout moment. Si une modification change une connexion existante, Connexion vous demandera de confirmer la suite.</div>
            <div className="bottom-actions">
              <button className="back" onClick={() => setStep(3)}>← Modifier</button>
              <button className="primary" onClick={() => alert("Profil enregistré — prochaine étape : analyse Connexion.")}>Créer mon espace Connexion →</button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}