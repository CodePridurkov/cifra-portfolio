import Hero from './components/Hero'
import About from './components/About'
import Cases from './components/Cases'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Cases />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
