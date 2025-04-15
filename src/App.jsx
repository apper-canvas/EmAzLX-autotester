import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Demo', href: '#demo' },
  ]

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-dark-bg-primary bg-light-bg-secondary">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-light-bg-secondary/80 dark:bg-dark-bg-primary/80 border-b border-light-border-secondary dark:border-dark-border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-primary text-transparent bg-clip-text dark:text-white">
                  AutoTester
                </span>
              </a>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 text-dark-text-secondary" />
                ) : (
                  <Moon className="h-5 w-5 text-light-text-secondary" />
                )}
              </button>
              
              <a 
                href="/login" 
                className="hidden md:block px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Log In
              </a>
              
              <a 
                href="/signup" 
                className="hidden md:block px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors duration-200"
              >
                Sign Up Free
              </a>
              
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-light-text-primary dark:text-dark-text-primary" />
                ) : (
                  <Menu className="h-6 w-6 text-light-text-primary dark:text-dark-text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-border-secondary dark:border-dark-border-primary"
            >
              <div className="px-4 py-3 space-y-1">
                {navLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-2 px-3 rounded-lg text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col space-y-2">
                  <a 
                    href="/login" 
                    className="py-2 px-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 text-center"
                  >
                    Log In
                  </a>
                  <a 
                    href="/signup" 
                    className="py-2 px-3 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors duration-200 text-center"
                  >
                    Sign Up Free
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="bg-light-bg-primary dark:bg-dark-bg-secondary mt-20 border-t border-light-border-secondary dark:border-dark-border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">AutoTester</h3>
              <p className="text-light-text-tertiary dark:text-dark-text-tertiary mb-4">
                AI-powered test automation that saves 90% of your testing time and costs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">Features</a></li>
                <li><a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">Case Studies</a></li>
                <li><a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">About</a></li>
                <li><a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">Security</a></li>
                <li><a href="#" className="text-light-text-tertiary dark:text-dark-text-tertiary hover:text-primary dark:hover:text-primary">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-light-border-secondary dark:border-dark-border-primary text-center text-light-text-tertiary dark:text-dark-text-tertiary">
            <p>© {new Date().getFullYear()} AutoTester. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App