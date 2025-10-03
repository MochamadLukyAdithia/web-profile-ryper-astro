

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    return false;
  });
  document.addEventListener("wheel", function (e) {
    if (e.shiftKey) {
      e.preventDefault();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
    }
  });

  const fetchKepalaLabFromAPI = async () => {
    try {
      const response = await fetch(
        "https://ryper-api-express.vercel.app/api/kalab"
      );
      const result = await response.json();

      if (result.data && result.data.length > 0) {
        const kalab = result.data[0];
        return {
          name: kalab.nama_kalab,
          img: kalab.gambar,
          description: `${kalab.deskripsi} (Periode ${kalab.periode})`,
        };
      } else {
        throw new Error("Data kosong");
      }
    } catch (error) {
      console.error("Gagal mengambil data kepala lab:", error);
      return null;
    }
  };

  async function fetchPengurusFromAPI() {
    try {
      const response = await fetch(
        "https://ryper-api-express.vercel.app/api/pengurus"
      );
      const json = await response.json();

      if (!json.data) return null;

      const grouped = {
        bph: [],
        asisten_praktikum: [],
        asisten_penelitian: [],
        media_kreatif: []
      };

      json.data.forEach((item) => {
        const divisiKey = item.divisi.toLowerCase().replace(/\s/g, "_");
        if (grouped[divisiKey]) {
          grouped[divisiKey].push({
            name: item.nama,
            img: item.gambar,
            role: item.divisi,
          });
        }
      });

      return grouped;
    } catch (error) {
      console.error("Gagal mengambil data pengurus:", error);
      return null;
    }
  }
  async function fetchSejarahFromAPI() {
    try {
      const response = await fetch(
        "https://ryper-api-express.vercel.app/api/sejarah"
      );
      const json = await response.json();
      return json.data.map((item) => ({
        year: item.tahun,
        description: item.deskripsi,
        imageUrl: item.gambar,
      }));
    } catch (error) {
      console.error("Gagal mengambil data sejarah:", error);
      return [];
    }
  }

  async function fetchMataKuliahFromAPI() {
    try {
      const response = await fetch(
        "https://ryper-api-express.vercel.app/api/matkul"
      );
      const result = await response.json();

      if (result?.data) {
        return result.data.map((item) => ({
          name: item.nama,
          code: item.kode,
          image: item.gambar,
        }));
      } else {
        return [];
      }
    } catch (error) {
      console.error("Gagal fetch matakuliah:", error);
      return [];
    }
  }

  // === Fungsi untuk "mengambil" data dummy (mensimulasikan API call) ===
  const fetchDataDummy = async (dataType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    switch (dataType) {
      case "sejarah":
        return fetchSejarahFromAPI();
      case "kepala_lab":
        return fetchKepalaLabFromAPI();
      case "pengurus":
        return fetchPengurusFromAPI();
      case "matakuliah":
        return fetchMataKuliahFromAPI();
      default:
        return null;
    }
  };
  async function renderSejarah() {
    const sejarahContent = document.getElementById("sejarah-content");
    sejarahContent.innerHTML = `
    <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white transform -translate-x-1/2 z-0"></div>
    <p class="text-white text-center">Memuat sejarah...</p>
  `;

    const sejarahData = await fetchDataDummy("sejarah");

    if (sejarahData && sejarahData.length > 0) {
      let sejarahHtml = `
      <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white transform -translate-x-1/2 z-0"></div>
    `;

      sejarahData.forEach((item, index) => {
        const isEven = index % 2 === 0;
        const flexDirection = isEven ? "md:flex-row" : "md:flex-row-reverse";

        sejarahHtml += `
        <div class="relative max-w-5xl mx-auto flex flex-col ${flexDirection} items-center gap-6 md:gap-12 mb-14 md:mb-20 px-4 sm:px-6">
          <!-- Dot in middle (only on md and up) -->
          <div class="hidden md:block absolute left-1/2 w-4 h-4 bg-white border-4 border-gray-900 rounded-full transform -translate-x-1/2 z-10 top-4 md:top-8"></div>

          <!-- Text -->
          <div class="w-full md:w-1/2 text-center md:text-left">
            <div class="text-xl sm:text-2xl font-bold text-white mb-2">
              ${item.year}
            </div>
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
              ${item.description}
            </p>
          </div>

          <!-- Image -->
          <div class="w-full md:w-1/2">
            <img src="${item.imageUrl}" alt="History ${item.year}"
              class="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      `;
      });

      sejarahContent.innerHTML = sejarahHtml;
    } else {
      sejarahContent.innerHTML = `
      <p class="text-red-500 text-center">Data sejarah tidak ditemukan atau gagal dimuat.</p>
    `;
    }
  }

  // === Render Kepala Lab ===
  async function renderKepalaLab() {
    const kepalaLabContent = document.getElementById("kepala-lab-content");
    kepalaLabContent.innerHTML =
      '<p class="text-white">Memuat data kepala lab...</p>';

    const kepalaLabData = await fetchDataDummy("kepala_lab");
    console.log(kepalaLabData);
    if (kepalaLabData) {
      kepalaLabContent.innerHTML = `
            <div class="w-64 sm:w-72 bg-gradient-to-b from-white to-blue-200 rounded-2xl shadow-xl overflow-hidden relative text-center person-card">
                <img src="../images/logo.png" alt="Logo" class="absolute top-4 left-4 w-8 h-8 sm:w-10 sm:h-10 z-10">
                <img 
                    src="${kepalaLabData.img}" 
                    alt="${kepalaLabData.name}" 
                    class="w-full object-cover pt-12 md:pt-14 h-[250px] md:h-[300px]" 
                />
                <div class="py-3 sm:py-4 text-gray-800">
                    <p class="text-xs sm:text-sm opacity-80">Pembina Lab</p>
                    <h3 class="text-lg sm:text-xl font-bold">${kepalaLabData.name}</h3>
                </div>
            </div>
        `;
      document.getElementById("kepala-lab-description").innerHTML = `
            <p class="text-gray-300 text-sm sm:text-base">
                ${kepalaLabData.description}
            </p>
        `;
    } else {
      kepalaLabContent.innerHTML =
        '<p class="text-red-500 text-center">Gagal memuat data kepala lab.</p>';
    }
  }

  // === Render Pengurus (BPH, Asisten Praktikum, Asisten Penelitian, Media Kreatif) ===
  async function renderPengurus() {
    const pengurusData = await fetchDataDummy("pengurus");

    if (pengurusData) {
      const bphData = pengurusData.bph || [];
      const asprakData = pengurusData.asisten_praktikum || [];
      const aspenData = pengurusData.asisten_penelitian || [];
      const medkreData = pengurusData.media_kreatif || [];

      setupCarousel("bph-carousel", bphData, createPersonCard);
      setupCarousel("asprak-carousel", asprakData, createPersonCard);
      setupCarousel("aspen-carousel", aspenData, createPersonCard);
      setupCarousel("medkre-carousel", medkreData, createPersonCard);
    } else {
      document
        .getElementById("bph-carousel")
        .querySelector(".carousel-track").innerHTML =
        '<p class="text-red-500 text-center col-span-full">Gagal memuat data BPH.</p>';
      document
        .getElementById("asprak-carousel")
        .querySelector(".carousel-track").innerHTML =
        '<p class="text-red-500 text-center col-span-full">Gagal memuat data Asisten Praktikum.</p>';
      document
        .getElementById("aspen-carousel")
        .querySelector(".carousel-track").innerHTML =
        '<p class="text-red-500 text-center col-span-full">Gagal memuat data Asisten Penelitian.</p>';
      document
        .getElementById("medkre-carousel")
        .querySelector(".carousel-track").innerHTML =
        '<p class="text-red-500 text-center col-span-full">Gagal memuat data Asisten Penelitian.</p>';
    }
  }

  // === Render Mata Kuliah ===
  async function renderMataKuliah() {
    const matkulData = await fetchDataDummy("matakuliah");

    if (matkulData && matkulData.length > 0) {
      setupCarousel("matkul-carousel", matkulData, createCourseCard);
    } else {
      document
        .getElementById("matkul-carousel")
        .querySelector(".carousel-track").innerHTML =
        '<p class="text-red-500 text-center col-span-full">Gagal memuat data Mata Kuliah.</p>';
    }
  }
  // Panggil fungsi render saat DOM selesai dimuat
  renderSejarah();
  renderKepalaLab();
  renderPengurus();
  renderMataKuliah();
});
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("glass-effect");
  } else {
    header.classList.remove("glass-effect");
  }
});

function createPersonCard(item) {
  return `
     <div class="carousel-item bg-gradient-to-b z-60 from-white to-blue-200 rounded-2xl shadow-xl overflow-hidden relative text-center person-card mx-2 sm:mx-3 md:mx-4">
    <img 
  src="../images/logo.png" 
  alt="Logo" 
  class="absolute top-3 left-3 sm:top-4 sm:left-4 h-8 sm:h-10 object-contain z-10"
/>

    <img 
        src="${item.img}" 
        alt="${item.name}" 
        class="w-full object-cover pt-12 sm:pt-14 h-[250px] sm:h-[300px] md:h-[350px]" 
    />
    <div class="py-3 sm:py-4 text-gray-800">
        <p class="text-xs sm:text-sm opacity-80">${
          item.role || "Anggota Lab"
        }</p>
        <h3 class="text-sm sm:text-lg md:text-xl font-bold">${item.name}</h3>
    </div>
</div>

    `;
}

function createCourseCard(item) {
  const colors = {
    bg: "from-white to-blue-200",
    icon: "bg-[#002C4B]",
  };

  return `
    <div class="carousel-item bg-gradient-to-b bg-white ${colors.bg} rounded-2xl shadow-xl overflow-hidden relative text-center course-card mx-2 sm:mx-3 md:mx-4">
      <div class="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 z-10 ${colors.icon} rounded-full flex items-center justify-center">
        <span class="text-white text-xs font-bold">${item.code}</span>
      </div>

      <div class="pt-10 bg-white sm:pt-16 pb-6 sm:pb-8 flex justify-center items-center h-[200px] sm:h-[240px] md:h-[280px]">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain rounded-xl shadow-md"
        />
      </div>

      <div class="py-3 sm:py-4 bg-white text-gray-800">
        <p class="text-xs sm:text-sm opacity-80">Mata Kuliah</p>
        <h3 class="text-sm sm:text-lg md:text-xl font-bold">${item.name}</h3>
      </div>
    </div>
  `;
}

function getItemWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 640) return 268;
  if (screenWidth < 768) return 288;
  return 296;
}

function getItemGap() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 640) return 8;
  if (screenWidth < 768) return 12;
  return 16;
}

function getVisibleCount() {
  const screenWidth = window.innerWidth;
  return screenWidth < 768 ? 3 : 5;
}

function updateCenterItem(carousel) {
  const track = carousel.querySelector(".carousel-track");
  const items = track.querySelectorAll(".carousel-item");
  const containerRect = carousel.getBoundingClientRect();
  const containerCenter = containerRect.left + containerRect.width / 2;

  let centerItem = null;
  let minDistance = Infinity;

  items.forEach((item) => {
    item.classList.remove("center");
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.left + itemRect.width / 2;
    const distance = Math.abs(itemCenter - containerCenter);

    if (distance < minDistance) {
      minDistance = distance;
      centerItem = item;
    }
  });

  if (centerItem) {
    centerItem.classList.add("center");
  }
}

function setupCarousel(carouselId, data, cardCreator) {
  const carousel = document.getElementById(carouselId);
  if (!carousel || data.length === 0) {
    console.warn(
      `Carousel with ID ${carouselId} not found or no data provided.`
    );
    const track = carousel ? carousel.querySelector(".carousel-track") : null;
    if (track) {
      track.innerHTML = `<p class="text-red-500 text-center col-span-full">Data tidak tersedia.</p>`;
    }
    return;
  }

  const track = carousel.querySelector(".carousel-track");
  const nextButton = carousel.querySelector(".next");
  const prevButton = carousel.querySelector(".prev");

  let currentIndex = 0;
  let isTransitioning = false;
  let autoScrollInterval;
  let extendedData;
  if (data.length === 2) {
    extendedData = Array(6).fill(null).flatMap(() => data);
  } else {
    extendedData = [...data, ...data, ...data]; 
  }
  track.innerHTML = extendedData.map(cardCreator).join("");

  const visibleCount = getVisibleCount();
  const centerOffset = Math.floor(visibleCount / 2);
  currentIndex = data.length + centerOffset;

  function updateCarousel(animate = true) {
    const itemWidth = getItemWidth();
    const gap = getItemGap();
    const fullItemWidth = itemWidth + gap;

    const offset =
      -(currentIndex * fullItemWidth) +
      (carousel.offsetWidth / 2 - itemWidth / 2);

    track.style.transition = animate ? "transform 0.5s ease" : "none";
    track.style.transform = `translateX(${offset}px)`;

    if (animate) {
      setTimeout(() => updateCenterItem(carousel), 250);
    } else {
      updateCenterItem(carousel);
    }
  }

  function slide(direction) {
    if (isTransitioning) return;

    isTransitioning = true;
    currentIndex += direction;
    updateCarousel(true);

    setTimeout(() => {
      const baseIndex = data.length + centerOffset;

      if (currentIndex >= data.length * 2 + centerOffset) {
        currentIndex = baseIndex;
        updateCarousel(false);
      } else if (currentIndex < centerOffset) {
        currentIndex = data.length * 2 - 1 + centerOffset;
        updateCarousel(false);
      }
      isTransitioning = false;
    }, 500);
  }

  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      slide(1);
    }, 3000);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  updateCarousel(false);

  nextButton.addEventListener("click", () => {
    stopAutoScroll();
    slide(1);
    startAutoScroll();
  });

  prevButton.addEventListener("click", () => {
    stopAutoScroll();
    slide(-1);
    startAutoScroll();
  });

  window.addEventListener("resize", () => {
    if (!isTransitioning) {
      updateCarousel(false);
    }
  });

  // Touch events
  let startX = 0;
  let isDragging = false;

  track.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      stopAutoScroll();
    },
    { passive: true }
  );

  track.addEventListener(
    "touchmove",
    (e) => {
      if (!isDragging) return;
      e.preventDefault();
    },
    { passive: false }
  );

  track.addEventListener(
    "touchend",
    (e) => {
      if (!isDragging) return;
      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          slide(1);
        } else {
          slide(-1);
        }
      }

      isDragging = false;
      startAutoScroll();
    },
    { passive: true }
  );

  // Keyboard events
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      stopAutoScroll();
      slide(-1);
      startAutoScroll();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      stopAutoScroll();
      slide(1);
      startAutoScroll();
    }
  });

  carousel.setAttribute("tabindex", "0");

  carousel.addEventListener("mouseenter", stopAutoScroll);
  carousel.addEventListener("mouseleave", startAutoScroll);

  startAutoScroll();
}

// document.addEventListener("contextmenu", (e) => e.preventDefault());
// document.addEventListener("keydown", (e) => {
//   const key = e.key.toLowerCase();

//   if (
//     e.key === "F12" ||                               // F12 (DevTools)
//     (e.ctrlKey && e.shiftKey && key === "i") ||      // Ctrl+Shift+I (Inspect)
//     (e.ctrlKey && e.shiftKey && key === "j") ||      // Ctrl+Shift+J (Console)
//     (e.ctrlKey && e.shiftKey && key === "c") ||      // Ctrl+Shift+C (Inspect Element)
//     (e.ctrlKey && key === "u") ||                    // Ctrl+U (View Source)
//     (e.ctrlKey && key === "s") ||                    // Ctrl+S (Save Page)
//     (e.metaKey && e.altKey && key === "i") ||        // Cmd+Option+I (Mac Inspect)
//     (e.metaKey && e.altKey && key === "j") ||        // Cmd+Option+J (Mac Console)
//     (e.metaKey && key === "s") ||                    // Cmd+S (Mac Save)
//     (e.metaKey && key === "u")                       // Cmd+U (Mac View Source)
//   ) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("Mau Lihat Apa Kak");
//   }
// });
