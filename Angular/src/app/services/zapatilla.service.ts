import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {

    public zapatillas: Zapatilla[];

    constructor(){
        this.zapatillas = [
            new Zapatilla('Addidas Air','Addidas','Blanco',80,true),
            new Zapatilla('Nike Air','Nike','Blanco',70,true),
            new Zapatilla('Reebook Air','Reebook','Blanco',60,true),
            new Zapatilla('Addidas Dirt','Addidas','Blanco',80,true)
        ]
    }

    getZapatillas(): Zapatilla[]{
        return this.zapatillas
    }
}