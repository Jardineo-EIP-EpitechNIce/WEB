const lines = [
  "Coucou ! Je ne fais pas que la feuille.",
  "Chatouillez-moi encore, ça me fait pousser.",
  "J'ai la sève qui monte quand on me touche.",
  "Je n'ai pas la main verte, j'ai tout le corps.",
  "Un petit verre d'eau ? Je ne dis jamais non.",
  "On se roule dans l'herbe ? Pour jardiner, hein !",
  "Ne me prenez pas pour une feuille de chou.",
  "Bien arrosé, jamais fané.",
  "Une bonne tige bien dressée, ça s'arrose.",
  "Un petit bouturage ? Je dis pas non.",
  "Faut pas pousser mémé dans les orties.",
  "Mes racines sont solides, mais j'ai le cœur tendre.",
  "Je suis un peu à l'ouest... du potager.",
  "Toucher, c'est bien. Arroser, c'est mieux.",
];
let next = Math.floor(Math.random() * lines.length);
let bubble = null;
let timer = null;
let hushed = null;

const restore = () => {
  if (hushed) hushed.classList.remove("hushed");
  hushed = null;
};

const say = (target) => {
  if (!bubble) {
    bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.setAttribute("aria-hidden", "true");
    document.body.append(bubble);
  }
  bubble.textContent = lines[next];
  next = (next + 1) % lines.length;
  const rect = target.getBoundingClientRect();
  const half = 125;
  const x = Math.min(Math.max(rect.left + rect.width / 2, half + 8), document.documentElement.clientWidth - half - 8);
  bubble.style.left = `${x + window.scrollX}px`;
  bubble.style.top = `${rect.top + window.scrollY + 6}px`;
  bubble.classList.remove("show");
  void bubble.offsetWidth;
  bubble.classList.add("show");
  restore();
  if (target.classList.contains("m-hero")) {
    hushed = document.querySelector(".s-hero");
    if (hushed) hushed.classList.add("hushed");
  }
  clearTimeout(timer);
  timer = setTimeout(() => {
    bubble.classList.remove("show");
    restore();
  }, 2400);
};

document.querySelectorAll(".mascot").forEach((mascot) => {
  mascot.addEventListener("click", () => {
    mascot.classList.remove("jump");
    void mascot.offsetWidth;
    mascot.classList.add("jump");
    say(mascot);
  });
  mascot.addEventListener("animationend", () => mascot.classList.remove("jump"));
});
