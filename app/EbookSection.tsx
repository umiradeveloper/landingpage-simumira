import { BookOpen } from "lucide-react";

  
export default function EbookSection() {
  return (
    <section id="panduan" className="mt-24 px-10 text-white">
      <h3 className="text-4xl font-bold text-center">E-book Panduan</h3>
      <p className="text-center mt-1 opacity-90">
        Klik salah satu e-book untuk mengetahui bagaimana cara penggunaan CostControl dan VMS
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10  mb-15">
        <link rel="stylesheet" href="/" />
        <a href="/pdf/buku-petunjuk-vms.pdf"
        target="_blank">
          <div className=" group
              bg-[#086078] backdrop-blur
              rounded-xl p-6
              shadow-lg
              transition-all duration-300
              hover:bg-black
              hover:shadow-2xl
              hover:-translate-y-1
              cursor-pointer">
            <BookOpen className="w-6 h-6 text-[#1C4D8D] transition-transform duration-300 group-hover:scale-110" />
            <h4 className="font-semibold mb-2 text-lg">E-book Penggunaan Vms</h4>
            <p className="text-m opacity-90">
              Tutorial penggunaan VMS disusun untuk memberikan panduan kepada pengguna dalam memahami alur, fitur, dan fungsi utama sistem Vendor Management System.
               Melalui tutorial ini, pengguna diharapkan dapat menggunakan VMS secara efektif, terstruktur, dan sesuai dengan proses yang telah ditetapkan.
            </p>
          </div>
        </a>

        {/* Card 2 */}
        <a href="/pdf/buku-panduan-costcontrol.pdf"
        target="_blank">
        <div className=" group
            bg-[#086078] backdrop-blur
            rounded-xl p-6
            shadow-lg
            transition-all duration-300
            hover:bg-black
            hover:shadow-2xl
            hover:-translate-y-1
            cursor-pointer">
          <BookOpen className="w-6 h-6 text-[#1C4D8D] transition-transform duration-300 group-hover:scale-110" /> 
          <h4 className="font-semibold mb-2">E-book penggunaan CostControl</h4>
          <p className="text-m opacity-90">
          Aplikasi Cost Control merupakan aplikasi yang digunakan untuk membantu pengelolaan biaya proyek agar lebih teratur dan terkontrol. Aplikasi ini dibuat untuk 
          mencatat dan memantau Pendapatan Usaha, 
          Biaya Konstruksi serta persentase BK/PU secara realtime selama proyek berjalan, sehingga pengguna dapat mengetahui kondisi keuangan proyek secara jelas.
          </p>
        </div>
         </a>
      </div>
    </section>
  );
}