import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
		<fieldset className="form-group">
			<label>{label}</label>
			<input className="form-control" type={type} placeholder={label} {...input} />
			{touched && error && <span className="error">{error}</span>}
		</fieldset>
	)
class Signup extends Component{
	handleFormSubmit(formProps)
	{
		this.props.signupUser(formProps);
	}
	renderAlert()
	{
		if(this.props.errorMessage)
		{
			
			return (
				<div className="alert alert-danger">
					<strong>Oops! </strong>{this.props.errorMessage}
				</div>
			)
		}
		
	}
	render(){
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				
					{this.renderAlert()}
					<Field className="form-control" component={renderField} type="text" label="Email" name="email"/>
				
				
					<Field className="form-control" component={renderField} type="password" label="Password" name="password"/>
					
				
					<Field className="form-control" component={renderField} type="password" label="Confirm Password" name="passwordConfirm"/>
				
				
				<button action="submit" className="btn btn-primary">Sign up!</button>
			</form>
		)
	}
}
function validate(formProps){
	const errors = {};
	//console.log(formProps);
	if(!formProps.email)
	{
		
		errors.email = "Please enter an email";
	}
	if(!formProps.password)
	{
		errors.password = "Please enter a password";
	}
	if(!formProps.passwordConfirm)
	{
		errors.passwordConfirm = "Please enter a password confirmation";
	}
	if(formProps.password !== formProps.passwordConfirm)
	{
		errors.password = "Passwords must match";
	}
	return errors;
}
function mapStateToProps(state)
{
	console.log("inside mapStateToProps",state.auth.error);
	return {errorMessage:state.auth.error};
}

Signup = reduxForm({
	form:'signup',
	validate
})(Signup);
Signup = connect(mapStateToProps,actions)(Signup);
export default Signup;