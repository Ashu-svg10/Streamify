import { useEffect, useState } from 'react';
import '../styles/Welcome.css';

const movieSets = [
  [
    { id: 9, title: 'Westworld', rating: '8.5/10', image: 'https://media.themoviedb.org/t/p/w440_and_h660_face/9Q61anGltwPAOUv43YHKW8jaWMz.jpg' },
    { id: 10, title: 'Mindhunter', rating: '8.8/10', image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/uTTGRvnqCI9ZC7WkyP9u7XRiOaA.jpg' },
    { id: 11, title: 'Money Heist', rating: '8.3/10', image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg' },
    { id: 12, title: 'Squid Game', rating: '8.0/10', image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg' },
  ],
  [
    { id: 13, title: 'Breaking Bad', rating: '9.5/10', image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg' },
    { id: 14, title: 'The Crown', rating: '8.6/10', image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/qlipWZ8XVaCMIOiOGTifRLIeCPq.jpg' },
    { id: 15, title: 'Stranger Things', rating: '8.7/10', image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg' },
    { id: 16, title: 'The Witcher', rating: '8.2/10', image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/AoGsDM02UVt0npBA8OvpDcZbaMi.jpg' },
  ],
  [
    { id: 17, title: 'Peaky Blinders', rating: '8.8/10', image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg' },
    { id: 18, title: 'The Office', rating: '9.0/10', image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/dg9e5fPRRId8PoBE0F6jl5y85Eu.jpg' },
    { id: 19, title: 'Chernobyl', rating: '9.3/10', image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg' },
    { id: 20, title: 'Dark', rating: '8.8/10', image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg' },
  ],
];

export default function Welcome() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleGetStarted = (email) => {
    sessionStorage.setItem('signupEmail', email);
    window.location.href = '/signup';
  };

  const faqItems = [
    {
      id: 0,
      question: 'What is Streamify?',
      answer: 'Streamify is a streaming service that offers a wide variety of award-winning TV shows, movies, documentaries, and more on thousands of internet-connected devices.'
    },
    {
      id: 1,
      question: 'How much does Streamify cost?',
      answer: 'Watch Streamify on your smartphone, tablet, smart TV, laptop, or streaming device, all for one low monthly price. Plans start at $6.99 a month and go up to $15.99 a month.'
    },
    {
      id: 2,
      question: 'Where can I watch?',
      answer: 'Watch anywhere, anytime. Sign in with your Streamify account to watch on any internet-connected device that offers the Streamify app.'
    },
    {
      id: 3,
      question: 'How do I cancel?',
      answer: 'Streamify is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.'
    }
  ];

  return (
    <div className="welcome-page">
      {/* Navigation */}
      <nav className="welcome-navbar">
        <a href="/" className="welcome-logo">Streamify</a>
        <div className="auth-buttons">
          <a href="/signin" className="btn-signin">Sign In</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="welcome-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Streamify</h1>
          <p>Explore millions of movies and TV shows</p>

          <div className="get-started">
            <input
              type="email"
              placeholder="Enter your email to get started"
              id="emailInput"
              className="email-input"
            />
            <button
              className="btn-get-started"
              onClick={() => {
                const email = document.getElementById('emailInput').value;
                if (email) {
                  handleGetStarted(email);
                } else {
                  alert('Please enter your email');
                }
              }}
            >
              Get Started →
            </button>
          </div>
        </div>
      </section>

      {/* Popular on Streamify Section */}
      <section className="content-section">
        <h2 className="section-title">Popular on Streamify</h2>
        <div className="carousel-wrapper">
          <button
            className="carousel-btn carousel-prev"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + movieSets.length) % movieSets.length)}
            aria-label="Previous slide"
          >
            ❮
          </button>
          <div className="movies-grid-container">
            <div
              className="movies-grid"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {movieSets.map((set, setIndex) => (
                <div key={setIndex} className="movies-slide">
                  {set.map(movie => (
                    <div key={movie.id} className="movie-card">
                      <img src={movie.image} alt={movie.title} />
                      <div className="movie-overlay">
                        <div className="movie-title">{movie.title}</div>
                        <div className="movie-rating">⭐ {movie.rating}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button
            className="carousel-btn carousel-next"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % movieSets.length)}
            aria-label="Next slide"
          >
            ❯
          </button>
        </div>
        <div className="slide-dots">
          {movieSets.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-tv"></i>
          </div>
          <h3>Enjoy on your TV</h3>
          <p>Watch on smart TVs, PlayStations, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-download"></i>
          </div>
          <h3>Download your shows to watch offline</h3>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-share-nodes"></i>
          </div>
          <h3>Watch everywhere</h3>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-user"></i>
          </div>
          <h3>Create profiles for kids</h3>
          <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          {faqItems.map(item => (
            <div
              key={item.id}
              className={`faq-item ${activeFaq === item.id ? 'active' : ''}`}
            >
              <div
                className="faq-question"
                onClick={() => setActiveFaq(activeFaq === item.id ? null : item.id)}
              >
                <span>{item.question}</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to watch?</h2>
          <p>Enter your email to create or restart your membership.</p>
          <div className="cta-input">
            <input
              type="email"
              placeholder="Email address"
              id="ctaEmail"
              className="email-input"
            />
            <button
              className="btn-get-started"
              onClick={() => {
                const email = document.getElementById('ctaEmail').value;
                if (email) {
                  handleGetStarted(email);
                } else {
                  alert('Please enter your email');
                }
              }}
            >
              Get Started →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="welcome-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/help-center">Help Center</a></li>
              <li><a href="#">Account</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Streamify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
