import axios from 'axios';
import {browserHistory} from 'react-router';
const ROOT_URL = 'http://localhost:3090';
import {AUTH_USER} from './types';


export function signinUser({email,password}){
	
	//with reduxThunk, we return a function instead of an object
	//reduxThunk gives us arbitrary access to the dispatch function
	return function(){
		//submit email/password to the server
		//{email:email,password:password}
		axios.post(`${ROOT_URL}/signin`, {email,password})
		.then(response=>{
			//if request is good
			//- update state to indicate user is authenticated
			dispatch({type:AUTH_USER});
			//- save the JWT token
			//- redirect user to the '/feature'
			browserHistory.push('/feature');
		})
		.catch(()=>{
			//if request is bad
		//show an error to the user
		})
	
		
	
	
		
	}
	
	
}