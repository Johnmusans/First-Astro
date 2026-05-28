import { c as createComponent, a as createAstro, r as renderTemplate, f as renderScript, b as addAttribute, d as renderComponent, e as renderHead } from '../../chunks/astro/server_BmUviXb3.mjs';
import 'piccolore';
import { g as getCollection, $ as $$ThemeToggle } from '../../chunks/_astro_content_B-ZH2iDd.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const allProjects = await getCollection("projects");
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return Astro2.redirect("/404");
  const { Content } = await project.render();
  const other = allProjects.filter((p) => p.slug !== slug).sort((a, b) => a.data.order - b.data.order).slice(0, 3);
  const projectNum = String(project.data.order).padStart(2, "0");
  return renderTemplate(_a || (_a = __template(['<html lang="fr" class="scroll-smooth"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><title>', ' \u2014 John Musans</title><meta name="description"', `><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Noto+Serif:wght@400&family=Inter:wght@400;500&display=swap" rel="stylesheet"><script>
      const _t = localStorage.getItem('theme');
      if (_t === 'dark' || (!_t && matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    <\/script>`, '</head> <body class="font-mono text-ink bg-paper-canvas antialiased"> <!-- Reading progress bar --> <div id="progress-bar" class="fixed top-0 left-0 h-[2px] bg-ink z-[60]" style="width:0%"></div> <!-- Nav --> <header class="sticky top-0 z-50 bg-paper-canvas/85 backdrop-blur-md border-b border-pale-stone/15"> <div class="max-w-[1432px] mx-auto px-6 md:px-10"> <div class="flex items-center justify-between py-5"> <a href="/" class="font-display text-[22px] text-ink">John<span class="text-faint-text">.</span>M</a> <div class="flex items-center gap-4 md:gap-6"> <span class="hidden md:block text-[11px] tracking-[0.08em] uppercase text-faint-text truncate max-w-[220px]"> ', " \u2014 ", " </span> ", ' <a href="/#projets" class="inline-flex items-center gap-2 text-[13px] text-off-black border border-off-black/30 rounded-full px-4 py-2 hover:bg-off-black hover:text-paper-canvas transition-colors">\n\u2190 Projets\n</a> </div> </div> </div> </header> <!-- Hero --> <section class="max-w-[1432px] mx-auto px-6 md:px-10 pt-20 pb-14"> <div data-animate class="flex items-center gap-4 mb-10"> <span class="font-mono text-[11px] tracking-[0.1em] uppercase text-faint-text">', '</span> <span class="block h-[1px] w-8 bg-pale-stone/40"></span> <div class="flex flex-wrap gap-2"> ', ' </div> </div> <h1 data-animate data-delay="1" class="font-display text-[44px] md:text-[72px] lg:text-[88px] text-ink leading-[1.0] tracking-[-0.025em] max-w-5xl mb-10"> ', ' </h1> <div data-animate data-delay="2" class="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-pale-stone/20 pt-8"> <p class="text-[18px] md:text-[20px] text-pale-stone max-w-2xl leading-[1.55]">', "</p> ", ' </div> </section> <!-- Cover image --> <section data-animate class="max-w-[1432px] mx-auto px-6 md:px-10 pb-20"> <div class="w-full aspect-[16/9] rounded-[28px] overflow-hidden bg-atmosphere-wash shadow-[0_24px_64px_rgba(0,0,0,0.10)]"> <img', "", ' class="w-full h-full object-cover"> </div> </section> <!-- Content --> <section class="max-w-[760px] mx-auto px-6 md:px-10 pb-24"> <div data-animate class="project-content"> ', " </div> ", " </section> <!-- Other projects --> ", ' <!-- Footer --> <footer class="border-t border-pale-stone/20"> <div class="max-w-[1432px] mx-auto px-6 md:px-10 py-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] tracking-[0.05em] uppercase text-faint-text"> <p>\xA9 ', ` John Musans</p> <div class="flex items-center gap-6"> <a href="/#contact" class="hover:text-ink transition-colors">Me contacter \u2192</a> <button onclick="window.scrollTo({top:0,behavior:'smooth'})" class="hover:text-ink transition-colors cursor-pointer">\u2191 Haut de page</button> </div> </div> </footer> `, " </body> </html>"])), project.data.title, addAttribute(project.data.description, "content"), renderHead(), projectNum, project.data.title, renderComponent($$result, "ThemeToggle", $$ThemeToggle, {}), projectNum, project.data.tags.map((tag) => renderTemplate`<span class="text-[11px] tracking-[0.05em] uppercase text-off-black border border-off-black/50 rounded-full px-3 py-[3px]">${tag}</span>`), project.data.title, project.data.description, project.data.link && project.data.link !== "#" && renderTemplate`<a${addAttribute(project.data.link, "href")} target="_blank" rel="noopener" class="shrink-0 inline-flex items-center gap-2 text-[14px] text-ink border-b border-ink/30 pb-0.5 hover:border-ink transition-colors whitespace-nowrap">
Voir en ligne →
</a>`, addAttribute(project.data.image, "src"), addAttribute(project.data.title, "alt"), renderComponent($$result, "Content", Content, {}), project.data.link && project.data.link !== "#" && renderTemplate`<div data-animate class="mt-16"> <a${addAttribute(project.data.link, "href")} target="_blank" rel="noopener" class="group flex items-center justify-between bg-ink text-paper-canvas rounded-[24px] px-8 py-7 hover:bg-off-black transition-colors"> <span class="font-display text-[22px] md:text-[28px]">Voir le projet en ligne</span> <span class="w-10 h-10 rounded-full border border-paper-canvas/30 flex items-center justify-center text-[18px] group-hover:border-paper-canvas transition-colors">→</span> </a> </div>`, other.length > 0 && renderTemplate`<section class="max-w-[1432px] mx-auto px-6 md:px-10 pb-28"> <div class="border-t border-pale-stone/20 pt-16"> <div data-animate class="flex items-end justify-between mb-10 gap-6"> <div> <p class="text-[11px] tracking-[0.08em] uppercase text-faint-text mb-3">À voir aussi</p> <h2 class="font-display text-[32px] md:text-[40px] text-ink">Autres projets.</h2> </div> <a href="/#projets" class="hidden sm:block text-[13px] text-off-black border-b border-off-black/30 pb-0.5 hover:border-off-black transition-colors">
Voir tout →
</a> </div> <div data-animate data-delay="1" class="grid grid-cols-1 md:grid-cols-3 gap-5"> ${other.map((p) => renderTemplate`<a${addAttribute(`/projets/${p.slug}`, "href")} class="group block rounded-[28px] overflow-hidden border border-pale-stone/15 hover:border-off-black/40 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"> <div class="aspect-[4/3] overflow-hidden bg-atmosphere-wash"> <img${addAttribute(p.data.image, "src")}${addAttribute(p.data.title, "alt")} loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"> </div> <div class="p-5 bg-paper-canvas"> <div class="flex items-center justify-between mb-3"> <span class="font-mono text-[11px] tracking-[0.08em] uppercase text-faint-text">${String(p.data.order).padStart(2, "0")}</span> <span class="text-[10px] tracking-[0.04em] uppercase text-off-black/70">${p.data.tags[0]}</span> </div> <h3 class="font-display text-[20px] text-ink mb-1.5">${p.data.title}</h3> <p class="text-[13px] text-pale-stone leading-[1.5] line-clamp-2">${p.data.description}</p> </div> </a>`)} </div> </div> </section>`, (/* @__PURE__ */ new Date()).getFullYear(), renderScript($$result, "C:/Users/JOHN-INT/Documents/Porto-john/First-Astro/src/pages/projets/[slug].astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/JOHN-INT/Documents/Porto-john/First-Astro/src/pages/projets/[slug].astro", void 0);

const $$file = "C:/Users/JOHN-INT/Documents/Porto-john/First-Astro/src/pages/projets/[slug].astro";
const $$url = "/projets/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
