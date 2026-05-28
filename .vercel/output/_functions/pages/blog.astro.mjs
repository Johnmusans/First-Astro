import { c as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, e as renderHead } from '../chunks/astro/server_BmUviXb3.mjs';
import 'piccolore';
import { g as getCollection, $ as $$ThemeToggle } from '../chunks/_astro_content_B-ZH2iDd.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog", ({ data }) => !data.draft);
  const posts = allPosts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const allTags = [...new Set(posts.flatMap((p) => p.data.tags))];
  return renderTemplate(_a || (_a = __template([`<html lang="fr" class="scroll-smooth"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><title>Blog \u2014 John Musans</title><meta name="description" content="R\xE9flexions sur le design, le frontend et l'UX."><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Noto+Serif:wght@400&family=Inter:wght@400;500&display=swap" rel="stylesheet"><script>
      const _t = localStorage.getItem('theme');
      if (_t === 'dark' || (!_t && matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    <\/script>`, '</head> <body class="font-mono text-ink bg-paper-canvas antialiased"> <!-- Nav --> <header class="sticky top-0 z-50 bg-paper-canvas/85 backdrop-blur-md border-b border-pale-stone/15"> <div class="max-w-[1432px] mx-auto px-6 md:px-10"> <div class="flex items-center justify-between py-5"> <a href="/" class="font-display text-[22px] text-ink">John<span class="text-faint-text">.</span>M</a> <nav class="hidden md:flex items-center gap-2 text-[16px] text-off-black"> <a href="/#projets" class="px-2.5 py-2 hover:underline underline-offset-4">Projets</a> <a href="/#competences" class="px-2.5 py-2 hover:underline underline-offset-4">Comp\xE9tences</a> <a href="/blog" class="px-2.5 py-2 underline underline-offset-4">Blog</a> </nav> ', ' <a href="/#contact" class="inline-flex items-center gap-2 border border-off-black text-off-black rounded-full px-4 py-2 text-[14px] hover:bg-off-black hover:text-paper-canvas transition-colors">\nMe contacter \u2192\n</a> </div> </div> </header> <!-- Hero --> <section class="max-w-[1432px] mx-auto px-6 md:px-10 pt-16 pb-12"> <p class="text-[12px] tracking-[0.05em] uppercase text-off-black mb-4">Blog</p> <h1 class="font-display text-[48px] md:text-[64px] text-ink leading-[1.05] tracking-[-0.02em] max-w-3xl mb-6">\nR\xE9flexions sur le design.\n</h1> <p class="text-[16px] text-pale-stone max-w-xl leading-[1.5]">\nUX, design systems, frontend et observations sur les interfaces qui durent.\n</p> ', ' </section> <!-- Posts grid --> <section class="max-w-[1432px] mx-auto px-6 md:px-10 pb-24"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> ', ' </div> </section> <!-- Footer --> <footer class="border-t border-pale-stone/20"> <div class="max-w-[1432px] mx-auto px-6 md:px-10 py-10 flex flex-col sm:flex-row justify-between gap-4 text-[12px] tracking-[0.05em] uppercase text-faint-text"> <p>\xA9 ', ' John Musans</p> <a href="/" class="hover:text-ink">\u2190 Accueil</a> </div> </footer> </body></html>'])), renderHead(), renderComponent($$result, "ThemeToggle", $$ThemeToggle, {}), allTags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-8"> ${allTags.map((tag) => renderTemplate`<span class="text-[12px] tracking-[0.05em] uppercase text-off-black border border-off-black/60 rounded-full px-3 py-1">${tag}</span>`)} </div>`, posts.map((post, i) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")}${addAttribute(`group block rounded-[32px] p-5 transition-colors ${i === 0 ? "md:col-span-2 bg-atmosphere-wash" : "border border-pale-stone/20 hover:border-off-black"}`, "class")}> ${post.data.cover && renderTemplate`<div${addAttribute(`rounded-[20px] overflow-hidden bg-paper-canvas/60 mb-5 ${i === 0 ? "aspect-[21/9]" : "aspect-[16/9]"}`, "class")}> <img${addAttribute(post.data.cover, "src")}${addAttribute(post.data.title, "alt")} loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"> </div>`} <div class="flex flex-wrap gap-2 mb-3"> ${post.data.tags.map((tag) => renderTemplate`<span class="text-[12px] tracking-[0.05em] uppercase text-off-black border border-off-black/60 rounded-full px-3 py-1">${tag}</span>`)} </div> <h2${addAttribute(`font-display text-ink mb-2 leading-[1.2] ${i === 0 ? "text-[32px] md:text-[40px]" : "text-[22px]"}`, "class")}> ${post.data.title} </h2> <p class="text-[14px] text-pale-stone leading-[1.5] mb-4">${post.data.description}</p> <span class="text-[12px] tracking-[0.05em] uppercase text-faint-text"> ${post.data.date.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })} </span> </a>`), (/* @__PURE__ */ new Date()).getFullYear());
}, "C:/Users/JOHN-INT/Documents/Porto-john/First-Astro/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/JOHN-INT/Documents/Porto-john/First-Astro/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
