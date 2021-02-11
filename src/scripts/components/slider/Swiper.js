class Swiper{
    constructor(sliderImgs){
        this.sliderImgs = sliderImgs;

        this.swipeX = null;
        this.swipeY = null;

        this.detectSwipeDirection();
    }
    detectSwipeDirection(){
        for(const img of this.sliderImgs){
            img.addEventListener("touchstart",(e)=>{

            });

            img.addEventListener("touchmove",(e)=>{

            });
        }
    }
}

export default Swiper;