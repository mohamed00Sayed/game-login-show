import React, { Component } from 'react';

class AddUser extends Component{
  
  	state={
    	user: {
        	firstname: '',
          	lastname: '',
          	username: '',
          	gamenum: 0
        },
      	error: 'no'
    };
  
  	addUser = (evt)=> {
      	evt.preventDefault();
      	const user = this.state.user;
      	const test1 = user.firstname !== '';
      	const test2 = user.lastname !== '';
      	const test3 = user.username !== '';
      	const test4 = this.props.isUserExisting(user); //check existence in the parent
      
      	
    	if(test1&&test2&&test3&& !test4){
        	this.props.onAdd(user);
        }else{
        	this.setState((prev)=>({
            	error: 'yes'
            }))
        }
    };
	
    stageUser = (evt)=>{
      	const id = evt.target.id;
      	const value = evt.target.value;
    	this.setState((prevState) => {
        	const targetedProp = id;
          	const newUser = prevState.user;
          	newUser[targetedProp] = value;
          	return({
            		user: newUser,
              		error: 'no'
            });
        })
    };
    
  	render(){
      
    	return(
        	<div>
          		{
                	this.state.error !=='no'? (<p>Error: missed field or username already taken</p>):(<p></p>)
                }
          		<form>
          			<div className='formdiv'>
                      <div className='first-form-div'>
                        <fieldset>
                            <label htmlFor='firstname'>First Name :</label>
                            <input id='firstname' placeholder='Enter Your First Name' onChange={(event)=> {this.stageUser(event)}}/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='lastname'>Lsat Name :</label>
                            <input id='lastname' placeholder='Enter Your Last Name' onChange={(event)=> {this.stageUser(event)}}/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='username'>Username :</label>
                            <input id='username' placeholder='Enter Your Username' onChange={(event)=> {this.stageUser(event)}}/>
                        </fieldset>
                      </div>
                      <div className='second-form-div'>
                          <button type='submit' className='onright' onClick={(evt)=>{this.addUser(evt)}}>Add</button>
                          <button className='onright' onClick={()=>{this.props.togglePage()}}>Display Users</button>
                      </div>
          			</div>
          		</form>
          	</div>
        )
    }
}

export default AddUser;