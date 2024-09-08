import React, { useState } from 'react';
import axios from 'axios';
import './Bar.css'; // Import the CSS file

const TextSubmit: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      setSuccess(false);
      setError(null);

      if (text.trim() === '') {
        setError('Please enter some text');
        return;
      }
      if (email.trim() === '') {
        setError('Please enter an email address');
        return;
      }

      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://13.60.46.23:3000/api/v1/user/mentaltext',{
            text,email
        }
      );

      if (response.status === 200) {
        setSuccess(true);
        setText('');
        setEmail('');
      }
    } catch (err) {
      setError('Failed to submit text. Please try again.');
    }
  };

  return (
    <div className="text-submit-container">
      <h2 className="heading">Submit Text</h2>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email here"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Text submitted successfully!</p>}
    </div>
  );
};

export default TextSubmit;
