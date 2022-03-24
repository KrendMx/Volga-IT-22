import {makeAutoObservable,makeObservable} from "mobx";

class Info {

    userInfo = {sex:"",eyewear_type:"",lensType:"",frame_size:[],}

    constructor() {
        makeAutoObservable(this)
    }
}
export default new Info()