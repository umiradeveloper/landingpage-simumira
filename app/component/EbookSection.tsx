export default function EbookSection() {
  return (
    <section className="mt-24 px-10 text-white">
      <h3 className="text-2xl font-bold text-center">E-book Panduan</h3>
      <p className="text-center mt-2 opacity-90">
        Klik salah satu e-book untuk mengetahui bagaimana cara penggunaan CostControl dan VMS
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10">
        {/* Card 1 */}
        <div className="bg-white/20 backdrop-blur rounded-xl p-6 shadow-lg">
          <h4 className="font-semibold mb-2">E-book penggunaan VMS</h4>
          <p className="text-sm opacity-90">
            Tutorial penggunaan VMS disusun untuk memberikan panduan kepada pengguna
            dalam memahami alur, fitur, dan fungsi utama sistem Vendor Management System.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/20 backdrop-blur rounded-xl p-6 shadow-lg">
          <h4 className="font-semibold mb-2">E-book penggunaan CostControl</h4>
          <p className="text-sm opacity-90">
            Aplikasi Cost Control dirancang untuk membantu perusahaan memantau
            dan mengendalikan biaya proyek secara efektif.
          </p>
        </div>
      </div>
    </section>
  );
}