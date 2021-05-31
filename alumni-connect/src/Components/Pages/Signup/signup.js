import React from 'react';

const Signup = () => {
    return ( <form className="form">
    <div className="group">
        <div className="col-1">
            <label for="name">tName</label>
        </div>
        <div class="colm-2">
            <input
                type="text"
                placeholder="first name"
                name="firstName"
                
                required
            />
        </div>
    </div>
    <div className="group">
        <div className="col-1">
            <label for="name">LastName</label>
        </div>
        <div class="colm-2">
            <input
                type="text"
                placeholder="last name"
                name="lasttName"
                
                required
            />
        </div>
    </div>
    <div className="group">
        <div className="col-1">
            <label for="name">Username</label>
        </div>
        <div class="colm-2">
            <input
                type="text"
                placeholder="Username"
                name="name"
                
                required
            />
        </div>
    </div>

    <div className="group">
        <div className="col-1">
            <label for="email">Email</label>
        </div>
        <div className="colm-2">
            <input
                type="email"
                placeholder="example@email.com"
                name="email"
    
                required
            />
        </div>
    </div>
    <div className="group">
        <div className="col-1">
            <label for="password">Password</label>
        </div>
        <div className="colm-2">
            <input
                name="password"
                placeholder="password"
                type={PasswordInputType}
                
                required
            />
           <div className="col-1">
            <label for="degree">Password</label>
        </div>
        <div className="colm-2">
            <input
                name="degree"
                placeholder="degree"
                required
            />
            </div>
            <span className="password-toggle-icon-signup">
                {ToggleIcon}
            </span>
        </div>
    </div>
    <div className="group">
        <div className="col-1">
            <label for="course">Course</label>
        </div>
        <div className="colm-2">
            <input
                type="text"
                placeholder="course"
                name="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
            />
        </div>
    </div>
    <div className="group">
        <div className="col-1">
            <label for="year">Year</label>
        </div>
        <div className="colm-2">
            <input
                type="number"
                placeholder="year"
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
            />
        </div>
    </div>
    <div className="group">
        <div className="col-1">
            <label for="college">College</label>
        </div>
        <div className="colm-2">
            <input
                type="text"
                placeholder="college name"
                name="college"
                value={collegeName}
                onChange={(e) =>
                    setCollegeName(e.target.value)
                }
                required
            />
        </div>
    </div>
    <div className="group">
        <div className="col-1">
            <label for="name">ContactNumber</label>
        </div>
        <div class="colm-2">
            <input
                type="number"
                placeholder="contact number"
                name="contactNumber"
                
                
            />
        </div>
    </div>
    <input
        type="submit"
        className="submit"
        value="submit"
        onClick={userSignup}
    />
    <br />
    <p className="signup_signin_message">
        Already a user?
        {/* <a href="/signin" className="signin_link">Sign In</a> */}
        <Link to="/signin">Sign In</Link>
    </p>
</form> );
}
 
export default Signup;