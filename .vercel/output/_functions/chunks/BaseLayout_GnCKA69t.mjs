import { e as createComponent, f as createAstro, r as renderTemplate, n as renderSlot, o as renderHead, h as addAttribute } from './astro/server_DyivjFfl.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href=""><meta name="generator"', '><title>Ryper Lab Universitas Jember</title><link rel="shortcut icon" href="images/logo.png" type="image/x-icon"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><!-- <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"> --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">', '</head> <body class="bg-gray-800 text-white" data-astro-cid-37fxchfa> ', ' <script src="https://kit.fontawesome.com/565fefc02a.js" crossorigin="anonymous"><\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/luky/Code/Web/Astro/web-profile-ryper/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
