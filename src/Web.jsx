import React from 'react';
import Encabezado from './components/Encabezado.jsx';
import Banner from './components/Banner.jsx';
import Producto from './components/Producto.jsx';
import Footer from './components/Footer.jsx';

function Web(){
  return (
    <div className="container">
     <Encabezado/>
     <Banner/>
     <Producto/>
     <Footer/>
    </div>
  )

}
export default Web;