import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class Asker extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            open: false
        };
        this.id = null;
    }

    open(id){
        this.id = id;
        this.setState({open:true});
    }

    close(){
        this.setState({open:false});
    }

    agree(){
        this.props.confirm(this.id);
        this.close();
    }

    disagree(){
        this.close();
    }

    render(){
        return(
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Eliminar"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            ¿Estas seguro que quieres eliminar este producto?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.agree.bind(this)} color="primary">
                            Si
                        </Button>
                        <Button onClick={this.disagree.bind(this)} color="primary" autoFocus>
                            No
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
    
}