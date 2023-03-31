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
