
// Uso adecuado de let y scope para actualizar una variable

// https://www.w3schools.com/react/react_es6_variables.asp

let puedesPasar = true;
edad = 17;

if (edad < 18) {
    puedesPasar = false;
}

console.log(puedesPasar) // false

// PREGUNTA: ¿Por qué no se actualiza correctamente la variable 'puedesPasar'?
// Porque esta variable ya esta declarada, no se puede volver a declarar