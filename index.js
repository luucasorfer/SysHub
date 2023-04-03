// Importa os módulos das páginas
import home from "../src/templates/home/index.js";
import phoneList from "../src/templates/phoneList/index.js";
import keyuser from "../src/templates/keyuser/index.js";
import ccusto from "../src/templates/ccusto/index.js";
import bip from "../src/templates/bip/index.js";

// Seleciona o elemento principal onde as páginas serão renderizadas
const main = document.querySelector("#root");

// Cria um objeto com as rotas e as funções correspondentes às páginas
const routes = {
  "#home": home,
  "#phoneList": phoneList,
  "#ccusto": ccusto,
  "#keyuser": keyuser,
  "#bip": bip,
};

// Função que inicializa a página
const init = () => {
  // Obtém a rota atual da URL
  const currentRoute = window.location.hash;
  // Limpa o conteúdo do elemento principal
  main.innerHTML = "";
  // Adiciona a página correspondente à rota atual no elemento principal
  main.appendChild(routes[currentRoute]());

  // Cria um elemento link para o arquivo CSS correspondente à rota atual
  const cssStyle = document.createElement("link");
  cssStyle.rel = "stylesheet";

  const cssPrint = document.createElement("link");
  cssPrint.rel = "stylesheet";

  // Cria um elemento script para o arquivo JavaScript correspondente à rota atual
  const script = document.createElement("script");

  // Verifica a rota atual e define o caminho dos arquivos CSS e JS correspondentes
  switch (currentRoute) {
    case "#phoneList":
      cssStyle.href = "../src/templates/phoneList/stylePhoneList.css";
      cssPrint.href = "../src/templates/phoneList/print.css";
      script.src = "../src/templates/phoneList/script.js";
      break;
    default:
      cssStyle.href = `../src/templates/${currentRoute.slice(1)}/style.css`;
      cssPrint.href = `../src/templates/${currentRoute.slice(1)}/style.css`;
      script.src = `../src/templates/${currentRoute.slice(1)}/script.js`;
      break;
  }

  // Adiciona o elemento link no cabeçalho da página
  document.querySelector("head").appendChild(cssStyle);
  document.querySelector("head").appendChild(cssPrint);

  // Adiciona o elemento script no final do body da página
  document.body.appendChild(script);
};

// Evento que é disparado quando a página é carregada
window.addEventListener("load", () => {
  // Inicializa a página
  init();
});

// Evento que é disparado quando a rota na URL é alterada
window.addEventListener("hashchange", () => {
  // Inicializa a página
  init();
});

// Evento que é disparado antes da página ser fechada
window.addEventListener("beforeunload", () => {
  // Obtém a rota atual da URL
  const currentRoute = window.location.hash;
  // Salva a rota atual no localStorage
  localStorage.setItem("lastRoute", currentRoute);
});

// Evento que é disparado quando o DOM é carregado
window.addEventListener("DOMContentLoaded", () => {
  // Obtém a última rota salva no localStorage
  const lastRoute = localStorage.getItem("lastRoute");
  if (lastRoute) {
    // Redireciona para a última rota salva no localStorage
    window.location.hash = lastRoute;
  }
});

//  Menu responsivo
var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');
var menuItems = document.querySelectorAll('nav ul li');

function menuShow() {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open');
  } else {
    ul.classList.add('open');
  }
}

function closeMenu() {
  ul.classList.remove('open');
}

menuBtn.addEventListener('click', menuShow);

// adiciona evento de clique para cada item da lista
menuItems.forEach(function(item) {
  item.addEventListener('click', closeMenu);
});