import React, { Component } from 'react';
import { connect } from "react-redux";
import { setInput } from "../store/actions/a"
import { bindActionCreators } from 'redux';

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '-----djhshdjsdhj0000000---'
        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(){
        let aaa = this.props.haha
        this.setState({ data: aaa })
    }
    go2User() {
        this.props.history.push({
            pathname: `./UserInfoPage`,
            search: `?kkk=123`,
            state:{
              taskStatus:2
            }
          })
    }
    changed(){
        let a = this.props.setInput('222kk22222')
        console.log(a)
    }
    
    render() {
        return (
            <div>
                <div onClick={this.go2User.bind(this)}>
                    {this.props.haha}
                </div>
                <div onClick={this.changed.bind(this)}>
                    change
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        haha:state.a.inputValue
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { setInput: bindActionCreators(setInput, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);