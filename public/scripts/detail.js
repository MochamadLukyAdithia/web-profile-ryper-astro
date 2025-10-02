import CryptoJS from "crypto-js";

const secretSalt = "ryper-salt";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const encodedHash = urlParams.get("id");

  const container = document.getElementById("detailContainer");

  if (!encodedHash) {
    container.innerHTML = `
            <div class="text-center py-16">
              <div class="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
              </div>
              <p class="text-gray-400 text-lg">ID tidak valid</p>
            </div>
          `;
    return;
  }

  const storedPost = localStorage.getItem("selectedPost");

  if (!storedPost) {
    container.innerHTML = `
            <div class="text-center py-16">
              <div class="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <p class="text-gray-400 text-lg">Data tidak ditemukan</p>
            </div>
          `;
    return;
  }

  const post = JSON.parse(storedPost);

  const checkHash = CryptoJS.SHA256(post.id + secretSalt).toString();

  if (checkHash !== encodedHash) {
    container.innerHTML = `
            <div class="text-center py-16">
              <div class="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <p class="text-red-400 text-lg">Hash tidak cocok. Akses ditolak</p>
            </div>
          `;
    return;
  }

  const formattedDate = new Date(post.date).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  container.innerHTML = `
          <!-- Article Header -->
          <article class="space-y-6">
            <div class="space-y-4">
              <div class="flex items-center gap-3 text-sm text-gray-400 flex-wrap">
                <time datetime="${post.date}" class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  ${formattedDate} WIB
                </time>
                <span class="text-gray-600">•</span>
                <span class="inline-flex items-center px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium uppercase tracking-wide">
                  ${post.category}
                </span>
              </div>
              
              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                ${post.title}
              </h1>
            </div>

            <!-- Featured Image -->
            <div class="relative overflow-hidden rounded-xl bg-gray-800">
              <img
                src="${post.image}"
                alt="${post.title}"
                class="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <!-- Article Content -->
            <div class="prose prose-lg prose-invert max-w-none">
              <div class="text-gray-200 leading-relaxed space-y-4 text-base sm:text-lg">
                ${post.deskripsi
                  .split("\n")
                  .map((paragraph) =>
                    paragraph.trim() ? `<p>${paragraph.trim()}</p>` : ""
                  )
                  .join("")}
              </div>
            </div>
          </article>
        `;
});

document.addEventListener("contextmenu", (e) => e.preventDefault());
// document.addEventListener("keydown", (e) => {
//   const key = e.key.toLowerCase();

//   if (
//     e.key === "F12" || // F12 (DevTools)
//     (e.ctrlKey && e.shiftKey && key === "i") || // Ctrl+Shift+I (Inspect)
//     (e.ctrlKey && e.shiftKey && key === "j") || // Ctrl+Shift+J (Console)
//     (e.ctrlKey && e.shiftKey && key === "c") || // Ctrl+Shift+C (Inspect Element)
//     (e.ctrlKey && key === "u") || // Ctrl+U (View Source)
//     (e.ctrlKey && key === "s") || // Ctrl+S (Save Page)
//     (e.metaKey && e.altKey && key === "i") || // Cmd+Option+I (Mac Inspect)
//     (e.metaKey && e.altKey && key === "j") || // Cmd+Option+J (Mac Console)
//     (e.metaKey && key === "s") || // Cmd+S (Mac Save)
//     (e.metaKey && key === "u") // Cmd+U (Mac View Source)
//   ) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("Mau Lihat Apa Kak");
//   }
// });
