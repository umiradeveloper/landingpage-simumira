import { BookOpen } from "lucide-react";

  
export default function EbookSection() {
  return (
    <section id="panduan" className="mt-24 px-10 text-white">
      <h3 className="text-4xl text-center">E-book Panduan</h3>
      <h4 className="text-center mt-2 opacity-100 mb-14 ">
        Klik salah satu E-book untuk mengetahui bagaimana penggunaan CostControl, VMS, dan UmiraDrive.
      </h4>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto h-full mt-10 mb-16">
        <link rel="stylesheet" href="/" />
        <a href="/pdf/buku-petunjuk-vms.pdf"
        target="_blank">
          <div className=" group
              bg-[#086078] backdrop-blur
              rounded-xl p-6
              shadow-lg
              h-full
              transition-all duration-300
              hover:bg-black
              hover:shadow-2xl
              hover:-translate-y-1
              cursor-pointer">
            <BookOpen className="w-6 h-6 text-[#ffffff] transition-transform duration-300 group-hover:scale-110" />
            <h4 className="mb-2 text-lg mt-2">E-book Penggunaan <span className="font-bold">Vms</span></h4>
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
          <BookOpen className="w-6 h-6 text-[#ffffff] transition-transform duration-300 group-hover:scale-110" /> 
          <h4 className="mb-2 text-lg mt-2">E-book penggunaan <span className="font-bold">CostControl</span></h4>
          <p className="text-m opacity-90">
          Aplikasi Cost Control merupakan aplikasi yang digunakan untuk membantu pengelolaan biaya proyek agar lebih teratur dan terkontrol. Aplikasi ini dibuat untuk 
          mencatat dan memantau Pendapatan Usaha, 
          Biaya Konstruksi serta persentase BK/PU secara realtime selama proyek berjalan, sehingga pengguna dapat mengetahui kondisi keuangan proyek secara jelas.
          </p>
        </div>
         </a>
        <a href="/pdf/Panduan-Penggunaan-Umira-Drive.pdf"
        target="_blank">
          <div className=" group
              bg-[#086078] backdrop-blur
              rounded-xl p-6
              shadow-lg
              h-full
              transition-all duration-300
              hover:bg-black
              hover:shadow-2xl
              hover:-translate-y-1
              cursor-pointer">
            <BookOpen className="w-6 h-6 text-[#ffffff] transition-transform duration-300 group-hover:scale-110" />
            <h4 className="mb-2 text-lg mt-2">E-book Penggunaan <span className="font-bold">UmiraDrive</span></h4>
            <p className="text-m opacity-90">
              E-Book Umira Drive adalah panduan praktis yang dirancang untuk membantu pembaca memahami, mengelola, dan memaksimalkan penggunaan Umira Drive secara efektif. 
              Disusun secara sistematis dan mudah dipahami, e-book ini membahas fitur, alur penggunaan, serta tips penting agar pengguna dapat bekerja lebih efisien dan terorganisir.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}