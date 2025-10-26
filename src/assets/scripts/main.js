/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


//DOM
const mainHeader = document.getElementById('main-header');
const barsMenu = document.querySelector('.fa-bars');
const mainMenu = document.querySelector('.main-menu');
const mainMenuItem = document.querySelectorAll('.main-menu a');

//Variables
let mainMenuHidden = true;

//EVENTS
//WINDOW SCROLL
window.addEventListener('scroll', e=>{
  if (window.scrollY > 100){
    mainHeader.classList.add('main-header-fixed');
  } else {
    mainHeader.classList.remove('main-header-fixed');
  }  
});

//Bars menu click
barsMenu.addEventListener('click', ()=> toggleMenu());
//Item menu click
mainMenuItem.forEach((e)=>{
  e.addEventListener('click', ()=> toggleMenu());
});


function toggleMenu(){
  
  mainMenu.classList.toggle('is-open');
}

