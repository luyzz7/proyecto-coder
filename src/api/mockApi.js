const products = [
    {
        id: "whey-protein-ena",
        title: "Whey Protein / ENA",
        img: "https://f.fcdn.app/imgs/735b78/wikimusculos.com.uy/wik/01a1/webp/catalogo/ENA06_201_1/2000-2000/ena-whey-protein-true-made-2lb-chocolate.jpg",
        price: 2500,
        stock: 8,
        category: "proteinas",
        description: "TRUEMADE WHEY PROTEIN contiene un blend de máxima pureza con una rápida absorción y una excelente calidad, garantizando una efectiva y rápida recuperación del tejido muscular. Aporta los aminoácidos y micronutrientes que son clave en la dieta de los deportistas. Además favorece la recuperación y definición de la masa muscular, maximizando fuerza y potencia en el entrenamiento. Aporta los nueve aminoácidos esenciales para una mejor definición muscular."
    },
    {
        id: "whey-protein-gold-nutrition",
        title: "Whey Protein / Gold Nutrition",
        img: "https://f.fcdn.app/imgs/262078/wikimusculos.com.uy/wik/e0de/webp/catalogo/GOL6_1010_1/2000-2000/gold-nutrition-whey-isolate-5lb-vainilla.jpg",
        stock: 5,
        price: 7400,
        category: "proteinas",
        description:"100% WHEY ISOLATE de Gold Nutrition es un suplemento proteico elaborado exclusivamente con Whey Protein ISOLATE, la proteína de más alto valor biológico! Obtenida a partir del suero de leche microfiltrado, esta proteína es rápidamente digerida y su perfil de aminoácidos es ideal para ayudar a la correcta función del organismo, con especial interés para los deportistas que precisan una rápida recuperación. La fórmula de 100% WHEY ISOLATE está realizada en base a proteína pura, no tiene agregados innecesarios, y está elaborada exclusivamente con Whey Aislado. No tiene Caseinato de Calcio u otras proteínas que disminuyen la velocidad de absorción, siendo una fuente ideal para la recuperación post entrenamiento! Además, 100% WHEY ISOLATE no tiene Lactosa, maltodextrina ni otros carbohidratos y tampoco aporta grasas! Una excelente fuente de proteína con bajas calorías y la mejor digestibilidad."
    },
    {
        id: "whey-protein-optimun-nutrition",
        title: "Whey Protein / Optimun Nutrition",
        img: "https://f.fcdn.app/imgs/d5c927/wikimusculos.com.uy/wik/74f1/webp/catalogo/OPT02_414_1/2000-2000/optimum-nutrition-gold-standard-5lb-chocolate.jpg",
        price: 7350,
        stock: 9,
        category: "proteinas",
        description: "100% Whey Gold Standard de Optimum Nutrition, es la fórmula de proteína de suero de leche más vendida durante años en el mundo. Cada batido de 100% Whey Gold Standard aporta más de 24g de proteína, lo que ayuda en el crecimiento y recuperación muscular, minimizando así la degradación de tejidos. Proteína de gran calidad que combina aislado de proteína de suero obtenido por técnicas de micro filtración e intercambio iónico con concentrado de proteína de suero ultra filtrada, además mantiene una cantidad de carbohidratos y grasas apropiadas para facilitar la absorción de la proteína."
    },
    {
        id: "bcaa-start-nutrition",
        title: "BCAA / Start Nutrition",
        img: "https://f.fcdn.app/imgs/fa03d4/wikimusculos.com.uy/wik/f0d3/webp/catalogo/STA29006_STA29006_1/460x460/star-nutrition-bcaa-2000-star-nutrition-bcaa-2000.jpg",
        price: 1800,
        stock: 7,
        category: "aminoacidos",
        description:"Estos aminoácidos son necesarios para el mantenimiento de los músculos durante el ejercicio y el stress físico, previniendo la degeneración de los mismos, además de disminuir la fatiga muscular. Los BCAA de Star Nutrition son elaborados con la máxima pureza de VALINA, LEUCINA e ISOLEUCINA. Calidad grado farmacológico. Incluyen cofactores para óptimizar su absorción."
    },
    {
        id: "universal-bcaa-start-nutrition",
        title: "Universal BCAA / Start Nutrition",
        img: "https://f.fcdn.app/imgs/d635b5/wikimusculos.com.uy/wik/0f0d/webp/catalogo/UNI04544_UNI04544_1/460x460/universal-bcaa-2000-130cc-universal-bcaa-2000-130cc.jpg",
        price: 2200,
        stock: 10,
        category: "aminoacidos",
        description:"Pocos aminos pueden compararse con los aminoácidos de cadena ramificada (BCAA, por sus siglas en inglés), razón por la cual han crecido dramáticamente en popularidad en los últimos años. Cada porción de BCAA 2000 proporciona más de 2,000 mg de leucina, valina e isoleucina, todos los cuales han sido científicamente probados para aumentar la síntesis de proteínas, facilitar la liberación de varias hormonas clave, mantener una relación de testosterona a cortisol favorable y prevenir la descomposición de proteínas y la pérdida muscular."
    },
];

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (categoryId) {
                resolve(
                    products.filter((product) => product.category === categoryId)
                );
            } else {
                resolve(products)
            }
        }, 2000);
    })
};

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                products.find((product) => product.id === id)
            );
        }, 2000);
    })
};
