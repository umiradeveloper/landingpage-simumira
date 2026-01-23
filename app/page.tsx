import Image from "next/image";
import EbookSection from "./component/EbookSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FBF6C9] via-[#9FB4B8] to-[#1F4F8B]">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-bold text-blue-700">umira</h1>
        <span className="text-sm font-medium text-blue-700">Panduan</span>
      </header>

      {/* Hero */}
      <section className="text-center mt-16">
        <h2 className="text-4xl font-bold text-blue-800">
          Welcome to Umira.
        </h2>
        <p className="mt-3 text-blue-700 max-w-xl mx-auto">
          professional, rapidly growing, sustainable design and engineering
          construction company since 2016.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button className="px-6 py-2 rounded-full bg-blue-700 text-white font-semibold">
            SuperApps →
          </button>
          <button className="px-6 py-2 rounded-full bg-blue-700 text-white font-semibold">
            VMS →
          </button>
        </div>
      </section>

      {/* Login */}
      <section className="flex justify-center mt-16">
      </section>

      {/* Ebook */}
      <EbookSection />

      {/* Footer */}
      <footer className="text-center text-white text-sm py-10">
        © Umira Sinergi Global 2026. All rights reserved.
      </footer>
    </main>
  );
}
