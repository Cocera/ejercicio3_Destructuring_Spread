// Exercise destructuring 

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];

const [Luis,Ana] = empleados;
console.log(Ana);

const {email} = Luis;
console.log(email);




const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
};

const {name:nombre, type} = pokemon;
console.log(nombre);
console.log(type);

const {moves} = pokemon;
const [,trackle] = moves
console.log(trackle)




const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
};

const sumaPokemons = {...pokemon, ...pikachu};
console.log(sumaPokemons);




const sumEveryOther = (...numeros) => {
    const result = numeros.reduce((a,b) => a+b);
    console.log(result);
};

sumEveryOther(6, 8, 2, 3, 1);  // Result 20
sumEveryOther(11, 3, 12);  // Result 26





const addOnlyNums = (...data) => {
    const sumDataNum = data.filter(num => typeof num === "number").reduce((a,b) => a+b);
    console.log(sumDataNum);
};

addOnlyNums(1, 'perro', 2, 4); // Result 7




const countTheArgs = (...data) => console.log(data.length);

countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4




const combineTwoArrays = (arr1, arr2) => {
    const sumaArr = [...arr1, ...arr2]
    console.log(sumaArr)
};

combineTwoArrays(['gato', 'perro'],['gato', 'perro', 'pollo', 'oso']);




// Extra exercices

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

const {today, tomorrow} = HIGH_TEMPERATURES;

console.log(today);
console.log(tomorrow);




// PENDING
// BUSCAR NEW SET METODO JS
// const onlyUniques = (...argElements) => {
//     const arrUniques = argElements.filter(element => {
//         element != element++
//     })
//     console.log(arrUniques)
// };
// onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); // ['gato', 'pollo', 'cerdo']
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); // [1, 2, 3, 6, 7, 8]




// PENDING
// BUSCAR CONCAT METODO JS
// PROBAR OPCION BUCLE FOR
// const combineAllArrays = (...arrays) => { 
//     console.log(arrays);
//     console.log(arrays.length);
// };
// combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]) // [3, 6, 7, 8, 2, 7, 3, 1]
// combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]




const sumAndSquare = (...argSquare) => {
    const resultSquareSum = argSquare.map(element => element**2).reduce((a,b) => a+b)
    console.log(resultSquareSum)
};

sumAndSquare(2, 2, 4, 5) // Result 49
