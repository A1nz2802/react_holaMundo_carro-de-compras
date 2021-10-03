import { Component } from 'react';
import Productos from './Components/Productos';

class App extends Component {
  // Estado inicial de la app
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 1500, img: '/productos/lechuga.jpg' },
    ]
  };

  render() {
    return (
      <div>
        <Productos 
          agregarAlCarro={ () => console.log('No hace nada xd') }
          productos={ this.state.productos }
        />
        <p>Hola Mundo</p>
      </div>
    )
  }
}

export default App;
