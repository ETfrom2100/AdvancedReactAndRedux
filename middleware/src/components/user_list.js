import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
class UserList extends Component{
	componentWillMount(){
		this.props.fetchUsers();
	}
	renderUser(user){
		return (
			<div className="card card-block">
				<div className="card-title">{user.name}</div>
				<p className="card-text">{user.company.name}</p>
				<a className="btn btn-primary" href={user.website}>Website</a>
			</div>
		)
	}
	render(){
		return (
		<div className="user-list">{this.props.users.map(this.renderUser)}</div>
		)
	}
	
	
}
function mapStateToProps(state)
{
		return {
			users:state.users
		}
}

export default connect(mapStateToProps,actions)(UserList);