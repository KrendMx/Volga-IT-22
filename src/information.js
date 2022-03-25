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

  initialSlide = 100;

  constructor() {
    makeAutoObservable(this);
  }

  changeLabel(ctx, value) {
    this.userInfo[ctx] = value;
  }

  nextSlide() {}

  prevSlide() {}

  changeSlide(func1, func2, func3) {
    this.prevSlide = func1;
    this.nextSlide = func2;
    this.startSlide = func3;
  }

  startSlide() {}

  generateLink() {
    let link;
    for (let key in this.userInfo) {
      link += this.userInfo[key];
    }
    return link;
  }
}
export default new Info();
