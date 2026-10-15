const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  io.observe(el);
});

const demoTrack = document.getElementById("demoTrack");
const demoSlides = [...demoTrack.children];
const demoDots = [...document.querySelectorAll("#demoDots .car-dot")];
const demoPrev = document.getElementById("demoPrev");
const demoNext = document.getElementById("demoNext");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let demoIndex = 0;

const setDemoIndex = (i) => {
  demoIndex = i;
  demoDots.forEach((dot, n) => dot.setAttribute("aria-current", String(n === i)));
  demoPrev.disabled = i === 0;
  demoNext.disabled = i === demoSlides.length - 1;
};

const goToSlide = (i) => {
  const slide = demoSlides[Math.max(0, Math.min(demoSlides.length - 1, i))];
  demoTrack.scrollTo({
    left: slide.offsetLeft - (demoTrack.clientWidth - slide.clientWidth) / 2,
    behavior: reduceMotion ? "auto" : "smooth",
  });
};

const slideObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setDemoIndex(demoSlides.indexOf(entry.target));
    });
  },
  { root: demoTrack, threshold: 0.6 }
);
demoSlides.forEach((slide) => slideObserver.observe(slide));

demoPrev.addEventListener("click", () => goToSlide(demoIndex - 1));
demoNext.addEventListener("click", () => goToSlide(demoIndex + 1));
demoDots.forEach((dot, n) => dot.addEventListener("click", () => goToSlide(n)));
demoTrack.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") { e.preventDefault(); goToSlide(demoIndex + 1); }
  if (e.key === "ArrowLeft") { e.preventDefault(); goToSlide(demoIndex - 1); }
});
setDemoIndex(0);

const ua = navigator.userAgent || "";
const isIos = /iPad|iPhone|iPod/.test(ua);
const isAndroid = /android/i.test(ua);

const androidBtn = document.getElementById("dl-android");
const androidVersion = document.getElementById("dl-android-version");
const iosBtn = document.getElementById("dl-ios");
const dlMsg = document.getElementById("dlMsg");

const loadJson = (url) =>
  fetch(url, { cache: "no-store" }).then((res) => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  });

const androidReady = isIos
  ? Promise.resolve(false)
  : loadJson("/apk/latest.json")
      .then((data) => {
        if (!data.downloadUrl) return false;
        androidBtn.href = data.downloadUrl;
        if (data.version) androidVersion.textContent = `(v${data.version})`;
        androidBtn.hidden = false;
        return true;
      })
      .catch(() => false);

const iosReady = isAndroid
  ? Promise.resolve(false)
  : loadJson("/api/testflight")
      .then((data) => {
        if (!data.url) return false;
        iosBtn.href = data.url;
        iosBtn.hidden = false;
        return true;
      })
      .catch(() => false);

Promise.all([androidReady, iosReady]).then(([android, ios]) => {
  if (isIos && ios) androidBtn.parentElement.append(iosBtn);
  if (android || ios) return;
  dlMsg.textContent = isIos
    ? "L'accès iPhone n'est pas encore ouvert. Il arrive bientôt, merci de votre patience."
    : "Le téléchargement n'est pas disponible pour le moment. Réessayez un peu plus tard.";
});
