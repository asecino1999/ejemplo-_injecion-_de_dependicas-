


export class none  { nombre: 'nada'='nada'; precio: 0=0 }
export class pollo  { nombre: 'pollo'='pollo'; precio: 10=10 }
export class res  { nombre: 'res'='res'; precio: 20=20 }
export class cordero  { nombre: 'cordero'= 'cordero'; precio: 30=30 }
export class tocino  { nombre: 'tocino'="tocino"; precio: 40=40 }
export class cerdo  { nombre: 'cerdo'='cerdo'; precio: 50=50 }

export class lechuga { nombre: 'lechuga'="lechuga"; precio: 60=60 }
export class tomate  { nombre: 'tomate'="tomate"; precio: 70=70 }
export class cebolla  { nombre: 'cebolla'="cebolla"; precio: 90=90 }

export class normalPan { nombre: 'normal'="normal"; precio: 10=10 }
export class integral { nombre: 'integral'="integral"; precio: 20=20 }
export class frances  { nombre: 'frances'="frances"; precio: 30=30 }



export type carne = pollo | res | cordero | tocino | cerdo|none
export type vegetal = lechuga | tomate | cebolla|none
export type pan = normalPan | integral | frances






//var pa:pan = fatoryName("pan")
//console.log(pa)
export class Pan {
    tipo: pan
    constructor(tipo: pan) {
        this.tipo = tipo
    }
    setPan(tipo:pan){
        this.tipo=tipo
    }
    getPrecio():number{
        return this.tipo.precio
    }
    getName(){
        return this.tipo.nombre
    }
}



export class Vegetales {
    list: vegetal[]
    constructor() {
        this.list = []
    }
    setVegetales(tipo: vegetal) {
        if(! (tipo instanceof none))
            this.list.push(tipo)
        else
            this.list=[]
        console.log(this.list)
    }
    getList():vegetal[]{
        return this.list
    }
    getPrecio():number{
        var p = 0
        this.list.forEach(element => {
            p+=element.precio
        });
        return p
    }
}



export class Carnes {
    list: carne[]
    constructor() {
        this.list = []
    }
    setCarne(tipo: carne) {
        if(! (tipo instanceof none))
            this.list.push(tipo)
        else
            this.list=[]
        console.log(this.list)
    }
    getList():carne[]{
        return this.list
    }
    getPrecio():number{
        var p = 0
        this.list.forEach(element => {
            p+=element.precio
        });
        return p
    }
}


export class Hamburguesa {
    carne: Carnes 
    vegetales: Vegetales 
    pan: Pan 
    constructor(pan: Pan,carne:Carnes,vegetales:Vegetales) {
        this.carne = carne
        this.vegetales = vegetales
        this.pan = pan
    }
    setCarne(carne: Carnes) {
        this.carne = carne
    }
    getCarnes(){
        return this.carne
    }
    setVegetales(vegetales: Vegetales) {
        this.vegetales = vegetales
    }
    getVegetales(){
        return this.vegetales
    }
    setPane(pan2: pan) {
        this.pan.setPan(pan2)
    }
    getPan(){
        return this.pan
    }
    getPrecio() {
        return this.pan.getPrecio()+this.carne.getPrecio()+this.vegetales.getPrecio()
    }
}

