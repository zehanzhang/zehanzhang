import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Publications from './components/Publications'
import Hobbies from './components/Hobbies'

function App() {
  return (
    <div className="bg-dark-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Publications />
      <Hobbies />

      {/* Footer */}
      <footer className="py-8 text-center text-text-dim text-sm border-t border-glass-border">
        <p>
          &copy; {new Date().getFullYear()} Zehan Zhang. Built with React & Three.js
        </p>
      </footer>
    </div>
  )
}

export default App
