class MobileMenuHandler{
    constructor(buttonCollapse, elementToToggle, classNameToggle){
        this.buttonCollapse = buttonCollapse;
        this.elementToToggle = elementToToggle;
        this.classNameToggle = classNameToggle;
    }
    menuCollapseHandler(){
        this.buttonCollapse.addEventListener('click', ()=>{
            this.elementToToggle.classList.toggle(this.classNameToggle);
        })
    }
}
export default MobileMenuHandler;