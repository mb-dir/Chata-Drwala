import '../styles/main.scss';

const btn = document.querySelector('.mainMenuWrapper__btnCollapse');
const nav = document.querySelector('.mainMenu');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('mainMenu--open');
})