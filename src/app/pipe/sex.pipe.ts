import { Pipe } from "@angular/core";

@Pipe({
    name: 'sex' //管道名
})
export class SexPipe {
    //管道到执行过滤任务的是一个固定函数,使用transform
    // transform(val : any){ //变形
    //     if(val == 1){
    //         return '男'
    //     }else if(val == 0){
    //         return '女'
    //     }else{
    //         return '未知'
    //     }
    // }

    transform(val: any, lang = 'zh') { //变形
        if (lang == 'zh') {
            if (val == 1) {
                return '男'
            } else if (val == 0) {
                return '女'
            } else {
                return '未知'
            }
        }else if(lang == 'en'){
            if (val == 1) {
                return 'Male'
            } else if (val == 0) {
                return 'Female'
            } else {
                return 'Unknown'
            }
        }
        return 0;
    }
}