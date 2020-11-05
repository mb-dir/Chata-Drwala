class ChangePhoto {
    constructor(dotsWrapper, photos) {
        // dots wrapper because the dots are dynamically created and I cannot pass here the collection of dots
        // I mean when I want to save dots in variable like document.querySelectorAll(dots) I get an error, becuase there are no dots in DOM
        this.dotsWrapper = dotsWrapper;
        this.photos = photos;
        this.index = 0;

        this.defaultPhotoChange();
    }

    defaultPhotoChange(){
        setInterval(() => {
            this.index++;
            if (this.index === this.photos.length) {
                this.index = 0;
            }
            //photo change
            for (const photo of this.photos) {
                photo.classList.remove('sliderWrapper__img--active');
            }
            this.photos[this.index].classList.add('sliderWrapper__img--active');
        }, 5000);
    }
}
export default ChangePhoto;