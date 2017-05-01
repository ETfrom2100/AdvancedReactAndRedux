import axios from 'axios';
import {browserHistory} from 'react-router';
const ROOT_URL = 'http://localhost:3090';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './types';


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
			
			//- save the JWT token
			localStorage.setItem('token',response.data.token);
			//- redirect user to the '/feature'
			browserHistory.push('/feature');
		})
		.catch(response=>{
			//if request is bad
		//show an error to the user
			
			dispatch(authError('Bad login info'));
		})

	}
	
	
}
export function signupUser({email,password}){
	
	return function(dispatch){
		axios.post(`${ROOT_URL}/signup`,{email,password})
		.then(response=>{
			dispatch({type:AUTH_USER});
			localStorage.setItem('token',response.data.token);
			browserHistory.push('/feature');
		})
		.catch(error=>{
			
			dispatch(authError(error.response.data.error));
		});
	}
}
export function authError(error){
	return {
		type:AUTH_ERROR,
		payload:error
	}
}

export function signoutUser()
{
	localStorage.removeItem('token');
	return {type:UNAUTH_USER}
}
export function fetchMessage(){
	return function(dispatch){
		axios.get(ROOT_URL,{headers:{authorization:localStorage.getItem('token')}})
		.then(response=>{
			console.log(response);
		})
	}
}