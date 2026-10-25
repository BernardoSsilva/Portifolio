import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { FeaturedProjects } from '@/components/featured-projects'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Projects } from '@/components/projects'
import { ThemeProvider } from '@/components/theme-provider'
import { PageParallaxBackground } from '@/components/ui/page-parallax'
import { WhatsappFab } from '@/components/whatsapp-fab'

function App() {
  return (
    <ThemeProvider>
      <PageParallaxBackground />
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsappFab />
    </ThemeProvider>
  )
}

export default App
