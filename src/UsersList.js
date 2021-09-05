import React, { Component } from 'react';
import User from './User';

class UsersList extends Component{

  	render(){
    	return(
        	<ul>
          		{
                	this.props.users.map((user) => (
          				<User key={user.username} user={user} showOrHide={this.props.gameShow}/>
        			))
                }
          	</ul>
        )
    }
}

export default UsersList;