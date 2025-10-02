import { e as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent, f as createAstro, h as addAttribute, n as renderSlot } from './astro/server_DyivjFfl.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { House, Globe, Users, X, Menu, MapPin, Mail, Share2, Youtube, Linkedin, Instagram, Github } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { $ as $$BaseLayout } from './BaseLayout_GnCKA69t.mjs';
/* empty css                         */
import 'clsx';

const NavItem = ({
  Icon,
  nameRoute,
  destinationRoute
}) => {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: destinationRoute,
      className: "flex items-center space-x-3 md:space-x-2 hover:text-primary transition-all duration-300 hover:scale-105 hover:bg-gray-800 py-2 px-4 rounded-xl",
      children: [
        /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: nameRoute })
      ]
    }
  );
};

const DesktopNav = () => {
  return /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex gap-10 space-x-6 lg:space-x-8", children: [
    /* @__PURE__ */ jsx(NavItem, { Icon: House, nameRoute: "Home", destinationRoute: "/" }),
    /* @__PURE__ */ jsx(NavItem, { Icon: Globe, nameRoute: "Blog", destinationRoute: "/blogs" }),
    /* @__PURE__ */ jsx(NavItem, { Icon: Users, nameRoute: "About", destinationRoute: "/about" })
  ] });
};

const LogoHeader = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
    /* @__PURE__ */ jsx("div", { className: "text-white p-2 rounded", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "images/logo1.png",
        alt: "",
        className: "w-8 h-8 sm:w-10 sm:h-10"
      }
    ) }),
    /* @__PURE__ */ jsx("span", { className: "text-lg sm:text-xl font-bold text-white", children: "Ryper Lab" })
  ] });
};

const MobileMenuBtn = ({ Icon, setShow }) => {
  return /* @__PURE__ */ jsx("button", { className: "md:hidden text-white", onClick: setShow, children: /* @__PURE__ */ jsx(Icon, { className: "text-xl" }) });
};

const MobileNav = () => {
  return /* @__PURE__ */ jsxs("nav", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx(NavItem, { Icon: House, nameRoute: "Home", destinationRoute: "/" }),
    /* @__PURE__ */ jsx(NavItem, { Icon: Globe, nameRoute: "Blog", destinationRoute: "/blogs" }),
    /* @__PURE__ */ jsx(NavItem, { Icon: Users, nameRoute: "About", destinationRoute: "/about" })
  ] });
};

const MobileNavSection = ({ show, setShow }) => {
  return /* @__PURE__ */ jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxs(
    motion.section,
    {
      initial: { x: "100%" },
      animate: { x: 0 },
      exit: { x: "100%" },
      transition: { duration: 0.3, ease: "easeInOut" },
      className: "fixed top-0 right-0 px-4 py-7 h-screen w-64 bg-gray-900/95 backdrop-blur-3xl md:hidden z-[999]",
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(MobileMenuBtn, { Icon: X, setShow }) }),
        /* @__PURE__ */ jsx(MobileNav, {})
      ]
    },
    "mobile-menu"
  ) });
};

const HeaderSection = () => {
  const [show, setShow] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "fixed w-full top-0 z-50 border-b-2 border-gray-100/20 backdrop-blur bg-transparent", children: [
    /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx(LogoHeader, {}),
      /* @__PURE__ */ jsx(DesktopNav, {}),
      /* @__PURE__ */ jsx(MobileMenuBtn, { Icon: Menu, setShow: () => setShow(true) })
    ] }) }),
    /* @__PURE__ */ jsx(MobileNavSection, { show, setShow: () => setShow(false) })
  ] });
};

const $$LogoFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="space-y-4"> <div class="items-center space-x-3"> <div class="text-white p-2 rounded"> <img src="images/logo1.png" alt="" srcset="" class="w-10 h-10 sm:w-12 sm:h-12"> </div> <span class="text-lg sm:text-xl font-bold text-white">Ryper Lab</span> </div> </section>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/components/layouts/footer/main-footer/LogoFooter.astro", void 0);

const $$AddressFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="space-y-3"> <h3 class="text-white text-lg sm:text-xl font-semibold flex items-center gap-2"> ${renderComponent($$result, "MapPin", MapPin, { "className": "w-5 h-5" })} <span>Lokasi</span> </h3> <a href="https://maps.app.goo.gl/ETC3AsSNH9MStGZ69" target="_blank" class="block text-gray-300 hover:text-white transition-colors duration-300 text-sm leading-relaxed">
Fakultas Ilmu Komputer<br class="sm:hidden">
Universitas Jember
</a> </section>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/components/layouts/footer/main-footer/AddressFooter.astro", void 0);

const $$ContactFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="space-y-4"> <h3 class="text-white font-bold text-base sm:text-lg flex items-center space-x-2"> ${renderComponent($$result, "Mail", Mail, { "className": "w-5 h-5" })} <span>Contact Us</span> </h3> <a href="mailto:labrpl@cs.unej.ac.id" class="text-gray-300  hover:text-white transition-colors text-sm break-all">
labrpl@cs.unej.ac.id
</a> </section>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/components/layouts/footer/main-footer/ContactFooter.astro", void 0);

const $$Astro = createAstro();
const $$SocialItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialItem;
  const { Icon, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 text-xl"> ${renderComponent($$result, "Icon", Icon, { "className": "w-5 h-5" })} </a>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/components/layouts/footer/main-footer/SocialItem.astro", void 0);

const $$SocialFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="space-y-4"> <h3 class="text-white font-bold text-base sm:text-lg flex items-center space-x-2"> ${renderComponent($$result, "Share2", Share2, { "className": "w-5 h-5" })} <span>Social Media</span> </h3> <div class="flex space-x-4"> ${renderComponent($$result, "SocialItem", $$SocialItem, { "Icon": Youtube, "href": "https://www.youtube.com/@rplunej5484" })} ${renderComponent($$result, "SocialItem", $$SocialItem, { "Icon": Linkedin, "href": "https://www.linkedin.com/company/ryper-lab/" })} ${renderComponent($$result, "SocialItem", $$SocialItem, { "Icon": Instagram, "href": "https://www.instagram.com/ryperlabunej/" })} ${renderComponent($$result, "SocialItem", $$SocialItem, { "Icon": Github, "href": "https://github.com/RyperLab-UNEJ/" })} </div> </section>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/components/layouts/footer/main-footer/SocialFooter.astro", void 0);

const $$MainFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-52"> ${renderComponent($$result, "LogoFooter", $$LogoFooter, {})} ${renderComponent($$result, "AddressFooter", $$AddressFooter, {})} ${renderComponent($$result, "ContactFooter", $$ContactFooter, {})} ${renderComponent($$result, "SocialFooter", $$SocialFooter, {})} </section>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/components/layouts/footer/main-footer/MainFooter.astro", void 0);

const $$CopyrightFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mt-8"> <p class="text-gray-500 text-sm text-center sm:text-left">
&copy; Copyright 2025
</p> </section>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/components/layouts/footer/CopyrightFooter.astro", void 0);

const $$FooterSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Footer -->${maybeRenderHead()}<footer class="bg-[#002C4B] py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> ${renderComponent($$result, "MainFooter", $$MainFooter, {})} ${renderComponent($$result, "CopyrightFooter", $$CopyrightFooter, {})} </div> </footer>`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/components/layouts/footer/FooterSection.astro", void 0);

const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderSection", HeaderSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/layouts/header/HeaderSection", "client:component-export": "HeaderSection" })} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "FooterSection", $$FooterSection, {})} ` })}`;
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
