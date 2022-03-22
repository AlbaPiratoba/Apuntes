
/* if (condición) {
   sentencia1
} else {
   sentencia2
} */

/* Ejemplos:
if (edad < 18) { 
    console.log ('No puedes tomar');
               } else { 
    console.log ('puedes tomar'); }
___________________________________________________________
if ( edad > 50 ) { 
    console.log ('Adulto mayor'); 
} else if ( edad > 30) { 
    console.log ('Adulto') 
} else { 
    console.log ('Joven')
}
*/


// Saber si un número es par

if (num % 2 === 0) {
    return true
} else {
    return false
}

// Saber si un número es impar

if (num % 2 === 1) {
    return true
} else {
    return false
}


/* ELSE IF

if (condición1)
   sentencia1
else if (condición2)
   sentencia2
else if (condición3)
   sentencia3
...
else
   sentenciaN */

if (edad > 50) {
    console.log('Adulto mayor');
} else if (edad > 30) {
    console.log('Adulto')
} else {
    console.log('Joven')
}
