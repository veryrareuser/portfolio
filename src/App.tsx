import About from './components/About/About.tsx'
import Contact from './components/Contact/Contact.tsx'
import Footer from './components/Footer/Footer.tsx'
import Header from './components/Header/Header.tsx'
import Hero from './components/Hero/Hero.tsx'
import Services from './components/Services/Services.tsx'
import Work from './components/Work/Work.tsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Services />
        <About />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
