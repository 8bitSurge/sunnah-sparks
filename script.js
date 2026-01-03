// 1️⃣ Ask for name once and remember it
let userName = localStorage.getItem("sunnahSparksName");

if (!userName) {
  userName = prompt("Assalamu alaykum. What is your name?");
  if (userName) {
    localStorage.setItem("sunnahSparksName", userName);
  }
}

// Update greeting
const greetingEl = document.querySelector(".greeting");

if (userName) {
  greetingEl.textContent = `Assalamu alaykum, ${userName}`;
} else {
  greetingEl.textContent = "Assalamu alaykum";
}

// 2️⃣ Sunnah list
const sunnahs = [
  { act: "Smile at someone", reason: "Smiling is charity", source: "Tirmidhi" },
  { act: "Say Bismillah before eating", reason: "To remember Allah and bless the food", source: "Bukhari" },
  { act: "Pray two rakats after waking up", reason: "Starts your day with Allah’s remembrance", source: "Muslim" }
];

// 3️⃣ Gift box click event
const giftBox = document.querySelector(".gift-box");

giftBox.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * sunnahs.length);
  const sunnah = sunnahs[randomIndex];

  const hintEl = document.querySelector(".hint");
  hintEl.innerHTML = `
    <strong>${sunnah.act}</strong><br>
    ${sunnah.reason}<br>
    <em>(${sunnah.source})</em>
  `;
});
