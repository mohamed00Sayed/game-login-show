import React, { Component } from 'react';

class DashBoardControls extends Component{

  	render(){
      
      	const hideShowText = this.props.btnState==='hide'? ('Show the Number of Games Played') : ('Hide the Number of Games Played');
    	return(
        	<div>
          		<div className='dashboard-container'>
          			<button onClick={(evt)=> {this.props.changeButtonText(evt)}}>{hideShowText}</button>
          			<button onClick={()=> {this.props.togglePage()}}>Back</button>
          		</div>
          	</div>
        )
    }
}

export default DashBoardControls;