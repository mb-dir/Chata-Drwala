class DotsCreator {
    constructor(dotsWrapper, sliderImgCollection) {
        this.dotsWrapper = dotsWrapper;
        this.sliderImgCollection = sliderImgCollection;
    }
    drawDots(){
        this.sliderImgCollection.forEach((el, i)=>{
            i === 0 ? this.dotsWrapper.appendChild(this.makeDot(true)) : this.dotsWrapper.appendChild(this.makeDot(false));;
        });
    }
    makeDot(withExtraClass){
        const dot = document.createElement('li');
        dot.classList.add('sliderWrapper__dot');
        if(withExtraClass){
            dot.classList.add('sliderWrapper__dot--active');
        }
        return dot;
    }
}
export default DotsCreator;