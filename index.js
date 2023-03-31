import home from "../pages/home/index.js";
import phoneList from "../pages/phoneList/index.js";
import keyuser from "../pages/keyuser/index.js";
import ccusto from "../pages/ccusto/index.js";
import bip from "../pages/bip/index.js";

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
      cssLink.href = "../pages/phoneList/stylePhoneList.css";
      script.src = "../pages/phoneList/script.js";
      break;
    default:
      cssLink.href = `../pages/${currentRoute.slice(1)}/style.css`;
      script.src = `../pages/${currentRoute.slice(1)}/script.js`;
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
