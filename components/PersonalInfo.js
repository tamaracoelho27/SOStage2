import '../styles/personalinfo.css';
import {Link} from 'react-router-dom'
import {useState} from 'react';
function PersonalInfo() {
    const [day, setDay] = useState('');

    const handleDayChange = (e) => {
        // remove non-digit characters
        let v = e.target.value.replace(/\D/g, '');
        // limit to 2 characters
        if (v.length > 2) v = v.slice(0, 2);
        // allow clearing the field
        if (v === '') {
            setDay('');
            return;
        }
        // prevent single leading zero
        if (v.length === 1 && v === '0') return;
        const num = parseInt(v, 10);
        // accept only values between 1 and 31
        if (num >= 1 && num <= 31) {
            setDay(v);
        }
    };

    return (
         <div className="signup-container">
            <div className="signup-left-panel">
                <div className="signup-content">
                <form>
                    <div className="signup-logo">Ethicure</div>
                    <div className="signup-header">
                        <div className="signup-title">Personal Info</div>
                        <div className="signup-subtitle">Enter your details to sign up</div>
                    </div>
                    
                    <div>
                        <label className ="signup-label">Date of Birth</label>
                        <div classname="DOB-inputs">
                            
                                <input className="DOB-input-day" type="text" placeholder="DD"/>
                                <input className="DOB-input-month" type="text" placeholder="MM"/>
                                <input className="DOB-input-year" type="text" placeholder="YYYY"/>
                        </div>
                    </div>

                    <label className="signup-label">Gender</label>
                    <div className="gender-input">
                        <div className="male">
                            <input className="gender" name="gender" type="radio"></input>
                            <label className="gender-type">Male</label>
                        </div>
                        <div className="female">
                            <input className="gender" name="gender" type="radio"></input>
                            <label className="gender-type">Female</label>
                        </div>
                        <div className="other">
                           <input className="gender" name="gender" type="radio"></input>
                           <label className="gender-type">Other</label>
                        </div>
                    </div>
                
                    <div className="data">
                        <div className="height-container">
                            <div className="height-input">
                                <label className="signup-label">Height</label>
                                <input className="height-input-box" type="text" />
                                <div className="height-unit"></div>
                            </div>
                        </div>
                        <div className="weight-container">
                            <div className="weight-input">
                                <label className="signup-label">Weight</label>
                                <input className="weight-input-box" type="text" />
                                <div className="height-unit"></div>
                            </div>
                        </div>
                    </div>
                    
                    <button className="signup-button"><Link to="/dashboard">Complete</Link></button>
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

export default PersonalInfo;