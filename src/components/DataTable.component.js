import React from 'react';
import MaterialTable, {MTableToolbar, MTablePagination} from 'material-table';

export default class DataTable extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render(){
        return(
            <div style={{ maxWidth: '100%', maxHeight:'80%' }}>
                <MaterialTable
                    columns={this.props.columns}
                    data={this.props.data}
                    title={this.props.title}
                    options = {this.props.options}
                    isLoading = {this.props.isLoading}
                    components={{
                        Toolbar: props =>(
                            <div style={{backgroundColor: 'rgb(247, 108, 127)'}}>
                                <MTableToolbar {...props}/>
                            </div>
                        )
                    }}
                />
            </div>
        );
    }
}