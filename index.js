// ===== GALERIA DE SLIDES =====

// Seleciona todos os elementos da galeria
const slides = document.querySelectorAll(".fotofrente");
let indexAtual = 0;
let intervalo;

// Função para mostrar o slide atual
function mostrarSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("mostrando");
    if (i === n) slide.classList.add("mostrando");
  });
}

// Função para o próximo slide
function proximoSlide() {
  indexAtual = (indexAtual + 1) % slides.length;
  mostrarSlide(indexAtual);
}

// Função para o slide anterior
function slideAnterior() {
  indexAtual = (indexAtual - 1 + slides.length) % slides.length;
  mostrarSlide(indexAtual);
}

// Inicia o autoplay
function iniciarSlide() {
  intervalo = setInterval(proximoSlide, 4000); // muda a cada 4 segundos
}

// Pausa o autoplay
function pararSlide() {
  clearInterval(intervalo);
}

// Eventos de pausa ao passar o mouse
const galeria = document.querySelector("#galeria");
galeria.addEventListener("mouseenter", pararSlide);
galeria.addEventListener("mouseleave", iniciarSlide);

// Inicialização
mostrarSlide(indexAtual);
iniciarSlide();

// ===== BOTÕES DE NAVEGAÇÃO =====
const btnAnterior = document.createElement("button");
const btnProximo = document.createElement("button");

btnAnterior.innerHTML = "❮";
btnProximo.innerHTML = "❯";
btnAnterior.classList.add("btn-galeria", "anterior");
btnProximo.classList.add("btn-galeria", "proximo");

const botoesContainer = document.createElement("div");
botoesContainer.classList.add("botoes-galeria");
botoesContainer.appendChild(btnAnterior);
botoesContainer.appendChild(btnProximo);
galeria.appendChild(botoesContainer);

// Eventos dos botões
btnAnterior.addEventListener("click", () => {
  pararSlide();
  slideAnterior();
  iniciarSlide();
});

btnProximo.addEventListener("click", () => {
  pararSlide();
  proximoSlide();
  iniciarSlide();
});
