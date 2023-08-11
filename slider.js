export class Slider {
    constructor(sliderLine, sliderWindow, buttonNext, buttonBack) {
        this.sliderLine = document.querySelector(sliderLine);
        this.sliderWindow = document.querySelector(sliderWindow);
        this.buttonNext = document.querySelector(buttonNext);
        this.buttonBack = document.querySelector(buttonBack);
        
        this.windowWidth = this.sliderWindow.getBoundingClientRect();
        const children = this.sliderLine.children
        this.slidersCount = children.length;
        this.activeSlide = 1;
        console.log(this.sliderLine.style);
        this.gap = 0;   

        this.buttonNext.addEventListener("click", () => {
            this.next()
        })

        this.buttonBack.addEventListener("click", () => {
            this.back()
        })

        this.sliderLine.style.left = "-" + (this.windowWidth.width * (this.activeSlide - 1)) + "px";
    }

    next() {
        console.log('click')
        if(this.activeSlide != this.slidersCount) {
            this.sliderLine.style.left = "-" + ((this.windowWidth.width * this.activeSlide) + this.gap * this.activeSlide) + "px";
            this.activeSlide++;
        } else {
            this.activeSlide = 1;
            this.sliderLine.style.left = "0px";
        }
    }

    back() {
        console.log('click')
        if(this.activeSlide != 1) {
            console.log(this.activeSlide)
            this.activeSlide--;
            this.sliderLine.style.left = "-" + ((this.windowWidth.width * (this.activeSlide - 1)) + this.gap * (this.activeSlide - 1) ) + "px";
        } else {
            this.activeSlide = this.slidersCount;
            this.sliderLine.style.left = "-" + ((this.windowWidth.width * (this.activeSlide - 1)) + this.gap * (this.activeSlide - 1) ) + "px";
        }
    }

    setGap(gap) {
        this.gap = gap;
    }

    setActiveSlide(slide) {
        this.activeSlide = slide;
    }
}

