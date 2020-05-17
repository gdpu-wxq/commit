import React, { Component } from 'react';
import { connect } from "react-redux";

class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
              data: '00000000000000'
        }
    }
    componentDidMount() {
        console.log('-------66666--------')
        console.log(this.props)
    }
    render(){
        return (
            <div>{this.state.data}</div>
        )
    }
}
const mapStateToProps = state => state;
        
export default connect(mapStateToProps)(AddTodo);