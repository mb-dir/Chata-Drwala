class ChangePhoto {
    constructor(dotsWrapper, photos) {
        // dots wrapper because the dots are dynamically created and I cannot pass here the collection of dots
        // I mean when I want to save dots in variable like document.querySelectorAll(dots) I get an error, becuase there are no dots in DOM
        this.dotsWrapper = dotsWrapper;
        this.dots = this.dotsWrapper.children;
        this.photos = photos;
        this.index = 0;

        this.defaultPhotoChange();
        this.dotClickPhotoChange();
    }

    defaultPhotoChange(){
        setInterval(() => {
            this.index++;
            if (this.index === this.photos.length) {
                this.index = 0;
            }
            
            this.photoChange();
        }, 5000);
    }
    dotClickPhotoChange(){
        //convert to array to forEach works
        [...this.dots].forEach((dot, i)=>{
            dot.addEventListener('click', () => {
                this.index = i;
                this.photoChange();
            });
        });
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