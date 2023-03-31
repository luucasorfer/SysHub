/*
-------------------------------------------------------------------------------
export default () => {
  const container = document.createElement('div');

  const template = `Lista de Ramais`

  container.innerHTML = template;

  return container;
}
-------------------------------------------------------------------------------
*/

export default () => {
  const container = document.createElement("div");
  const template = `
    <div id="container">
    <h1>Lista Telefônica</h1>
    <input
      type="text"
      class="search-input"
      id="search"
      placeholder="Digite aqui para buscar"
    />
    <div class="filterList" id="filter">
      <label>
        <input type="radio" name="filter-local" value="Alfenas" checked />
        Alfenas
      </label>

      <label>
        <input type="radio" name="filter-local" value="São Paulo" />
        São Paulo
      </label>

      <label>
        <input type="radio" name="filter-local" value="Blumenau" />
        Blumenau
      </label>
    </div>
    <ul id="results"></ul>
    <button id="print-button" onclick="window.print()">Imprimir</button>
    </div>
    `;
  container.innerHTML = template;

  return container;
};
