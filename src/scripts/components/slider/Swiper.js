class Swiper{
    constructor(sliderImgs){
        this.sliderImgs = sliderImgs;
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