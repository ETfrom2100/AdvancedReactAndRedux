import React, {Component} from 'react';
import {reduxForm,Field} from 'redux-form';
const renderInput = field =>   // Define stateless component to render input and errors
  <div>
    <input {...field.input} type={field.type} className={field.className}/>  
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>
class Signin extends Component{
	
	handleFormSubmit({email,password}){
		//debugger;
		console.log(email,password);
	}
	render(){
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<Field className="form-control" component={renderInput} type="text" name="email" />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<Field  className="form-control" component={renderInput} type="password" name="password"/>
				</fieldset>
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>
		)
	}
}

export default reduxForm({
	form:'signin',
	
})(Signin);