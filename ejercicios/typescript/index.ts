console.log('Hello, TypeScript');

/* Se añade tipado a los parámetros */
/* function add(a: number, b: number) {
    return a + b;
}

const sum = add(2, 3); */


// Boolean
let muted: boolean = true;  // o simplemente let muted = true
muted = false;

// Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
// people.push("9000")

let peopleAndNumbers: Array<string | number> = [];      /* Array de dos tipos diferentes */
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9001);

// Enum
enum Color {    /* Conjunto de valores que se define, no se puede añadir ni quitar */
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Amarillo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'Wildcard' };


// Funciones
function add(a: number, b: number): number {    /* El ultimo valor nos dice que valor devolverá la función */
    return a + b;
}

const sum = add(4, 6);

/* Representa lo que devuelve la función, en este caso toma un número (number) y devuelve un número => number, lo cual indica que el valor de regreso es una función */
function createAdder(a: number): (number) => number {
    return function (b: number) {
        return b + a;
    };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

/* Se agrega el signo de interrogacion para que un parámetro sea opcional que quedaria como undefined */
function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}

const richard = fullName('Richard');

/* Si queremos que tenga un valor por omisión lo agregamos despues del tipado, de este modo sino mandamos un argumento tomará por el valor por omisión */
function fullName1(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`;
}

const richard1 = fullName1('Agente');
console.log(richard1);


// Interfaces
enum Color1 {
    Rojo = 'Rojo',
    Verde = 'Verde',
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;     /* Será opcional con el signo de interrogación */
}

/* Las interfaces se vuelven como Tipo, en este caso de Rectángulo */
let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    // color: Color.Rojo,
};

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

// console.log(rect.toString());

rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());