document.body.style.backgroundColor = localStorage.getItem("pageBackground")
const bodyBgColor = document.body.dataset.color
const links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const pageLink = e.target.dataset.link;
    localStorage.setItem("pageBackground", bodyBgColor)
    document.location.href = `${pageLink}.html`
  });
});

