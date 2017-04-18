import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';


export function signinUser({email,password}){
	
	//with reduxThunk, we return a function instead of an object
	//reduxThunk gives us arbitrary access to the dispatch function
	return function(){
		//submit email/password to the server
		axios.post(`${ROOT_URL}/signin`, {email,password}); //{email:email,password:password}
	
		//if request is good
		//- update state to indicate user is authenticated
		//- save the JWT token
		//- redirect user to the '/feature'
	
	
		//if request is bad
		//show an error to the user
	}
	
	
}