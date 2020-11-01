class DotsCreator {
    constructor(dotsWrapper, sliderImgCollection) {
        this.dotsWrapper = dotsWrapper;
        this.sliderImgCollection = sliderImgCollection;
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