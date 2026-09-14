import { About } from '@/components/about'
import { Collaborations } from '@/components/collaborations'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { LexNoteShowcase } from '@/components/lexnote-showcase'
import { Navbar } from '@/components/navbar'
import { Projects } from '@/components/projects'
import { ThemeProvider } from '@/components/theme-provider'
import { WhatsappFab } from '@/components/whatsapp-fab'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <LexNoteShowcase />
        <About />
        <Projects />
        <Collaborations />
        <Contact />
      </main>
      <Footer />
      <WhatsappFab />
    </ThemeProvider>
  )
}

export default App
