import home from "../pages/home/index.js";
import phoneList from "../pages/phoneList/index.js";
import keyuser from "../pages/keyuser/index.js";
import ccusto from "../pages/ccusto/index.js";
import bip from "../pages/bip/index.js";

const main = document.querySelector("#root");

const init = () => {

  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    switch (window.location.hash) {
      case "#home":
        main.appendChild(home());
        break;

      case "#phoneList":
        main.appendChild(phoneList());
        
        // Cria a tag link para o CSS
        const cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.href = "../pages/phoneList/stylePhoneList.css";

        // Adiciona a tag link no cabeçalho da página
        const head = document.querySelector("head");
        head.appendChild(cssLink);

        // Cria a tag script
        const script = document.createElement("script");
        script.src = "../pages/phoneList/script.js";

        // Adiciona a tag script no final do body
        document.body.appendChild(script);
        break;

      case "#ccusto":
        main.appendChild(ccusto());
        break;

      case "#keyuser":
        main.appendChild(keyuser());
        break;
        
      case "#bip":
        main.appendChild(bip());
        break;
    }
  });
};

window.addEventListener("load", () => {
  main.appendChild(home());
  init();
});
