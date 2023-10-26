import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const openLoginModal = () => {
    setShowLogin(true);
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };

  const openRegisterModal = () => {
    setShowRegister(true);
  };

  const closeRegisterModal = () => {
    setShowRegister(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Damas">
                Damas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Caballeros">
                Caballeros
              </Link>
            </li>
          </ul>
          <button className="btn btn-outline-secondary" id="loginButton" onClick={openLoginModal}>
            Iniciar sesión
          </button>
        </div>
      </div>

      {showLogin && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Iniciar Sesión</h5>
                <button type="button" className="close" onClick={closeLoginModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Usuario:
                    </label>
                    <input type="text" className="form-control" id="username" name="username" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Contraseña:
                    </label>
                    <input type="password" className="form-control" id="password" name="password" required />
                  </div>
                  <button type="button" className="btn btn-outline-secondary" onClick={openRegisterModal}>
                    Registrarse
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeLoginModal}>
                  Cerrar
                </button>
                <button type="button" className="btn btn-primary">
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Registrarse</h5>
                <button type="button" className="close" onClick={closeRegisterModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nombre:
                    </label>
                    <input type="text" className="form-control" id="name" name="name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Teléfono:
                    </label>
                    <input type="text" className="form-control" id="phone" name="phone" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Correo:
                    </label>
                    <input type="email" className="form-control" id="email" name="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Contraseña:
                    </label>
                    <input type="password" className="form-control" id="password" name="password" required />
                  </div>
                  <button type="button" className="btn btn-outline-secondary" onClick={closeRegisterModal}>
                    Volver
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeRegisterModal}>
                  Cerrar
                </button>
                <button type="button" className="btn btn-primary">
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
