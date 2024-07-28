import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <h1 className="text-6xl font-bold mb-8">ATHSQUAD</h1>
      <p className="text-xl mb-6 text-center max-w-md">
        Find a squad, have fun and get active!
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdonIxFbEOCjArfrZjNWVqN8R95ZUPN_niDfHzv7cKOTivj6Q/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="px-8 py-4 text-xl font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
          Join the Waitlist
        </button>
      </a>
    </main>
  );
}
