import React, { Component, useState} from "react";


// Definimos la clase
// Export defailt
class SimpleState extends Component {
    // Creamos un OBJETO state con un ATRIBUTO CUENTA
    state = {
        cuenta: 0,
    };

    // Renderiza
    render() {
        return(
            <div>
                { /*Llamamos con expresion al atributo con su parametro para mostrarlo */}
                {/* This es como el self en Python */}
                La cuenta es: {this.state.cuenta}
                {/* Creamos un boton co el evento onClick html https://www.w3schools.com/js/js_events.asp */ }
                {/* Con una funcion arrow  setState que incrementa el valor del atributo state.cuenta en 1 */}
                <button onClick={() => this.setState({cuenta: this.state.cuenta + 1})} >
                {/*<button>*/}
                    Incrementar
                </button>
            </div>
        );
    }
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
//                                            COMPONENTE DE FUNCION                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function SimpleStateFunction(){
        // Importamos del Hook useState
        // Creamos el Hook
        // atributo = cuenta, metodo= setCuenta = hook(parametro inicio)
    const [cuenta, setCuenta] = useState(0);
    return(
        <div>
            {/* Ahora solo retornamos el atributo cuenta ya que el Hook se encargara de manejar el valor */}
            La cuenta es: { cuenta }
            {/* Para guardar el valor debemos llamar al metodo setCuenta y no necesitaremos pasar el objeto solo incrementamos el valor de cuenta */}
            <button onClick={()=> setCuenta(cuenta + 1)}>Incrementar</button>
        </div>
    );
}

export default SimpleStateFunction

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
//                                        Estructura del hook useState                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
