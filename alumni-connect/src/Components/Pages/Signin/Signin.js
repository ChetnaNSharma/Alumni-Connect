import React from 'react';
import './signin.css';

const Signin = () => {
    return (  <div><form className="form1">
    
    <div className="inputs">
        <input
            type="text"
            placeholder="email"
            name="email"
        />
        <input
            type={PasswordInputType}
            placeholder="password"
            name="password"
           
        />
        <span className="password-toggle-icon-signin">
            {ToggleIcon}
        </span>
    </div>
</form>
    <button type="submit">
        Continue
    </button>
    <p className="para">
        Don't have an account?{" "}
        <Link to="/signup">Sign Up</Link>
    </p></div>);
}
 
export default Signin;