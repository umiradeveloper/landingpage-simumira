import Image from "next/image";
import EbookSection from "./EbookSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FBF6C9] via-[#9FB4B8] to-[#1F4F8B]">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6">
         <Link href="/" className="flex items-center">
          <Image
            src="/images/umiralogo.png"
            alt="Umira Logo"
            width={270}
            height={50}
            className="object-contain"
            priority
          />
        </Link>
        <Link 
        href="#panduan"
        className=" text-2xl text-[#086078] mr-5">
          Panduan
        </Link>
      </header>

      {/* Hero */}
      <section className="text-center mt-20">
        <h2 className="text-7xl tracking-thight font-bold justify-center text-[#086078]">
          Welcome to Umira
        </h2>
        <p className="mt-1 text-[#086078] max-w-lg mx-auto text-xl leading-thight justify-center ">
          professional, rapidly growing, sustainable design and engineering
          construction company since 2016.
        </p>

        <div className="flex flex-col items-center md:flex-row md:justify-center gap-6 mt-10">
          <a href="https://superapps.simumira.com/apps/LoginRegister/"
          target="_blank">
          <button className="group
            px-10 py-2.5
            rounded-full
            bg-[#086078]
            text-white
            font-semibold
            flex items-center gap-2
            transition-all duration-300
            hover:bg-[#164048]
            hover:shadow-lg
            hover:-translate-y-0.5
            ">
            SuperApps
            <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
            </span>
            
           </button>     
          </a>
          <a href="https://vms.simumira.com/apps/LoginRegister/"
          target="_blank">
          <button className="
                group
            px-14 py-2.5
            rounded-full
            bg-[#086078]
            text-white
            font-semibold
            flex items-center gap-2
            transition-all duration-300
            hover:bg-[#164048]
            hover:shadow-lg
            hover:-translate-y-0.5
            ">
            Vms
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
             </button>
          </a>
          <a href="https://drive.simumira.com/#/signin"
          target="_blank">
          <button className="group
            px-10 py-2.5
            rounded-full
            bg-[#086078]
            text-white
            font-semibold
            flex items-center gap-2
            transition-all duration-300
            hover:bg-[#164048]
            hover:shadow-lg
            hover:-translate-y-0.5
            ">
            UmiraDrive
            <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
            </span>
            
           </button>     
          </a>
        </div>
      </section>
      
      <div className="grid place-items-center">    
      <Link href="https://vms.simumira.com/"
      target="_blank">
      <div className="vms-card group relative py-5 p-1 mt-20 w-full max-w-md cursor-pointer overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
        <Image 
          src="/images/vms-login.png" // ganti sesuai gambar kamu
          alt="VMS login"
          width={700}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute bottom-4 left-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          <h3 className="text-xl font-semibold">VMS Login</h3>
          <p className="text-sm">Klik untuk membuka Vms Login</p>
        </div>
      </div>
    </Link>
    </div>

      {/* Login */}
      <section className="flex justify-center mt-16">
      </section>

      {/* Ebook */}
      <EbookSection />

      {/* Footer */}
      <footer className="text-center text-white text-sm py-10 mb-0">
        © Umira Sinergi Global 2026. All rights reserved.
      </footer>
    </main>
  );
}
