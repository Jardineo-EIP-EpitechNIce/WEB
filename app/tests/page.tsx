import type { Metadata } from 'next';
import Link from 'next/link';
import { PLAY_TEST_LINKS } from '@/lib/testers';

export const metadata: Metadata = {
  title: 'Tests utilisateurs — Jardineo',
  description:
    "Participez aux tests de Jardineo : installez la version actuelle et l'ancienne version 1.3.3 pour les comparer.",
  robots: { index: false, follow: false },
};

const versions = [
  {
    key: 'current',
    title: 'Version actuelle',
    subtitle: "L'application Jardineo telle qu'elle est aujourd'hui.",
    appName: 'Jardineo',
    href: PLAY_TEST_LINKS.current,
    primary: true,
  },
  {
    key: 'legacy',
    title: 'Version 1.3.3 (septembre 2026)',
    subtitle: 'Une version précédente, installée à côté de la première.',
    appName: 'Jardineo 1.3.3',
    href: PLAY_TEST_LINKS.legacy,
    primary: false,
  },
];

const steps = [
  'Ouvrez les deux liens ci-dessous avec le compte Google que vous nous avez communiqué, puis appuyez sur « Devenir testeur ».',
  "Installez les deux applications depuis le Play Store : elles apparaissent sous les noms « Jardineo » et « Jardineo 1.3.3 », l'une ne remplace pas l'autre.",
  'Créez un compte dans chacune : les deux versions utilisent des serveurs séparés, vos données ne passent pas de l’une à l’autre.',
  'Réalisez les mêmes actions dans les deux applications (créer une parcelle, chercher une plante, publier dans la communauté…) et notez vos impressions.',
];

export default function TestsPage() {
  return (
    <div className="min-h-screen bg-jardineo-surface">
      <header className="bg-jardineo-green-dark text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Jardineo" className="h-8 w-8" />
            <span className="text-xl font-jardineo-bold">Jardineo</span>
          </Link>
          <span className="text-jardineo-mint text-sm">Tests utilisateurs</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-jardineo-bold text-jardineo-green-dark mb-4">
          Comparez deux versions de Jardineo
        </h1>
        <p className="text-jardineo-gray mb-10">
          Merci de nous aider ! Nous vous proposons d&apos;installer deux versions de l&apos;application
          Android et de nous dire laquelle vous préférez, et pourquoi.
        </p>

        <ol className="space-y-3 mb-12 list-decimal list-inside text-jardineo-gray">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <div className="grid md:grid-cols-2 gap-6">
          {versions.map((v) => (
            <div
              key={v.key}
              className="bg-white rounded-jardineo border border-jardineo-border p-6 flex flex-col"
            >
              <h2 className="text-xl font-jardineo-bold text-jardineo-green-dark mb-1">{v.title}</h2>
              <p className="text-sm text-jardineo-gray mb-2">{v.subtitle}</p>
              <p className="text-sm text-jardineo-gray mb-6">
                Nom sur le téléphone : <strong>{v.appName}</strong>
              </p>
              <a
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  v.primary
                    ? 'bg-jardineo-primary hover:bg-jardineo-primary-dark text-white'
                    : 'bg-jardineo-surface hover:bg-jardineo-surface-variant text-jardineo-primary border border-jardineo-border hover:border-jardineo-primary'
                } mt-auto px-6 py-3 rounded-jardineo font-jardineo-medium text-center transition-all duration-300`}
              >
                Rejoindre le test sur Google Play
              </a>
            </div>
          ))}
        </div>

        <p className="text-sm text-jardineo-gray mt-10">
          Le bouton ne fonctionne pas ? Votre compte Google n&apos;est peut-être pas encore dans la
          liste des testeurs : contactez l&apos;équipe Jardineo.
        </p>
      </main>
    </div>
  );
}
