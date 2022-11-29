import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Catalogo/Card';

function App() {


  const cards = [
    {
      titulo:"Jordan Low red",
      descripcion:"Zapatilla Jordan low chicago. Combinada entre rojo, negro y blanco",
      img:"",
      btnText:"Agregar al carrito",

    },
    {
      titulo:"Dunk low Panda",
      descripcion:"Zapatilla Dunk low Panda. Combinada entre negro y blanco",
      img:"",
      btnText:"Agregar al carrito",

    },
    {
      titulo:"AirMax 96",
      descripcion:"Zapatilla AirMax 96. Iconica silueta con camara de aire ",
      img:"",
      btnText:"Agregar al carrito",

    }    
  ]





  return (
    <div className="App">
      <Navbar/>
      <div className='cardsflex'>
        {cards.map(({titulo, descripcion, img, btnText}, index) => 
        (<Card
        key = {index}
        titulo = {titulo}
        descripcion = {descripcion}
        img = {img}
        btnText = {btnText}        
        />))}
      </div>
      
    
    </div>
 );
}

export default App;
