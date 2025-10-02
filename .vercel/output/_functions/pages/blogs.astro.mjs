import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate, h as addAttribute, k as renderComponent } from '../chunks/astro/server_DyivjFfl.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_B2kaYLGz.mjs';
/* empty css                                 */
import { a as api, h as handleApiError, f as formatWIB } from '../chunks/time_formatter_C_paRFDo.mjs';
import 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

const isBlogArray = (data) => {
  return Array.isArray(data);
};
const readBlogsService = async () => {
  try {
    const blogs = (await api.get("/blogs")).data;
    return blogs;
  } catch (error) {
    const errorMessage = handleApiError(error, "data blog");
    return { error: errorMessage };
  }
};

function getBlogsListingParams(url) {
  const category = (url.searchParams.get("filter") ?? "all").toLowerCase();
  const searchQuery = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  const currentPage = Number(url.searchParams.get("page") ?? "1");
  return { category, searchQuery, currentPage };
}

const $$Astro$3 = createAstro();
const $$BlogHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlogHero;
  const { title = "BLOG" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="home" class="relative min-h-screen flex overflow-hidden"> <div class="absolute top-0 left-0 z-0"> <img src="/images/about/elemt-left.png" alt="Left Decoration" class="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[50rem] xl:h-[50rem] object-cover"> </div> <div class="absolute top-0 right-0 z-0"> <img src="/images/about/element-right.png" alt="Right Decoration" class="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[50rem] xl:h-[50rem] object-cover"> </div> <div class="absolute left-12 sm:left-24 md:left-36 lg:left-48 xl:left-60 top-1/2 -translate-y-1/2 z-20 text-white text-left"> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-wider"> ${title} </h1> </div> </section>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/features/blogs/components/BlogHero.astro", void 0);

function mergeSearchParams(base, params) {
  const searchParams = new URLSearchParams(base);
  Object.entries(params).forEach(([paramKey, paramValue]) => {
    paramValue === void 0 || paramValue === null || paramValue === "" ? searchParams.delete(paramKey) : searchParams.set(paramKey, String(paramValue));
  });
  return `?${searchParams.toString()}`;
}

const $$Astro$2 = createAstro();
const $$BlogFilters = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogFilters;
  const { currentFilter, searchQuery, baseSearchParams } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 "> <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-0">
NEWEST POST
</h2> <div class="flex flex-wrap items-center gap-3"> <a${addAttribute(mergeSearchParams(baseSearchParams, { filter: "all", page: 1 }), "href")}${addAttribute(`chip px-4 py-2 rounded-full text-sm font-medium ${currentFilter === "all" ? "active" : ""}`, "class")}>
All
</a> <a${addAttribute(mergeSearchParams(baseSearchParams, { filter: "event", page: 1 }), "href")}${addAttribute(`chip px-4 py-2 rounded-full text-sm font-medium ${currentFilter === "event" ? "active" : ""}`, "class")}>
Event
</a> <a${addAttribute(mergeSearchParams(baseSearchParams, { filter: "material", page: 1 }), "href")}${addAttribute(`chip px-4 py-2 rounded-full text-sm font-medium ${currentFilter === "material" ? "active" : ""}`, "class")}>
Workshop
</a> <a${addAttribute(mergeSearchParams(baseSearchParams, { filter: "pengenalan", page: 1 }), "href")}${addAttribute(`chip px-4 py-2 rounded-full text-sm font-medium ${currentFilter === "pengenalan" ? "active" : ""}`, "class")}>
Pengenalan
</a> <a${addAttribute(mergeSearchParams(baseSearchParams, { filter: "latest", page: 1 }), "href")}${addAttribute(`chip px-4 py-2 rounded-full text-sm font-medium mr-6 ${currentFilter === "latest" ? "active" : ""}`, "class")}>
Penelitian
</a> <div id="search-container"> <form${addAttribute(Astro2.url.pathname, "action")} method="get" class="flex items-center gap-2"> <input type="hidden" name="filter"${addAttribute(currentFilter, "value")}> <input type="text" name="q"${addAttribute(searchQuery, "value")} placeholder="Search..." class="px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00052B]"> <button type="submit" class="px-4 py-2 rounded-full text-sm font-medium bg-[#0D1236] hover:bg-[#202448] transition-colors cursor-pointer"> <svg class="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> </form> </div> </div> </section>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/features/blogs/components/BlogFilters.astro", void 0);

const processBlogsService = (blogs, filter, query, page) => {
  if (!blogs || blogs.length === 0) {
    return { postsToShow: [], totalPages: 1, currentPage: 1 };
  }
  const isFilterAll = filter === "all";
  const hasQuery = !!query && query.length > 0;
  const filtered = blogs.filter((post) => {
    const matchesCategory = isFilterAll || post.category.toLowerCase() === filter;
    if (matchesCategory && hasQuery) {
      const q = query.toLowerCase();
      return post.judul.toLowerCase().includes(q) || post.deskripsi.toLowerCase().includes(q);
    }
    return matchesCategory;
  });
  const postsPerPage = 9;
  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / postsPerPage));
  const currentPage = Math.min(Math.max(1, isNaN(page) ? 1 : page), totalPages);
  const startIndex = (currentPage - 1) * postsPerPage;
  const postsToShow = filtered.slice(startIndex, startIndex + postsPerPage);
  return { postsToShow, totalPages, currentPage };
};

function BlogCard({ post }) {
  return /* @__PURE__ */ jsx("div", { className: "blog-card rounded-2xl overflow-hidden fade-in cursor-pointer transition-transform hover:scale-[1.02]", children: /* @__PURE__ */ jsxs("a", { href: `/blogs/${post.id_blog}`, className: "block", children: [
    /* @__PURE__ */ jsxs("div", { className: "image-wrapper relative", children: [
      /* @__PURE__ */ jsx("img", { src: post.gambar, alt: "Blog Image" }),
      /* @__PURE__ */ jsx("div", { className: "category-badge absolute top-2 right-2 bg-white text-black px-3 py-1 text-xs font-semibold rounded-full shadow", children: post.category })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3 line-clamp-2 text-black hover:text-blue-400 transition-colors", children: post.judul }),
      /* @__PURE__ */ jsx("p", { className: "text-black text-sm mb-4", children: formatWIB(post.createdAt) }),
      /* @__PURE__ */ jsx("p", { className: "text-black text-sm leading-relaxed line-clamp-6", children: post.deskripsi })
    ] })
  ] }) });
}

function BlogGrid({ posts }) {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "blog-grid",
      className: "grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 ",
      children: [
        posts.map((post) => /* @__PURE__ */ jsx(BlogCard, { post })),
        posts.length === 0 && /* @__PURE__ */ jsx("div", { className: "col-span-full text-center text-gray-400", children: "Tidak ada postingan yang cocok." })
      ]
    }
  );
}

function BlogPagination({
  currentPage,
  totalPages,
  baseQueryString
}) {
  const base = new URLSearchParams(baseQueryString);
  return /* @__PURE__ */ jsx("section", { id: "pagination", className: "flex justify-center space-x-2 pb-20 ", children: totalPages > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: `pagination-btn ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-900"}`,
        "aria-disabled": currentPage === 1,
        href: currentPage === 1 ? "#" : mergeSearchParams(base, { page: currentPage - 1 }),
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M15 19l-7-7 7-7"
              }
            )
          }
        )
      }
    ),
    Array.from({ length: totalPages }, (_, i) => i + 1).slice(
      Math.max(0, currentPage - 3),
      Math.max(0, currentPage - 3) + 5
    ).map((i) => /* @__PURE__ */ jsx(
      "a",
      {
        href: mergeSearchParams(base, { page: i }),
        className: `pagination-btn ${i === currentPage ? "active" : "bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-900"}`,
        children: i
      },
      i
    )),
    /* @__PURE__ */ jsx(
      "a",
      {
        className: `pagination-btn ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "bg-gray-800 text-gray-400 hover:bg-white hover:text-gray-900"}`,
        "aria-disabled": currentPage === totalPages,
        href: currentPage === totalPages ? "#" : mergeSearchParams(base, { page: currentPage + 1 }),
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M9 5l7 7-7 7"
              }
            )
          }
        )
      }
    )
  ] }) });
}

const BlogContent = ({
  blogs,
  currentFilter,
  searchQuery,
  pageParam,
  baseQueryString
}) => {
  const { postsToShow, totalPages, currentPage } = processBlogsService(
    blogs,
    currentFilter,
    searchQuery,
    pageParam
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(BlogGrid, { posts: postsToShow }),
    /* @__PURE__ */ jsx(
      BlogPagination,
      {
        currentPage,
        totalPages,
        baseQueryString
      }
    )
  ] });
};

const $$Astro$1 = createAstro();
const $$ErrorBoundary = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ErrorBoundary;
  const {
    title = "Terjadi Kesalahan",
    message,
    showIcon = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="error-message-container flex flex-col items-center justify-center py-12 px-6 min-h-[300px]"> <div class="error-content max-w-md text-center"> ${showIcon && renderTemplate`<div class="mb-4"> <svg class="w-16 h-16 mx-auto text-red-500 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path> </svg> </div>`} <h2 class="text-xl font-semibold text-gray-200 mb-3 shadow-sm"> ${title} </h2> <p class="text-gray-400 leading-relaxed"> ${message} </p> <div class="mt-6"> <button onclick="window.location.reload()" class="px-6 py-2 bg-[#002C4B] hover:bg-[#02416e] text-white rounded-lg transition-colors cursor-pointer hover:translate-y-[-1px] hover:shadow-lg hover:shadow-blue-900/30">
Coba Lagi
</button> </div> </div> </div>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/components/boundaries/ErrorBoundary.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Blogs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blogs;
  const url = Astro2.url;
  const { category: currentFilter, searchQuery, currentPage: pageParam } = getBlogsListingParams(url);
  const blogs = await readBlogsService();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="g min-h-screen  bg-gray-900"> <div class="content-wrapper"> ${renderComponent($$result2, "BlogHero", $$BlogHero, {})} <div class="max-w-[1260px] mx-auto px-6 pt-20"> ${renderComponent($$result2, "BlogFilters", $$BlogFilters, { "currentFilter": currentFilter, "searchQuery": searchQuery, "baseSearchParams": url.searchParams })} ${isBlogArray(blogs) ? renderTemplate`${renderComponent($$result2, "BlogContent", BlogContent, { "blogs": blogs, "currentFilter": currentFilter, "searchQuery": searchQuery, "pageParam": pageParam, "baseQueryString": url.searchParams.toString(), "client:load": true, "client:component-hydration": "load", "client:component-path": "@/features/blogs/components/BlogContent", "client:component-export": "BlogContent" })}` : renderTemplate`${renderComponent($$result2, "ErrorBoundary", $$ErrorBoundary, { "title": "Terjadi Kesalahan pada Blog", "message": blogs.error })}`} </div> </div> </main> ` })}`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/pages/blogs.astro", void 0);

const $$file = "/home/luky/Code/Web/Astro/web-profile-ryper/src/pages/blogs.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blogs,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
