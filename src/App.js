import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Header from './components/Heder'
/* import SimpleState from './components/React_Clase_Function/componente_clase'*/ 
import SimpleStateFunction from './components/React_Clase_Function/componente_clase';
/* import Coordenadas from './components/React_Clase_Function/componente_clase_avanzado'; */
import Coordenadas from './components/React_Clase_Function/componente_funcion_avanzado';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <Header title='Props Header Titulo' />
        </div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome />
          {/*<SimpleState />*/}
          <SimpleStateFunction />
          {/* <Coordenadas /> */}
          <Coordenadas />
        </div>
      </header>
    </div>
    
  );
}

export default App;
