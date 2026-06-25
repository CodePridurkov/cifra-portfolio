import Hero from './components/Hero'
import About from './components/About'
import Cases from './components/Cases'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'

export default function App() {
  return (
    <>
      <Background />
      <main>
        <Hero />
        <About />
        <Cases />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
