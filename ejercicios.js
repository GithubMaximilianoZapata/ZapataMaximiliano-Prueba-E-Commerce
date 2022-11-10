
// EJERCICIOS DE VARIABLES Y ASIGANCIONES

/*1 
const numero1 = parseInt(prompt("Ingresa un numero"));

const numero2 = parseInt(prompt("Ingresa otro numero"));

console.log(`El resultado de la suma es: ${numero1 + numero2}`);*/

/*2
const numero1 = parseInt(prompt("Ingresa un numero"));
const numero2 = parseInt(prompt("Ingresa otro numero"));
const numero3 = parseInt(prompt("Ingresa otro numero"));

let suma1 = numero1 + numero2
let sumatotal = suma1 += numero3
console.log(`La suma total es de: ${sumatotal}`);*/

/*3
const numero1 = parseInt(prompt("Ingresa un numero"));
const numero2 = parseInt(prompt("Ingresa otro numero"));
const numero3 = parseInt(prompt("Ingresa otro numero"));

console.log(`La suma total es de: ${numero1+numero2+numero3}`);*/

/*4
const lado1 = parseFloat(prompt("Ingresa la medida en cm del lado `A` de tu triangulo"));
const lado2 = parseFloat(prompt("Ingresa la medida en cm del lado `B`de tu triangulo"));
const lado3 = parseFloat(prompt("Ingresa la medida en cm del lado `C`de tu triangulo"));

console.log(`El perimetro de tu triangulo es de ${lado1+lado2+lado3} cm`);*/

/*5
const lado1 = parseFloat(prompt("Ingresa la medida en cm del lado `A` de tu triangulo rectangulo"));
const lado2 = parseFloat(prompt("Ingresa la medida en cm del lado `B` de tu triangulo rectangulo"));
let hipotenusa = Math.sqrt(lado1**2 + lado2**2);
let perimetro = lado1 + lado2 + hipotenusa;
let superficie = ((lado1 * lado2)/2);
console.log(`
La Hipotenusa de tu triangulo rectangulo es de: ${hipotenusa} cm

El perimetro de tu triangulo rectangulo es de : ${perimetro} cm

La superficie de tu triangulo rectangulo es de : ${superficie} cm
`);*/

/*6
const ancho = parseFloat(prompt("Ingresa la medida en cm del ancho de tu rectangulo"));
const alto = parseFloat(prompt("Ingresa la medida en cm del alto de tu rectangulo"));
let diagonal = Math.sqrt(ancho**2 + alto**2);
let perimetro = ((ancho + alto)*2);
let superficie = ancho * alto;
console.log(`
La Diagonal Princial de tu rectangulo es de: ${diagonal} cm

El perimetro de tu rectangulo es de : ${perimetro} cm

La superficie de tu rectangulo es de : ${superficie} cm
`);*/

/*7 
const numero1 = parseInt(prompt("Ingresa un numero"));

const numero2 = parseInt(prompt("Ingresa otro numero"));

console.log(`
El resultado de la suma es: ${numero1 + numero2}

El resultado del producto es: ${numero1 * numero2}

El resultado de la resta es: ${numero1 - numero2}
`);*/

/*8
const operario = prompt("ingresa el nombre y apellido del operario a liquidar sueldo");
const horasTrabajadas = parseInt(prompt("Ingresar la cantidad de horas trabajadas"));
const valorHora = parseInt(prompt("Ingresar el costo de la hora trabajada"));
console.log(`Al operario ${operario} le corresponde un sueldo de $ ${horasTrabajadas * valorHora}`);*/

/*9
const operario = prompt("ingresa el nombre y apellido del operario a liquidar sueldo");
const horasTrabajadas = parseInt(prompt("Ingresar la cantidad de horas trabajadas"));
const valorHora = 10;
console.log(`Al operario ${operario} le corresponde un sueldo de $ ${horasTrabajadas * valorHora}`);*/

/*10
const vendedor = prompt("ingresa el nombre y apellido del vendedor a liquidar sueldo");
const valorVehiculo = parseInt(prompt("Ingresa el valor del auto vendido"));
const cantidadVendida = parseInt(prompt("Ingresa la cantidad de autos vendidos en el mes"));
const sueldoBasico = 500;
let item = parseInt(50 * cantidadVendida);
let plus = parseInt((0.10 * valorVehiculo)* cantidadVendida);

console.log(`Al Vendedor ${vendedor} le corresponde un sueldo de $ ${sueldoBasico + item + plus}`);*/

/*LIQUIDA SUELDO PARA 5 VENDEDORES
for (vendedor = 1; vendedor<=5; vendedor++) {

    const nombre = prompt("ingresa el nombre y apellido del vendedor a liquidar sueldo");
    const valorVehiculo = parseInt(prompt("Ingresa el valor del auto vendido"));
    const cantidadVendida = parseInt(prompt("Ingresa la cantidad de autos vendidos en el mes"));
    const sueldoBasico = 500;
    let item = parseInt(50 * cantidadVendida);
    let plus = parseInt((0.10 * valorVehiculo)* cantidadVendida);
    console.log(`Al Vendedor ${nombre} le corresponde un sueldo de $ ${sueldoBasico + item + plus}`);
};*/


//VARIABLES GLOBALES

let cantidadVendida;
let vendio;
let inventario;
let totalVenta;
let sueldoBasico;
let item;
let plus;
let flag;

class Concesionaria {
    constructor(stock, precio, auto) {
    this.stock = stock,
    this.precio = precio,
    this.auto = auto    
    };

    controlStock(stock, cantidadVendida) {
        inventario = (stock- cantidadVendida);
        if(inventario >= 0) {
            console.log(`El Stock es de: ${inventario} unidades disponibles`);
            return inventario;
        } else {
            console.log(`No hay suficiente stock para ventas`);
           
        }
    };
    ventas(cantidadVendida, precio) { 
        if(inventario > 0) {                   
        totalVenta = cantidadVendida * precio
        console.log(totalVenta);
        return totalVenta;
        }
        else { console.log("No hay unidades para vender");}  
    };
    liquidarSueldo(cantidadVendida) {                                                      
            const sueldoBasico = 500;
            item = parseInt(50 * cantidadVendida);
            plus = parseInt(0.10 * totalVenta);
            console.log(`Al ${vendedores[0]} le corresponde un sueldo de $ ${sueldoBasico + item + plus}`);
        };
};   


const ford = new Concesionaria(3, 1500000, "FORD FIESTA");
const fiat = new Concesionaria(2, 900000, "FIAT MOBIE");
const chevrolet = new Concesionaria(8, 2000000, "CHEVROLET CRUZE");
const renault = new Concesionaria(5, 1700000, "RENAULT SANDERO");
const vendedores = ["Vendedor 1", "Vendedor 2", "Vendedor 3", "Vendedor 4"];
const autos = [ford.auto, fiat.auto, chevrolet.auto, renault.auto];



do {
    alert(`Que auto esta vendiendo? ${autos}`);

    let eleccion = prompt("Ingrese el nombre del auto vendido");
   
    if (autos.indexOf(eleccion.toLocaleUpperCase()) == -1) {
        alert(`No tenemos ese auto en stock en este momento, no esta disponible para la venta!!`)
        break;
    }
    else {
        switch (eleccion.toLocaleUpperCase()) {

            case autos[0]:
                cantidadVendida = parseInt(prompt("Ingresa la cantidad de venta"));
                controlStock(ford.stock, cantidadVendida);
            
            break;

            case autos[1]:
                alert("va a comprar un FIAT")
            
            break;

            case autos[2]:
                alert("va a comprar un CHEVROLET")
            
            break;

            case autos[3]:
                alert("va a comprar un RENAULT")
            
            break;
    
        default:
            break;
        }
    }    
    flag = prompt("¿Desea continuar vendiendo? Y/N");
} while (flag.toUpperCase() == "Y");










    

