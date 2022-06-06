import { Pipe } from "@angular/core";

@Pipe({
    name:'zzmm'
})
export class Zzmm{
    // 为什么format不能是any
    transform(val: any, format = 'short'){
        if(format == 'short'){
            if(val == 10){
                return "党员"
            }else if(val == 20){
                return "团员"
            }else{
                return "群众"
            }
        }else if(format == "long"){
            if(val == 10){
                return "中国共产党党员"
            }else if (val == 20){
                return "中国共青团团员"
            }else{
                return "中国人民群众"
            }
        }
        return "意外退出"
    }
}