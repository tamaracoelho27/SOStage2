import '../styles/signin.css';
import { Link } from 'react-router-dom';
function SignIn() {
    return (
        <div className="signup-container">
            <div className="signup-left-panel">
                <div className="signup-content">
                    <div className="signup-logo">Ethicure</div>
                    <div className="signup-header">
                        <div className="signup-title">Sign In</div>
                        <div className="signup-subtitle">Enter your details to sign in</div>
                    </div>
                    
                    <label className="signup-label">Email</label>
                    <div className="signup-email-input">
                        <div className="email-icon" />
                        <input className="email-text" type="email" placeholder="example@gmail.com" />
                    </div>

                    <label className="signup-label">Password</label>
                    <input className="signup-input signup-input-password" type="password" />

                    <div className="remember-me-container">
                        <div className="remember-me-left">
                            <input className="signup-input-remember" type="checkbox" id="remember" />
                            <label htmlFor="remember" className="remember-me-label">Remember me</label>
                        </div>
                        <div className="forgot-password"><strong>Forgot Password?</strong></div>
                    </div>
                    <button className="signup-button">Sign In</button>
                    <div className="signup-footer">
                        <span>Don't have an account yet? </span>
                        <span className="signup-link"><Link to='/'>Sign Up</Link></span>
                    </div>
                </div>
            </div> 
        </div> 
    );
}

export default SignIn;