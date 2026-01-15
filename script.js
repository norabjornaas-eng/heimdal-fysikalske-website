// ===== Mobile menu toggle =====
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking any link
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}


// ===== Mobile dropdown (Behandling) =====
const mobileBehandling = document.getElementById("mobileBehandling");

if (mobileBehandling) {
  const btn = mobileBehandling.querySelector(".mobile-dd-btn");

  btn.addEventListener("click", () => {
    const isOpen = mobileBehandling.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
}
