import '../styles/main.scss';
import './components/mobileMenuHandler.js';

//variables related with "mobileMenuHandler"
const buttonCollapse = document.querySelector('#btnCollapse');
const elementToToggle = document.querySelector('#menu');
const classNameToggle = 'mainMenu--open';

//COMPONENTS IMPORTS
import MobileMenuHandler from './components/mobileMenuHandler.js';

//COMPONENTS USE

//mobile menu
const menuHander = new MobileMenuHandler(buttonCollapse, elementToToggle, classNameToggle);
menuHander.menuCollapseHandler();