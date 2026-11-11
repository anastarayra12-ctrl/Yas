(() => {
  "use strict";

  /* ---------------- Data ---------------- */
  const PROJECTS = [
    {
      id: "cade35fa", vertical: true,
      en: "Promo — “Lil-Qissa Baqiya”, Al Jazeera Network",
      ar: "برومو لـ برنامج للقصة بقية - شبكة الجزيرة",
      type: { en: "Promo", ar: "برومو" }, tools: ["Pr", "Ae"],
      client: 0, cover: "assets/work/cade35fa_cover.jpg", video: "assets/work/cade35fa_video.mp4"
    },
    {
      id: "8bf42101", vertical: false,
      en: "Promo — Damascus International Book Fair",
      ar: "برومو لـ معرض الكتاب في سوريا",
      type: { en: "Promo", ar: "برومو" }, tools: ["Pr"],
      client: 2, cover: "assets/work/8bf42101_cover.jpg", drive: "1szOlEhyRA02h-RhIUXL8ZDt1_mwuBdWR"
    },
    {
      id: "fbdf921f", vertical: true,
      en: "Motion Graphics — Syrian Ministry of Culture",
      ar: "موشن جرافيك لـ وزارة الثقافة السورية",
      type: { en: "Motion", ar: "موشن" }, tools: ["Ae"],
      client: 2, cover: "assets/work/fbdf921f_cover.jpg", video: "assets/work/fbdf921f_video.mp4"
    },
    {
      id: "38ca7c90", vertical: false,
      en: "Promo — Syria Liberation Anniversary",
      ar: "برومو لـ ذكرى تحرير سوريا",
      type: { en: "Promo", ar: "برومو" }, tools: ["Pr", "Ae"],
      cover: "assets/work/38ca7c90_cover.jpg", drive: "1fT4csnDmGE8AgUd8swpB9L7ExikJOvsF"
    },
    {
      id: "06d3f95b", vertical: false,
      en: "Promo — “Al-Wafaa for Idlib” Campaign",
      ar: "برومو لـ حملة الوفاء لـ إدلب",
      type: { en: "Campaign", ar: "حملة" }, tools: ["Pr", "Ae"],
      cover: "assets/work/06d3f95b_cover.jpg", drive: "1PoinEWJiCufyDu4sGpewa3hmE_2UQmd0"
    }
  ];

  const CLIENTS = [
    { name: "Al Jazeera", ar: "الجزيرة", src: "assets/clients/6701.jpg", link: "https://www.youtube.com/@aljazeera", platform: "YouTube" },
    { name: "Syrian Ministry of Interior", ar: "وزارة الداخلية السورية", src: "assets/clients/6700.jpg", link: "https://www.youtube.com/@syrianmoi", platform: "YouTube" },
    { name: "Ministry of Culture Syria", ar: "وزارة الثقافة السورية", src: "assets/clients/6699.jpg", link: "https://www.youtube.com/@MinistryofCultureSyria", platform: "YouTube" },
    { name: "SANA News Agency", ar: "الوكالة العربية السورية للأنباء", src: "assets/clients/3986.png", link: "https://www.instagram.com/sana__gov/", platform: "Instagram" },
    { name: "Istanbul Arabic Book Fair", ar: "معرض إسطنبول الدولي للكتاب العربي", src: "assets/clients/4307.jpg", link: "https://www.instagram.com/arabic.bookfair/", platform: "Instagram" },
    { name: "Syrian Development Fund", ar: "صندوق التنمية السوري", src: "assets/clients/4306.png", link: "https://www.instagram.com/sydf.syria/", platform: "Instagram" },
    { name: "Fuad Sayed Issa", ar: "فؤاد سيد عيسى", src: "assets/clients/3988.png", link: "https://www.instagram.com/fuad_sayedissa/", platform: "Instagram" },
    { name: "Fasih e-okul", ar: "مدرسة فصيح الافتراضية", src: "assets/clients/3987.png", link: "https://www.instagram.com/fasihokul/", platform: "Instagram" },
    { name: "Trend X", ar: "ترند إكس", src: "assets/clients/3985.png", link: "https://www.instagram.com/trendx_creative/", platform: "Instagram" }
  ];

  const I18N = {
    ar: {
      "nav.about": "نبذة", "nav.work": "الأعمال", "nav.clients": "العملاء", "nav.contact": "تواصل",
      "status": "متاح للعمل",
      "hero.badge": "مونتير ومصمم موشن في الجزيرة",
      "hero.eyebrow": "مونتير · مصمم موشن · صانع أفلام",
      "hero.sub": "مونتاج فيديوهات طويلة وقصيرة لصنّاع المحتوى والعلامات التجارية والقنوات — من الجزيرة إلى الحملات الوطنية.",
      "hero.scroll": "مرّر لتشغيل الشريط",
      "hero.statement": "أصنع فيديوهات <em>تجذب</em> الجمهور، <em>تُبرز</em> علامتك التجارية، وتجعل محتواك <em>يتألّق</em>.",
      "about.tag": "مونتير · سوريا",
      "about.kicker": "نبذة",
      "about.title": "قصص تُقطَّع بإيقاع وهدف وحب.",
      "about.bio": "مونتير فيديوهات طويلة وقصيرة لصنّاع المحتوى والفيديوهات الترويجية. أصنع فيديوهات تجذب الجمهور، تُبرز علامتك التجارية، وتجعل محتواك يتألّق.",
      "about.role": "الدور", "about.roleVal": "مونتير ومصمم موشن في الجزيرة",
      "about.based": "من", "about.country": "سوريا", "about.langs": "اللغات", "about.status": "الحالة",
      "stats.followers": "متابع على إنستغرام", "stats.clients": "علامات وقنوات", "stats.tools": "أدوات في العُدّة", "stats.langs": "لغات",
      "tools.edit": "برامج المونتاج", "tools.ai": "أدوات الذكاء الاصطناعي",
      "work.kicker": "أعمال مختارة", "work.title": "أبرز الأعمال.",
      "work.play": "شغّل الفيديو", "work.for": "لصالح", "work.drag": "اسحب للتصفح",
      "insta.kicker": "خلف الكواليس", "insta.title": "تابع الشغل من قريب.",
      "insta.followers": "متابع", "insta.follow": "تابع على إنستغرام",
      "clients.kicker": "وثقوا بي", "clients.title": "قنوات ووزارات وعلامات عملت معها.",
      "contact.kicker": "تواصل",
      "contact.sub": "عندك لقطات أو حملة أو قناة تحتاج مونتاج أقوى؟ خلّينا نحكي.",
      "contact.copy": "نسخ البريد",
      "footer.top": "للأعلى ↑",
      "toast.copied": "تم نسخ البريد"
    },
    en: { "toast.copied": "Email copied", "work.for": "For" }
  };

  /* ---------------- Helpers ---------------- */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const range = (v, a, b) => clamp((v - a) / (b - a), 0, 1);
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const cursor = $("#cursor");
  let vw = innerWidth, vh = innerHeight;
  let mouseX = 0, mouseY = 0, smX = 0, smY = 0;

  function sectionProgress(el) {
    const r = el.getBoundingClientRect();
    const total = r.height - vh;
    return total > 0 ? clamp(-r.top / total, 0, 1) : 0;
  }

  /* ---------------- i18n ---------------- */
  let lang = "en";
  try { lang = localStorage.getItem("ys-lang") || "en"; } catch (e) {}

  const enText = {};
  $$("[data-i18n]").forEach(el => { enText[el.dataset.i18n] = el.innerHTML; });
  const t = key => (I18N[lang] && I18N[lang][key]) || I18N.en[key] || enText[key] || key;

  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    $(".lang-face").textContent = lang === "ar" ? "EN" : "ع";
    splitWords();
    renderWork();
    renderRing();
    renderHighlights();
  }

  /* Language switch: three panels sweep across like a film leader, the page
     swaps language while it is covered, then the panels sweep off. */
  const wipe = $("#langWipe");
  const wipePanels = $$(".lw-panel", wipe);
  const wipeLabel = $(".lw-label", wipe);
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  let switching = false;

  async function switchLang() {
    if (switching) return;
    const next = lang === "ar" ? "en" : "ar";
    const commit = () => {
      lang = next;
      try { localStorage.setItem("ys-lang", lang); } catch (e) {}
      applyLang();
    };
    const btn = $("#langBtn");
    btn.classList.remove("flip"); void btn.offsetWidth; btn.classList.add("flip");
    if (reduced || !wipe.animate) { commit(); return; }
    switching = true;
    $("#lwText").textContent = next === "ar" ? "العربية" : "English";
    $("#lwText").classList.toggle("ar", next === "ar");
    wipe.classList.add("on");
    // Arabic reads right-to-left, so its wipe travels that way
    const from = next === "ar" ? "101%" : "-101%";
    const to = next === "ar" ? "-101%" : "101%";
    const ease = "cubic-bezier(.76,0,.24,1)";
    await Promise.all(wipePanels.map((el, i) =>
      el.animate([{ transform: `translateX(${from})` }, { transform: "translateX(0)" }],
        { duration: 560, delay: i * 80, easing: ease, fill: "forwards" }).finished));
    const tc = $(".lw-tc", wipe);
    const t0 = performance.now();
    const tick = () => {
      const f = Math.floor((performance.now() - t0) / 41.7);
      tc.textContent = `00:00:${String(Math.floor(f / 24)).padStart(2, "0")}:${String(f % 24).padStart(2, "0")}`;
      if (switching) requestAnimationFrame(tick);
    };
    tick();
    await wipeLabel.animate([{ opacity: 0, transform: "translateY(24px) scale(.96)", filter: "blur(8px)" }, { opacity: 1, transform: "none", filter: "blur(0)" }],
      { duration: 380, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }).finished;
    commit();
    await sleep(260);
    wipeLabel.animate([{ opacity: 1 }, { opacity: 0, transform: "translateY(-16px)" }], { duration: 260, easing: ease, fill: "forwards" });
    await Promise.all(wipePanels.slice().reverse().map((el, i) =>
      el.animate([{ transform: "translateX(0)" }, { transform: `translateX(${to})` }],
        { duration: 600, delay: 120 + i * 80, easing: ease, fill: "forwards" }).finished));
    wipe.classList.remove("on");
    wipePanels.forEach(el => el.getAnimations().forEach(a => a.cancel()));
    wipeLabel.getAnimations().forEach(a => a.cancel());
    switching = false;
  }
  $("#langBtn").addEventListener("click", switchLang);

  /* Theme: circular reveal growing out of the toggle (View Transitions), cross-fade fallback */
  const themeBtn = $("#themeBtn");
  const themeMeta = $('meta[name="theme-color"]');
  const currentTheme = () => document.documentElement.getAttribute("data-theme") || "dark";
  function setTheme(th) {
    document.documentElement.setAttribute("data-theme", th);
    themeMeta.setAttribute("content", th === "light" ? "#f3efe6" : "#0a0a0b");
    themeBtn.setAttribute("aria-label", th === "light" ? "Switch to dark mode" : "Switch to light mode");
    try { localStorage.setItem("ys-theme", th); } catch (e) {}
  }
  setTheme(currentTheme());
  themeBtn.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    themeBtn.classList.remove("spin"); void themeBtn.offsetWidth; themeBtn.classList.add("spin");
    if (reduced) { setTheme(next); return; }
    if (!document.startViewTransition) {
      const root = document.documentElement;
      root.classList.add("theme-anim");
      setTheme(next);
      setTimeout(() => root.classList.remove("theme-anim"), 700);
      return;
    }
    const r = themeBtn.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    const R = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const vt = document.startViewTransition(() => setTheme(next));
    vt.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${R}px at ${x}px ${y}px)`] },
        { duration: 800, easing: "cubic-bezier(.65,0,.35,1)", pseudoElement: "::view-transition-new(root)" }
      );
    }).catch(() => {});
  });

  /* ---------------- Word split reveal ---------------- */
  function splitWords() {
    $$(".split").forEach(el => {
      const wasIn = el.classList.contains("in");
      const words = el.textContent.trim().split(/\s+/);
      el.innerHTML = words.map((w, i) => `<span class="w" style="transition-delay:${i * 45}ms">${w}</span>`).join(" ");
      if (wasIn) el.classList.add("in");
    });
  }

  /* ---------------- Hero tunnel ---------------- */
  const tunnel = $("#tunnel");
  const heroEl = $("#hero");
  const heroTitle = $("#heroTitle");
  const heroStatement = $("#heroStatement");
  const timecode = $("#timecode");
  const FRAME_COUNT = 20;
  const DEPTH = 560;
  let frames = [];

  function buildTunnel() {
    tunnel.innerHTML = "";
    frames = [];
    const R = Math.max(vw * 0.36, 230);
    const base = clamp(vw * 0.26, 170, 440);
    for (let i = 0; i < FRAME_COUNT; i++) {
      const p = PROJECTS[i % PROJECTS.length];
      const w = p.vertical ? base * 0.5 : base;
      const h = p.vertical ? w * 16 / 9 : w * 9 / 16;
      const ang = i * 2.399 + 0.6;
      const rad = R * (0.75 + 0.35 * ((i * 7) % 5) / 4);
      const x = Math.cos(ang) * rad;
      const y = Math.sin(ang) * rad * 0.62;
      const z = -i * DEPTH - 300;
      const el = document.createElement("div");
      el.className = "frame";
      el.dataset.label = `A${String(i + 1).padStart(3, "0")} · ${p.vertical ? "9:16" : "16:9"}`;
      el.style.width = w + "px";
      el.style.height = h + "px";
      el.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, ${z}px) rotateY(${(-x / R) * 18}deg) rotateX(${(y / R) * 12}deg)`;
      el.innerHTML = `<img src="${p.cover}" alt="" loading="${i < 6 ? "eager" : "lazy"}" decoding="async">`;
      tunnel.appendChild(el);
      frames.push({ el, z, op: -1 });
    }
  }

  let heroP = 0;
  function updateHero(dt) {
    const target = sectionProgress(heroEl);
    heroP = reduced ? target : lerp(heroP, target, 1 - Math.pow(0.001, dt));
    const travel = FRAME_COUNT * DEPTH * 0.92;
    const tz = heroP * travel;
    tunnel.style.transform = `rotateX(${smY * -2}deg) rotateY(${smX * 3}deg) translateZ(${tz}px)`;

    const dim = 0.4 + 0.6 * range(heroP, 0.02, 0.14); // frames sit back while the name is on screen
    for (const f of frames) {
      const wz = f.z + tz;
      let op = dim;
      if (wz > 0) op *= 1 - range(wz, 0, 700);
      else if (wz < -4200) op *= 1 - range(wz, -4200, -6500);
      op = Math.round(op * 100) / 100;
      if (op !== f.op) {
        f.op = op;
        f.el.style.opacity = op;
        f.el.style.visibility = op <= 0 ? "hidden" : "visible";
      }
    }

    const tp = range(heroP, 0, 0.16);
    heroTitle.style.opacity = 1 - tp;
    heroTitle.style.transform = `scale(${1 + tp * 0.6})`;
    heroTitle.style.visibility = tp >= 1 ? "hidden" : "visible";

    const sp = range(heroP, 0.68, 0.8);
    heroStatement.style.opacity = sp;
    heroStatement.style.transform = `translateY(${(1 - sp) * 40}px) scale(${0.94 + sp * 0.06})`;

    const totalFrames = Math.floor(heroP * 24 * 90);
    const ff = totalFrames % 24, ss = Math.floor(totalFrames / 24) % 60, mm = Math.floor(totalFrames / 1440);
    timecode.textContent = `00:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}:${String(ff).padStart(2, "0")}`;
  }

  /* ---------------- Work: 3D deck + timeline ---------------- */
  const deck = $("#deck");
  const workEl = $("#work");
  const ambient = $("#workAmbient");
  const tlTrack = $("#tlTrack");
  const tlHead = $("#tlHead");
  const tlTc = $("#tlTc");
  const wiSwap = $("#wiSwap");
  const N = PROJECTS.length;
  $("#wiTotal").textContent = String(N).padStart(2, "0");
  let cards = [];
  let clips = [];
  let ambientImgs = [];
  let workA = 0;
  let activeIdx = -1;

  function cardSize(p) {
    const W = deck.clientWidth || vw * 0.6;
    const H = deck.clientHeight || vh * 0.5;
    let h = H * 0.86;
    let w = p.vertical ? h * 9 / 16 : h * 16 / 9;
    const maxW = W * (p.vertical ? 0.5 : 0.86);
    if (w > maxW) { w = maxW; h = p.vertical ? w * 16 / 9 : w * 9 / 16; }
    return { w, h };
  }

  // The deck is its own carousel: page scroll passes straight through it.
  let cur = 0;
  function goTo(i) { cur = clamp(i, 0, N - 1); }

  /* drag the top card (mouse / touch) */
  const drag = { on: false, locked: false, moved: false, x0: 0, y0: 0, dx: 0, dy: 0, a: 0, lastX: 0, lastT: 0, v: 0, id: null };
  const dirSign = () => (document.documentElement.dir === "rtl" ? 1 : -1);

  deck.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    Object.assign(drag, { on: true, locked: false, moved: false, x0: e.clientX, y0: e.clientY, dx: 0, dy: 0, a: cur, lastX: e.clientX, lastT: performance.now(), v: 0, id: e.pointerId });
  });
  deck.addEventListener("pointermove", e => {
    if (!drag.on || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x0, dy = e.clientY - drag.y0;
    if (!drag.locked) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      if (e.pointerType !== "mouse" && Math.abs(dy) > Math.abs(dx)) { drag.on = false; return; } // touch: vertical swipe scrolls the page
      drag.locked = true; drag.moved = true;
      deck.setPointerCapture(e.pointerId);
      deck.classList.add("dragging");
    }
    const W = deck.clientWidth || vw;
    let a = cur + dirSign() * dx / (W * 0.42);
    if (a < 0) a *= 0.35; // rubber band at the ends
    if (a > N - 1) a = N - 1 + (a - (N - 1)) * 0.35;
    const now = performance.now();
    drag.v = (e.clientX - drag.lastX) / Math.max(now - drag.lastT, 1);
    drag.lastX = e.clientX; drag.lastT = now;
    drag.a = a; drag.dx = dx; drag.dy = dy;
  });
  function endDrag() {
    if (!drag.on) return;
    drag.on = false;
    deck.classList.remove("dragging");
    if (!drag.locked) return;
    drag.locked = false;
    const flick = Math.abs(drag.v) > 0.45 ? Math.sign(dirSign() * drag.v) : 0;
    goTo(flick ? (flick > 0 ? Math.floor(drag.a) + 1 : Math.ceil(drag.a) - 1) : Math.round(drag.a));
    drag.dx = drag.dy = 0;
    setTimeout(() => { drag.moved = false; }, 50);
  }
  deck.addEventListener("pointerup", endDrag);
  deck.addEventListener("pointercancel", endDrag);
  deck.addEventListener("lostpointercapture", endDrag);

  /* horizontal trackpad swipe flips cards; vertical wheel keeps scrolling the page */
  let wheelAcc = 0, wheelLock = 0;
  deck.addEventListener("wheel", e => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    e.preventDefault();
    if (performance.now() < wheelLock) return;
    wheelAcc += e.deltaX;
    if (Math.abs(wheelAcc) > 50) {
      goTo(cur + Math.sign(wheelAcc) * (document.documentElement.dir === "rtl" ? -1 : 1));
      wheelAcc = 0; wheelLock = performance.now() + 450;
    }
  }, { passive: false });
  deck.addEventListener("keydown", e => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const fwd = (e.key === "ArrowRight") !== (document.documentElement.dir === "rtl");
      goTo(cur + (fwd ? 1 : -1));
    }
  });
  if (finePointer) {
    const label = $("span", cursor);
    const ar = () => lang === "ar";
    const update = e => {
      const card = e.target.closest(".dcard");
      const play = !drag.locked && card && card.classList.contains("active");
      label.textContent = play ? (ar() ? "شغّل" : "Play") : (ar() ? "اسحب" : "Drag");
      cursor.classList.add("play");
    };
    deck.addEventListener("pointerover", update);
    deck.addEventListener("pointermove", update);
    deck.addEventListener("pointerleave", () => cursor.classList.remove("play"));
    {
      const rs = $(".ring-scene");
      rs.addEventListener("pointerenter", () => { label.textContent = ar() ? "اسحب" : "Drag"; cursor.classList.add("play"); });
      rs.addEventListener("pointerleave", () => cursor.classList.remove("play"));
    }
  }
  $("#deckPrev").addEventListener("click", () => goTo(cur - 1));
  $("#deckNext").addEventListener("click", () => goTo(cur + 1));

  function renderWork() {
    deck.innerHTML = "";
    tlTrack.innerHTML = "";
    ambient.innerHTML = "";
    ambientImgs = PROJECTS.map(p => {
      const img = document.createElement("img");
      img.src = p.cover; img.alt = ""; img.loading = "lazy";
      ambient.appendChild(img);
      return img;
    });
    cards = PROJECTS.map((p, i) => {
      const { w, h } = cardSize(p);
      const el = document.createElement("article");
      el.className = "dcard";
      el.tabIndex = 0;
      el.setAttribute("role", "button");
      el.setAttribute("aria-label", lang === "ar" ? p.ar : p.en);
      el.style.width = w + "px";
      el.style.height = h + "px";
      el.style.marginLeft = -w / 2 + "px";
      el.style.marginTop = -h / 2 + "px";
      el.innerHTML = `
        <div class="dcard-edge"></div>
        <div class="dcard-media">
          <img src="${p.cover}" alt="" loading="lazy" decoding="async">
          ${p.video ? `<video src="${p.video}" muted loop playsinline preload="none"></video>` : ""}
        </div>
        <div class="dcard-glare"></div>
        <div class="dcard-hud"><span><i></i>CLIP ${String(i + 1).padStart(2, "0")}</span><span>${p.vertical ? "9:16" : "16:9"} · ${p.tools.join("/")}</span></div>
        <div class="dcard-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></div>`;
      const go = () => (i === activeIdx ? openModal(p) : goTo(i));
      el.addEventListener("click", () => { if (!drag.moved) go(); });
      el.addEventListener("dragstart", e => e.preventDefault());
      el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
      if (finePointer) {
        el.addEventListener("pointermove", e => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--gx", ((e.clientX - r.left) / r.width * 100) + "%");
          el.style.setProperty("--gy", ((e.clientY - r.top) / r.height * 100) + "%");
        });
      }
      deck.appendChild(el);
      return { el, video: el.querySelector("video") };
    });
    clips = PROJECTS.map((p, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "tl-clip" + (p.vertical ? " vertical" : "");
      b.setAttribute("aria-label", lang === "ar" ? p.ar : p.en);
      b.innerHTML = `<div class="strip" style="background-image:url('${p.cover}')"></div><span>${String(i + 1).padStart(2, "0")} · ${lang === "ar" ? p.ar : p.en}</span>`;
      b.addEventListener("click", () => goTo(i));
      tlTrack.appendChild(b);
      return b;
    });
    activeIdx = -1;
  }

  function setActive(i) {
    if (i === activeIdx) return;
    const first = activeIdx === -1;
    activeIdx = i;
    const p = PROJECTS[i];
    cards.forEach((c, k) => {
      c.el.classList.toggle("active", k === i);
      if (!c.video) return;
      if (k === i && !reduced) c.video.play().then(() => c.el.classList.add("live")).catch(() => {});
      else { c.video.pause(); c.el.classList.remove("live"); }
    });
    clips.forEach((c, k) => c.classList.toggle("on", k === i));
    ambientImgs.forEach((img, k) => img.classList.toggle("on", k === i));
    $("#wiNum").textContent = String(i + 1).padStart(2, "0");
    const fill = () => {
      $("#wiTags").innerHTML = `<span class="type">${p.type[lang] || p.type.en}</span>${p.tools.map(x => `<span>${x}</span>`).join("")}<span>${p.vertical ? "9:16" : "16:9"}</span>`;
      $("#wiTitle").textContent = lang === "ar" ? p.ar : p.en;
      $("#wiAr").textContent = lang === "ar" ? "" : p.ar;
      const c = p.client != null ? CLIENTS[p.client] : null;
      $("#wiClient").innerHTML = c ? `<img src="${c.src}" alt="">${t("work.for")} ${lang === "ar" ? c.ar : c.name}` : "";
      wiSwap.classList.remove("out");
    };
    if (first) { fill(); return; }
    wiSwap.classList.add("out");
    setTimeout(fill, 260);
  }

  $("#wiPlay").addEventListener("click", () => { if (activeIdx >= 0) openModal(PROJECTS[activeIdx]); });

  function updateWork(dt) {
    const target = drag.locked ? drag.a : cur;
    const k = drag.locked ? 0.000001 : 0.002; // follow the finger tightly, glide otherwise
    workA = reduced ? target : lerp(workA, target, 1 - Math.pow(k, dt));
    const W = deck.clientWidth;
    const rtl = document.documentElement.dir === "rtl" ? -1 : 1;
    cards.forEach((c, i) => {
      const d = i - workA;
      let x, y, z, ry, rz, op, s;
      if (d >= 0) {
        // upcoming: stacked behind, fanned up and to the side so each one peeks out
        x = d * W * 0.13; y = -d * 34; z = -d * 200; ry = -d * 12; rz = d * 3;
        s = Math.pow(0.9, d); op = clamp(1 - (d - 2.4), 0, 1);
      } else {
        // played: flies toward the viewer and off to the side, tumbling
        const k = -d;
        x = -k * W * 0.75; y = k * 40; z = k * 260; ry = k * 38; rz = -k * 10;
        s = 1; op = clamp(1 - k * 1.3, 0, 1);
      }
      x *= rtl; ry *= rtl; rz *= rtl;
      if (i === cur && drag.locked) { y += drag.dy * 0.45; rz += drag.dx * 0.025; } // the held card follows the hand
      const near = Math.abs(d) < 0.5;
      const tx = near ? smY * -5 : 0, ty = near ? smX * 7 : 0;
      c.el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${ry + ty}deg) rotateX(${tx}deg) rotateZ(${rz}deg) scale(${s})`;
      c.el.style.opacity = op;
      c.el.style.zIndex = String(100 - Math.round(d * 10));
      c.el.style.pointerEvents = op < 0.3 ? "none" : "auto";
      c.el.style.visibility = op <= 0 ? "hidden" : "visible";
    });
    setActive(clamp(Math.round(workA), 0, N - 1));

    // playhead follows the clip centers of the (flex-sized) timeline
    const i0 = Math.floor(workA), f = workA - i0;
    const a = clips[i0], b = clips[Math.min(i0 + 1, N - 1)];
    if (a) {
      const ca = a.offsetLeft + a.offsetWidth / 2, cb = b.offsetLeft + b.offsetWidth / 2;
      tlHead.style.transform = `translateX(${lerp(ca, cb, f)}px)`;
    }
    const secs = Math.floor(clamp(workA / (N - 1), 0, 1) * 300);
    tlTc.textContent = `00:${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(secs % 60).padStart(2, "0")}`;
  }

  /* ---------------- Clients ring ---------------- */
  const ring = $("#ring");
  const clientsEl = $("#clients");
  const ringCaption = $("#ringCaption");
  let ringItems = [];
  let ringRadius = 300;
  let ringRot = 0;
  let autoRot = 0;

  function renderRing() {
    ring.innerHTML = "";
    const n = CLIENTS.length;
    const size = ring.offsetWidth || 170;
    ringRadius = (size / 2) / Math.tan(Math.PI / n) * 1.18;
    ringItems = CLIENTS.map((c, i) => {
      const a = document.createElement("a");
      a.className = "ring-item";
      a.href = c.link;
      a.target = "_blank";
      a.rel = "noopener";
      const name = lang === "ar" ? c.ar : c.name;
      a.innerHTML = `<img src="${c.src}" alt="" loading="lazy"><span>${name}</span><small>${c.platform}</small>`;
      a.setAttribute("aria-label", `${name} (${c.platform})`);
      a.style.transform = `rotateY(${(360 / n) * i}deg) translateZ(${ringRadius}px)`;
      ring.appendChild(a);
      return { a, name };
    });
  }

  /* the ring can be spun by dragging too */
  const ringScene = $(".ring-scene");
  const spin = { on: false, locked: false, moved: false, x0: 0, y0: 0, off0: 0, off: 0, id: null };
  ringScene.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    Object.assign(spin, { on: true, locked: false, moved: false, x0: e.clientX, y0: e.clientY, off0: spin.off, id: e.pointerId });
  });
  ringScene.addEventListener("pointermove", e => {
    if (!spin.on || e.pointerId !== spin.id) return;
    const dx = e.clientX - spin.x0, dy = e.clientY - spin.y0;
    if (!spin.locked) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      if (Math.abs(dy) > Math.abs(dx)) { spin.on = false; return; }
      spin.locked = spin.moved = true;
      ringScene.setPointerCapture(e.pointerId);
      ringScene.classList.add("dragging");
    }
    spin.off = spin.off0 + dx * 0.35;
  });
  const endSpin = () => {
    if (!spin.on) return;
    spin.on = false;
    ringScene.classList.remove("dragging");
    setTimeout(() => { spin.moved = false; }, 50);
  };
  ["pointerup", "pointercancel", "lostpointercapture"].forEach(t => ringScene.addEventListener(t, endSpin));
  ringScene.addEventListener("click", e => { if (spin.moved) e.preventDefault(); }, true);
  ringScene.addEventListener("dragstart", e => e.preventDefault());

  let lastFront = -1;
  function updateRing(dt) {
    const p = sectionProgress(clientsEl);
    if (!reduced && !spin.on) autoRot += dt * 6;
    const target = -p * 400 - autoRot + spin.off;
    ringRot = reduced ? target : lerp(ringRot, target, 1 - Math.pow(spin.on ? 0.00001 : 0.003, dt));
    ring.style.transform = `translateZ(${-ringRadius}px) rotateX(${-6 + smY * 4}deg) rotateY(${ringRot}deg)`;
    const n = CLIENTS.length;
    const step = 360 / n;
    // dim the items as they turn away so the back of the ring reads as depth, not gaps
    ringItems.forEach((it, i) => {
      const facing = Math.cos((i * step + ringRot) * Math.PI / 180);
      it.a.style.opacity = (0.18 + 0.82 * clamp((facing + 0.35) / 1.35, 0, 1)).toFixed(3);
      it.a.style.pointerEvents = facing > 0.2 ? "auto" : "none";
    });
    const front = ((Math.round(-ringRot / step) % n) + n) % n;
    if (front !== lastFront && ringItems[front]) {
      lastFront = front;
      ringCaption.textContent = ringItems[front].name;
    }
  }

  /* ---------------- Instagram highlights ---------------- */
  const HIGHLIGHTS = [
    { icon: "🎬", en: "Me", ar: "أنا" },
    { icon: "💡", en: "Tips & tricks", ar: "تريكات ونصائح" },
    { icon: "🎞️", en: "Spirit of editing", ar: "روح المونتاج" },
    { icon: "💻", en: "Workspace", ar: "مساحة العمل" },
    { icon: "🌿", en: "Life", ar: "حياة" },
    { icon: "🕌", en: "İstanbul", ar: "إسطنبول" },
    { icon: "⏳", en: "Coming soon…", ar: "قريباً…" }
  ];
  function renderHighlights() {
    $("#highlights").innerHTML = HIGHLIGHTS.map(h =>
      `<a class="hl" href="https://www.instagram.com/yaser.samer1/" target="_blank" rel="noopener"><span class="hl-ring"><b>${h.icon}</b></span><small>${lang === "ar" ? h.ar : h.en}</small></a>`
    ).join("");
  }

  /* ---------------- Modal ---------------- */
  const modal = $("#modal");
  const modalBox = $(".modal-box", modal);
  const modalMedia = $("#modalMedia");
  let lastFocus = null;

  function openModal(p) {
    lastFocus = document.activeElement;
    modalBox.classList.toggle("vertical", p.vertical);
    modalMedia.innerHTML = p.video
      ? `<video src="${p.video}" poster="${p.cover}" controls autoplay playsinline></video>`
      : `<iframe src="https://drive.google.com/file/d/${p.drive}/preview" allow="autoplay; fullscreen" allowfullscreen title="${p.en}"></iframe>`;
    $("#modalTitle").textContent = lang === "ar" ? p.ar : p.en;
    $("#modalSub").textContent = lang === "ar" ? p.en : p.ar;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    $(".modal-close", modal).focus();
  }
  function closeModal() {
    if (!modal.classList.contains("open")) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    setTimeout(() => { modalMedia.innerHTML = ""; }, 400);
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  modal.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeModal(); });
  addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  /* ---------------- Cursor, tilt, magnetic ---------------- */
  let cx = 0, cy = 0, tx = 0, ty = 0;
  addEventListener("pointermove", e => {
    tx = e.clientX; ty = e.clientY;
    if (finePointer && !cursor.classList.contains("on")) { cx = tx; cy = ty; cursor.classList.add("on"); }
    mouseX = (e.clientX / vw) * 2 - 1;
    mouseY = (e.clientY / vh) * 2 - 1;
  }, { passive: true });

  function tilt(el, max = 12, inner) {
    if (!finePointer) return;
    const target = inner || el;
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      target.style.transform = `rotateY(${px * max}deg) rotateX(${-py * max}deg)`;
    });
    el.addEventListener("pointerleave", () => { target.style.transform = ""; });
  }
  tilt($(".portrait-wrap"), 16, $("#portrait"));
  $$(".tool.tilt").forEach(el => tilt(el, 22));
  $$(".contact-title .depth").forEach(el => tilt(el, 10));

  if (finePointer) {
    $$(".magnetic").forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------------- Reveal + counters ---------------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      if (en.target.dataset.count) countUp(en.target);
      io.unobserve(en.target);
    });
  }, { threshold: 0.25 });

  function countUp(el) {
    const end = +el.dataset.count;
    const dec = (el.dataset.count.split(".")[1] || "").length;
    const suffix = el.dataset.suffix ? `<small>${el.dataset.suffix}</small>` : "";
    const start = performance.now();
    const step = now => {
      const k = clamp((now - start) / 1400, 0, 1);
      el.innerHTML = (end * (1 - Math.pow(1 - k, 3))).toFixed(dec) + suffix;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------------- Nav ---------------- */
  const nav = $("#nav");
  const navLinks = $$(".nav-links a");
  const sections = navLinks.map(a => $(a.getAttribute("href")));
  function updateNav() {
    nav.classList.toggle("solid", scrollY > vh * 0.5);
    let active = -1;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < vh * 0.5) active = i; });
    navLinks.forEach((a, i) => a.classList.toggle("active", i === active));
  }

  /* ---------------- Mobile menu ---------------- */
  const menuBtn = $("#menuBtn");
  const mobileMenu = $("#mobileMenu");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-hidden", String(!open));
  }
  menuBtn.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
  $$("a", mobileMenu).forEach(a => a.addEventListener("click", () => setMenu(false)));
  addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  /* ---------------- Copy email ---------------- */
  const toast = $("#toast");
  $("#copyBtn").addEventListener("click", async () => {
    const email = "yaser.sat8906@gmail.com";
    try { await navigator.clipboard.writeText(email); }
    catch (e) {
      const ta = document.createElement("textarea");
      ta.value = email; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (err) {}
      ta.remove();
    }
    toast.textContent = t("toast.copied");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  });

  /* ---------------- Main loop ---------------- */
  let last = performance.now();
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    smX = lerp(smX, mouseX, 0.06);
    smY = lerp(smY, mouseY, 0.06);
    if (finePointer) {
      cx = lerp(cx, tx, 0.22); cy = lerp(cy, ty, 0.22);
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    }
    updateHero(dt);
    updateWork(dt);
    updateRing(dt);
    updateNav();
    requestAnimationFrame(frame);
  }

  let resizeT;
  addEventListener("resize", () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => {
      if (Math.abs(innerWidth - vw) < 2 && Math.abs(innerHeight - vh) < 120) return; // ignore mobile URL-bar jitter
      vw = innerWidth; vh = innerHeight;
      buildTunnel(); renderWork(); renderRing();
    }, 150);
  });

  /* ---------------- Boot ---------------- */
  $("#year").textContent = new Date().getFullYear();
  document.body.classList.add("loading");
  buildTunnel();
  applyLang();
  $$(".reveal-3d, .split, [data-count]").forEach(el => io.observe(el));
  requestAnimationFrame(frame);

  const loader = $("#loader");
  const num = $("#loaderNum");
  let n = 3;
  const tick = setInterval(() => {
    n -= 1;
    if (n > 0) { num.textContent = n; return; }
    clearInterval(tick);
    loader.classList.add("done");
    document.body.classList.remove("loading");
    document.body.classList.add("ready");
  }, reduced ? 1 : 550);
})();
