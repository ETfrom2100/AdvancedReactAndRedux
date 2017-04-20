import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../../actions';

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
		<fieldset className="form-group">
			<label>{label}</label>
			<input className="form-control" type={type} placeholder={label} {...input} />
			{touched && error && <span className="error">{error}</span>}
		</fieldset>
	)
class Signup extends Component{
	
	render(){
		const {handleSubmit} = this.props;
		return (
			<form>
				
					
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
	if(formProps.password !== formProps.passwordConfirm)
	{
		errors.password = "Passwords must match";
	}
	return errors;
}
export default reduxForm({
	form:'signup',
	validate
})(Signup);