// Ask for name once and remember it
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
