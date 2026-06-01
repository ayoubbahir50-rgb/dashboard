function openTab(id, el) {
  document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  document.querySelectorAll(".menu").forEach(m => m.classList.remove("active"));
  el.classList.add("active");
}

function notify() {
  let t = document.getElementById("toast");
  t.style.display = "block";

  setTimeout(() => {
    t.style.display = "none";
  }, 2000);
}

function toggleTheme() {
  document.body.classList.toggle("light");
}