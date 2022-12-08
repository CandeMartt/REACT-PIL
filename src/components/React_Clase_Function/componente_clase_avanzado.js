import React from "react";
// Componente de clase
export default class Coordenadas extends React.Component{
    // Definimos el objeto con sus atributos
    state = {
        latitud: null,
        longitud: null,
    };

    render(){

        //IF
        return this.state.latitud == null ?(
            <div>Cargando...</div>
            ) : (
            <div>
                <h2>Latitud: {this.state.latitud}</h2>
                <h2>longitud: {this.state.longitud}</h2>
            </div>
        );
    }

    /* Una vez que se monta el componente se ejecutan los metodos de componentDidMont */
    componentDidMont(){
        this.geoId = window.navigator.geolocation.watchPosition((position) => {
            /*Se obtiene desde la API del ordenador*/
            this.setState({
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            });
        });
    }

    /* Una vez que el componente se ha retirado del DOM se ejecuta componentWillUnmount*/
    /* Cuando no se renderiza más, es decir se cambia de pagina, no se captura mas la geolocalizacion*/
    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.geoId);
    }
}

