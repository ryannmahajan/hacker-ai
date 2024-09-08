import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.scss'; // Import the CSS file

interface SignupInputs {
  email: string;
  password: string;
  name: string;
  age: number;
  gender: string;
}

const Signup: React.FC = () => {
  const [inputs, setInputs] = useState<SignupInputs>({
    email: '',
    password: '',
    name: '',
    age: 0,
    gender: 'Male',
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // To navigate to another page after successful signup

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://13.60.46.23:3000/api/v1/user/signup', 
        
      {email: inputs.email,
      password: inputs.password,
      name: inputs.name,
      age: inputs.age,
      gender: inputs.gender,
    },{
      headers: {
        'Content-Type': 'application/json',
      },
    }
      );

      if (response.data.status === 200) {
        // Store the email in localStorage after successful signup
        localStorage.setItem('userEmail', inputs.email);

        // Navigate to login or home page upon successful signup
        navigate('/login');
      } else {
        setError(response.data.message);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={inputs.age}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={inputs.gender} onChange={handleChange} className="form-input">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
