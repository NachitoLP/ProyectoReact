import elementosDestacados, {ofertasDestacadas, remeras, pantalones, otros} from "../data/elementosDestacados";

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
