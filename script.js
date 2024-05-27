// Animación para las listas
document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll("ul li, ol li");
    listItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s`;
    });

    window.addEventListener("load", () => {
        listItems.forEach(item => {
            item.style.opacity = 1;
        });
    });
});
