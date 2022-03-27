import { makeAutoObservable, makeObservable } from "mobx";

class Info {
  userInfo = {
    slide1: 0,
    slide2: 0,
    slide3: 0,
    slide4: 0,
    slide5: 0,
    slide6: 0,
    slide7: 0,
    slide8: 0,
    slide9: 0,
    slide10: 0,
  };

  initialSlide = 0;

  constructor() {
    makeAutoObservable(this);
  }

  changeLabel(ctx, value) {
    this.userInfo[ctx] = value;
  }

  swiperSlides

  toPrevBannerSlide(){
    this.swiperPrevSlide();
    this.swiperPrevSlide();
    this.initialSlide -=10
  }

  swiperNextSlide() {}

  swiperPrevSlide() {}

  swiperStartSlide() {}

  toBetweenBanner() {
    this.swiperNextSlide();
    setTimeout(() => {
      this.swiperNextSlide();
      this.initialSlide += 10;
    }, 2000);
  }

  toNextSlide() {
    this.swiperNextSlide();
    this.initialSlide += 10;
  }

  toPrevSlide() {
    this.swiperPrevSlide();
    this.initialSlide -= 10;
  }

  toStartSlide() {
    this.swiperStartSlide();
    this.initialSlide = 0;
  }

  changeSlide(func1, func2, func3) {
    this.swiperPrevSlide = func1;
    this.swiperNextSlide = func2;
    this.swiperStartSlide = func3;
  }

  generateLink() {
    let link;
    for (let key in this.userInfo) {
      link += this.userInfo[key];
    }
    return link;
  }
}
export default new Info();
