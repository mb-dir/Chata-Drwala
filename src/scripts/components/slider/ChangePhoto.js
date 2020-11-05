class ChangePhoto {
    constructor(photos, dotsWrapper) {
        this.photos = photos;
        // dots wrapper because the dots are dynamically created and I cannot pass here the collection of dots
        // I mean when I want to save dots in variable like document.querySelectorAll(dots) I get an error, becuase there are no dots in DOM
        this.dotsWrapper = dotsWrapper;
        this.index = 0;
    }
}
export default ChangePhoto;