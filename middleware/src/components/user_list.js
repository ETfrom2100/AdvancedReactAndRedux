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
				<p className="card-text">Cheese Factory</p>
				<a className="btn btn-primary">Email</a>
			</div>
		)
	}
	render(){
		return (
		<div>{this.props.users.map(this.renderUser)}</div>
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