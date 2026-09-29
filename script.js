/* ==========================================================================
   JX INOXIDABLES — script.js
   ⚠️ CONFIGURACIÓN: reemplaza estos valores con los datos reales del negocio.
   ========================================================================== */

const CONFIG = {
  // Número de WhatsApp en formato internacional SIN + ni espacios.
  // Ejemplo Colombia: "573001234567"
  whatsappNumber: "573000000000", // TODO: reemplazar con el número real
  defaultMessage: "Hola JX Inoxidables, quiero cotizar un trabajo en acero inoxidable o vidrio.",
};

/* ---------- WhatsApp links ---------- */

function buildWaLink(message) {
  const text = encodeURIComponent(message || CONFIG.defaultMessage);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
}

function setupWhatsappButtons() {
  const link = buildWaLink();
  ["waNavBtn", "waFormBtn", "waFloatBtn"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = link;
  });

  const phoneDisplay = document.getElementById("phoneDisplay");
  if (phoneDisplay && CONFIG.whatsappNumber === "573000000000") {
    // Deja visible el aviso de placeholder solo mientras no se configure el número real.
  }
}

/* ---------- Mobile nav ---------- */

function setupMobileNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Contact form -> WhatsApp ---------- */

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("fNombre").value.trim();
    const telefono = document.getElementById("fTelefono").value.trim();
    const servicio = document.getElementById("fServicio").value;
    const mensaje = document.getElementById("fMensaje").value.trim();

    const lines = [
      `Hola JX Inoxidables, soy ${nombre || "un cliente interesado"}.`,
      `Servicio: ${servicio}`,
      telefono ? `Mi teléfono: ${telefono}` : null,
      mensaje ? `Detalles: ${mensaje}` : null,
    ].filter(Boolean);

    window.open(buildWaLink(lines.join("\n")), "_blank", "noopener");
  });
}

/* ---------- Hero handrail posts (signature element) ---------- */

function drawRailPosts() {
  const group = document.getElementById("railPosts");
  if (!group) return;

  const svgNS = "http://www.w3.org/2000/svg";
  const width = 1200;
  const postCount = 13;
  const spacing = width / (postCount - 1);

  for (let i = 0; i < postCount; i++) {
    const x = i * spacing;

    const post = document.createElementNS(svgNS, "line");
    post.setAttribute("x1", x);
    post.setAttribute("y1", 60);
    post.setAttribute("x2", x);
    post.setAttribute("y2", 105);
    post.setAttribute("stroke", "#5b6167");
    post.setAttribute("stroke-width", "4");
    group.appendChild(post);

    const rivet = document.createElementNS(svgNS, "circle");
    rivet.setAttribute("cx", x);
    rivet.setAttribute("cy", 60);
    rivet.setAttribute("r", 5);
    rivet.setAttribute("fill", "#c7ccd1");
    group.appendChild(rivet);
  }
}

/* ---------- Footer year ---------- */

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Header shadow on scroll ---------- */

function setupHeaderScroll() {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 8 ? "0 6px 20px rgba(0,0,0,0.25)" : "none";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  setupWhatsappButtons();
  setupMobileNav();
  setupContactForm();
  drawRailPosts();
  setYear();
  setupHeaderScroll();
});
