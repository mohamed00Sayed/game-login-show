import React, { Component } from 'react';
import Login from './Login';
import UsersDashBoard from './UsersDashBoard';

class Game extends Component{

  render(){
  	return(
    	<div>
      		<h3>Game Here: (removed later)</h3>
      		<Login />
			<UsersDashBoard />
      	</div>
    )
  }
}

export default Game;