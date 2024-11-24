document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const indicators = document.querySelectorAll(".carousel-indicator");
    let currentIndex = 0;

    // JavaScript for ensuring the infinite scrolling effect
    const carousel2 = document.querySelector('.carousel2');
    const items = document.querySelectorAll('.carousel2-item');

    // Clone the first item and append it to the end to create the infinite loop effect
    const firstItemClone = items[0].cloneNode(true);
    carousel2.appendChild(firstItemClone);

    // Adjust the animation to allow for infinite loop
    carousel2.addEventListener('animationiteration', () => {
    carousel2.appendChild(items[0]); // Move the first item to the end of the carousel
    });


    // Função para ativar o item atual do carrossel
    function activateCarouselItem() {
        carouselItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add("active");
            } else {
                indicator.classList.remove("active");
            }
        });
    }

    // Função para ir para o próximo item
    function nextItem() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        activateCarouselItem();
    }

    // Função para ir para o item anterior
    function prevItem() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        activateCarouselItem();
    }

    // Adicionando eventos aos indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", function () {
            currentIndex = index;
            activateCarouselItem();
        });
    });

    // Iniciando o carrossel
    setInterval(nextItem, 3000);
    activateCarouselItem(); // Ativar o primeiro item no carregamento
});
