import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-jardineo-surface">
      <Hero />

      {/* Footer */}
      <footer className="bg-jardineo-green-dark text-white py-8 px-4 border-t border-jardineo-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2 font-jardineo-medium">
            &copy; {new Date().getFullYear()} Jardineo - Gestion intelligente de jardin
          </p>
          <p className="text-sm text-jardineo-mint">
            Un projet innovant Epitech (EIP)
          </p>
        </div>
      </footer>
    </main>
  );
}
