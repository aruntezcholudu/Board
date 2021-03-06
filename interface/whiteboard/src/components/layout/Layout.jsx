import React from 'react';
import Whiteboard from '../whiteboard/Whiteboard';
import './style.css';

class Layout extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color: "rgb(13, 195, 246",
            size: "5",
            username:"",
            users:[{}]
        }
       
    }
    
    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    render() {

        return (

       
            <div className="layout">

                <div class="whiteboard-layout">
                    <Whiteboard color={this.state.color} size={this.state.size}></Whiteboard>
                </div>

            </div>

        )
    }
}

export default Layout