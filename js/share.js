// Share copy button
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".mog-share-copy");
  if (!btn) return;

  const url = btn.dataset.copy;

  navigator.clipboard.writeText(url).then(() => {
    const original = btn.querySelector("span").textContent;

    btn.classList.add("is-copied");
    btn.querySelector("span").textContent = "Copied";

    setTimeout(() => {
      btn.classList.remove("is-copied");
      btn.querySelector("span").textContent = original;
    }, 2000);
  });
});
