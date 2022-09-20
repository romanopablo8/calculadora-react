import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp.png';
import Boton from './componentes/Boton';
import './hojas-de-estilo/boton.css';


function App (props) {
  return (
    <div className=" App " >
      <div className= "freecodecamp-logo-contenedor" >
      <img
      src = {freeCodeCampLogo}
      className="freecodecamp-logo"
      alt='logo de freecdecamp'/>
      </div>
    <div className="contenedor-calculadora">
       <div className="fila"> 
            <Boton> 1 </Boton>
            <Boton> 2 </Boton>
            <Boton> 3 </Boton>
            <Boton> + </Boton>
       </div>
       <div className="Fila"> </div>
       <div className="Fila"> </div>
       <div className="Fila"> </div>
       <div className="Fila"> </div>     
      </div>
    </div>
  );
}

export default App;
