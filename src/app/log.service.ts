import { Injectable } from "@angular/core"

//所有服务对象都是可被注入的
@Injectable({
    providedIn : 'root'  //王健林，指定当前服务对象在“根模块”中提供——AppModule
})
export class LogService{ //法拉利
    //执行日志记录功能
    doLog(action: any){
        let uname = 'admin4'
        let time = new Date().getDate()
        console.log(`管理员：${uname} 时间：${time} 动作：${action}`)
    }
}