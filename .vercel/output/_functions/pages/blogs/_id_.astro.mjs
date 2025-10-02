import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate, h as addAttribute, k as renderComponent, l as Fragment, u as unescapeHTML } from '../../chunks/astro/server_DyivjFfl.mjs';
import 'kleur/colors';
/* empty css                                   */
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_GnCKA69t.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { ArrowLeft } from 'lucide-react';
import 'clsx';
import { a as api, h as handleApiError, f as formatWIB } from '../../chunks/time_formatter_C_paRFDo.mjs';
export { renderers } from '../../renderers.mjs';

const BackBtn = () => {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => history.back(),
      className: "back-button backdrop-blur-md cursor-pointer bg-white/10 px-6 py-3 rounded-2xl text-sm font-medium text-white hover:bg-white/20 flex items-center gap-2 shadow-lg",
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
        "Kembali"
      ]
    }
  );
};

const $$Astro$6 = createAstro();
const $$NotFoundError = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NotFoundError;
  const { message = "ID tidak ditemukan" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center py-16"> <div class="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path> </svg> </div> <p class="text-gray-400 text-lg">${message}</p> </div>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/components/boundaries/NotFoundError.astro", void 0);

const isBlogType = (data) => {
  return !("error" in data);
};
const readBlogDetailService = async (id) => {
  try {
    const blog = (await api.get(`/blogs/${id}`)).data;
    return blog;
  } catch (error) {
    const errorMessage = handleApiError(error, "blog");
    return { error: errorMessage };
  }
};

const $$Astro$5 = createAstro();
const $$BlogHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BlogHeader;
  const { blog } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="space-y-4"> <div class="flex items-center gap-3 text-sm text-gray-400 flex-wrap"> <time${addAttribute(blog.createdAt, "datetime")} class="flex items-center gap-1"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z"></path> </svg> ${formatWIB(blog.createdAt)} </time> <span class="text-gray-600">•</span> <span class="inline-flex items-center px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium uppercase tracking-wide"> ${blog.category} </span> </div> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white"> ${blog.judul} </h1> </div>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/features/blogs/components/detail/BlogHeader.astro", void 0);

const $$Astro$4 = createAstro();
const $$BlogFeaturedImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BlogFeaturedImage;
  const { blog } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden rounded-xl bg-gray-800"> <img${addAttribute(blog.gambar, "src")}${addAttribute(blog.judul, "alt")} class="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> </div>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/features/blogs/components/detail/BlogFeaturedImage.astro", void 0);

const $$Astro$3 = createAstro();
const $$BlogContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlogContent;
  const { blog } = Astro2.props;
  const formatContent = (description) => {
    return description.split("\n").map(
      (paragraph) => paragraph.trim() ? `<p>${paragraph.trim()}</p>` : ""
    ).join("");
  };
  return renderTemplate`${maybeRenderHead()}<div class="prose prose-lg prose-invert max-w-none"> <div class="text-gray-200 leading-relaxed space-y-4 text-base sm:text-lg"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(formatContent(blog.deskripsi))}` })} </div> </div>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/features/blogs/components/detail/BlogContent.astro", void 0);

const $$Astro$2 = createAstro();
const $$BlogArticle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogArticle;
  const { blog } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="space-y-6"> <!-- Header Section: Metadata dan Judul --> ${renderComponent($$result, "BlogHeader", $$BlogHeader, { "blog": blog })} <!-- Featured Image Section --> ${renderComponent($$result, "BlogFeaturedImage", $$BlogFeaturedImage, { "blog": blog })} <!-- Article Content Section --> ${renderComponent($$result, "BlogContent", $$BlogContent, { "blog": blog })} </article>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/features/blogs/components/detail/BlogArticle.astro", void 0);

const $$Astro$1 = createAstro();
const $$BlogDetailSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogDetailSection;
  const { id } = Astro2.props;
  const blog = await readBlogDetailService(id);
  return renderTemplate`${maybeRenderHead()}<div id="detailContainer" class="space-y-8"> ${isBlogType(blog) ? renderTemplate`${renderComponent($$result, "BlogArticle", $$BlogArticle, { "blog": blog })}` : renderTemplate`${renderComponent($$result, "NotFoundError", $$NotFoundError, { "message": blog.error })}`} </div>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/features/blogs/components/detail/BlogDetailSection.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="fixed top-6 left-6 z-50 hidden sm:block"> ${renderComponent($$result2, "BackBtn", BackBtn, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/BackBtn", "client:component-export": "BackBtn" })} </section> <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> ${id ? renderTemplate`${renderComponent($$result2, "BlogDetailSection", $$BlogDetailSection, { "id": id })}` : renderTemplate`${renderComponent($$result2, "NotFoundError", $$NotFoundError, { "message": "Blog dengan ID tersebut tidak dapat ditemukan" })}`} </main>  ` })}`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/pages/blogs/[id].astro", void 0);

const $$file = "/home/luky/Code/Web/Astro/web-profile-ryper/src/pages/blogs/[id].astro";
const $$url = "/blogs/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
