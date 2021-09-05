import React, { Component } from 'react';
import UsersList from './UsersList';
import DashBoardControls from './DashBoardControls';

class UsersDashBoard extends Component{
	
  	render(){
    	return(
        	<div>
          		Here is Dashboard
          		<UsersList />
          		<DashBoardControls />
          	</div>
        )
    }
}

export default UsersDashBoard;