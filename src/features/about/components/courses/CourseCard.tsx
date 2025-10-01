import type { CourseType } from "@/types/models/course-type";

type CourseCardProps = CourseType & {};

export const CourseCard: React.FC<CourseCardProps> = ({
  kode,
  nama,
  gambar,
}) => {
  const colors = {
    bg: "from-white to-blue-200",
    icon: "bg-[#002C4B]",
  };

  return (
    <div
      className={`carousel-item bg-gradient-to-b ${colors.bg} rounded-2xl shadow-xl overflow-hidden relative text-center course-card mx-2 sm:mx-3 md:mx-4`}
    >
      {/* Kode Mata Kuliah */}
      <div
        className={`absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 z-10 ${colors.icon} rounded-full flex items-center justify-center`}
      >
        <span className="text-white text-xs font-bold">{kode}</span>
      </div>

      {/* Gambar */}
      <div className="pt-10 bg-white sm:pt-16 pb-6 sm:pb-8 flex justify-center items-center h-[200px] sm:h-[240px] md:h-[280px]">
        <img
          src={gambar}
          alt={nama}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain rounded-xl shadow-md"
        />
      </div>

      {/* Nama & Deskripsi */}
      <div className="py-3 sm:py-4 bg-white text-gray-800">
        <p className="text-xs sm:text-sm opacity-80">Mata Kuliah</p>
        <h3 className="text-sm sm:text-lg md:text-xl font-bold">{nama}</h3>
      </div>
    </div>
  );
};
