document.addEventListener("DOMContentLoaded", () => {
  const flkty = new Flickity('.js-carousel', {
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    groupCells: false, // ← ここが1枚ずつ動く重要な設定！
    friction: 0.8,
    selectedAttraction: 0.12,
    wrapAround: true,
  　groupCells: 1,
  });

  document.querySelector('.carousel-next').addEventListener('click', () => flkty.next());
  document.querySelector('.carousel-prev').addEventListener('click', () => flkty.previous());
});

var elem = document.querySelector('.js-carousel');
var flkty = new Flickity(elem, {
  cellAlign: 'center',
  contain: true,
  groupCells: 1,   // ★ スマホで1枚ずつ表示
  pageDots: true   // ページインジケーターを表示
});


const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});



