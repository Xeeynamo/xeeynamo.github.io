import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

export default function App() {
  return (
    <div className='App'>
      <Header />
      <div className='AppContent'>
        <Home />
      </div>
      <Footer />
    </div>
  )
}
