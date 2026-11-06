import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Assuntos from './components/Assuntos/Assuntos'
import Videos from './components/Videos/Videos'
import Tutoriais from './components/Tutorial/Tutorial'
import Security from './components/Seguranca/Seguranca'
import Quiz from './components/Quiz/Quiz'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Assuntos />
      <Videos />
      <Tutoriais />
      <Security />
      <Quiz />
      <Footer />
    </>
  )
}

export default App
