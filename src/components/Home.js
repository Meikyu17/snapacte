import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>LA PREUVE DANS VOTRE POCHE</h1>
          <div className="app-badges">
            <Link to="#" className="app-badge">
              <img src="/img/snapacte-sur-android.png" alt="Télécharger sur Android" />
            </Link>
            <Link to="#" className="app-badge">
              <img src="/img/snapacte-sur-appstore.png" alt="Télécharger sur l'App Store" />
            </Link>
          </div>
        </div>
      </section>

      <section className="main-feature">
        <h2>Une preuve sûre infalsifiable, dépôt certifié par Huissier de Justice.</h2>
        <p>
          SnapActe est l'application pour smartphone de référence en matière de préservation de preuve. 
          Ne gaspillez plus votre temps et votre argent, le réflexe, c'est SnapActe !
        </p>
        <p>
          En quelques clics prenez des photos horodatées et géolocalisées infalsifiables et obtenez un 
          extrait d'acte de pv de dépôt dans une Étude d'huissier de justice opposable aux tiers. 
          Ce processus confère au SnapActe une valeur juridique probante en droit français mais y compris 
          en droit de la preuve en Union européenne
        </p>
        <Link to="/en-savoir-plus" className="cta-button">En Savoir Plus</Link>
      </section>

      <section className="features-grid">
        <div className="feature-card">
          <h3>Acte d'huisser authentique</h3>
          <p>Nos huissiers de justice partenaires reçoivent quotidiennement le dépot horodaté de vos photographies géolocalisées aux minutes de leurs étude</p>
        </div>
        <div className="feature-card">
          <h3>Géolocalisation à 3 facteurs</h3>
          <p>Géolocalisation des photographies ultra précise grâce à la prise en compte simultanée des données GPS, des données du réseau mobile et des données de votre capteur wifi.</p>
        </div>
        <div className="feature-card">
          <h3>Horodatage</h3>
          <p>Chaque photographie est systématiquement horodatée de manière infalsifiable</p>
        </div>
        <div className="feature-card">
          <h3>Conservation des Actes</h3>
          <p>Chaque acte émis est conservé dans un coffre fort électronique durant la durée légale de 25 ans au sein de l'étude d'huissier émétrice. Votre preuve est donc protégée.</p>
        </div>
        <div className="feature-card">
          <h3>Espace client</h3>
          <p>Chaque acte est consultable dans votre espace client à tout moment et peut être téléchargé de nouveau si besoin.</p>
        </div>
        <div className="feature-card">
          <h3>Plateforme dédiée aux professionnels</h3>
          <p>SnapActe offre un outil dédié et complet aux sociétés permettant un contrôle total sur les dépots effectués et une gestion optimisée des rôles de chaque acteur</p>
        </div>
      </section>

      <section className="download-section">
        <h2>Téléchargez gratuitement l'application et essayez !</h2>
        <p>Vous ne payez qu'au dépôt de l'acte ! Et c'est <strong>59,99 € TTC seulement !</strong></p>
        
        <div className="app-value">
          <p>
            SnapActe, en mettant à disposition une application simple et performante, vous place en position centrale 
            en vous rendant « acteur » de votre litige ou de votre recherche de preuve.
          </p>
          <p>
            SnapActe vous permet de pratiquer vous-même votre préservation de preuve de la manière la plus sécurisée qui soit.
          </p>
          <p>
            SnapActe met à votre disposition cette solution à un prix très attractif pour tous : 59,99 € TTC pour dépôt de 20 photographies.
          </p>
        </div>
        
        <div className="app-badges">
          <Link to="#" className="app-badge">
            <img src="/img/snapacte-sur-android.png" alt="Télécharger sur Android" />
          </Link>
          <Link to="#" className="app-badge">
            <img src="/img/snapacte-sur-appstore.png" alt="Télécharger sur l'App Store" />
          </Link>
        </div>
      </section>

      <section className="customers-section">
        <h3>Ils utilisent SnapActe :</h3>
        <div className="customers-logos">
          <img src="/img/customers/Veolia-150x150.webp" alt="Veolia" />
          <img src="/img/customers/Finalcad-150x150.webp" alt="Finalcad" />
          <img src="/img/customers/Engie-150x150.webp" alt="Engie" />
          <img src="/img/customers/Sade-150x150.webp" alt="Sade" />
          <img src="/img/customers/Citya-150x150.webp" alt="Citya" />
          <img src="/img/customers/Eiffage-150x150.webp" alt="Eiffage" />
          <img src="/img/customers/Vinci-150x150.webp" alt="Vinci" />
          <img src="/img/customers/Spie-150x150.webp" alt="Spie" />
        </div>
      </section>

      <section className="juridical-value">
        <h3>Quelle est la valeur juridique de SnapActe ?</h3>
        <p>Cliquez ci-dessous pour télécharger une analyse juridique de la preuve par l'application SnapActe rédigée par des experts du droit…</p>
        <Link to="/analyse-juridique" className="cta-button">Téléchargez l'analyse juridique de SnapActe</Link>
      </section>

      <section className="pro-section">
        <h3>SnapActe pour les professionnels</h3>
        <p>Vous êtes gérant d'entreprise ? Formule d'abonnement et outil d'administration mis à disposition pour les professionnels.</p>
        <div className="pro-buttons">
          <Link to="/en-savoir-plus-pro" className="cta-button">En savoir plus</Link>
          <Link to="/obtenir-compte-pro" className="cta-button">Obtenir un compte pro</Link>
        </div>
      </section>

      <section className="partners-section">
        <h3>Nos partenaires</h3>
        <div className="partners-logos">
          <img src="/img/partners/panthera.webp" alt="Panthera" />
          <img src="/img/partners/finalcad.webp" alt="Finalcad" />
        </div>
      </section>

      <section className="testimonials">
        <h3>Que pensent les utilisateurs de SnapActe ?</h3>
        <div className="testimonial">
          <h4>Olivier</h4>
          <p>« Application géniale en tous domaines pour préserver la preuve à cout modéré. Mes clients adorent et moi aussi ! »</p>
        </div>
      </section>

      <section className="use-cases">
        <h3>Dans quelles situations utiliser SnapActe ?</h3>
        <div className="use-cases-grid">
          <div className="use-case">
            <img src="/img/usecases/panneau-de-permis-de-construire-de-demolir-declaration-de-travaux-acte-huissier-300x300.webp" alt="Permis de construire" />
            <p>Preuve d'affichage du permis de construire / démolir / déclaration de travaux</p>
          </div>
          <div className="use-case">
            <img src="/img/usecases/travaux-chantier-acte-huissier-300x300.webp" alt="Travaux" />
            <p>Travaux : preuve de malfaçon, retards de travaux, incident sur un chantier et</p>
          </div>
          <div className="use-case">
            <img src="/img/usecases/preuve-sinistre-assurance-incendie-degat-des-eaux-inondation-acte-huissier-300x300.webp" alt="Sinistre" />
            <p>Sinistre et assurances : preuve d'un incendie, d'un dégât des eaux, d'un cambriolage, d'une inondation</p>
          </div>
          <div className="use-case">
            <img src="/img/usecases/preuve-etat-des-lieux-entree-et-sortie-locataire-acte-huissier-300x300.webp" alt="État des lieux" />
            <p>Etats des lieux : propriétaires et locataires, prouvez l'état d'un bien en entrée ou sortie !</p>
          </div>
          <div className="use-case">
            <img src="/img/usecases/preuve-gestion-de-copropriete-acte-huissier-300x300.webp" alt="Copropriété" />
            <p>Syndic, gestion de copropriété, dégradation, non respect du règlement de copropriété</p>
          </div>
          <div className="use-case">
            <img src="/img/usecases/preuve-probleme-de-livraison-colis-endommage-acte-huissier-300x300.webp" alt="Livraison" />
            <p>Livraisons : preuve de retard ou de défaut de livraison, ou de marchandise endommagée</p>
          </div>
          <div className="use-case">
            <img src="/img/usecases/conflit-de-voisinage-acte-huissier-300x300.webp" alt="Conflit" />
            <p>Conflits entre particuliers : preuve d'un voisin mal garé à répétition, d'un arbre gênant…</p>
          </div>
          <div className="use-case">
            <img src="/img/usecases/preuve-accident-de-la-route-circulation-acte-huissier-300x300.webp" alt="Accident" />
            <p>Accidents de la route. Preuve des dégâts subis au(x) véhicule(s).</p>
          </div>
        </div>
        <Link to="/en-savoir-plus-usecases" className="cta-button">En Savoir Plus</Link>
      </section>

      <section className="cta-final">
        <h3>Lancez l'appli. Prouvez.</h3>
        <p>Téléchargez SnapActe gratuitement sur votre smartphone et déposez votre premier acte aujourd'hui !</p>
        <div className="app-badges">
          <Link to="#" className="app-badge">
            <img src="/img/snapacte-sur-android.png" alt="Télécharger sur Android" />
          </Link>
          <Link to="#" className="app-badge">
            <img src="/img/snapacte-sur-appstore.png" alt="Télécharger sur l'App Store" />
          </Link>
        </div>
      </section>

      <section className="contact-form">
        <h3>Quelle est la valeur juridique de SnapActe ?</h3>
        <p>Remplissez le formulaire ci-dessous pour recevoir une analyse juridique de la preuve par l'application SnapActe rédigée par des experts du droit....</p>
        <form className="juridical-form">
          <div className="form-group">
            <input type="text" placeholder="Votre prénom" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Votre adresse e-mail" />
          </div>
          <div className="form-group">
            <textarea placeholder="Dans quel contexte souhaitez-vous utiliser SnapActe?"></textarea>
          </div>
          <p className="form-disclaimer">
            En envoyant ce formulaire vous consentez au traitement de vos données personnelles par la société IDRA 
            et à éventuellement recevoir des communications de sa part.
          </p>
          <button type="submit" className="submit-button">Soumettre</button>
        </form>
      </section>
    </div>
  );
}

export default Home; 