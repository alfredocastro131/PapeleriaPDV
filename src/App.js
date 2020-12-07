import React from 'react';
import './css/style.css'
import NavBar from './components/NavBar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Inventario from './components/Inventario.component';
import Proveedores from './components/Proveedores.component';
import Ventas from './components/Ventas.component';
import Egresos from './components/Egresos.component';
import NuevaVenta from './components/NuevaVenta.component';

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <NavBar />
        <div className="container">
          <div className="content">
            <Switch>
              <Route path="/nuevaventa">
                  <NuevaVenta />
              </Route>
              <Route path="/inventario">
                  <Inventario />
              </Route>
              <Route path="/proveedores">
                  <Proveedores />
              </Route>
              <Route path="/ventas">
                  <Ventas />
              </Route>
              <Route path="/egresos">
                  <Egresos />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
