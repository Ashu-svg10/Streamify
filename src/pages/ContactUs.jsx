import { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, subject, message } = formData;

    // Name validation regex - letters and spaces only
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    if (!nameRegex.test(name)) {
      alert('Name must contain only letters and spaces (minimum 2 characters)');
      setLoading(false);
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      setLoading(false);
      return;
    }

    // Subject validation regex - alphanumeric with common punctuation
    const subjectRegex = /^[a-zA-Z0-9\s\-\.!?']{3,100}$/;
    if (!subjectRegex.test(subject)) {
      alert('Subject must be between 3-100 characters');
      setLoading(false);
      return;
    }

    // Message validation regex - minimum 10 characters
    const messageRegex = /^[\s\S]{10,1000}$/;
    if (!messageRegex.test(message)) {
      alert('Message must be between 10-1000 characters');
      setLoading(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'support@streamify.com',
      link: 'mailto:support@streamify.com',
    },
    {
      icon: '📱',
      title: 'Phone',
      content: '+1 (888) 123-4567',
      link: 'tel:+18881234567',
    },
    {
      icon: '📍',
      title: 'Address',
      content: '123 Streaming Lane, Tech City, TC 12345',
      link: 'https://maps.google.com',
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM (EST)',
    },
  ];

  const faqs = [
    {
      question: 'What should I do if I encounter a technical issue?',
      answer: 'Please contact our technical support team at support@streamify.com with details about the issue, including your device and browser information.',
    },
    {
      question: 'How can I cancel my subscription?',
      answer: 'You can manage your subscription in your account settings. Click on your profile icon, go to Account, and select "Cancel Membership".',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and PayPal. Your payment information is secured with industry-standard encryption.',
    },
    {
      question: 'How long does it take to receive a response?',
      answer: 'We aim to respond to all inquiries within 24 hours during business days. For urgent issues, please call our support line.',
    },
  ];

  return (
    <div className="contact-us-page">
      {/* Simplified Navigation */}
      <nav className="contact-navbar">
        <a href="/" className="contact-logo">Streamify</a>
      </nav>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>We're here to help. Reach out to us with any questions or concerns.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible.</p>

          {submitted && (
            <div className="success-message">
              ✓ Thank you for your message! We'll be in touch soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="info-cards">
          {contactInfo.map((info, index) => (
            <div key={index} className="info-card">
              <div className="info-icon">{info.icon}</div>
              <h3>{info.title}</h3>
              {info.link ? (
                <a href={info.link} className="info-link">
                  {info.content}
                </a>
              ) : (
                <p>{info.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="contact-faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="contact-faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <p>&copy; 2024 Streamify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
