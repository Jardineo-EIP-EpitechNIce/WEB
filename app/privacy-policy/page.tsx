import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Jardineo",
  description:
    "Politique de confidentialité de l'application Jardineo. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "26 juin 2026";

  return (
    <div className="min-h-screen bg-jardineo-surface">
      {/* Header */}
      <header className="bg-jardineo-green-dark text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Jardineo" className="h-8 w-8" />
            <span className="text-xl font-jardineo-bold">Jardineo</span>
          </Link>
          <span className="text-jardineo-mint text-sm">Politique de confidentialité</span>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-jardineo-bold text-jardineo-green-dark mb-2">
          Politique de confidentialité
        </h1>
        <p className="text-jardineo-gray text-sm mb-10">
          Dernière mise à jour : {lastUpdated}
        </p>

        <div className="space-y-10 text-jardineo-gray leading-relaxed">
          <section>
            <h2 className="text-xl font-jardineo-medium text-jardineo-green-dark mb-3">
              1. Introduction
            </h2>
            <p>
              Jardineo (« nous », « notre ») est une application mobile de gestion intelligente
              de jardin développée dans le cadre du projet EIP (Epitech Innovative Project).
              Nous nous engageons à protéger vos données personnelles et à respecter votre vie
              privée conformément au Règlement Général sur la Protection des Données (RGPD)
              et à la législation française applicable.
            </p>
            <p className="mt-3">
              La présente politique de confidentialité explique quelles données nous collectons,
              pourquoi nous les collectons, comment nous les utilisons et quels droits vous
              disposez à leur égard.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-jardineo-medium text-jardineo-green-dark mb-3">
              2. Données collectées
            </h2>
            <p className="mb-3">Nous collectons les catégories de données suivantes :</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <span className="font-jardineo-medium">Données d&apos;identification</span> : nom,
                prénom, adresse e-mail, pseudonyme
              </li>
              <li>
                <span className="font-jardineo-medium">Données de connexion</span> : identifiant
                Google ou Apple (si connexion via ces services)
              </li>
              <li>
                <span className="font-jardineo-medium">Données de localisation</span> : ville et
                coordonnées géographiques (avec votre consentement explicite) pour afficher la
                météo locale et adapter les conseils de jardinage
              </li>
              <li>
                <span className="font-jardineo-medium">Données d&apos;utilisation</span> : interactions
                avec l&apos;application, parcelles de jardin créées, plantes ajoutées, publications
                communautaires
              </li>
              <li>
                <span className="font-jardineo-medium">Données techniques</span> : identifiant
                d&apos;appareil (token FCM) pour l&apos;envoi de notifications push
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-jardineo-medium text-jardineo-green-dark mb-3">
              3. Finalités du traitement
            </h2>
            <p className="mb-3">Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Créer et gérer votre compte utilisateur</li>
              <li>Vous fournir les fonctionnalités de l&apos;application (gestion de jardin, catalogue de plantes, réalité augmentée)</li>
              <li>Personnaliser votre expérience selon votre localisation et vos préférences</li>
              <li>Vous envoyer des notifications push (rappels d&apos;arrosage, alertes météo)</li>
              <li>Animer la communauté (publications, commentaires, gamification)</li>
              <li>Améliorer l&apos;application par l&apos;analyse des rapports de plantages (Firebase Crashlytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-jardineo-medium text-jardineo-green-dark mb-3">
              4. Base légale
            </h2>
            <p>
              Le traitement de vos données repose sur votre <span className="font-jardineo-medium">consentement</span> (art. 6.1.a RGPD)
              lors de la création de votre compte, ainsi que sur l&apos;<span className="font-jardineo-medium">exécution du contrat</span> (art. 6.1.b RGPD)
              pour la fourniture des services de l&apos;application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-jardineo-medium text-jardineo-green-dark mb-3">
              5. Services tiers
            </h2>
            <p className="mb-3">Jardineo utilise les services tiers suivants :</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <span className="font-jardineo-medium">Google Firebase</span> : authentification,
                notifications push (FCM), analytics et rapports de plantages (Crashlytics)
              </li>
              <li>
                <span className="font-jardineo-medium">Google Sign-In / Sign in with Apple</span> :
                connexion via compte tiers (optionnel)
              </li>
              <li>
                <span className="font-jardineo-medium">API météorologique</span> : données météo
                basées sur votre localisation
              </li>
            </ul>
            <p className="mt-3">
              Ces services disposent de leurs propres politiques de confidentialité. Nous vous
              invitons à les consulter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-jardineo-medium text-jardineo-green-dark mb-3">
              6. Conservation des données
            </h2>
            <p>
              Vos données sont conservées pendant toute la durée de votre utilisation de
              l&apos;application. En cas de suppression de votre compte, vos données personnelles
              sont effacées dans un délai de 30 jours, sauf obligation légale contraire.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-jardineo-medium text-jardineo-green-dark mb-3">
              7. Vos droits
            </h2>
            <p className="mb-3">
              Conformément au RGPD, vous disposez des droits suivants sur vos données :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><span className="font-jardineo-medium">Droit d&apos;accès</span> : obtenir une copie de vos données</li>
              <li><span className="font-jardineo-medium">Droit de rectification</span> : corriger vos données inexactes</li>
              <li><span className="font-jardineo-medium">Droit à l&apos;effacement</span> : supprimer votre compte et vos données</li>
              <li><span className="font-jardineo-medium">Droit à la portabilité</span> : recevoir vos données dans un format lisible</li>
              <li><span className="font-jardineo-medium">Droit d&apos;opposition</span> : vous opposer à certains traitements</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à l&apos;adresse indiquée en section 9.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-jardineo-medium text-jardineo-green-dark mb-3">
              8. Sécurité
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
              pour protéger vos données contre tout accès non autorisé, perte ou divulgation :
              chiffrement des communications (HTTPS/TLS), hachage des mots de passe (bcrypt),
              authentification par JWT, accès restreint aux bases de données.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-jardineo-medium text-jardineo-green-dark mb-3">
              9. Contact
            </h2>
            <p>
              Pour toute question relative à cette politique de confidentialité ou pour exercer
              vos droits, contactez-nous à :{" "}
              <a
                href="mailto:contact@jardineo.eu"
                className="text-jardineo-primary hover:text-jardineo-primary-dark underline"
              >
                contact@jardineo.eu
              </a>
            </p>
            <p className="mt-3">
              Vous disposez également du droit d&apos;introduire une réclamation auprès de la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-jardineo-primary hover:text-jardineo-primary-dark underline"
              >
                CNIL
              </a>{" "}
              (Commission Nationale de l&apos;Informatique et des Libertés).
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-jardineo-green-dark text-white py-8 px-4 mt-12 border-t border-jardineo-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-2 font-jardineo-medium">
            &copy; {new Date().getFullYear()} Jardineo — Gestion intelligente de jardin
          </p>
          <p className="text-sm text-jardineo-mint">Un projet innovant Epitech (EIP)</p>
        </div>
      </footer>
    </div>
  );
}
