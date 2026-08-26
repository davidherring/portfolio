const expandButtons = document.querySelectorAll("[data-expand-target]");

for (const expandButton of expandButtons) {
  const targetId = expandButton.dataset.expandTarget;
  const target = document.getElementById(targetId);
  const collapseButton = document.querySelector(`[data-collapse-target="${targetId}"]`);

  if (!target || !collapseButton) {
    continue;
  }

  expandButton.addEventListener("click", () => {
    target.hidden = false;
    expandButton.hidden = true;
    expandButton.setAttribute("aria-expanded", "true");
    collapseButton.setAttribute("aria-expanded", "true");
  });

  collapseButton.addEventListener("click", () => {
    target.hidden = true;
    expandButton.hidden = false;
    expandButton.setAttribute("aria-expanded", "false");
    collapseButton.setAttribute("aria-expanded", "false");
    expandButton.focus();
  });
}
