import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-sans px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to <span className="text-indigo-400">SonarIQ</span></h1>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Intelligent sound analytics. Noise-aware tech for the future of hearing.
        </p>

        <Image
          src="/sonariq-logo.png" // replace with your real image or use /next.svg for now
          alt="SonarIQ Logo"
          width={120}
          height={120}
          className="mx-auto mb-6"
        />

        <a
          href="https://github.com/Srikarthebetterplayer/sonariq"
          target="_blank"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded transition"
        >
          View on GitHub
        </a>
      </div>

      <footer className="mt-16 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SonarIQ · Built with Next.js
      </footer>
    </main>
  );
}
