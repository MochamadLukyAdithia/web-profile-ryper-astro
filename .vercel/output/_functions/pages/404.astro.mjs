import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DyivjFfl.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_B2kaYLGz.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "showHeader": true, "showFooter": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#00052B] flex items-center justify-center px-4 py-16"> <div class="max-w-2xl mx-auto text-center"> <img src="/images/logo1.png" alt="Ryper Lab Logo" class="w-32 h-32 mx-auto mb-8"> <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">404</h1> <h2 class="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
Halaman Tidak Ditemukan
</h2> <p class="text-gray-400 mb-8 max-w-lg mx-auto">
Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan kembali ke halaman utama.
</p> <a href="/" class="inline-block px-6 py-3 bg-[#0D1236] text-white font-medium rounded-lg hover:bg-[#202448] transition-colors duration-300">
Kembali ke Beranda
</a> </div> </main> ` })}`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/pages/404.astro", void 0);

const $$file = "/home/luky/Code/Web/Astro/web-profile-ryper/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
