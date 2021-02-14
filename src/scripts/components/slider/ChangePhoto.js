class ChangePhoto {
    constructor(dotsWrapper, photos, promotionalTxt) {
        // dots wrapper because the dots are dynamically created and I cannot pass here the collection of dots
        // I mean when I want to save dots in variable like document.querySelectorAll(dots) I get an error, becuase there are no dots in DOM
        this.dotsWrapper = dotsWrapper;
        this.dots = this.dotsWrapper.children;
        this.photos = photos;
        this.promotionalTxt = promotionalTxt
        this.swipeX = null;
        this.index = 0;

        this.time;

        this.defaultPhotoChange();
        this.dotClickPhotoChange();
        this.swiper();
    }

    defaultPhotoChange(){
        this.time = setInterval(() => {
            this.index++;
            if (this.index === this.photos.length) {
                this.index = 0;
            }
            
            this.photoChange();
            this.promitionalTextShowing();
        }, 7000);
    }
    dotClickPhotoChange(){
        //convert to array to forEach works
        [...this.dots].forEach((dot, i)=>{
            dot.addEventListener('click', () => {
                this.index = i;
                this.photoChange();

                clearInterval(this.time);
                this.defaultPhotoChange();
                this.promitionalTextShowing();
            });
        });
    }
    swiper(){
        for(const img of this.photos){
            img.addEventListener("touchstart",(e)=>{
                this.swipeX = e.touches[0].clientX;
            });

            img.addEventListener("touchend",(e)=>{
                let currentX = e.changedTouches[0].clientX;
                //20 provide that user will not swipe the photo by acident
                if(this.swipeX-currentX > 20){
                    this.index++;
                    if (this.index === this.photos.length) {
                        this.index = 0;
                    }

                    clearInterval(this.time);
                    this.photoChange();
                    this.promitionalTextShowing();

                }else if(this.swipeX-currentX < -20){
                    this.index--;
                    
                    //less then 0 because in 0 index there is still a photo, so the photo has to change to the last only when the index is less then 0
                    if (this.index < 0) {
                        this.index = this.photos.length-1;
                    }

                    clearInterval(this.time);
                    this.photoChange();
                    this.promitionalTextShowing();
                }
            });
        }
    }
    promitionalTextShowing(){
        if(this.index !== 0){
            promotionalTxt.style.display = 'none';
        }else{
            promotionalTxt.style.display = 'flex';
        }
    }

    //auxiliary methods
    photoChange() {
        //photo change
        for (const photo of this.photos) {
            photo.classList.remove('sliderWrapper__img--active');
        }
        this.photos[this.index].classList.add('sliderWrapper__img--active');

        //dots change
        for (const dot of this.dots) {
            dot.classList.remove('sliderWrapper__dot--active');
        }
        this.dots[this.index].classList.add('sliderWrapper__dot--active');
    }
}
export default ChangePhoto;