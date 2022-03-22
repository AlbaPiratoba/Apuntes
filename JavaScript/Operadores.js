
/* 
Se pueden realizar operaciones en JavaScript a través de los operadores. Básicamente son símbolos que ya conocemos (+,-,/,*) que indican al interprete de JavaScript las operaciones que debe realizar.
var a = 2+3; // 5
var b = 3/3 // 1

/* Más operadores

/* Math.pow: Para devolver un número elevado a un exponente. tomará dos números.
Math.pow (2,2) = 4;
Math.pow (3,2) = 9;
Math.pow (3,3) =27;

Math.round: Redondeará un número al entero más cercano
Math floor: Redondeará un número al entero más cercano hacia abajo
Math.ceil: Redondeará al número más cercano. hacia arriba
Math.max: Elige el número mayor

Math.round (6.5) = 7;
Math.round (6.45) = 6;
Math.floor (6.999) = 6;
Math.ceil (6.0001) = 7;

Math.random()
La función Math.random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1). Esto es, desde el 0 (Incluido) hasta el 1 pero sin incluirlo (excluido), el cual se puede escalar hasta el rango deseado. La implementación selecciona la semilla inicial hasta el algoritmo que genera el número aleatorio; este no puede ser elegido o cambiado por el usuario.

.length : Cualquier cadena que llamemos a esto devolverá la cantidad de caracteres en esa cadena
var nombreGato = ‘Felix’;
console.log (nombreGato.length); // 5
