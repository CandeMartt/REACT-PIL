// Dependencia
import React from "react";

// Logica
// var gente = "Hola gente!"
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
}
const element = (
    <h1>
        {formatName(user)}!
    </h1>
)

// Render
function Welcome(){
    return <p>Hola, desde Welcome. {element} </p>
}

//Salida
export default  Welcome