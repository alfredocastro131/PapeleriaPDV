import React from 'react';
import {NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class NavBar extends React.Component{
    render(){
        return(
                <Navbar className="navbar-bg-yellow" expand="lg">
                    <NavLink to="/nuevaventa" className="btn btn-nueva-venta" style={{marginRight:18}}>Nueva venta</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item><NavLink className = "navlink" to="/inventario">Inventario</NavLink></Nav.Item>
                            <Nav.Item><NavLink className = "navlink" to="/proveedores">Proveedores</NavLink></Nav.Item>
                            <Nav.Item><NavLink className = "navlink" to="/ventas">Ventas</NavLink></Nav.Item>
                            <Nav.Item><NavLink className = "navlink" to="/egresos">Egresos</NavLink></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}