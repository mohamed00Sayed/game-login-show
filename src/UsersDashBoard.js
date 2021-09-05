import React, { Component } from 'react';
import UsersList from './UsersList';
import DashBoardControls from './DashBoardControls';

class UsersDashBoard extends Component{
  
  	state = {
    	btnState: 'hide'
    };
  
  	hideOrShowGames = (evt) => {
    	this.setState((prevState)=>{
        	if(prevState.btnState === 'hide'){
            	return({
                	btnState: 'show'
                });
            }else{
                return({
                        btnState: 'hide'
                    });
            }
        })
    };
	
  	render(){
    	return(
        	<div>
          		<UsersList users={this.props.users} gameShow={this.state.btnState}/>
          		<DashBoardControls btnState={this.state.btnState} changeButtonText={this.hideOrShowGames} togglePage={this.props.togglePage}/>
          	</div>
        )
    }
}

export default UsersDashBoard;