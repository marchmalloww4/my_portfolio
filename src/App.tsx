import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import OtherProjects from './sections/OtherProjects'
import DataPortfolio from './sections/DataPortfolio'
import VisualPortfolio from './sections/VisualPortfolio'
import Activities from './sections/Activities'
import Certifications from './sections/Certifications'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <OtherProjects />
        <DataPortfolio />
        <VisualPortfolio />
        <Activities />
        <Certifications />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
