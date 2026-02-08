import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ContactUs from './pages/ContactUs'
import HelpCenter from './pages/HelpCenter'
import CategoryPage from './pages/CategoryPage'
import TrendingPage from './pages/TrendingPage'
import MyListPage from './pages/MyListPage'
import BrowsePage from './pages/BrowsePage'
import MovieDetailPage from './pages/MovieDetailPage'
import ProfilePage from './pages/ProfilePage'
import { FavoritesProvider } from './context/FavoritesContext'
import { ToastProvider } from './context/ToastContext'
import { UserProvider } from './context/UserContext'
import Toast from './components/Toast'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userEmail = sessionStorage.getItem('userEmail')
    setIsAuthenticated(!!userEmail)
    setLoading(false)
  }, [])

  if (loading) {
    return <div style={{ background: '#0f0f0f', height: '100vh' }}></div>
  }

  return (
    <ToastProvider>
      <UserProvider>
        <FavoritesProvider>
          <Router>
            <Routes>
              <Route path="/" element={isAuthenticated ? <Home /> : <Welcome />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/movie/:id" element={<MovieDetailPage />} />
              <Route path="/series" element={<CategoryPage category="series" title="TV Series" />} />
              <Route path="/animation" element={<CategoryPage category="animation" title="Animation" />} />
              <Route path="/history" element={<CategoryPage category="history" title="History & Biography" />} />
              <Route path="/more" element={<CategoryPage category="more" title="More Content" />} />
              <Route path="/trending" element={<TrendingPage />} />
              <Route path="/mylist" element={<MyListPage />} />
              <Route path="/browse" element={<BrowsePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Toast />
          </Router>
        </FavoritesProvider>
      </UserProvider>
    </ToastProvider>
  )
}

export default App
