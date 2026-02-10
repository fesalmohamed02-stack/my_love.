const correctPassword = "22/1/2026";

function unlock() {
  const input = document.getElementById("password").value;
  if (input === correctPassword) {
    document.getElementById("lock").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "الباسورد غلط ❤️";
  }
}

const startDate = new Date("2025-12-28T00:39:00");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
}

setInterval(updateCounter, 1000);
updateCounter();
