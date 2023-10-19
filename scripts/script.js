const toggleButton=document.querySelector(".toggleButton");
toggleButton.addEventListener('click', function (event) {
  event.preventDefault();
  toggleButton.textContent= toggleButton.textContent=="EN"? "RU":"EN";

})
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu1');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})