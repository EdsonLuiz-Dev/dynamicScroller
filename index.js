// Scroll horizontal sem o overflow
const scrollBar = document.getElementById('scrollBar');
scrollBar.addEventListener('wheel', function(event) {
    event.preventDefault();
    this.scrollLeft += event.deltaY;
});

// Coleta a informação do tamanho da tela e corrige em caso de redimensionamento.

let viewportY = window.innerHeight;
function checkViewportSize() {
    viewportY = window.innerHeight;
    console.log(viewportY)
}

window.addEventListener('resize', () => {
    checkViewportSize();
});

window.addEventListener('orientationchange', () => {
    checkViewportSize();
});

// Detecta se o elemento está no centro
function isElementInCenter(el) {
    const rect = el.getBoundingClientRect();

    return (
        viewportY / 2 >= rect.top &&
        viewportY / 2 <= rect.bottom
    );
}

// Encontra o elemento e verifica se está no centro
function findDivInViewport() {
    const divs = document.querySelectorAll('.dog-container');
    for (let i = 0; i < divs.length; i++) {
        if (isElementInCenter(divs[i])) {
            return divs[i];
        }
    }
    return null;
}

// Aqui ele faz a relação com a scroll bar e o elemento centralizado
const scrollList = document.getElementById("scrollList");
const listItems = scrollBar.getElementsByTagName("li");

window.addEventListener('scroll', highlightScrollItem);
function highlightScrollItem() {
    let divCentro = findDivInViewport();
    if (divCentro) {
        for (li of listItems) {
            if(li.getAttribute("id") === divCentro.getAttribute('data-identificador')) {
                li.querySelectorAll("a")[0].style.color = "blue";
            } else {
                li.querySelectorAll("a")[0].style.color = "white";
            }
        }
    }
}
