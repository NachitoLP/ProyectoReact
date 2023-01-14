import productos from "../data/elementosGeneral";

export default function itemsGeneral() {
    return new Promise((resolve => {
        setTimeout(() =>{
            resolve(productos)
        }, 800)
    }))
}

export function getItemCategory(catID) {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            let itemsFound = productos.filter ( item => {
                return (item.categoria === catID)
            })
            if (itemsFound.length > 0){
                resolve(itemsFound)
            }
            else reject (alert("No existe esa categoria de productos"))
        }, 800)
    })
}

export function getItemDetail(id) {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            let itemFound = productos.find( itemArray => itemArray.id === id)
            if(itemFound){
                resolve(itemFound)
            }
            else{
                reject("Item no encontrado")
            }
        }, 800)
    })
}