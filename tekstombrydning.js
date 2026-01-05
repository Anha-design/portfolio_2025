document.addEventListener("DOMContentLoaded", () => {
  const selectors =
    ".no-widows p, .no-widows li, .no-widows h1, .no-widows h2, .no-widows h3";

  document.querySelectorAll(selectors).forEach(el => {
    const html = el.innerHTML.trim();

    // Spring tomme eller meget korte tekster over
    if (html.split(" ").length < 3) return;

    const lastSpace = html.lastIndexOf(" ");
    if (lastSpace === -1) return;

    el.innerHTML =
      html.slice(0, lastSpace) +
      "&nbsp;" +
      html.slice(lastSpace + 1);
  });
});

