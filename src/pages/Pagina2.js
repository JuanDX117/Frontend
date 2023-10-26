import React from 'react';
import Nav from '../components/Nav'; // Corregir la ruta relativa
import Footer from '../components/Footer'; // Corregir la ruta relativa
import imagen2 from '../assets/images/2.jpg'; // Corregir la ruta relativa

function Pagina2() {
  const contentStyle = {
    backgroundColor: '#f0f0f0',
  };

  const containerStyle = {
    padding: '20px',
  };

  const imageStyle = {
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%',
  };

  const productDetailsStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  return (
    <div style={contentStyle}>
      <Nav />
      <div className="container container-main" style={containerStyle}>
        <div className="row">
          <div className="col-md-6">
            {/* Imagen del producto */}
            <img src={imagen2} className="product-image" alt="Nombre del producto" style={imageStyle} />
          </div>
          <div className="col-md-6">
            {/* Contenedor de detalles del producto */}
            <div className="product-details" style={productDetailsStyle}>
              <h2>TENIS NMD_S1</h2>
              <p>Especificaciones del producto:</p>
              <ul>
                <li>Disponibles en todas las tallas</li>
                {/* Agrega más características aquí */}
              </ul>
              <p>Precio: $120.000</p>
              {/* Formulario para seleccionar la cantidad de pares de zapatos */}
              <form>
                <div className="form-group">
                  <label htmlFor="quantity">Cantidad de Pares:</label>
                  <input type="number" className="form-control" id="quantity" name="quantity" min="1" defaultValue="1" />
                </div>
                {/* Botón para agregar al carrito */}
                <button type="submit" className="btn btn-primary">Agregar al Carrito</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pagina2;

