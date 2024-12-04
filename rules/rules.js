const rules = document.querySelector('.rules');
const nextBtn = document.getElementById('next');
let currentRule = 0;

// Ajusta o tamanho das regras dinamicamente
function adjustRuleWidth() {
    const containerWidth = document.querySelector('.main').getBoundingClientRect().width;
    const ruleElements = document.querySelectorAll('.rule');

    // Define a largura de cada regra com base no tamanho do contêiner principal
    ruleElements.forEach(rule => {
        rule.style.width = `${containerWidth}px`;
    });

    // Define a largura total do contêiner `.rules`
    rules.style.width = `${containerWidth * ruleElements.length}px`;

    // Reaplica o deslocamento atual
    rules.style.transform = `translateX(${-currentRule * containerWidth}px)`;
}

// Lida com o evento de clique no botão "Next"
nextBtn.addEventListener('click', () => {
    const totalRules = document.querySelectorAll('.rule').length;
    const containerWidth = document.querySelector('.main').getBoundingClientRect().width;
    currentRule = (currentRule + 1) % totalRules;
    rules.style.transform = `translateX(${-currentRule * containerWidth}px)`;
});

// Ajusta as larguras no carregamento da página e ao redimensionar a janela
window.addEventListener('load', adjustRuleWidth);
window.addEventListener('resize', adjustRuleWidth);