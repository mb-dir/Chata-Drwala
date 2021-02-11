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
                this.swipeX = e.touches[0].clientX;
                this.swipeY = e.touches[0].clientY;
            });

            img.addEventListener("touchmove",(e)=>{

            });
        }
    }
}

export default Swiper;