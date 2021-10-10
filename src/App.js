import { Component } from 'react';
import Productos from './Components/Productos';
import Layout from './Components/Layout';
import Title from './Components/Title';
import Navbar from './Components/Navbar';

class App extends Component {
  // Estado inicial de la app
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 1500, img: '/productos/lechuga.jpg' },
    ],
    carro: [],
    esCarroVisible: false,
  };

  // Nota: array.concat(): lo que hace es concatena o agrega un nuevo elemento al array
  agregarAlCarro = ( producto ) => {
    // console.log(producto)
    const { carro } = this.state // El carro de compras
    if ( carro.find( x => x.name === producto.name )) {
      const newCarro = carro.map( x => x.name === producto.name 
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x )
      return this.setState({ carro: newCarro })
    }
    return this.setState({
      // Concantenar el producto con lo que se encuentre antes
      carro: this.state.carro.concat({
        ...producto, // copia del producto
        cantidad: 1, 
      })
    })
  }

  mostrarCarro = () => {
    if( !this.state.carro.length ) {
      return  
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  
  render() {
    // console.log(this.state.carro);
    const { esCarroVisible } = this.state;
    return (
      <div>
        <Navbar 
          carro={ this.state.carro } 
          esCarroVisible={ esCarroVisible } 
          mostrarCarro={ this.mostrarCarro } 
        />

        <Layout>
          <Title />
          <Productos
            agregarAlCarro={ this.agregarAlCarro }
            productos={ this.state.productos }
          />
        </Layout>
      </div>
    )
  }
}

export default App;
