import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class SetService{
    private setInfo = new BehaviorSubject<any[]>([])
    theInfo$ = this.setInfo.asObservable()

    /**
     * Añade un item al array interno (no sobrescribe)
     */
    setData(data:any){
        const current = this.setInfo.getValue();
        this.setInfo.next([...current, data]);
    }

    /**
     * Devuelve el observable con la lista actualizada
     */
    getData() {
        return this.theInfo$;
    }

    clearData(){
        this.setInfo.next([])
    }


}