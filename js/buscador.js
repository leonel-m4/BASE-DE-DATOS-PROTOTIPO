// buscador.js
document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#input-busqueda");

    if (!input) return;

    input.addEventListener("input", () => {
        const texto = input.value.toLowerCase();
        const elementos = document.querySelectorAll("[data-busqueda]");

        elementos.forEach(el => {
            const contenido = el.textContent.toLowerCase();
            el.style.display = contenido.includes(texto) ? "" : "none";
        });
    });
});
