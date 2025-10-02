import CryptoJS from "crypto-js";

let blogData = {
  posts: [],
  totalPages: 0,
  currentPage: 1,
  postsPerPage: 9,
};

let currentFilter = "all";
let filteredPosts = [];
let isLoading = false;

// Ambil data dari API dan transformasi
async function fetchAndTransformBlogData() {
  try {
    const response = await fetch(
      "https://ryper-api-express.vercel.app/api/blogs"
    );
    const result = await response.json();

    blogData.posts = result.data.map((item) => ({
      id: item.id_blog,
      title: item.judul,
      excerpt: item.deskripsi.split("\n")[0].slice(0, 250) + "...",
      deskripsi: item.deskripsi,
      date: new Date(item.createdAt)
        .toISOString()
        .replace("T", " ")
        .slice(0, 19),
      category: item.category.toLowerCase(),
      image: item.gambar,
      tags: [],
    }));

    calculateTotalPages();
    loadPosts();
  } catch (error) {
    console.error("Gagal mengambil data blog:", error);
  }
}

function initBlog() {
  fetchAndTransformBlogData();
  setupEventListeners();
}

function calculateTotalPages() {
  const filtered =
    currentFilter === "all"
      ? blogData.posts
      : blogData.posts.filter((post) => post.category === currentFilter);

  filteredPosts = filtered;
  blogData.totalPages = Math.ceil(filtered.length / blogData.postsPerPage);
}

function loadPosts(page = 1) {
  if (isLoading) return;
  isLoading = true;
  blogData.currentPage = page;

  showLoadingCards();

  setTimeout(() => {
    displayPosts();
    updatePagination();
    isLoading = false;
  }, 800);
}

function showLoadingCards() {
  const grid = document.getElementById("blog-grid");
  grid.innerHTML = "";

  for (let i = 0; i < blogData.postsPerPage; i++) {
    const loadingCard = document.createElement("div");
    loadingCard.className = "loading-card rounded-2xl overflow-hidden";
    loadingCard.innerHTML = `
      <div class="skeleton h-48"></div>
      <div class="p-6">
        <div class="skeleton h-6 mb-3 rounded"></div>
        <div class="skeleton h-4 mb-4 rounded w-32"></div>
        <div class="skeleton h-4 mb-2 rounded"></div>
        <div class="skeleton h-4 mb-2 rounded"></div>
        <div class="skeleton h-4 rounded w-3/4"></div>
      </div>
    `;
    grid.appendChild(loadingCard);
  }
}

function displayPosts() {
  const grid = document.getElementById("blog-grid");
  const startIndex = (blogData.currentPage - 1) * blogData.postsPerPage;
  const endIndex = startIndex + blogData.postsPerPage;
  const postsToShow = filteredPosts.slice(startIndex, endIndex);

  grid.innerHTML = "";

  postsToShow.forEach((post, index) => {
    const card = createBlogCard(post);
    card.style.animationDelay = `${index * 0.1}s`;
    grid.appendChild(card);
  });
}
function createBlogCard(post) {
  const card = document.createElement("div");
  card.className =
    "blog-card rounded-2xl overflow-hidden fade-in cursor-pointer transition-transform hover:scale-[1.02]";

  card.addEventListener("click", () => openPost(post.id));

  const date = new Date(post.date);
  const formattedDate =
    date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }) + " WIB";

  card.innerHTML = `
    <div class="image-wrapper relative">
      <img src="${post.image}" alt="Blog Image" />
      <div class="category-badge absolute top-2 right-2 bg-white text-black px-3 py-1 text-xs font-semibold rounded-full shadow">${post.category}</div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-3 line-clamp-2 text-black hover:text-blue-400 transition-colors">
        ${post.title}
      </h3>
      <p class="text-black text-sm mb-4">${formattedDate}</p>
      <p class="text-black text-sm leading-relaxed">${post.excerpt}</p>
    </div>
  `;

  return card;
}

const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("glass-effect");
  } else {
    header.classList.remove("glass-effect");
  }
});

function updatePagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  if (blogData.totalPages <= 1) return;

  const prevBtn = document.createElement("button");
  prevBtn.className = `pagination-btn ${
    blogData.currentPage === 1
      ? "opacity-50 cursor-not-allowed"
      : "bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-900"
  }`;
  prevBtn.innerHTML =
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>';
  prevBtn.onclick = () =>
    blogData.currentPage > 1 && loadPosts(blogData.currentPage - 1);
  pagination.appendChild(prevBtn);

  const startPage = Math.max(1, blogData.currentPage - 2);
  const endPage = Math.min(blogData.totalPages, startPage + 4);

  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.className = `pagination-btn ${
      i === blogData.currentPage
        ? "active"
        : "bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-900"
    }`;
    pageBtn.textContent = i;
    pageBtn.onclick = () => loadPosts(i);
    pagination.appendChild(pageBtn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.className = `pagination-btn ${
    blogData.currentPage === blogData.totalPages
      ? "opacity-50 cursor-not-allowed"
      : "bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-900"
  }`;
  nextBtn.innerHTML =
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';
  nextBtn.onclick = () =>
    blogData.currentPage < blogData.totalPages &&
    loadPosts(blogData.currentPage + 1);
  pagination.appendChild(nextBtn);
}

function setupEventListeners() {
  const filterChips = document.querySelectorAll(".chip[data-filter]");
  filterChips.forEach((chip) => {
    chip.addEventListener("click", function () {
      if (isLoading) return;
      filterChips.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");
      currentFilter = this.dataset.filter;
      calculateTotalPages();
      loadPosts(1);
    });
  });

  const searchInput = document.getElementById("searchInput");
  const searchIconBtn = document.getElementById("search-icon-btn");
  const searchContainer = document.getElementById("search-container");

  searchIconBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleSearchUI();
  });

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchPosts();
    }
  });

  document.addEventListener("click", (event) => {
    if (!searchContainer.contains(event.target)) {
      searchInput.classList.remove("active");
    }
  });
}

function toggleSearchUI() {
  const searchInput = document.getElementById("searchInput");
  const isActive = searchInput.classList.contains("active");

  if (!isActive) {
    searchInput.classList.add("active");
    searchInput.focus();
  } else {
    searchPosts();
  }
}

function searchPosts() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (!searchTerm) {
    searchInput.classList.remove("active");
    return;
  }

  filteredPosts = blogData.posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm)
  );

  blogData.totalPages = Math.ceil(filteredPosts.length / blogData.postsPerPage);
  document
    .querySelectorAll(".chip[data-filter]")
    .forEach((c) => c.classList.remove("active"));
  loadPosts(1);
}
const secretSalt = "ryper-salt";

// function openPost(postId) {
//   const post = blogData.posts.find((p) => p.id === postId);
//   if (!post) return;

//   localStorage.setItem("selectedPost", JSON.stringify(post));

//   const hashedId = CryptoJS.SHA256(postId + secretSalt).toString();

//   window.location.href = `https://ryperlabfasilkom.vercel.app/blog/detail?id=${hashedId}`;
// }
function openPost(postId) {
  const post = blogData.posts.find((p) => p.id === postId);
  if (!post) return;

  localStorage.setItem("selectedPost", JSON.stringify(post));
  const hashedId = CryptoJS.SHA256(postId + secretSalt).toString();

  // Gunakan query param, bukan dynamic segment
  const baseUrl = window.location.origin;
  window.location.href = `${baseUrl}/blog/detail?id=${hashedId}`;
}

document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (
    e.key === "F12" || // F12 (DevTools)
    (e.ctrlKey && e.shiftKey && key === "i") || // Ctrl+Shift+I (Inspect)
    (e.ctrlKey && e.shiftKey && key === "j") || // Ctrl+Shift+J (Console)
    (e.ctrlKey && e.shiftKey && key === "c") || // Ctrl+Shift+C (Inspect Element)
    (e.ctrlKey && key === "u") || // Ctrl+U (View Source)
    (e.ctrlKey && key === "s") || // Ctrl+S (Save Page)
    (e.metaKey && e.altKey && key === "i") || // Cmd+Option+I (Mac Inspect)
    (e.metaKey && e.altKey && key === "j") || // Cmd+Option+J (Mac Console)
    (e.metaKey && key === "s") || // Cmd+S (Mac Save)
    (e.metaKey && key === "u") // Cmd+U (Mac View Source)
  ) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Mau Lihat Apa Kak");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  initBlog();
  simulateDataRefresh();
});
