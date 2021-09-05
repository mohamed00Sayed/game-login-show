import React, { Component } from 'react';

class User extends Component{
  
  	

  	render(){
      	const text = this.props.showOrHide === 'hide'? (<li>{this.props.user.username}</li>) : (<p>{this.props.user.username} has played 											{this.props.user.gamenum} games</p>);
    	return(
        	(text)
        )
    }
}

export default User;