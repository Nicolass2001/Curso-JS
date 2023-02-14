export class Camiseta {
    private color: string
    private marca: string
    private precio: number

    constructor(color = "", marca = "", precio = 0){
        this.color = color
        this.marca = marca
        this.precio = precio
    }

    public setColor(color){
        this.color = color
    }

}