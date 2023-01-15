import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDrhUwIYfqnjavqIO5eZP3Zpvvwho5AFYw",
    authDomain: "proyectoreactt.firebaseapp.com",
    projectId: "proyectoreactt",
    storageBucket: "proyectoreactt.appspot.com",
    messagingSenderId: "824196241386",
    appId: "1:824196241386:web:9d48cb80a293d5db490493"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export async function getItemDetail(id) {
    let product =  doc(DB, "products", id);

    let snapshot = await getDoc(product);
    let item = snapshot.data();
    item.id = snapshot.id;
    return item;
}

export async function itemsGeneral() {
    let collectionRef = collection(DB, "products");
    let snapshots = await getDocs(collectionRef);

    let itemsArray = snapshots.docs;
    let items = itemsArray.map ( (doc) => {
        return {...doc.data(), id: doc.id}
    })

    return items;
}

export async function getItemCategory(catID) {
    let collectionRefCat = collection(DB, "products");
    let q = query(collectionRefCat, where("categoria", "==", catID));
    let snapshotsCat = await getDocs(q);

    let itemsArrayCat = snapshotsCat.docs;
    let itemsCat = itemsArrayCat.map ( (doc) => {
        return {...doc.data(), id: doc.id}
    })

    return itemsCat;
}

/* export async function exportItems() {
    const productos = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMMXdJOG13rDp9cEzdRkvz9iP0G_6SBMJ_Q&usqp=CAU", 
            nombre: "Camisa",
            detail: "Una camisa elegante para ir al trabajo o a una reunión importante. Muy lujosa y a un precio imperdible.",
            precio: 5500,
            stock: 95,
            categoria: "ropa",
            id: "1",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOWwdD1Phq9JeBbkUp8qnDwUdwfhqt_30aQ&usqp=CAU", 
            nombre: "Remera", 
            descuento: "30% OFF",
            detail: "Una remera con los colores de la bandera Argentina, y una frase que hace referencia al aliento por la misma: Vamos Argentina!.",
            precio: 3500,
            stock: 90,
            categoria: "ropa",
            id: "2",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4w-yCd8XXyncNryt8S3qu46DYU_tudBlVgg&usqp=CAU", 
            nombre: "Golden S", 
            detail: "Un perfume con un aroma muy agradable para el olfato, y con un precio llamativo para la calidad del producto.",
            precio: 7650,
            stock: 14,
            categoria: "perfumeria",
            id: "3",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ah3QTkaaDVKoW-uqjVymh1nOJgPz7zmCng&usqp=CAU", 
            nombre: "Zapatillas", 
            detail: "Unas zapatillas cómodas y sin muchos detalles, con disponibilidad de distintos colores para elegir, y a un muy buen precio.",
            precio: 8000,
            stock: 30,
            categoria: "ropa",
            id: "4",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7NisjMa34nSOlvFb04d20dD1U0nzs4e3hg&usqp=CAU", 
            nombre: "Pantalon", 
            detail: "Un pantalón ajustado pero cómodo, con un color verdoso y distintos talles seleccionables.",
            precio: 9000,
            stock: 40,
            categoria: "ropa",
            id: "5",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-n5vDU3wMl0vm0irTdqaXJ7dKVrsiMrZLg&usqp=CAU", 
            nombre: "Gorro", 
            detail: "Piluso marca Puma, de color negro por el exterior y rojo por el interior, perfecto para los días con mucho sol.",
            precio: 3300,
            stock: 67,
            categoria: "ropa",
            id: "6",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepf6172s__rbTyXiprv3i8xpEBvcF8jSJnMJxD0EZ0BPoss3fqJ5xNuQdhMYHPbTsG38&usqp=CAU", 
            nombre: "The Icon", 
            detail: "Un perfume con una oferta imperdible en el precio, muy elegante, a la altura de un evento importante o una cita.",
            precio: 7630,
            stock: 8,
            descuento: "50% OFF",
            categoria: "perfumeria",
            id: "7",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXIuVAwVcg2fVVHDX8ZyspCU4maVJ93oQGRw&usqp=CAU", 
            nombre: "Bermudas",
            detail: "Unas bermudas de Jean, con tela finita ideal para los días de calor. Pueden venir en distintos colores.",
            precio: 3500,
            stock: 35,
            categoria: "ropa",
            id: "8",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkcTP6BVFtTfpBIEBAYJ7F6sTEmWKgkSH9A&usqp=CAU", 
            nombre: "Camiseta Arg", 
            detail: "La camiseta de la selección argentina de futbol, con el modelo utilizado en el mundial 2014, y con una oferta imperdible.",
            precio: 12700,
            stock: 110,
            categoria: "ropa",
            id: "9",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD50eLt_qQxWvW-vfPj2D09tzO04rfWrzDZw&usqp=CAU", 
            nombre: "Lentes", 
            detail: "Lentes de aviador marca RayBan, muy lujosos y también en una oferta especial.",
            precio: 8159.99,
            stock: 5,
            descuento: "13% OFF",
            categoria: "ropa",
            id: "10",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYvgIZpq5nIAfpHMcLpXTiow9zLLalY45vnaK7Y6C9The8juGujo5CrVjYU-5ma7ahdE&usqp=CAU", 
            nombre: "Avon", 
            detail: "Otro lujoso y rico perfume en oferta especial por tiempo limitado. Sorprendé a tu pareja con este gran y atractivo aroma.",
            precio: 7520,
            stock: 17,
            categoria: "perfumeria",
            id: "11",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_uFNJjQeDEAUF3TRA1zTdOr7KguByIJJBg&usqp=CAU", 
            nombre: "Gorro", 
            detail: "Un gorro de lana de gran calidad, ideal para los días de frio y cómodo para el cliente.",
            precio: 3399.99,
            stock: 60,
            categoria: "ropa",
            id: "12",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCpS-1RI4spobszZL1YAap7FdaXWTI60fOg&usqp=CAU", 
            nombre: "Diseño 1",
            detail: "Una remera blanca y negra con un diseño en la parte delantera y lisa por detrás.",
            precio: 3399.99,
            stock: 60,
            categoria: "ropa",
            id: "13",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsLakcIz4l5vbj8h-w4amhQltQJh2qHfItepXxlNSHRIEWOHM7fLfwfNZkUfgmXkEEbY&usqp=CAU", 
            nombre: "Diseño 2", 
            detail: "Una remera con un diseño especial del club River Plate, de tela suave e ideal para días de calor.",
            precio: 4399.99,
            stock: 60,
            categoria: "ropa",
            id: "14",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOIwNEzuk9GGfKBEoGjd7-8nOafsNuEgdcQ&usqp=CAU", 
            nombre: "Diseño 3", 
            detail: "Una remera blanca y negra con un diseño en la parte delantera y lisa por detrás.",
            precio: 3399.99,
            stock: 60,
            categoria: "ropa",
            id: "15",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0mJ7fVozMUXLETxYlvlXJYaw0016b_T-AAdd8hlfgfyhCK1C0Hp2dgqww3PfhXlL4BPU&usqp=CAU", 
            nombre: "Diseño 4", 
            detail: "Una remera blanca y gris con un diseño llamativo de playa.",
            precio: 3399.99,
            stock: 60,
            categoria: "ropa",
            id: "16",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgsXDJw6pZruWiR-sY9PAdEVCNsOXvYkPLPw&usqp=CAU", 
            nombre: "Diseño 5", 
            detail: "Una remera deportiva y ajustada, con un diseño especial gaming. Muy cómoda y llamativa.",
            precio: 3399.99,
            stock: 60,
            categoria: "ropa",
            id: "17",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0xBEaEe2DstmCAObyc1FIVlnKD0klbuhUw&usqp=CAU", 
            nombre: "Diseño 6", 
            detail: "Una remera con un diseño especial dedicado a los fanáticos del anime y series animadas.",
            precio: 3399.99,
            stock: 60,
            categoria: "ropa",
            id: "18",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXIuVAwVcg2fVVHDX8ZyspCU4maVJ93oQGRw&usqp=CAU", 
            nombre: "Bermudas",
            detail: "Unas bermudas de Jean, con tela finita ideal para los días de calor. Pueden venir en distintos colores.",
            precio: 3500,
            stock: 20,
            categoria: "ropa",
            id: "19",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiL9cBXYPUF97qmwrM5PntiDkE0ZaeUwfwPQ&usqp=CAU", 
            nombre: "Street", 
            detail: "Un pantalón con un estilo callejero, pero a la vez elegante, y cómodo.",
            precio: 6399.99,
            stock: 10,
            categoria: "ropa",
            id: "20",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64fiVqisiUcW0bjX8-NGsZzlBsH3xe3Z18A&usqp=CAU", 
            nombre: "Street 2.0", 
            detail: "Otro pantalón con un estilo callejero, pero a la vez elegante, y cómodo. Parecido al Street anterior, pero con otras tonalidades.",
            precio: 6399.99,
            stock: 3,
            categoria: "ropa",
            id: "21",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3HXteW5nWL1yerXudtPDQj7Jm0h4onJ62Q&usqp=CAU", 
            nombre: "Holgados", 
            detail: "Un pantalón con un estilo holgado, o mejor conocido como Babuchas, muy cómodos.",
            precio: 4500,
            stock: 40,
            categoria: "ropa",
            id: "22",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zDy33_aWLu3J50n1y0zoFHV_EWIqZtn1Aw&usqp=CAU", 
            nombre: "Jeans A", 
            detail: "Unos jeans elegantes, ideales para reuniones formales o salidas especiales. Tela gruesa con muy buen detallado.",
            precio: 6000,
            stock: 20,
            descuento: "10% OFF",
            categoria: "ropa",
            id: "23",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYtj0RBqMU84hguU1A0PIijVNAZhTlZbxYQ&usqp=CAU", 
            nombre: "Jeans B", 
            detail: "Unos jeans elegantes, ideales para reuniones formales o salidas especiales. Tela gruesa con muy buen detallado.",
            precio: 5999.99,
            stock: 13,
            categoria: "ropa",
            id: "24",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilTfA4vBuOBNzSjQC2QqZz1aIcPLhodKYGA&usqp=CAU", 
            nombre: "Soquetes",
            detail: "3 pares de medias cortas de tela fina y cómodos. No se aprecian con zapatillas puestas.",
            precio: 1500,
            stock: 20,
            categoria: "ropa",
            id: "25",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmdJ5YJPEcqUSs8BjcwEayuQYrzbGhjOPbQ&usqp=CAU", 
            nombre: "Gorras Sport", 
            detail: "Gorras deportivas e ideales para días soleados. Color a elección del cliente.",
            precio: 3500,
            stock: 60,
            categoria: "ropa",
            id: "26",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD50eLt_qQxWvW-vfPj2D09tzO04rfWrzDZw&usqp=CAU", 
            nombre: "Lentes", 
            detail: "Lentes de aviador marca RayBan, muy lujosos y también en una oferta especial.",
            precio: 8159.99,
            stock: 10,
            categoria: "ropa",
            id: "27",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_uFNJjQeDEAUF3TRA1zTdOr7KguByIJJBg&usqp=CAU", 
            nombre: "Gorro", 
            detail: "Un gorro de lana de gran calidad, ideal para los días de frio y cómodo para el cliente.",
            precio: 3399.99,
            stock: 10,
            categoria: "ropa",
            id: "28",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-LnG-6vc9u2RrmKnhr_0DATbWy3VxNx5Tw&usqp=CAU", 
            nombre: "Zapatillas W", 
            detail: "Unas zapatillas blancas semi-deportivas. Atractivas y cómodas a la vez.",
            precio: 9899.99,
            stock: 17,
            categoria: "ropa",
            id: "29",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVz9ynpp8yMsIJT0gfYsu94YRqbGlvXb7Kg&usqp=CAU", 
            nombre: "Zapatillas S", 
            detail: "Otras zapatillas, pero con más tonalidades y otro aspecto físico, que mantiene la misma comodidad.",
            precio: 8600,
            stock: 23,
            descuento: "15% OFF",
            categoria: "ropa",
            id: "30",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnowfLQeTGR4b9kItYzv2zaioN1ZhI78D5Tg&usqp=CAU",
            nombre: "Gorra Tela",
            detail: "Una gorra de tela fina, cómoda y práctica.",
            precio: 3400,
            stock: 28,
            categoria: "ropa",
            id: "31",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRiuVoHFSYBaLmjyKxx3lFYbhNvqNkddlbCg&usqp=CAU", 
            nombre: "Christian Dior", 
            detail: "Perfume marca Christian Dior, muy lujoso y en un precio accesible para el usuario.",
            precio: 11800,
            stock: 5,
            categoria: "perfumeria",
            id: "32",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReY_uoefJO4N8Ku5n7fbt1ZIdYEsbBVSCWDA&usqp=CAU", 
            nombre: "Dolce & G",  
            detail: "Perfume marca Dolce & Gabbana, también lujoso como el Christan Dior, pero a un precio más accesible.",
            precio: 8599.99,
            stock: 6,
            categoria: "perfumeria",
            id: "33",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkHgp9Fg6TwZRKfWda6xxAgDoOlNLoCbM4g&usqp=CAU", 
            nombre: "ONA",
            detail: "Perfume marca ONA. Su aroma llama la atención al instante, y capta a las personas que te rodean.",
            precio: 9899.99,
            stock: 10,
            categoria: "perfumeria",
            id: "34",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ICieE0WnCVfFlNyA5xNoa2zDGCHHQGm8SQ&usqp=CAU", 
            nombre: "Firulete", 
            detail: "Perfume marca Firulete. Una opción más barata, pero de buena calidad.",
            precio: 6800,
            stock: 20,
            categoria: "perfumeria",
            id: "35",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8fGCNwApNPZU0bWKlVygVQbYl_M7EvV8IdGrAsE6sNG3koBUsDFXFMgA8TEXEB-kuLQ&usqp=CAU", 
            nombre: "The Original", 
            detail: "Perfume marca Firulete. Una opción más barata, pero de buena calidad.",
            precio: 7599.99,
            stock: 3,
            categoria: "perfumeria",
            id: "36",
        },
        {
            img: "https://m.media-amazon.com/images/I/31u5dxI5eIL.jpg", 
            nombre: "Eternity", 
            detail: "Perfume marca Calvin Klein. Excelente relación calidad-precio y una buena fragancia para una primera cita.",
            precio: 9899.99,
            stock: 23,
            categoria: "perfumeria",
            id: "37",
        },
        {
            img: "https://www.mifarma.com.ar/1143-home_default/perfume-importado-mujer-ana-de-analia-maiorana-edp-75ml.jpg", 
            nombre: "ANA", 
            detail: "Perfume marca ANA de Analia Maiorana. Una opción excelente y de buena calidad.",
            precio: 10500,
            stock: 20,
            categoria: "perfumeria",
            id: "38",
        },
        {
            img: "https://farmaonline.vteximg.com.br/arquivos/ids/312805-450-450/50-ML.jpg?v=637745046800400000", 
            nombre: "Irresistible", 
            detail: "Perfume marca Givenchy. Un perfume importado, y de muy rica fragancia.",
            precio: 14099.99,
            stock: 10,
            categoria: "perfumeria",
            id: "39",
        },
        {
            img: "https://stylewatchio.vtexassets.com/arquivos/ids/212898-500-auto?v=1756652307&width=500&height=auto&aspect=true", 
            nombre: "Bright Crystal", 
            detail: "Perfume marca Versace. Otro perfume importado, pero de precio más razonable.",
            precio: 11000,
            stock: 19,
            categoria: "perfumeria",
            id: "40",
        },
        {
            img: "https://www.sams.com.mx/images/product-images/img_small/000257606s.jpg", 
            nombre: "Pour Homme", 
            detail: "Perfume marca Dolce & Gabbana. Una opción más barata, pero de buena calidad.",
            precio: 7430,
            stock: 30,
            categoria: "perfumeria",
            id: "41",
        },
        {
            img: "https://getthelookar.vteximg.com.br/arquivos/ids/170501-600-600/219435_eau-de-parfum-cher-dieciseis-aurea-floral-x-50-ml_imagen-1.jpg?v=638013158831500000", 
            nombre: "Dieciseis", 
            detail: "Perfume marca CHER. Fragancia única en el mercado.",
            precio: 5799.99,
            stock: 8,
            categoria: "perfumeria",
            id: "42",
        },
        {
            img: "https://media.revistagq.com/photos/63341fb563fed47722370d0a/1:1/w_3000,h_3000,c_limit/5.%20Giorgio%20Armani.jpg", 
            nombre: "Aqua Di Gio", 
            detail: "Perfume marca Giorgio Armani. Una excelente opción para hombres.",
            precio: 8320,
            stock: 9,
            categoria: "perfumeria",
            id: "43",
        },
        {
            img: "https://i1.perfumesclub.com/grande/18436.jpg", 
            nombre: "CH", 
            stock: 10,
            detail: "Perfume marca Carolina Herrera, una muy aclamada y valorada en el mercado.",
            precio: 11199.99,
            categoria: "perfumeria",
            id: "44",
        },
        {
            img: "https://d2ye0ltusw47tz.cloudfront.net/10089983-large_default/perfume-importado-hombre-p-rabanne-one-million-edt-100-ml.jpg", 
            nombre: "One Million", 
            detail: "Perfume marca Paco Rabanne. Una opción más barata, pero de buena calidad.",
            precio: 7599.99,
            stock: 4,
            categoria: "perfumeria",
            id: "45",
        },
        {
            img: "https://m.media-amazon.com/images/I/51Rdkb2T35L.jpg", 
            nombre: "Homem", 
            detail: "Perfume marca Natura. Una opción más barata, pero de buena calidad.",
            precio: 6599.99,
            stock: 7,
            categoria: "perfumeria",
            id: "46",
        },
    ];

    for (let item of productos) {
        let collectionRefExp = collection(DB, "products");
        addDoc(collectionRefExp, item)
        .then(respuesta => console.log("hola"))
    };
} */