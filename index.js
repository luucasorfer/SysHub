import home from "../src/templates/home/index.js";
import phoneList from "../src/templates/phoneList/index.js";
import keyuser from "../src/templates/keyuser/index.js";
import ccusto from "../src/templates/ccusto/index.js";
import bip from "../src/templates/bip/index.js";

const main = document.querySelector("#root");

const routes = {
  "#home": home,
  "#phoneList": phoneList,
  "#ccusto": ccusto,
  "#keyuser": keyuser,
  "#bip": bip,
};

const init = () => {
  const currentRoute = window.location.hash;
  main.innerHTML = "";
  main.appendChild(routes[currentRoute]());

  const cssLink = document.createElement("link");
  cssLink.rel = "stylesheet";

  const script = document.createElement("script");

  switch (currentRoute) {
    case "#phoneList":
      cssLink.href = "../src/templates/phoneList/stylePhoneList.css";
      script.src = "../src/templates/phoneList/script.js";
      break;
    default:
      cssLink.href = `../src/templates/${currentRoute.slice(1)}/style.css`;
      script.src = `../src/templates/${currentRoute.slice(1)}/script.js`;
      break;
  }

  document.querySelector("head").appendChild(cssLink);
  document.body.appendChild(script);
};

window.addEventListener("load", () => {
  init();
});

window.addEventListener("hashchange", () => {
  init();
});

window.addEventListener("beforeunload", () => {
  const currentRoute = window.location.hash;
  localStorage.setItem("lastRoute", currentRoute);
});

window.addEventListener("DOMContentLoaded", () => {
  const lastRoute = localStorage.getItem("lastRoute");
  if (lastRoute) {
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