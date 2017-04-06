import {FETCH_USERS} from './types';

export function fetchUsers(){
	return {
		action:FETCH_USERS,
		payload:[
			{name:'Leo'},
			{name:'Alex'},
			{name:'Vincent'}
		]
	}
}