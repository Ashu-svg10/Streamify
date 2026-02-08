import { useState, useEffect } from 'react';
import '../styles/Auth.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    terms: false
  });

  const [passwordStrength, setPasswordStrength] = useState(0);

  // Retrieve email from sessionStorage on component mount
  useEffect(() => {
    const storedEmail = sessionStorage.getItem('signupEmail');
    if (storedEmail) {
      setFormData(prev => ({
        ...prev,
        email: storedEmail
      }));
    }
  }, []);

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const { fullname, email, password, confirmPassword, phone, terms } = formData;

    // Full name validation regex - letters and spaces only
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    if (!nameRegex.test(fullname)) {
      alert('Full name must contain only letters and spaces (minimum 2 characters)');
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Password validation regex - at least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters with uppercase, lowercase, and a number');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Phone validation regex (optional field, but validate if provided)
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (phone && !phoneRegex.test(phone)) {
      alert('Please enter a valid phone number');
      return;
    }

    if (!terms) {
      alert('Please agree to the Terms of Service');
      return;
    }

    console.log('Sign Up Data:', { ...formData, timestamp: new Date().toISOString() });

    // Show success message and redirect
    const successMsg = document.getElementById('successMessage');
    if (successMsg) {
      successMsg.style.display = 'block';
    }

    setTimeout(() => {
      window.location.href = '/signin';
    }, 2000);
  };

  const strengthColor = passwordStrength === 0 ? '#ff0000' : passwordStrength === 1 ? '#ff6b00' : passwordStrength === 2 ? '#ffaa00' : '#00aa00';
  const strengthWidth = (passwordStrength / 3) * 100;

  return (
    <div className="auth-page">
      <div className="background-overlay"></div>

      <a href="/" className="back-btn">← Back</a>

      <div className="signup-container">
        <div className="logo">
          <i className="fas fa-play"></i>
          <h1>Streamify</h1>
        </div>

        <h2>Create Account</h2>
        <p>Join millions watching movies and TV shows.</p>

        <div className="success-message" id="successMessage">
          ✓ Account created successfully! Redirecting to sign in...
        </div>

        <form id="signupForm" onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="John Doe"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="At least 8 characters"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="strength-indicator">
              <div className="strength-bar" style={{ width: `${strengthWidth}%`, background: strengthColor }}></div>
            </div>
            <div className="password-requirements">
              <span>✓ At least 8 characters</span>
              <span>✓ Mix of uppercase and lowercase</span>
              <span>✓ At least one number</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </div>

          <button type="submit" className="signup-btn" id="signupBtn">Create Account</button>
        </form>

        <div className="login-link">
          Already have an account?<br />
          <a href="/signin">Sign in here</a>
        </div>
      </div>
    </div>
  );
}
