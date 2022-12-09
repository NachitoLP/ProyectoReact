import elementosDestacados, {ofertasDestacadas, remeras, pantalones, otros, variosRopa, variosPerfume} from "../data/elementosSeccion";
import detalle from "../data/elementosGeneral";

export default function itemDestacado() {
    return new Promise((resolve => {
        setTimeout(() =>{
            resolve(elementosDestacados)
        }, 0)
    }))
};

export function itemOfertas() {
    return new Promise ((resolve => {
        setTimeout(() =>{
            resolve(ofertasDestacadas)
        }, 0)
    }))
}

export function ropaVarios() {
    return new Promise ((resolve => {
        setTimeout(() =>{
            resolve(variosRopa)
        }, 0)
    }))
}

export function perfumeVarios() {
    return new Promise ((resolve => {
        setTimeout(() =>{
            resolve(variosPerfume)
        }, 0)
    }))
}

export function itemRemera() {
    return new Promise ((resolve => {
        setTimeout(() =>{
            resolve(remeras)
        }, 0)
    }))
}

export function itemPantalon() {
    return new Promise ((resolve => {
        setTimeout(() =>{
            resolve(pantalones)
        }, 0)
    }))
}

export function itemOtro() {
    return new Promise ((resolve => {
        setTimeout(() =>{
            resolve(otros)
        }, 0)
    }))
}

export function getItemDetail(id) {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            let itemFound = detalle.find( itemArray => itemArray.id === id)
            if(itemFound){
                resolve(itemFound)
            }
            else{
                reject("Item no encontrado")
            }
        }, 0)
    })
}
