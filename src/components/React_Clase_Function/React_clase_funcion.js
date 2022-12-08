import React, { Component } from "react";

// Class Component
// Es un objeto y se comporta como tal, tiene atributos y funciones
class ClassComponent extends Component{
    render(){
        return <h1> Hola Mundo Clase</h1>
    }
}
// Function o Funcional o Stateless Component
// Es una funcion y recibe parametros o no y realiza una operacion logica y tiene una salida.
// La forma de DEFINIR uan funcion en JS son varias y la forma mas comun es la siguiente

// Una funcion tradicional donde se define la palabra clave function Nombre_Funcion () {}
/* function FunctionComponent() {} */

// Definimos una variable constante a la que le definimos una funcion Arrow -> () => {}
/* const FunctionComponent2 = () => {};*/ 

export default ClassComponent

// La dos formas son COMPONENTES FUNCIONALES y React los entiende como tal.
// Pero los componentes en si mismo NO PUEDEN USAR ESTADO
// Esto quiere decir que los componentes de funciones no pueden almacenar variables de lo que esta pasando dentro de ella.

// Los HOOKS permiten a los componentes de funcion manejar estos estados.

// Vamos a ver como: Archivos "componente_clase.js"
