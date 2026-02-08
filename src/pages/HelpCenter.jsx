import { useState } from 'react';
import '../styles/HelpCenter.css';

const HelpCenter = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      id: 1,
      title: 'Account & Login',
      icon: '👤',
      faqs: [
        {
          id: 1,
          question: 'How do I reset my password?',
          answer: 'To reset your password, click on "Forgot password?" on the Sign In page. Enter your email address, and we\'ll send you instructions to reset your password. Follow the link in the email and create a new password.'
        },
        {
          id: 2,
          question: 'Why can\'t I sign in to my account?',
          answer: 'This could be due to several reasons: 1) Incorrect email or password - double-check your credentials. 2) Account locked - try resetting your password. 3) Cookies/cache issues - try clearing your browser cache. 4) Contact support if the issue persists.'
        },
        {
          id: 3,
          question: 'How do I change my email address?',
          answer: 'Go to your Account Settings, find the Email section, and click Edit. Enter your new email address and verify it through the confirmation link sent to your email.'
        },
        {
          id: 4,
          question: 'Can I change my username?',
          answer: 'Yes, you can change your username anytime from your Account Settings. Click on your profile icon, go to Account, and select "Edit Username".'
        }
      ]
    },
    {
      id: 2,
      title: 'Subscription & Billing',
      icon: '💳',
      faqs: [
        {
          id: 5,
          question: 'How much does Streamify cost?',
          answer: 'Streamify offers flexible pricing plans: Basic Plan - $6.99/month, Standard Plan - $9.99/month, Premium Plan - $15.99/month. Each plan includes different features and streaming quality.'
        },
        {
          id: 6,
          question: 'How do I cancel my subscription?',
          answer: 'To cancel your subscription, go to Account Settings, select Billing, and click "Cancel Membership". Your access will continue until the end of your billing cycle. No refunds are issued for the unused portion.'
        },
        {
          id: 7,
          question: 'Why was I charged twice?',
          answer: 'Duplicate charges can happen due to processing delays. Check your billing history in Account Settings. If you see duplicate charges, contact our support team immediately with your transaction details.'
        },
        {
          id: 8,
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and PayPal. Your payment information is securely encrypted.'
        }
      ]
    },
    {
      id: 3,
      title: 'Streaming & Playback',
      icon: '▶️',
      faqs: [
        {
          id: 9,
          question: 'Why is the video buffering or loading slowly?',
          answer: 'Slow buffering is usually due to internet speed. Try: 1) Check your internet connection speed (minimum 5 Mbps for HD). 2) Close other apps using bandwidth. 3) Restart your device. 4) Lower video quality in settings. 5) Move closer to your WiFi router.'
        },
        {
          id: 10,
          question: 'What internet speed do I need?',
          answer: 'Minimum recommended speeds: SD Quality - 3 Mbps, HD Quality - 5 Mbps, 4K Quality - 25 Mbps. For multiple simultaneous streams, multiply the speed by the number of streams.'
        },
        {
          id: 11,
          question: 'Can I download shows to watch offline?',
          answer: 'Yes! With Streamify Premium, you can download movies and TV shows to watch offline. Click the download icon on the content page. Downloaded content expires after 30 days or when you cancel your subscription.'
        },
        {
          id: 12,
          question: 'How do I change video quality?',
          answer: 'During playback, click the settings icon (⚙️) at the bottom right of the video player. Select "Video Quality" and choose your preferred resolution (Auto, 480p, 720p, 1080p, 4K).'
        }
      ]
    },
    {
      id: 4,
      title: 'Device Compatibility',
      icon: '📱',
      faqs: [
        {
          id: 13,
          question: 'What devices can I watch Streamify on?',
          answer: 'Streamify works on: Smartphones & Tablets (iOS/Android), Smart TVs (Samsung, LG, Sony, etc.), Laptops & PCs (Windows/Mac), Gaming Consoles (PlayStation, Xbox), Streaming Devices (Roku, Apple TV, Chromecast).'
        },
        {
          id: 14,
          question: 'How many devices can I stream on at once?',
          answer: 'Depends on your plan: Basic Plan - 1 device, Standard Plan - 2 devices, Premium Plan - 4 devices. You can have more devices on your account, but only the allowed number can stream simultaneously.'
        },
        {
          id: 15,
          question: 'Why isn\'t Streamify working on my smart TV?',
          answer: 'Try: 1) Restart your TV and check for app updates. 2) Uninstall and reinstall the Streamify app. 3) Check your internet connection. 4) Ensure your TV is compatible with Streamify. 5) Contact support if the issue persists.'
        },
        {
          id: 16,
          question: 'Can I cast Streamify to my TV?',
          answer: 'Yes! You can cast from your phone or tablet using Chromecast, AirPlay (Apple), or Miracast. Click the cast icon in the video player and select your device.'
        }
      ]
    },
    {
      id: 5,
      title: 'Profiles & Parental Controls',
      icon: '👨‍👩‍👧',
      faqs: [
        {
          id: 17,
          question: 'How do I create a profile?',
          answer: 'Go to your Account Settings, select "Manage Profiles", and click "Add Profile". Choose a name and profile picture, then set content restrictions if needed.'
        },
        {
          id: 18,
          question: 'How do I set up parental controls?',
          answer: 'Create a profile for kids, then go to Account Settings > Parental Controls. Set a PIN and select the maturity level (G, PG, PG-13, R, etc.) for that profile.'
        },
        {
          id: 19,
          question: 'Can I restrict specific content on a profile?',
          answer: 'Yes, you can set content restrictions based on maturity ratings. You can also pin specific profiles so they require a PIN to access.'
        }
      ]
    },
    {
      id: 6,
      title: 'Technical Issues',
      icon: '🔧',
      faqs: [
        {
          id: 20,
          question: 'The app keeps crashing. What should I do?',
          answer: 'Try: 1) Restart the app and your device. 2) Update to the latest version from App Store/Play Store. 3) Clear app cache (Settings > Apps > Streamify > Clear Cache). 4) Uninstall and reinstall the app. 5) Contact support if the issue persists.'
        },
        {
          id: 21,
          question: 'I\'m getting an error code. What does it mean?',
          answer: 'Error codes help us identify specific issues. Visit our error code reference page or contact support with the error code number. Different codes indicate different problems like connection issues, account problems, or device compatibility.'
        },
        {
          id: 22,
          question: 'How do I clear my cache and cookies?',
          answer: 'On most browsers: 1) Chrome - Settings > Privacy > Clear Browsing Data. 2) Firefox - History > Clear Recent History. 3) Safari - History > Clear History. 4) Edge - Settings > Clear Browsing Data.'
        },
        {
          id: 23,
          question: 'Why is the audio out of sync with video?',
          answer: 'Try: 1) Pause and resume playback. 2) Refresh the page. 3) Check your internet connection. 4) Close other bandwidth-heavy apps. 5) Try a different device. 6) Clear your browser cache.'
        }
      ]
    }
  ];

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  const toggleFaq = (categoryId, faqId) => {
    setExpandedFaq(
      expandedFaq && expandedFaq.categoryId === categoryId && expandedFaq.faqId === faqId
        ? null
        : { categoryId, faqId }
    );
  };

  return (
    <div className="help-center-page">
      {/* Simplified Navigation */}
      <nav className="help-navbar">
        <a href="/" className="help-logo">Streamify</a>
      </nav>

      {/* Hero Section */}
      <section className="help-hero">
        <div className="help-hero-content">
          <h1>Help Center</h1>
          <p>Find answers to common questions and issues</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="help-search-section">
        <div className="help-search-container">
          <input
            type="text"
            placeholder="Search for help..."
            className="help-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="help-search-icon">🔍</span>
        </div>
      </section>

      {/* Help Categories */}
      <section className="help-content">
        <div className="help-categories-container">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div key={category.id} className="help-category">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h2>{category.title}</h2>
                </div>

                <div className="help-faqs-list">
                  {category.faqs.map((faq) => (
                    <div
                      key={faq.id}
                      className={`help-faq-item ${expandedFaq &&
                        expandedFaq.categoryId === category.id &&
                        expandedFaq.faqId === faq.id
                        ? 'expanded'
                        : ''
                        }`}
                    >
                      <div
                        className="help-faq-question"
                        onClick={() => toggleFaq(category.id, faq.id)}
                      >
                        <span>{faq.question}</span>
                        <span className="help-faq-toggle">
                          {expandedFaq &&
                            expandedFaq.categoryId === category.id &&
                            expandedFaq.faqId === faq.id
                            ? '✚'
                            : '✚'}
                        </span>
                      </div>
                      <div className="help-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No results found for "{searchQuery}"</p>
              <p>Try different keywords or contact our support team</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="contact-support-section">
        <div className="support-container">
          <h2>Didn't find what you're looking for?</h2>
          <p>Our support team is here to help. Contact us for any issues not covered here.</p>
          <a href="/contact" className="contact-support-btn">
            Contact Support →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="help-footer">
        <p>&copy; 2026 Streamify Help Center. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HelpCenter;
