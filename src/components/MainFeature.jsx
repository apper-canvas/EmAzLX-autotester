import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Check, AlertCircle, Loader2, RefreshCw, ChevronDown, ChevronUp, Code, Eye } from 'lucide-react'

const MainFeature = () => {
  const [url, setUrl] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [progress, setProgress] = useState(0)
  const [testCases, setTestCases] = useState([])
  const [expandedTestCase, setExpandedTestCase] = useState(null)
  const [viewMode, setViewMode] = useState('visual') // 'visual' or 'code'
  const [error, setError] = useState('')
  
  const handleUrlChange = (e) => {
    setUrl(e.target.value)
    setError('')
  }
  
  const validateUrl = (url) => {
    try {
      new URL(url)
      return true
    } catch (e) {
      return false
    }
  }
  
  const handleGenerate = () => {
    if (!url) {
      setError('Please enter a URL')
      return
    }
    
    if (!validateUrl(url)) {
      setError('Please enter a valid URL')
      return
    }
    
    setError('')
    setIsGenerating(true)
    setProgress(0)
    setTestCases([])
    setIsComplete(false)
    
    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 300)
    
    // Simulate test case generation
    setTimeout(() => {
      const generatedTestCases = [
        {
          id: 1,
          name: 'Login Form - Happy Path',
          description: 'Tests successful login with valid credentials',
          status: 'passed',
          steps: [
            { id: 1, action: 'Navigate to login page', expected: 'Login form is displayed', status: 'passed' },
            { id: 2, action: 'Enter valid username', expected: 'Username is accepted', status: 'passed' },
            { id: 3, action: 'Enter valid password', expected: 'Password is accepted', status: 'passed' },
            { id: 4, action: 'Click login button', expected: 'User is logged in and redirected to dashboard', status: 'passed' }
          ],
          code: `describe('Login Form - Happy Path', () => {
  it('should login successfully with valid credentials', async () => {
    await page.goto('${url}');
    await page.waitForSelector('#login-form');
    await page.type('#username', 'validuser@example.com');
    await page.type('#password', 'ValidPassword123');
    await page.click('#login-button');
    await page.waitForNavigation();
    expect(page.url()).toContain('/dashboard');
  });
});`
        },
        {
          id: 2,
          name: 'Login Form - Empty Fields Validation',
          description: 'Tests form validation when fields are empty',
          status: 'passed',
          steps: [
            { id: 1, action: 'Navigate to login page', expected: 'Login form is displayed', status: 'passed' },
            { id: 2, action: 'Leave username empty', expected: 'No action needed', status: 'passed' },
            { id: 3, action: 'Leave password empty', expected: 'No action needed', status: 'passed' },
            { id: 4, action: 'Click login button', expected: 'Error messages are displayed for empty fields', status: 'passed' }
          ],
          code: `describe('Login Form - Empty Fields Validation', () => {
  it('should show validation errors for empty fields', async () => {
    await page.goto('${url}');
    await page.waitForSelector('#login-form');
    await page.click('#login-button');
    
    const usernameError = await page.$eval('.username-error', el => el.textContent);
    const passwordError = await page.$eval('.password-error', el => el.textContent);
    
    expect(usernameError).toContain('Username is required');
    expect(passwordError).toContain('Password is required');
  });
});`
        },
        {
          id: 3,
          name: 'Login Form - Invalid Credentials',
          description: 'Tests error handling with invalid login credentials',
          status: 'passed',
          steps: [
            { id: 1, action: 'Navigate to login page', expected: 'Login form is displayed', status: 'passed' },
            { id: 2, action: 'Enter invalid username', expected: 'Username is accepted', status: 'passed' },
            { id: 3, action: 'Enter invalid password', expected: 'Password is accepted', status: 'passed' },
            { id: 4, action: 'Click login button', expected: 'Error message is displayed', status: 'passed' }
          ],
          code: `describe('Login Form - Invalid Credentials', () => {
  it('should show error message for invalid credentials', async () => {
    await page.goto('${url}');
    await page.waitForSelector('#login-form');
    await page.type('#username', 'wronguser@example.com');
    await page.type('#password', 'WrongPassword123');
    await page.click('#login-button');
    
    await page.waitForSelector('.login-error');
    const errorMessage = await page.$eval('.login-error', el => el.textContent);
    
    expect(errorMessage).toContain('Invalid username or password');
  });
});`
        },
        {
          id: 4,
          name: 'Login Form - Password Reset Link',
          description: 'Tests the password reset functionality',
          status: 'failed',
          steps: [
            { id: 1, action: 'Navigate to login page', expected: 'Login form is displayed', status: 'passed' },
            { id: 2, action: 'Click "Forgot Password" link', expected: 'Password reset form is displayed', status: 'passed' },
            { id: 3, action: 'Enter email address', expected: 'Email is accepted', status: 'passed' },
            { id: 4, action: 'Click submit button', expected: 'Confirmation message is displayed', status: 'failed', error: 'Element #reset-confirmation not found' }
          ],
          code: `describe('Login Form - Password Reset Link', () => {
  it('should allow users to reset their password', async () => {
    await page.goto('${url}');
    await page.waitForSelector('#login-form');
    await page.click('#forgot-password-link');
    
    await page.waitForSelector('#reset-form');
    await page.type('#reset-email', 'user@example.com');
    await page.click('#reset-submit-button');
    
    // This step fails because the element is not found
    await page.waitForSelector('#reset-confirmation', { timeout: 5000 });
    const confirmationMessage = await page.$eval('#reset-confirmation', el => el.textContent);
    
    expect(confirmationMessage).toContain('Password reset email sent');
  });
});`
        },
        {
          id: 5,
          name: 'Login Form - Remember Me Functionality',
          description: 'Tests the "Remember Me" checkbox functionality',
          status: 'passed',
          steps: [
            { id: 1, action: 'Navigate to login page', expected: 'Login form is displayed', status: 'passed' },
            { id: 2, action: 'Enter valid username', expected: 'Username is accepted', status: 'passed' },
            { id: 3, action: 'Enter valid password', expected: 'Password is accepted', status: 'passed' },
            { id: 4, action: 'Check "Remember Me" checkbox', expected: 'Checkbox is checked', status: 'passed' },
            { id: 5, action: 'Click login button', expected: 'User is logged in', status: 'passed' },
            { id: 6, action: 'Close browser and reopen', expected: 'User session is maintained', status: 'passed' }
          ],
          code: `describe('Login Form - Remember Me Functionality', () => {
  it('should maintain user session when Remember Me is checked', async () => {
    await page.goto('${url}');
    await page.waitForSelector('#login-form');
    await page.type('#username', 'validuser@example.com');
    await page.type('#password', 'ValidPassword123');
    
    // Check the Remember Me checkbox
    await page.click('#remember-me');
    
    await page.click('#login-button');
    await page.waitForNavigation();
    
    // Store cookies
    const cookies = await page.cookies();
    
    // Create a new browser context
    const newContext = await browser.createIncognitoBrowserContext();
    const newPage = await newContext.newPage();
    
    // Set the stored cookies
    for (const cookie of cookies) {
      await newPage.setCookie(cookie);
    }
    
    // Navigate to the site again
    await newPage.goto('${url}/dashboard');
    
    // Verify we're still logged in
    expect(newPage.url()).toContain('/dashboard');
    
    await newPage.close();
    await newContext.close();
  });
});`
        }
      ]
      
      setTestCases(generatedTestCases)
      setIsComplete(true)
      setIsGenerating(false)
    }, 6000)
  }
  
  const handleReset = () => {
    setUrl('')
    setTestCases([])
    setIsComplete(false)
    setProgress(0)
    setExpandedTestCase(null)
    setError('')
  }
  
  const toggleTestCase = (id) => {
    setExpandedTestCase(expandedTestCase === id ? null : id)
  }
  
  const toggleViewMode = () => {
    setViewMode(viewMode === 'visual' ? 'code' : 'visual')
  }
  
  useEffect(() => {
    if (progress >= 100 && isGenerating) {
      setTimeout(() => {
        setIsGenerating(false)
        setIsComplete(true)
      }, 500)
    }
  }, [progress, isGenerating])
  
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl shadow-card overflow-hidden"
      >
        <div className="p-6 border-b border-light-border-secondary dark:border-dark-border-primary">
          <h3 className="text-xl font-bold mb-4">Generate AI Test Cases</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">
                Enter your application URL
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="url"
                  value={url}
                  onChange={handleUrlChange}
                  placeholder="https://your-app.com"
                  className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-danger' : 'border-light-border-primary dark:border-dark-border-primary'} bg-light-bg-secondary dark:bg-dark-bg-tertiary focus:outline-none focus:ring-2 focus:ring-primary`}
                  disabled={isGenerating}
                />
                {error && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <AlertCircle className="h-5 w-5 text-danger" />
                  </div>
                )}
              </div>
              {error && (
                <p className="mt-1 text-sm text-danger">{error}</p>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleGenerate}
                disabled={isGenerating || isComplete}
                className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-medium ${
                  isGenerating || isComplete
                    ? 'bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-tertiary dark:text-dark-text-tertiary cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary-dark'
                } transition-colors duration-200`}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5 mr-2" />
                    Generate Test Cases
                  </>
                )}
              </button>
              
              {isComplete && (
                <button
                  onClick={handleReset}
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-secondary dark:text-dark-text-secondary rounded-lg font-medium hover:bg-light-bg-primary dark:hover:bg-dark-bg-primary transition-colors duration-200"
                >
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
        
        {isGenerating && (
          <div className="p-6">
            <div className="mb-2 flex justify-between items-center">
              <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                Generating test cases...
              </span>
              <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                {progress}%
              </span>
            </div>
            <div className="h-2 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-primary rounded-full"
              ></motion.div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Analyzing application structure</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  {progress >= 40 ? (
                    <Check className="h-5 w-5 text-primary" />
                  ) : (
                    <Loader2 className="h-5 w-5 text-primary animate-spin" />
                  )}
                </div>
                <div>
                  <p className="font-medium">Identifying UI elements</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  {progress >= 70 ? (
                    <Check className="h-5 w-5 text-primary" />
                  ) : (
                    <Loader2 className="h-5 w-5 text-primary animate-spin" />
                  )}
                </div>
                <div>
                  <p className="font-medium">Generating test scenarios</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  {progress >= 90 ? (
                    <Check className="h-5 w-5 text-primary" />
                  ) : (
                    <Loader2 className="h-5 w-5 text-primary animate-spin" />
                  )}
                </div>
                <div>
                  <p className="font-medium">Optimizing test flows</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {isComplete && testCases.length > 0 && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-lg font-bold">Generated Test Cases</h4>
              <div className="flex items-center bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-lg">
                <button
                  onClick={toggleViewMode}
                  className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    viewMode === 'visual' 
                      ? 'bg-primary text-white' 
                      : 'text-light-text-secondary dark:text-dark-text-secondary'
                  }`}
                >
                  <Eye className="h-4 w-4" />
                </button>
                <button
                  onClick={toggleViewMode}
                  className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    viewMode === 'code' 
                      ? 'bg-primary text-white' 
                      : 'text-light-text-secondary dark:text-dark-text-secondary'
                  }`}
                >
                  <Code className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {testCases.map(testCase => (
                <div 
                  key={testCase.id}
                  className="border border-light-border-secondary dark:border-dark-border-primary rounded-lg overflow-hidden"
                >
                  <div 
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary"
                    onClick={() => toggleTestCase(testCase.id)}
                  >
                    <div className="flex items-center">
                      <div className={`h-3 w-3 rounded-full mr-3 ${
                        testCase.status === 'passed' ? 'bg-success' : 'bg-danger'
                      }`}></div>
                      <h5 className="font-medium">{testCase.name}</h5>
                    </div>
                    <div className="flex items-center">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        testCase.status === 'passed' 
                          ? 'bg-success/10 text-success' 
                          : 'bg-danger/10 text-danger'
                      } mr-3`}>
                        {testCase.status === 'passed' ? 'PASSED' : 'FAILED'}
                      </span>
                      {expandedTestCase === testCase.id ? (
                        <ChevronUp className="h-5 w-5 text-light-text-tertiary dark:text-dark-text-tertiary" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-light-text-tertiary dark:text-dark-text-tertiary" />
                      )}
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedTestCase === testCase.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-light-border-secondary dark:border-dark-border-primary"
                      >
                        <div className="p-4">
                          <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                            {testCase.description}
                          </p>
                          
                          {viewMode === 'visual' ? (
                            <div className="space-y-2">
                              {testCase.steps.map(step => (
                                <div 
                                  key={step.id}
                                  className="flex items-start p-3 rounded-lg bg-light-bg-tertiary dark:bg-dark-bg-tertiary"
                                >
                                  <div className={`h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                                    step.status === 'passed' 
                                      ? 'bg-success/20 text-success' 
                                      : 'bg-danger/20 text-danger'
                                  }`}>
                                    {step.status === 'passed' ? (
                                      <Check className="h-4 w-4" />
                                    ) : (
                                      <AlertCircle className="h-4 w-4" />
                                    )}
                                  </div>
                                  <div>
                                    <div className="font-medium">{step.action}</div>
                                    <div className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                                      Expected: {step.expected}
                                    </div>
                                    {step.error && (
                                      <div className="text-sm text-danger mt-1">
                                        Error: {step.error}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="bg-dark-bg-tertiary rounded-lg p-4 overflow-x-auto">
                              <pre className="text-dark-text-primary font-mono text-sm whitespace-pre-wrap">
                                {testCase.code}
                              </pre>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-light-bg-tertiary dark:bg-dark-bg-tertiary">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <h5 className="font-medium">Test Summary</h5>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-3 rounded-lg">
                  <div className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">Total Tests</div>
                  <div className="text-2xl font-bold">{testCases.length}</div>
                </div>
                <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-3 rounded-lg">
                  <div className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">Passed</div>
                  <div className="text-2xl font-bold text-success">
                    {testCases.filter(tc => tc.status === 'passed').length}
                  </div>
                </div>
                <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-3 rounded-lg">
                  <div className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">Failed</div>
                  <div className="text-2xl font-bold text-danger">
                    {testCases.filter(tc => tc.status === 'failed').length}
                  </div>
                </div>
                <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-3 rounded-lg">
                  <div className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">Pass Rate</div>
                  <div className="text-2xl font-bold">
                    {Math.round((testCases.filter(tc => tc.status === 'passed').length / testCases.length) * 100)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default MainFeature