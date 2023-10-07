import React,{useState} from 'react'
import "./forgotPass.css"

export default function ForgotPass() {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [pass, setpass] = useState('');
  const [confirmpass, setconfirmpass] = useState('');
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
      <form onSubmit={handleEmailSubmit} className='form'>
        <h2 className='heading forgot'>Forgot Password</h2>
        <label>Email:</label>
        <input className='input-box'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className='center'>

        <button className='button login-button' type="submit">Send OTP</button>
        </div>
      </form>
    )}
    {step === 2 && (
      <form onSubmit={handleOTPSubmit} className='form'>
        <h2 className='heading'>Verify OTP</h2>
        <label>Enter OTP:</label>
        <input
        className='input-box'
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          required
        />
        <label>New Password</label>
        <input
        className='input-box'
          type="text"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          required
        />
        <label> Confirm New Password</label>
        <input
        className='input-box'
          type="text"
          value={confirmpass}
          onChange={(e) => setconfirmpass(e.target.value)}
          required
        />
        <div className='center'>

        <button  className='button login-button shift' type="submit">Verify OTP</button>
        </div>
      </form>
    )}
  </div>
  )
}
