import '../styles/main.scss';
//https://fslightbox.com/javascript/documentation/installation#package-manager
import 'fslightbox';
//https://www.npmjs.com/package/lazysizes
import 'lazysizes';

//variables related with "mobileMenuHandler"
const buttonCollapse = document.querySelector('#btnCollapse');
const elementToToggle = document.querySelector('#menu');
const classNameToggle = 'mainMenu--open';

//variables related with "CreateDots" "and ChangePhoto"
const dotsWrapper = document.querySelector('#dotsWrapper');
const sliderPhotos = document.querySelectorAll('.sliderWrapper__img');

//variables related with ChangePhoto - promitionalTextShowing method
const promotionalTxt = document.querySelector('#promotionalTxt');

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

//photo change
const changePhoto = new ChangePhoto(dotsWrapper, sliderPhotos, promotionalTxt);