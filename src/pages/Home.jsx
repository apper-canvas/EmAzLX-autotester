import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Clock, Code, Link2, User, FastForward, Search, RefreshCw } from 'lucide-react'
import MainFeature from '../components/MainFeature'

const Home = () => {
  const [activeTab, setActiveTab] = useState('record')
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-20 lg:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/30 to-transparent dark:from-primary-dark/10 dark:to-transparent -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center lg:text-left"
            >
              <p className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-light dark:bg-primary-dark text-primary dark:text-dark-text-primary mb-4">
                Say Good-Bye to Manual Testing. Save 90% time & cost.
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary text-transparent bg-clip-text">
                Let AI Test Your App—Instantly.
              </h1>
              
              <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary mb-8">
                AutoTester Writes & Executes Test Cases. So You Can Ship Faster.
              </p>
              
              <div className="mb-8 inline-block bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-lg p-4">
                <p className="font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
                  Approx. time per feature:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span className="text-light-text-secondary dark:text-dark-text-secondary">
                      Test case generation: <strong>15 min</strong> (first time)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span className="text-light-text-secondary dark:text-dark-text-secondary">
                      Automated Testing: <strong>5-15 min</strong>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#try-it-now" 
                  className="btn-primary"
                >
                  START TESTING FOR FREE →
                </a>
                <button 
                  className="btn-secondary flex items-center justify-center"
                >
                  <Play className="h-4 w-4 mr-2" />
                  See how it works in 2 minutes
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="AutoTester in action" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/80 to-transparent flex items-center justify-center">
                  <div className="text-white p-6 max-w-md">
                    <h3 className="text-2xl font-bold mb-2">AI-Powered Testing</h3>
                    <p className="mb-4">AutoTester analyzes your application and generates comprehensive test scenarios automatically.</p>
                    <div className="flex items-center text-dark-text-secondary bg-dark-bg-primary/50 p-2 rounded-lg text-sm">
                      <span className="font-mono bg-success/20 text-success px-2 py-1 rounded mr-2">AI</span>
                      Generating test cases for login form validation...
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="h-3 w-3 rounded-full bg-success mr-2"></div>
                  <span className="text-sm font-medium">Tests Passing: 24/26</span>
                </div>
                <div className="h-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full overflow-hidden">
                  <div className="h-full bg-success rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Testing Is Killing Your Release Cycle
            </h2>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
              Your team is trapped in an endless cycle of manual testing, brittle automation code, and frustrating maintenance. Every UI change breaks your tests. Every new feature means days of QA work. And your developers? They're spending precious time fixing tests instead of building your product.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={fadeIn}
              className="dark:card-neu-dark card-neu-light group hover:scale-105 transition-transform duration-300"
            >
              <div className="rounded-full bg-primary-light dark:bg-primary-dark h-12 w-12 flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-primary dark:text-dark-text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">MANUAL TESTING BOTTLENECKS</h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                75% of teams miss release deadlines due to testing backlogs. Your competitors are shipping while you're still clicking through test plans.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="dark:card-neu-dark card-neu-light group hover:scale-105 transition-transform duration-300"
            >
              <div className="rounded-full bg-primary-light dark:bg-primary-dark h-12 w-12 flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-primary dark:text-dark-text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">SPECIALIZED SKILLS REQUIRED</h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                Traditional test automation needs developers to write and maintain code. Your QA team is either waiting on developers or struggling with complex scripting.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="dark:card-neu-dark card-neu-light group hover:scale-105 transition-transform duration-300"
            >
              <div className="rounded-full bg-primary-light dark:bg-primary-dark h-12 w-12 flex items-center justify-center mb-6">
                <Link2 className="h-6 w-6 text-primary dark:text-dark-text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">CONSTANT MAINTENANCE</h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                50% of automated test failures are due to UI changes, not actual bugs. Your team spends more time fixing tests than finding real issues.
              </p>
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-12">
            <a href="#solution" className="btn-primary">
              ELIMINATE THESE PROBLEMS →
            </a>
          </div>
        </div>
      </section>
      
      {/* Solution Overview */}
      <section id="solution" className="py-20 bg-light-bg-primary dark:bg-dark-bg-tertiary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Record Once. AI Tests Everything.
            </h2>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
              AutoTester combines human guidance with machine intelligence. Just use your app naturally—our AI handles the rest, creating comprehensive test suites that adapt to your changing application.
            </p>
          </motion.div>
          
          <div className="mb-16">
            <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl overflow-hidden shadow-card">
              <div className="border-b border-light-border-secondary dark:border-dark-border-primary">
                <div className="flex">
                  <button
                    className={`px-6 py-4 font-medium text-sm ${
                      activeTab === 'record' 
                        ? 'border-b-2 border-primary text-primary' 
                        : 'text-light-text-tertiary dark:text-dark-text-tertiary'
                    }`}
                    onClick={() => setActiveTab('record')}
                  >
                    1. RECORD
                  </button>
                  <button
                    className={`px-6 py-4 font-medium text-sm ${
                      activeTab === 'generate' 
                        ? 'border-b-2 border-primary text-primary' 
                        : 'text-light-text-tertiary dark:text-dark-text-tertiary'
                    }`}
                    onClick={() => setActiveTab('generate')}
                  >
                    2. GENERATE
                  </button>
                  <button
                    className={`px-6 py-4 font-medium text-sm ${
                      activeTab === 'optimize' 
                        ? 'border-b-2 border-primary text-primary' 
                        : 'text-light-text-tertiary dark:text-dark-text-tertiary'
                    }`}
                    onClick={() => setActiveTab('optimize')}
                  >
                    3. OPTIMIZE
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                {activeTab === 'record' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-xl font-bold mb-4">ONE-CLICK RECORDING</h3>
                      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                        Our browser extension captures every interaction as you use your application naturally. No scripting. No special actions. Just authentic user flows.
                      </p>
                      <div className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-lg p-4 mb-4">
                        <div className="flex items-center mb-2">
                          <div className="h-3 w-3 rounded-full bg-success animate-pulse mr-2"></div>
                          <span className="text-sm font-medium">Recording in progress...</span>
                        </div>
                        <div className="space-y-2 font-mono text-xs">
                          <div className="flex items-center">
                            <span className="text-success mr-2">✓</span>
                            <span>Click: Login button</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-success mr-2">✓</span>
                            <span>Type: username@example.com in #email field</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-success mr-2">✓</span>
                            <span>Type: ******** in #password field</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-success mr-2">✓</span>
                            <span>Click: Submit button</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Recording user interactions" 
                        className="rounded-lg shadow-lg"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                        RECORDING
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'generate' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-xl font-bold mb-4">AI SCENARIO GENERATION</h3>
                      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                        Our AI analyzes your application and automatically suggests diverse test scenarios—happy paths, validation checks, boundary conditions, and error states.
                      </p>
                      <div className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-lg p-4 mb-4">
                        <div className="flex items-center mb-2">
                          <div className="h-3 w-3 rounded-full bg-primary animate-pulse mr-2"></div>
                          <span className="text-sm font-medium">AI generating test scenarios...</span>
                        </div>
                        <div className="space-y-2 font-mono text-xs">
                          <div className="flex items-center">
                            <span className="text-success mr-2">✓</span>
                            <span>Happy Path: Successful login</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-success mr-2">✓</span>
                            <span>Validation: Empty email field</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-success mr-2">✓</span>
                            <span>Validation: Invalid email format</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-primary mr-2">⟳</span>
                            <span>Error State: Incorrect password...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="AI generating test scenarios" 
                        className="rounded-lg shadow-lg"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                        AI ANALYSIS
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'optimize' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-xl font-bold mb-4">SMART FLOW OPTIMIZATION</h3>
                      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                        Confirmed scenarios transform into efficient, reusable test flows that self-heal when your UI changes—delivered in both human-readable and machine-executable formats.
                      </p>
                      <div className="bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-lg p-4 mb-4">
                        <div className="flex items-center mb-2">
                          <div className="h-3 w-3 rounded-full bg-success mr-2"></div>
                          <span className="text-sm font-medium">Test flows optimized</span>
                        </div>
                        <div className="space-y-2 font-mono text-xs">
                          <div className="flex items-center">
                            <span className="text-success mr-2">✓</span>
                            <span>Redundant steps removed: 4</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-success mr-2">✓</span>
                            <span>Self-healing selectors enabled</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-success mr-2">✓</span>
                            <span>Test coverage: 94%</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-success mr-2">✓</span>
                            <span>Ready for execution</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Smart flow optimization" 
                        className="rounded-lg shadow-lg"
                      />
                      <div className="absolute top-4 left-4 bg-success text-white text-xs font-medium px-2 py-1 rounded">
                        OPTIMIZED
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#demo" className="btn-primary">
              SEE IT IN ACTION →
            </a>
          </div>
        </div>
      </section>
      
      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ship 80% Faster With Zero QA Bottlenecks
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            <motion.div 
              variants={fadeIn}
              className="dark:card-neu-dark card-neu-light"
            >
              <div className="rounded-full bg-primary-light dark:bg-primary-dark h-12 w-12 flex items-center justify-center mb-6">
                <User className="h-6 w-6 text-primary dark:text-dark-text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">ANYONE CAN CREATE TESTS</h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                No coding required. Product managers, designers, and non-technical team members can build professional-grade test suites.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="dark:card-neu-dark card-neu-light"
            >
              <div className="rounded-full bg-primary-light dark:bg-primary-dark h-12 w-12 flex items-center justify-center mb-6">
                <FastForward className="h-6 w-6 text-primary dark:text-dark-text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">CUT TESTING TIME BY 80%</h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                What took days now takes minutes. Create, run, and analyze comprehensive tests in a fraction of the time.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="dark:card-neu-dark card-neu-light"
            >
              <div className="rounded-full bg-primary-light dark:bg-primary-dark h-12 w-12 flex items-center justify-center mb-6">
                <Search className="h-6 w-6 text-primary dark:text-dark-text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">DISCOVER MISSED EDGE CASES</h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                Our AI identifies boundary conditions and error states that human testers typically overlook, reducing escaped defects by 63%.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="dark:card-neu-dark card-neu-light"
            >
              <div className="rounded-full bg-primary-light dark:bg-primary-dark h-12 w-12 flex items-center justify-center mb-6">
                <RefreshCw className="h-6 w-6 text-primary dark:text-dark-text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">TESTS THAT FIX THEMSELVES</h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                When your UI changes, our tests adapt automatically. No more broken tests after each release.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 shadow-card max-w-3xl mx-auto mb-12"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="h-16 w-16 rounded-full bg-gradient-secondary flex items-center justify-center text-white text-2xl font-bold">
                  SC
                </div>
              </div>
              <div>
                <p className="text-lg italic mb-4 text-light-text-secondary dark:text-dark-text-secondary">
                  "We cut our release cycle from 2 weeks to 3 days while improving quality. AutoTester eliminated our testing bottleneck entirely."
                </p>
                <p className="font-medium">
                  — Sarah Chen, CTO at StreamFlow
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="text-center">
            <a href="#try-it-now" className="btn-primary">
              START TESTING SMARTER →
            </a>
          </div>
        </div>
      </section>
      
      {/* Interactive Feature */}
      <section id="try-it-now" className="py-20 bg-light-bg-primary dark:bg-dark-bg-tertiary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Try AutoTester Now
            </h2>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
              Experience the power of AI-driven testing with our interactive demo. Generate test cases for a sample login form and see how AutoTester works.
            </p>
          </motion.div>
          
          <MainFeature />
        </div>
      </section>
    </div>
  )
}

export default Home