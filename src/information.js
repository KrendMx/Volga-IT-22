import {makeAutoObservable,makeObservable} from "mobx";

class Info {
    
    userInfo = {
        "slide1":0,
        "slide2":0,
        "slide3":0,
        "slide4":0,
        "slide5":0,
        "slide6":0,
        "slide7":0,
        "slide8":0,
        "slide9":0,
        "slide10":0,
    }

    constructor() {
        makeAutoObservable(this)
    }

    changeLabel(ctx,value){
        this.userInfo[ctx] = value
    }

    generateLink(){
        let link
        for (let key in this.userInfo){
            link += this.userInfo[key]
        }
        return link
    }
}
export default new Info()