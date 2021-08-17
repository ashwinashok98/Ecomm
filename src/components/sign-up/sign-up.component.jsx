import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const {displayName,email,password,confirmPassword} = this.state;
    if(password!== confirmPassword){
        alert("Passwords dont match");
        return;
    }
    try{
        const {user} = await auth.createUserWithEmailAndPassword(email,password);;
        await createUserProfileDocument(user,{displayName});
        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
    }
    catch(error){
        console.error(error)
    }
    
    
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
      const{ displayName,email,password,confirmPassword }= this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Sign up</h2>
        <span>Start your journey now!</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Name"
            required
          />
          
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SignUp</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
