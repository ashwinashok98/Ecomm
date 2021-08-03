import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
                name:'',
                gender:'',
                DOB:'',
                email:'',
                password:''
                
            };
    }
    handleSubmit =event=>{
        event.preventDefault();
        this.setState({name:'',gender:'',DOB:'',email:'',password:''})
    }
    handleChange =event=>{
        const {name,value} = event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>Sign up</h2>
                <span>Start your journey now!</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name='name' value={this.state.name} handleChange={this.handleChange} label="Name" required/>
                    <FormInput type="text" name='gender' value={this.state.gender} label="Gender" handleChange={this.handleChange} required/>
                    <FormInput type="date" name='date' value={this.state.DOB} handleChange={this.handleChange} placeholder="Date" required/>
                    <FormInput name='email' name='email' value={this.state.email} handleChange={this.handleChange} label = 'Email' required />
                    <FormInput type="password" name='password' value={this.state.password} handleChange={this.handleChange} label="Password" required/>
                    <CustomButton type="submit">SignUp</CustomButton>
                </form>
            </div>
        );
    }
   
}
export default SignUp;
