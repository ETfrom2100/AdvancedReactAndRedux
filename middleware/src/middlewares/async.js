export default function({dispatch}){
	return next=>action=>{
		//if the action doesn't contain a payload, or it doesn't have a .then property, we don't care about it, send it on
		if(!action.payload || !action.payload.then)
		{
			return next(action);
		}
		//console.log("we do have a promise",action);
		
		//make sure the promise is resolved
		action.payload.then(function(response){
			//create a new action with the old type but replace the promise with the response 
			const newAction = {...action,payload:response};
			//make sure the new action flows back to all the middlewares again
			dispatch(newAction);
		});
		
	}
	
	/*
	return function(next){
		return function(action){
			console.log(action);
			next(action);
		}
	}
	*/
	
	
}