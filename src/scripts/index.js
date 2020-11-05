import '../styles/main.scss';
import './components/mobileMenuHandler.js';

//variables related with "mobileMenuHandler"
const buttonCollapse = document.querySelector('#btnCollapse');
const elementToToggle = document.querySelector('#menu');
const classNameToggle = 'mainMenu--open';

//variables related with "CreateDots" "and ChangePhoto"
const dotsWrapper = document.querySelector('#dotsWrapper');
const sliderPhotos = document.querySelectorAll('.sliderWrapper__img');

//COMPONENTS IMPORTS
import MobileMenuHandler from './components/mobileMenuHandler.js';
import DotsCreator from './components/slider/CreateDots.js';
import ChangePhoto from './components/slider/ChangePhoto';

//COMPONENTS USE

//mobile menu
const menuHander = new MobileMenuHandler(buttonCollapse, elementToToggle, classNameToggle);
menuHander.menuCollapseHandler();

//dots creator
const dotsCreator = new DotsCreator(dotsWrapper, sliderPhotos);
dotsCreator.drawDots();