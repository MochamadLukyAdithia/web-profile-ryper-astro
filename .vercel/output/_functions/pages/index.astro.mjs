import { e as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_DyivjFfl.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_B2kaYLGz.mjs';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="home" class=" min-h-screen flex items-center justify-center pt-20 sm:pt-40"> <!-- Background Image --> <div class="absolute inset-0 z-0"> <img src="images/background.png" alt="Lab Background" class="w-full h-full relative object-cover"> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-black/50"></div> <div class="absolute inset-0" style="
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 20%,
        #00052b 100%
      );
    "></div> </div> <!-- Konten Tengah --> <div class="relative z-30 text-center max-w-5xl mx-auto px-4 sm:px-6"> <!-- Logo --> <div class="flex justify-center items-center mb-6 sm:mb-8"> <img src="images/logo1.png" alt="Logo Ryper Lab" class="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"> </div> <!-- Judul --> <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
Ryper Lab Universitas Jember
</h1> <!-- Subjudul --> <h2 class="text-lg sm:text-2xl md:text-3xl text-gray-300 font-light mb-6 sm:mb-8">
Laboratorium Rekayasa Perangkat Lunak
</h2> <!-- Deskripsi --> <p class="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
Ryper Lab merupakan salah satu laboratorium yang dimiliki oleh
    Fakultas Ilmu Komputer Universitas Jember yang berfokus pada analisis,
    pengembangan, desain dan implementasi perangkat lunak. Ryper Lab
    memiliki asisten laboratorium yang terbagi menjadi 3 bidang yang
    terdiri dari asisten praktikum (pendidikan), asisten penelitian.
</p> </div> </section>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/features/home/components/HeroSection.astro", void 0);

const MissionAccordion = ({ item, number }) => {
  const [show, setShow] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl overflow-hidden bg-[#0D1236] bg-opacity-5", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        className: "w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-white/20 hover:bg-opacity-10 transition-all duration-300",
        onClick: () => setShow(!show),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 sm:space-x-4", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-white text-[#00052B] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0", children: number }),
            /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-base font-medium text-white", children: item.title })
          ] }),
          show ? /* @__PURE__ */ jsx(ChevronUp, { className: "text-white" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "text-white" })
        ]
      }
    ),
    show && /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.1 },
        className: "accordion-content px-4 sm:px-6 pb-6 overflow-hidden",
        children: /* @__PURE__ */ jsx("p", { className: "text-gray-300 ml-13 sm:ml-16 pt-4 text-sm sm:text-base", children: item.content })
      }
    ) })
  ] });
};

const $$MissionSection = createComponent(($$result, $$props, $$slots) => {
  const items = [
    {
      title: "Menyelenggarakan proses akademik yang bermutu dan berdaya saing tinggi",
      content: "Menunjang dan menyelenggarakan proses pembelajaran yang bermutu dan berdayasaing tinggi untuk menghasilkan lulusan yang jujur, cerdas, berakhlak mulia, profesional dan kompeten di bidang IPTEK."
    },
    {
      title: "Meningkatkan kualitas penelitian dan pengabdian masyarakat",
      content: "Mengembangkan inovasi penelitian dan pengabdian masyarakat berbasis teknologi untuk meningkatkan kontribusi terhadap perkembangan IPTEK dan kesejahteraan masyarakat."
    },
    {
      title: "Mendukung kegiatan akademik maupun non akademik",
      content: " Memberikan dukungan penuh terhadap berbagai kegiatan yang mendukung pengembangan akademik dan non-akademik mahasiswa dan dosen."
    },
    {
      title: "Menyelenggarakan dan menjalankan pengabdian kepada masyarakat",
      content: "  Melaksanakan program-program pengabdian masyarakat untuk memberikan kontribusi nyata bagi kemajuan teknologi dan kesejahteraan masyarakat."
    },
    {
      title: "Menjalin hubungan kemitraan dengan dunia usaha",
      content: "Membangun kerjasama strategis dengan industri dan dunia usaha untuk menjembatani gap antara akademik dan praktik industri."
    },
    {
      title: "Mewadahi dan memfasilitasi seluruh mahasiswa Fakultas Ilmu Komputer",
      content: " Menyediakan fasilitas dan program yang mendukung pengembangan kemampuan seluruh mahasiswa Fakultas Ilmu Komputer dalam bidang rekayasa perangkat lunak."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20 bg-[#00052B] relative overflow-hidden"> <img src="images/left-element.png" alt="Left Decoration" class="absolute left-0 bottom-0 h-full object-contain z-0"> <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10"> <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
Misi
</h2> <div class="flex flex-col gap-4"> ${items.map((item, index) => renderTemplate`${renderComponent($$result, "MissionAccordion", MissionAccordion, { "number": index + 1, "item": item, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/luky/Code/Web/Astro/web-profile-ryper/src/features/home/components/MissionAccordion", "client:component-export": "MissionAccordion" })}`)} </div> </div> </section>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/features/home/components/MissionSection.astro", void 0);

const $$VisionSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20 bg-[#00052B] relative overflow-hidden"> <img src="images/left-element2.png" alt="Visi Background" class="absolute inset-0 w-[500px] h-[500px] bottom-0 object-cover z-50"> <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10"> <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
Visi
</h2> <div class="text-center max-w-4xl mx-auto"> <p class="text-base sm:text-lg text-gray-300 leading-relaxed">
Unggul dalam riset dan pengembangan di bidang Rekayasa Perangkat
          Lunak (RPL) maupun IPTEK yang berkompeten serta berdaya saing tinggi
          sehingga dapat menjadi pusat rujukan penelitian dan pengembangan di
          bidang Rekayasa Perangkat Lunak yang selaras dengan visi dan misi
          fakultas.
</p> </div> </div> </section>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/features/home/components/VisionSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="global-loader" data-loader-time="500" class="loader-overlay fixed inset-0 bg-[#00052B] -z-10 flex items-center justify-center  show"> <div class="loader"></div> </div> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "VisionSection", $$VisionSection, {})} ${renderComponent($$result2, "MissionSection", $$MissionSection, {})} ` })}`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/pages/index.astro", void 0);

const $$file = "/home/luky/Code/Web/Astro/web-profile-ryper/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
