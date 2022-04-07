import { makeAutoObservable } from "mobx";

class Info {
  userInfo = {
    gender: 0,
    eyewear_type: 0,
    lenstype: 0,
    frame_size: 0,
    blue_light: 0,
    shade: 0,
    face_shape: 0,
    facial_features: 0,
    shape: 0,
    brand: 0,
  };

  initialSlide = 0;
  initialLink = "";

  constructor() {
    makeAutoObservable(this);
  }

  changeLabel(ctx, value) {
    this.userInfo[ctx] = value;
  }

  changeInitialLink(value) {
    this.initialLink = value;
  }

  swiperSlides;

  toPrevBannerSlide() {
    this.swiperPrevSlide();
    this.swiperPrevSlide();
    this.initialSlide -= 10;
  }

  swiperNextSlide() {}

  swiperPrevSlide() {}

  swiperStartSlide() {}

  toBetweenBanner(val) {
    this.swiperNextSlide();
    setTimeout(() => {
      this.swiperNextSlide();
      if (!val) this.initialSlide += 10;
    }, 2000);
  }

  toNextSlide() {
    this.swiperNextSlide();
    this.initialSlide += 10;
  }

  toPrevSlide(val) {
    this.swiperPrevSlide();
    this.initialSlide -= 10;
  }

  toStartSlide() {
    this.swiperStartSlide();
    this.initialSlide = 0;
    this.userInfo = {
      gender: 0,
      eyewear_type: 0,
      lenstype: 0,
      frame_size: 0,
      blue_light: 0,
      shade: 0,
      face_shape: 0,
      facial_features: 0,
      shape: 0,
      brand: 0,
    };
  }

  changeSlide(func1, func2, func3) {
    this.swiperPrevSlide = func1;
    this.swiperNextSlide = func2;
    this.swiperStartSlide = func3;
  }

  generateLink() {
    let link = this.initialLink;
    for (let key in this.userInfo) {
      if (this.userInfo[key] !== 0) {
        link += key + "=" + this.userInfo[key] + "&";
      }
    }
    return link.split("").slice(0, -1).join("");
  }
}
export default new Info();
