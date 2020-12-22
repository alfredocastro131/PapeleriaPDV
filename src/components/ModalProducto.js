import React, {Fragment} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Grid} from '@material-ui/core';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


class ModalProducto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suppliers: [],
            show: false,
            title: 'Agregar prodocuto',
            descripcion: '',
            precioCompra: '',
            cantidadPaquetes: '0',
            cantidadPorPaquete: '0',
            cantidadTotal: '',
            precioVentaUnidad: '',
            precioVentaPaquete: '',
            status: '0',
            fechaRegistro: '',
            proveedor: '5fb69ba6ff96213eb8ad036f'
        }
    }

    async componentDidMount(){
        var response = await axios.get('http://localhost:4000/suppliers/').catch(error => console.log(error));
        if(response){
            if(response.status === 200){
                this.setState({suppliers: response.data});
            }
        }
    }
    
    async abrirModal(id){
        if(id){
            var producto = await axios.get('http://localhost:4000/products/'+id).catch(()=>{
                this.props.alert.current.displayDanger("Error obtener los datos del producto");
            });
            if(producto !== undefined){
                if(producto.status === 200){
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
                    debugger;
                }
            }
        }
        this.setState({show: true});
    }

    cerrarModal(){
        this.closeForm();
    }

    onSave(){
        this.closeForm();
    }

    closeForm(){
        this.setState({
            show: false,
            descripcion: '',
            precioCompra: '',
            cantidadPaquetes: '0',
            cantidadPorPaquete: '0',
            cantidadTotal: '',
            precioVentaUnidad: '',
            precioVentaPaquete: '',
            status: '0',
            fechaRegistro: '',
            proveedor: '5fb69ba6ff96213eb8ad036f'
        });
    }
    
    render(){
        return (
            <>
                <Modal size="xl" show={this.state.show} onHide={this.cerrarModal.bind(this)}>
                <Modal.Header closeButton>
                <Modal.Title>{this.state.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid container spacing={3}>
                            <Grid item container justify='center'>
                                <Grid item xs={1} align="center">
                                    <label>Descripcion:</label>
                                </Grid>
                                <Grid item xs={10}>
                                    <Form.Control defaultValue={this.state.descripcion}/>
                                </Grid>
                            </Grid>
                            <Grid item container justify='center'>
                                <Grid item xs={2} align="center" style={{marginTop:10}}>
                                    <label>Precio de compra:</label>
                                </Grid>
                                <Grid item xs={1} style={{marginTop:10}}>
                                    <Form.Control type="number" defaultValue={this.state.precioCompra}/>
                                </Grid>
                                <Grid item xs={2} align="center" style={{marginTop:10}}>
                                    <label>Cantidad de paquetes:</label>
                                </Grid>
                                <Grid item xs={1} style={{marginTop:10}}>
                                    <Form.Control type="number" defaultValue={this.state.cantidadPaquetes}/>
                                </Grid>
                                <Grid item xs={2} align="center" style={{marginTop:10}}>
                                    <label>Cantidad por paquete:</label>
                                </Grid>
                                <Grid item xs={1} style={{marginTop:10}}>
                                    <Form.Control type="number" defaultValue={this.state.cantidadPorPaquete}/>
                                </Grid>
                            </Grid>
                            <Grid item container justify='center'>
                                <Grid item xs={2} align="center" style={{marginTop:10}}>
                                    <label>Cantidad total:</label>
                                </Grid>
                                <Grid item xs={1} style={{marginTop:10}}>
                                    <Form.Control type="number" defaultValue={this.state.cantidadTotal}/>
                                </Grid>
                                <Grid item xs={2} align="center" style={{marginTop:10}}>
                                    <label>Precio por unidad:</label>
                                </Grid>
                                <Grid item xs={1} style={{marginTop:10}}>
                                    <Form.Control type="number" defaultValue={this.state.precioVentaUnidad}/>
                                </Grid>
                                <Grid item xs={2} align="center" style={{marginTop:10}}>
                                    <label>Precio por paquete:</label>
                                </Grid>
                                <Grid item xs={1} style={{marginTop:10}}>
                                    <Form.Control type="number" defaultValue={this.state.precioVentaPaquete}/>
                                </Grid>
                            </Grid>
                            <Grid item container justify='center'>
                                <Grid item xs={1} align="center" style={{marginTop:10}}>
                                    <label>Estatus:</label>
                                </Grid>
                                <Grid item xs={2} style={{marginTop:10}}>
                                    <Form.Control as="select" defaultValue={this.state.status}>
                                        <option value='0'>Seleccione:</option>
                                        <option value='D'>Disponible</option>
                                        <option value= 'ND'>No Disponible</option>
                                        <option value='DT'>Disponible por Temporada</option>
                                        <option value='A'>Activo</option>
                                        <option value='I'>Inactivo</option>
                                    </Form.Control>
                                </Grid>
                                <Grid item xs={1} align="center" style={{marginTop:10}}>
                                    <label>Proveedor:</label>
                                </Grid>
                                <Grid item xs={2} style={{marginTop:10}}>
                                    <Form.Control as="select" defaultValue={this.state.proveedor}>
                                    </Form.Control>
                                </Grid>
                                <Grid item xs={1} align="center" style={{marginTop:10}}>
                                    <label>Fecha de registro:</label>
                                </Grid>
                                <Grid item xs={2} style={{marginTop:10}}>
                                    <Form.Control type="text" className="text-center" disabled defaultValue={this.state.fechaRegistro.substring(12,16)+'   '+this.state.fechaRegistro.substring(0,10)}/>
                                </Grid>
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