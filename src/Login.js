import React, { Component } from 'react';
import User from './User'
import AddUser from './AddUser';
import DisplayUsers from './DisplayUsers';

class Login extends Component{

  	render(){
    	return(
        	<div>
          		Here is Login page
          		<User />
          		<AddUser />
          		<DisplayUsers />
          	</div>
        )
    }
}

export default Login;