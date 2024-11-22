document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const indicators = document.querySelectorAll(".carousel-indicator");
    let currentIndex = 0;

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
