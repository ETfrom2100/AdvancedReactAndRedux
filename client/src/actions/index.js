import axios from 'axios';
import {browserHistory} from 'react-router';
const ROOT_URL = 'http://localhost:3090';
import {AUTH_USER, AUTH_ERROR} from './types';


export function signinUser({email,password}){
	
	//with reduxThunk, we return a function instead of an object
	//reduxThunk gives us arbitrary access to the dispatch function
	return function(dispatch){
		//submit email/password to the server
		//{email:email,password:password}
		axios.post(`${ROOT_URL}/signin`, {email,password})
		.then(response=>{
			//if request is good
			//- update state to indicate user is authenticated
			
			dispatch({type:AUTH_USER});
			console.log(response);
			//- save the JWT token
			localStorage.setItem('token',response.data.token);
			//- redirect user to the '/feature'
			browserHistory.push('/feature');
		})
		.catch(()=>{
			//if request is bad
		//show an error to the user
			dispatch(authError('Bad login info'));
		})

	}
	
	
}

export function authError(error){
	return {
		type:AUTH_ERROR,
		payload:error
	}
}