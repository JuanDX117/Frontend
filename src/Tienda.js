import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import imagen1 from './assets/images/1.jpg';
import imagen2 from './assets/images/2.jpg';
import imagen3 from './assets/images/3.jpg';
import imagen4 from './assets/images/4.jpg';
import imagen5 from './assets/images/5.jpg';
import imagen6 from './assets/images/6.jpg';
import imagen7 from './assets/images/7.jpg';
import imagen8 from './assets/images/8.jpg';

function Tienda() {
  return (
    <div>
      <Nav />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <Link to="/Pagina1">
              <div className="card">
                <img src={imagen1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">TENIS SUPERSTAR</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/Pagina2">
              <div className="card">
                <img src={imagen2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">TENIS NMD_S1</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/Pagina3">
              <div className="card">
                <img src={imagen3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">TENIS STAN SMITH LUX</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/Pagina4">
              <div className="card">
                <img src={imagen4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">TENIS SMITH</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
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

export default Tienda;
