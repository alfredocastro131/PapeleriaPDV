import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Grid} from '@material-ui/core';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


class ModalProducto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: 'Agregar prodocuto',
            descripcion: '',
            precioCompra: '',
            cantidadPaquetes: '0',
            cantidadPorPaquete: '0',
            cantidadTotal: '',
            precioVentaUnidad: '',
            precioVentaPaquete: '',
            status: '1',
            fechaRegistro: '',
            proveedor: '5fb69ba6ff96213eb8ad036f'
        }
    }
    
    async abrirModal(id){
        debugger;
        if(id){
            var producto = await axios.get('http://localhost:4000/products/'+id).catch(()=>{
                this.props.alert.current.displayDanger("Error obtener los datos del producto");
            });
            if(producto !== undefined){
                if(producto.status == 200){
                    this.setState({
                        title: 'Editar producto',
                        descripcion: producto.data.product_description,
                        precioCompra: producto.data.product_total_buy_price,
                        cantidadPaquetes: producto.data.product_package_cuantity,
                        cantidadPorPaquete: producto.data.product_cuantity_per_package,
                        cantidadTotal: producto.data.product_total_cuantity,
                        precioVentaUnidad: producto.data.product_sell_unit_price,
                        precioVentaPaquete: producto.data.product_sell_package_price,
                        status: producto.data.product_status,
                        fechaRegistro: producto.data.product_register_date,
                        proveedor: producto.data.product_supplier
                    });
                }
            }
        }
        this.setState({show: true});
    }

    cerrarModal(){
        this.setState({show: false});
    }

    onSave(){
        this.setState({show: false});
    }
    
    render(){
        return (
            <>
                <Modal size="xl" show={this.state.show} onHide={this.cerrarModal.bind(this)}>
                <Modal.Header closeButton>
                <Modal.Title>{this.state.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid container spacing={0}>
                            <Grid item xs={1} align="center">
                                <label for="descripcion">Descripcion:</label>
                            </Grid>
                            <Grid item xs={9}>
                                <Form.Control defaultValue={this.state.descripcion}/>
                            </Grid>
                            
                            <Grid item xs={1} align="center" style={{marginTop:10}}>
                                <label for="descripcion">Precio de compra:</label>
                            </Grid>
                            <Grid item xs={1} style={{marginTop:10}}>
                                <Form.Control type="number" defaultValue={this.state.precioCompra}/>
                            </Grid>
                            <Grid item xs={1} align="center" style={{marginTop:10}}>
                                <label for="descripcion">Cantidad de paquetes:</label>
                            </Grid>
                            <Grid item xs={1} style={{marginTop:10}}>
                                <Form.Control type="number" defaultValue={this.state.precioCompra}/>
                            </Grid>
                    </Grid>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.cerrarModal.bind(this)}>
                    Cerrar
                    </Button>
                    <Button variant="success" onClick={this.onSave.bind(this)}>
                    Guardar
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ModalProducto;