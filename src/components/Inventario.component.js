import React from 'react';
import DataTable from './DataTable.component';
import axios from 'axios';

export default class Inventario extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    async componentDidMount(){
        var response = await axios.get('http://localhost:4000/products/').catch(error => console.log(error));
        if(response){
            if(response.status == 200){
                this.setState({products: response.data});
            }
        }
    }

    render(){
        const columns = [
            { title: 'Descripcion', field: 'product_description' },
            { title: 'Cantidad', field: 'product_total_cuantity', type: 'numeric' },
            { title: 'Precio', field: 'product_sell_unit_price', type: 'numeric' },
            { title: 'Precio por paquete', field: 'product_sell_package_price', type: 'numeric' }
        ];

        const options = {
            exportButton: true,
            pageSizeOptions: [],   
            pageSize: 10,
            headerStyle: {
                'font-weight': 'bold',
                'background-color': 'rgb(251, 152, 166)'
            }
        }
        return(
            <div>
                <DataTable title={"Inventario"} columns={columns} data={this.state.products} options = {options}/>
            </div>
        );
    }
}