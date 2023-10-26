import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import imagen5 from '../assets/images/5.jpg';
import imagen6 from '../assets/images/6.jpg';
import imagen7 from '../assets/images/7.jpg';
import imagen8 from '../assets/images/8.jpg';

function Damas() {
  const contentStyle = {
    minHeight: 'calc(85vh - 120px)', // Resta el alto del encabezado (Nav) y el pie de página (Footer)
  };

  return (
    <div>
      <Nav />
      <div className="container mt-5" style={contentStyle}>
        <div className="row">
          <div className="col-md-3">
            <Link to="/Pagina5">
              <div className="card">
                <img src={imagen5} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">TENIS RUNFALCON</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/Pagina6">
              <div className="card">
                <img src={imagen6} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">CRAZYFAST.4 MULTITERRENO</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/Pagina7">
              <div className="card">
                <img src={imagen7} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">TENIS NORA</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/Pagina8">
              <div className="card">
                <img src={imagen8} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">TENIS ADVANTAGE</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Damas;
