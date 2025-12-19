import '../styles/signup.css';
import {Link} from 'react-router-dom'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
function SignUp() {
    const [password, setPassword] = useState('');
    const [error, setError] =  useState('');
    const navigate = useNavigate();

    const validatePassword = (pwd) =>{
        const minLength = 8;
        //regex pattern matching
        const hasUpperCase = /[A-Z]/.test(pwd);
        const hasLowerCase = /[a-z]/.test(pwd);
        const hasNumber = /[0-9]/.test(pwd);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
        let prompt = "Invalid Password\nYour password must:\n";
        if (pwd.length < 8){
            prompt+="Have atleast 8 characters";
            
        }
        if (!hasUpperCase){
            prompt+="\n-Include at least one uppercase letter";
           
        }
        if (!hasLowerCase){
            prompt+="\n-Include at least one lowercase letter";
            
        }
        if (!hasNumber){
            prompt+="\n-Include at least one number";
             
        }
        if (!hasSpecialChar){
            prompt+="\n-Include at least one special character";
            
        }
        return prompt.includes("-") ? prompt : "";  
    }

    const handleChange = (e) =>{
        const pwd = e.target.value; //assigns the current value as the pwd
        setPassword(pwd);  //sets the password state to the current value
        setError(validatePassword(pwd)); //sets the error state based on validation
    };

    const handleSubmit = (e) =>{
        e.preventDefault(); //prevents the default form submission
        const validationError = validatePassword(password);
        if (validationError){  //if theres an error when validating the password 
            setError(validationError); //set the the error state as the validation error 
        }
        else{
           navigate('/personalinfo');
        }
    }

    return (
        <div className="signup-container">
            <div className="signup-left-panel">
                <div className="signup-content">
                <form onSubmit ={handleSubmit}>
                    <div className="signup-logo">Ethicure</div>
                    <div className="signup-header">
                        <div className="signup-title">Sign Up</div>
                        <div className="signup-subtitle">Enter your details to sign up</div>
                    </div>
                    
                    {/* Name fields container for side-by-side on desktop */}
                    <div className="signup-names-container">
                        <div className="signup-name-field">
                            <label className="signup-label">First Name</label>
                            <input className="signup-input signup-input-first-name" type="text" />
                        </div>
                        <div className="signup-name-field">
                            <label className="signup-label">Last Name</label>
                            <input className="signup-input signup-input-last-name" type="text" />
                        </div>
                    </div>

                    <label className="signup-label">Email</label>
                    <div className="signup-email-input">
                        <div className="email-icon" />
                        <input className="email-text" type="email" placeholder="example@gmail.com" />
                    </div>

                    <label className="signup-label">Password</label>
                    <input className="signup-input signup-input-password" type="password" value={password} onChange={handleChange}/>
                    <p style={{ whiteSpace: 'pre-line', color: 'red' }}>{error}</p>
                    <button className="signup-button"><Link to="/personalinfo">Sign Up</Link></button>
                    <div className="signup-footer">
                        <span>Already have an account? </span>
                        <span className="signup-link"><Link to="/signin">Sign In</Link></span>
                    </div>
                </form>
                </div>
            </div> 
        </div> 
    );
}

export default SignUp;