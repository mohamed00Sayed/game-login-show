import React, { Component } from 'react';
import Login from './Login';
import UsersDashBoard from './UsersDashBoard';

class Game extends Component{
  
	state = {
    	users: [
          	{firstname: 'Mohamed', lastname: 'Sayed', username: 'sayed55dd', gamenum: 0},
          	{firstname: 'Mohammad', lastname: 'Gaber', username: 'gaber5621', gamenum: 0 },
          	{firstname: 'Mohamed', lastname: 'Emad', username: 'emadssa7', gamenum: 0}
        ],
      	page: 'login'
    };
  
  	addUser = (user) => {
    	this.setState((prevState)=> ({
        	users: [...prevState.users, user]
        }))
    };
  
  	isUserExisting = (user)=> {
      	let isThere = false;
    	this.state.users.map((theUser)=> {
        	if(theUser.username === user.username){
            	isThere = true;
              	return '';
            }else{return '';}
        });
      	return isThere;
    };
  
  	togglePage=()=>{
    	if(this.state.page === 'login'){
        	this.setState({page: 'dashboard'})
        }else{
        	this.setState({page: 'login'})
        }
    };
  
    render(){
      return(
        <div className='game'>
        
        	{
        		this.state.page==='login'? 
        		(<Login onAdd={this.addUser} isUserExisting={this.isUserExisting} togglePage={this.togglePage}/>) : 
				(<UsersDashBoard users={this.state.users} togglePage={this.togglePage}/>)
        	}
          
        </div>
      )
    }
}

export default Game;