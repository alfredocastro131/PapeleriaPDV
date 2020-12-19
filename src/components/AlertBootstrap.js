import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import $ from 'jquery';

export default class AlertBootstrap extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            text: ""
        };
    }
    
    render(){
        return(
            <div>
                <div className="alert alert-success" role="alert">
                    {this.state.text}
                </div>
                <div className="alert alert-danger" role="alert">
                    {this.state.text}
                </div>
                <div className="alert alert-warning" role="alert">
                    {this.state.text}
                </div>
                <div className="alert alert-info" role="alert">
                    {this.state.text}
                </div>
            </div>
        );
    }

    componentDidMount(){
        $(".alert").hide();
    }

    displaySuccess(text){
        this.setState({text: text});
        $(".alert-success").fadeTo(2000, 500).slideUp(500, function(){
            $(".alert-success").slideUp(500);
        });
    }

    displayDanger(text){
        this.setState({text: text});
        $(".alert-danger").fadeTo(2000, 500).slideUp(500, function(){
            $(".alert-danger").slideUp(500);
        });
    }

    displayWarning(text){
        this.setState({text: text});
        $(".alert alert-warning").fadeTo(2000, 500).slideUp(500, function(){
            $(".alert alert-warning").slideUp(500);
        });
    }

    displayInfo(text){
        this.setState({text: text});
        $(".alert-info").fadeTo(2000, 500).slideUp(500, function(){
            $("alert-info").slideUp(500);
        });
    }
}