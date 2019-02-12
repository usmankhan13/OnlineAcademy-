import React from 'react';
import '../css/eml.css';
import '../css/login.css';
import '../css/signup.css';
import '../css/style.css';
import '../css/welcome.css';

class Navbar extends React.Component {
    state = {  }
    render() { 
        return (
          <div className="signup-form" >
		    <form  action="welcome.html" method="post">
			    <h1 ><b>Login </b></h1>
			    <div className="form-group">
					<div className="input-group ">
						<span className="input-group-addon"><i className="fa fa-envelope"></i></span>
						<input type="email" className="form-control" name="email" placeholder="Email" required="required"></input>
					</div>
				</div> 
                <div className="form-group">
					<div className="input-group ">
						<span className="input-group-addon"><i class="fa fa-lock"></i></span>
						<input type="password" className="form-control" name="password" placeholder="Password" required="required"></input>
					</div>
				</div> 
			    <br></br>
			    <p ><h4 className="text-center" style={{fontSize:'22px'}}>Don't have an account ? <a href="signup.html">Sign Up</a></h4></p>
                <p>
                    <p className="text-divider"><span>OR</span></p>
                        <i className="fab fa-facebook-f " style={{fontSize:'22px', backgroundColor:' #3372d1',color:'white', padding: '1% 4%'}}>
                            &nbsp; <button type="button" className="btn btn-info" style={{backgroundColor:'#3372d1'}}>Connect with facebook</button></i>
                    <a href="" className="btn btn-block btn-google"/> <i className='fab fa-google-plus ' style={{fontSize:'19px', padding:' 1% 4%', backgroundColor:'rgb(185, 67, 67)',color:'white'}}>
                            &nbsp; <button type="button" className="btn btn-danger " style={{backgroundColor:'rgb(185, 67, 67)'}}>Connect with Google</button></i>
                    </p>
			    <div className="form-group">
				    <button type="submit" className="btns btn-primary  btn-block btn-lg">Log In</button></div>
		    </form>
		  </div>
		  
		  );
    }
}
export default Navbar ;