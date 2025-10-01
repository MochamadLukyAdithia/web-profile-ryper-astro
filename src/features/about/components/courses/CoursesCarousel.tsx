import React, { useCallback, useRef } from "react";
import Carousel from "@/components/ui/carousel";
import type { CourseType } from "@/types/models/course-type";
import { CourseCard } from "./CourseCard";

// Asumsi: Anda mengimpor atau mendefinisikan komponen Carousel yang saya berikan sebelumnya

/**
 * Komponen CoursesCarousel
 * Menampilkan daftar kursus menggunakan komponen Carousel generik.
 *
 * Catatan: Ukuran item (width, gap, visible count) harus disesuaikan
 * dengan style CSS yang sebenarnya Anda terapkan pada CourseCard dan carousel-track.
 */
export const CoursesCarousel = ({ courses }: { courses: CourseType[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // --- 1. Fungsi Utilitas untuk Pengukuran Layout ---
  // Fungsi-fungsi ini MENGGANTIKAN properti CSS di runtime.
  // Sesuaikan nilai-nilai di bawah agar sesuai dengan breakpoints dan styling Anda.

  const getItemWidth = useCallback((): number => {
    // Asumsi: Lebar card adalah 300px, atau mengambil lebar elemen CourseCard
    // Jika Anda menggunakan Tailwind untuk lebar responsif, Anda bisa membaca window.innerWidth
    // dan mengembalikan lebar yang sesuai, atau membaca lebar actual dari track/item.
    return 300; // Contoh nilai default
  }, []);

  const getItemGap = useCallback((): number => {
    // Asumsi: Jarak antar item (gap) adalah 20px (misalnya: Tailwind 'gap-5')
    return 20;
  }, []);

  const getVisibleCount = useCallback((): number => {
    // Menghitung berapa item yang terlihat penuh (untuk centerOffset)
    // Ini harus sinkron dengan style CSS responsif Anda.
    const width = window.innerWidth;
    if (width >= 1024) return 3; // lg: 3 item terlihat
    if (width >= 768) return 2; // md: 2 item terlihat
    return 1; // default: 1 item terlihat
  }, []);

  // --- 2. Fungsi Utilitas untuk Update Tampilan Tengah ---
  const updateCenterItem = useCallback((carouselElement: HTMLElement) => {
    // Logic untuk menambahkan kelas "active" atau styling lain ke item di tengah.
    // Implementasi ini biasanya melibatkan iterasi melalui semua item
    // dan memeriksa posisi relatifnya terhadap pusat viewport/carousel.

    const track = carouselElement.querySelector(".carousel-track");
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const centerX = carouselElement.offsetWidth / 2;
    const items = Array.from(track.children) as HTMLElement[];

    items.forEach((item) => {
      item.classList.remove("is-center");
      const itemRect = item.getBoundingClientRect();

      // Cek apakah item berada dalam rentang tengah (misalnya, 1/3 dari lebar item dari pusat)
      const itemCenter = itemRect.left + itemRect.width / 2 - trackRect.left;
      const tolerance = itemRect.width / 3;

      if (
        itemCenter > centerX - tolerance &&
        itemCenter < centerX + tolerance
      ) {
        item.classList.add("is-center"); // Tambahkan kelas untuk styling
      }
    });
  }, []);

  // --- 3. Render Komponen Carousel ---
  return (
    <div ref={carouselRef} className="relative">
      <Carousel
        data={courses}
        cardCreator={(course) => (
          <CourseCard key={course.id_matkul} {...course} />
        )}
        // Mempassing fungsi utilitas yang diperlukan
        getItemWidth={getItemWidth}
        getItemGap={getItemGap}
        getVisibleCount={getVisibleCount}
        updateCenterItem={updateCenterItem}
        // Menambahkan className untuk styling default/responsif
        trackClassName="flex transition-transform duration-500 ease-in-out gap-5"
      />
    </div>
  );
};
