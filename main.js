import {Slider} from './slider.js';
import {Modal} from './modal.js';
import {Form} from './form.js';
const slider = new Slider(".review-slider-line", ".review-slider-window" ,".review-next", ".review-back");
const places = new Slider(".places-slider-line", ".places-slider-window" ,".places-next", ".places-back");
places.setGap(30);
// places.setActiveSlide(2)
const formModal = new Modal(['.form-close', '.preview-btn'], '.modal');
let form = new Form('.form-sub', ['.name', '.phone'], 'http://some-url.com')