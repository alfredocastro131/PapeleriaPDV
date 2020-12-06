import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class NavBar extends React.Component{
    render(){
        return(
                <Navbar bg="light" expand="lg">
                    <Link to="/nuevaventa" className="btn btn-primary">Nueva venta</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Item className = "nav-link"><Link to="/inventario">Inventario</Link></Nav.Item>
                        <Nav.Item className = "nav-link"><Link to="/proveedores">Proveedores</Link></Nav.Item>
                        <Nav.Item className = "nav-link"><Link to="/ventas">Ventas</Link></Nav.Item>
                        <Nav.Item className = "nav-link"><Link to="/egresos">Egresos</Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}