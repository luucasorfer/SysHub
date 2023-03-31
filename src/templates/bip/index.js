/*export default () => {
  const container = document.createElement('div');

  const template = `gerador de BIP`

  container.innerHTML = template;

  return container;
}*/

export default () => {
  const container = document.createElement('div'); // Cria div
  container.classList.add('container-class'); // Adiciona a classe

  const template = `gerador de BIP`

  container.innerHTML = template;

  // Ou defina o estilo diretamente
  container.style.backgroundColor = 'red';
  container.style.color = 'white';

  return container;
}
