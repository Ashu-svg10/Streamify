import { useState } from 'react';
import '../styles/Auth.css';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert('Please enter email and password');
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    console.log('Sign In Attempt:', formData);

    // Store user info in session
    sessionStorage.setItem('userEmail', formData.email);
    sessionStorage.setItem('userName', formData.email.split('@')[0]);

    // Redirect to dashboard
    window.location.href = '/';
  };

  return (
    <div className="auth-page">
      <div className="background-overlay"></div>

      <a href="/" className="back-btn">← Back</a>

      <div className="signin-container">
        <div className="logo">
          <i className="fas fa-play"></i>
          <h1>Streamify</h1>
        </div>

        <h2>Sign In</h2>

        <form id="signinForm" onSubmit={handleSignIn}>
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="signin-btn">Sign In</button>
        </form>

        <div className="divider">New to Streamify?</div>

        <div className="signup-link">
          <span>Ready to watch?</span><br />
          <a href="/signup">Create an account</a>
        </div>

        <div className="help-link">
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
