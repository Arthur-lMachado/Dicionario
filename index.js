var arrow = document.getElementById('arrow');
var quadradao = document.getElementsByClassName('quadradao')[0];

arrow.addEventListener('click', function () {
  if (quadradao.style.display === 'none') {
    quadradao.style.display = 'flex';
  } else {
    quadradao.style.display = 'none';
  }
});
var arrow = document.getElementById('arrow');
arrow.addEventListener('click', function () {
  if (this.style.borderTop == '10px solid black') {
    this.style.borderTop = 'none';
    this.style.borderBottom = '10px solid black';
  } else {
    this.style.borderBottom = 'none';
    this.style.borderTop = '10px solid black';
  }
});

const botão = document.querySelector('#um-palavra');
const modal = document.querySelector('.caixa-palavra-um');
const body = document.querySelector('body');

botão.onclick = function() {
  modal.style.display = 'block'; // Exibe o modal definindo a propriedade 'display' como 'block'
  body.classList.add('modal-open'); // Adiciona a classe 'modal-open' ao elemento <body>
};

// Adiciona o event listener para capturar o evento de pressionamento de tecla
window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' || event.keyCode === 27) {
    modal.style.display = 'none'; // Oculta o modal definindo a propriedade 'display' como 'none'
    body.classList.remove('modal-open'); // Remove a classe 'modal-open' do elemento <body>
  }
});