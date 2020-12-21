import React from 'react';
import {Grid} from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import DataTable from './DataTable.component';
import ModalProducto from "./ModalProducto";
import Asker from './Asker';
import AlertBootstrap from "./AlertBootstrap";
import axios from 'axios';

export default class Inventario extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: false
        }
        this.asker = React.createRef();
        this.alert = React.createRef();
        this.modalProducto = React.createRef();
    }

    async componentDidMount(){
        var response = await axios.get('http://localhost:4000/products/').catch(error => console.log(error));
        if(response){
            if(response.status == 200){
                this.setState({products: response.data});
            }
        }
    }

    borrarProducto(id){
        this.asker.current.open(id);
    }

    handleClick =  () => this.modalProducto.current.abrirModal();

    async confirmarBorrado(id){
        this.setState({isLoading:true});
        var resDelete = await axios.delete('http://localhost:4000/products/delete/'+id).catch(()=>{
            this.setState({isLoading:false});
            this.alert.current.displayDanger("Error al eliminar el elemento");
        });
        if(resDelete !== undefined){
            if(resDelete.status == 200){
                this.setState({products: this.state.products.filter(item => item._id !== id)});
                this.setState({isLoading:false});
                this.alert.current.displaySuccess("Elemento eliminado correctamente.");
            }
        }
    }

    editarProducto(id){
        this.modalProducto.current.abrirModal(id);
    }

    render(){
        const columns = [
            { title: 'Descripcion', field: 'product_description' },
            { title: 'Cantidad', field: 'product_total_cuantity', type: 'numeric' },
            { title: 'Precio', field: 'product_sell_unit_price', type: 'numeric' },
            { title: 'Precio por paquete', field: 'product_sell_package_price', type: 'numeric' },
            {
                align: "center",
                render: (rowData) =>
                    rowData && (
                        <div>
                            <button className = "btn btn-primary" style={{margin:2}} onClick={this.editarProducto.bind(this,rowData._id)} >Editar</button>
                            <button className = "btn btn-danger" style={{margin:2}} onClick={this.borrarProducto.bind(this,rowData._id)}>Borrar</button>
                        </div>
                    )
            }
        ];

        const options = {
            exportButton: true,
            pageSizeOptions: [],   
            pageSize: 8,
            headerStyle: {
                fontWeight: 'bold',
                backgroundColor: 'rgb(251, 152, 166)'
            },
            paginationType: "stepped",
            searchAutoFocus: true
        }
        return(
            <div>
                <Asker ref={this.asker} confirm={this.confirmarBorrado.bind(this)}/>
                <ModalProducto ref={this.modalProducto} alert = {this.alert}/>

                <Grid container spacing={1}>
                    <AlertBootstrap ref={this.alert} />
                    <Grid item xs={12} style={{margin:5, textAlign:"right"}}>
                        <Button variant="primary" onClick={this.handleClick}>Agregar</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <DataTable title={"Inventario"} columns={columns} data={this.state.products} options = {options} isLoading = {this.state.isLoading} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}