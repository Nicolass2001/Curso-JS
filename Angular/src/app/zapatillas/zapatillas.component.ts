import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas"
    public listado: string = "Listado de las zapatillas mas populares"
    public zapatillas: Zapatilla[] = [];
    public mi_marca: string = '';

    constructor(
        private _zapatillaServices: ZapatillaService
    ){

    }

    ngOnInit(): void {
        this.zapatillas = this._zapatillaServices.getZapatillas();
    }
}