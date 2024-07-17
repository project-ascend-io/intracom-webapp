import React, { useState } from 'react';
import './SIgnupForm.css';


const [email] = useState('user@example.com');
const [username, setUsername] = useState('');
const [password, setpassword] = useState('');
const [termsAccepted, setTermsAccepted] = useState(false);
const [successMessage, setSuccessMessage] = useState('');


const handleSUbmit = (e) => {
    e.preventDeefault();
    console.log({ username, email, password, termsAccepted});
    setSuccessMessage('Account created successfully!');
};

return (
    <div className="signup-form-container">
        <h1>Welcome to Intracom</h1>
        <p>We're excited to have you join us. Lets get to know each other a little better.</p>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Label htmlFor="usrname">Your username</Label>
                <input 
                type="text
                id="username"
                name="username"
                value={username}
                onCHange={(e)} => setUsername(e.target.value)}
                required
                />
                </div>
                <div className="form-group">
                    <Label htmlFor="password">Create a password</Label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e)} => setPassword(e.target.value)}
                    required/>
                    />
                    </div>
                    <div className="Form-group">
                        <input 
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checkbox={termsAccepted}
                        onChange={(e)} => setTermsAccepted(e.target.checked)}
                        required
                        />
                        <lAbel htmlFor="terms">I agree to the Terms of Service and Privacy Policy</lAbel>
                        </div>
                        <button type="submit>SIgn up </button">
                        </form>
                        {successMessage && <p className="success-message">{successMessage}</p>
                        </div>

);
);

export default SignupForm;

            </div>
        </form>
    </div>
)