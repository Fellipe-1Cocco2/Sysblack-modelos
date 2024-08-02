// Carregar Footer
document.addEventListener("DOMContentLoaded", function () {
  fetch("./pages/footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch((error) => console.error("Erro ao carregar o rodapé:", error));
});

// Carregar Header
document.addEventListener("DOMContentLoaded", function () {
  fetch("./pages/header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header").innerHTML = html;
    })
    .catch((error) => console.error("Erro ao carregar o cabeçalho:", error));
});
