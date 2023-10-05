import React,{useState} from 'react'
import "./forgotPass.css"

export default function ForgotPass() {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [step, setStep] = useState(1);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className='form-box'>{step === 1 && (
      <form onSubmit={handleEmailSubmit}>
        <h2 className='heading forgot'>Forgot Password</h2>
        <label>Email:</label>
        <input className='input-box'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className='button login-button' type="submit">Send OTP</button>
      </form>
    )}
    {step === 2 && (
      <form onSubmit={handleOTPSubmit}>
        <h2 className='heading forgot'>Verify OTP</h2>
        <label>Enter OTP:</label>
        <input
        className='input-box'
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          required
        />
        <button  className='button login-button'type="submit">Verify OTP</button>
      </form>
    )}
    {step === 3 && (
      <div>
        <h2>Password Reset</h2>
        {/* Render your password reset form here */}
      </div>
    )}</div>
  )
}
