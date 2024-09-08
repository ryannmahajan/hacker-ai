import React, { useState } from 'react';
import './HomePage/Auth.scss';

const LoginPage: React.FC = () => {
  const [userType, setUserType] = useState<string>('patient'); // Default to "patient"

  const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(event.target.value);
  };

  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form id='inp-form'>
        <input type="email" placeholder="Email" required id='login1' />
        <input type="password" placeholder="Password" required id='login2' />

        {/* User Type Selection */}
        <div className="user-type">
          <label>
            <input
              type="radio"
              name="userType"
              value="doctor"
              checked={userType === 'doctor'}
              onChange={handleUserTypeChange 
                }
                id='rad1'
            />
            Doctor
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="patient"
              checked={userType === 'patient'}
              onChange={handleUserTypeChange}
                id='rad2'
            />
            Patient
          </label>
        </div>

        <button type="submit" id='btn-1'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
