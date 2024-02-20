import React, { useState, useEffect } from 'react';
import "../styles/SignupForm.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    country: '',
    age: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
const navigate=useNavigate()
  useEffect(() => {
    const validateForm = () => {
      const errors = {};
      // Email validation
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Invalid email address';
      }
      // Password validation
      if (formData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
      }
      // Other validations for name, country, age can be added similarly
      // Name validation
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      }
      // Country validation
      if (!formData.country.trim()) {
        errors.country = 'Country is required';
      }
      // Age validation
      if (isNaN(formData.age) || formData.age < 18) {
        errors.age = 'Age must be a number and at least 18';
      }

      setErrors(errors);
      setIsValid(Object.keys(errors).length === 0);
    };

    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users', formData); // Make a POST request
      console.log('Response:', response.data); // Handle response data as needed
      // Redirect or perform any action after successful submission
      navigate("/");
    } catch (error) {
      console.error('Error:', error); // Handle errors
    }
  };
   
  return (
    <div>
        <h2 style={{textAlign:"center"}}>SignUp Form</h2>
   <br /><br />
    <form onSubmit={handleSubmit} className="form-container">
      
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
        {errors.country && <span className="error-message">{errors.country}</span>}
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
        {errors.age && <span className="error-message">{errors.age}</span>}
      </div>
      <button type="submit"className="submit-button" disabled={!isValid}>Submit</button>
     <br />
      <Link to="/">Go To Home page</Link>
    </form>
    
    </div>
  );
};

export default SignupForm;
