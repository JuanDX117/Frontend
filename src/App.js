import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tienda from './Tienda';
import Damas from './pages/Damas';
import Caballeros from './pages/Caballeros';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
import Pagina4 from './pages/Pagina4';
import Pagina5 from './pages/Pagina5';
import Pagina6 from './pages/Pagina6';
import Pagina7 from './pages/Pagina7';
import Pagina8 from './pages/Pagina8';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Damas">
            <Damas />
          </Route>
          <Route path="/Caballeros">
            <Caballeros />
          </Route>
          <Route path="/Pagina1">
            <Pagina1 />
          </Route>
          <Route path="/Pagina2">
            <Pagina2 />
          </Route>
          <Route path="/Pagina3">
            <Pagina3 />
          </Route>
          <Route path="/Pagina4">
            <Pagina4 />
          </Route>
          <Route path="/Pagina5">
            <Pagina5 />
          </Route>
          <Route path="/Pagina6">
            <Pagina6 />
          </Route>
          <Route path="/Pagina7">
            <Pagina7 />
          </Route>
          <Route path="/Pagina8">
            <Pagina8 />
          </Route>
          <Route path="/">
            <Tienda />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
