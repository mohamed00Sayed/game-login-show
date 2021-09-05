import React, { Component } from 'react';
import AddUser from './AddUser'

class Login extends Component{

  	render(){
    	return(
        	<div>
          		<AddUser onAdd={this.props.onAdd} isUserExisting={this.props.isUserExisting} togglePage={this.props.togglePage}/>
          	</div>
        )
    }
}

export default Login;