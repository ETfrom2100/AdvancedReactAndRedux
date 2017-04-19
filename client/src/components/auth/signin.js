import React, {Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';
//redux-form v6
/*const renderInput = field =>   // Define stateless component to render input and errors   
  <div>
    <input {...field.input} type={field.type} className={field.className}/>  
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>*/
class Signin extends Component{
	
	handleFormSubmit({email,password}){
		//debugger;
		//console.log(email,password);
		//console.log(this.props);
		this.props.signinUser({email,password});
	}
	renderAlert()
	{
		if(this.props.errorMessage)
		{
			return (
			<div className="alert alert-danger"><strong>Oops!</strong>{this.props.errorMessage}</div>
			)
		}
	}
	render(){
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<Field className="form-control" component="input" type="text" name="email" />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<Field  className="form-control" component="input" type="password" name="password"/>
				</fieldset>
					{this.renderAlert()}
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>
		)
	}
}
function mapStateToProps(state)
{
	return {errorMessage:state.auth.error};
}
//In reduxForm v5, the reduxForm() decorator allowed these parameters (mapStateToProps and mapDispatchToProps) to be given and it passed them along to react-redux's connect() API.
//v6 no longer does this. You will need to separately decorate your form component with connect() yourself if you need to access other values in the Redux store or bind action creators to dispatch.
Signin = reduxForm({
	form:'signin',
	
})(Signin);
Signin =  connect(mapStateToProps, actions)(Signin);
export default Signin;