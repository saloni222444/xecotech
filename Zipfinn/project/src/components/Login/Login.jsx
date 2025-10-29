import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaUser, FaLock, FaEnvelope, FaChevronDown, FaChevronUp,
  FaGoogle, FaFacebookF, FaTwitter, FaYahoo, FaApple, FaLinkedinIn,
  FaIdCard, FaSignature, FaTimes, FaCopy, FaEye, FaEyeSlash, FaCheck,
  FaGlobe, FaPhone, FaMapMarkerAlt, FaCity, FaFlag, FaBuilding,
  FaShieldAlt
} from 'react-icons/fa'
import './Login.css'

const Login = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState('login')
  const [showMoreSocial, setShowMoreSocial] = useState(false)
  const [showMoreSocialRegister, setShowMoreSocialRegister] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loginLoading, setLoginLoading] = useState(false)
  const [apiMessage, setApiMessage] = useState('')
  const [loginMessage, setLoginMessage] = useState('')
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [showOTPVerification, setShowOTPVerification] = useState(false)
  const [showResetPassword, setShowResetPassword] = useState(false)
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('')
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false)
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [otpLoading, setOtpLoading] = useState(false)
  const [otpMessage, setOtpMessage] = useState('')
  const [resetPasswordData, setResetPasswordData] = useState({
    password: '',
    confirmPassword: ''
  })
  const [resetLoading, setResetLoading] = useState(false)
  const [resetMessage, setResetMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState('')
  
  const [loginData, setLoginData] = useState({ username: '', password: '' })
  const [registerData, setRegisterData] = useState({ 
    firstName: '', lastName: '', email: '', password: '', confirmPassword: '' 
  })

  // New State for Complete Profile and Email Verification
  const [showCompleteProfile, setShowCompleteProfile] = useState(false)
  const [profileLoading, setProfileLoading] = useState(false)
  const [profileMessage, setProfileMessage] = useState('')
  const [profileData, setProfileData] = useState({
    username: '',
    country_code: 'IN',
    country: 'India',
    mobile_code: '91',
    mobile: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  })

  // New State for Email Verification
  const [showEmailVerification, setShowEmailVerification] = useState(false)
  const [emailVerificationOtp, setEmailVerificationOtp] = useState(['', '', '', '', '', ''])
  const [emailVerificationLoading, setEmailVerificationLoading] = useState(false)
  const [emailVerificationMessage, setEmailVerificationMessage] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [authorizationLoading, setAuthorizationLoading] = useState(false)

  const otpInputRefs = useRef([])
  const emailOtpInputRefs = useRef([])
  const navigate = useNavigate()

  // Country and mobile code options
  const countryOptions = [
    { code: 'IN', name: 'India', mobileCode: '91' },
    { code: 'AF', name: 'Afghanistan', mobileCode: '93' },
    { code: 'US', name: 'United States', mobileCode: '1' },
    { code: 'GB', name: 'United Kingdom', mobileCode: '44' },
    { code: 'CA', name: 'Canada', mobileCode: '1' },
    { code: 'AU', name: 'Australia', mobileCode: '61' },
    { code: 'DE', name: 'Germany', mobileCode: '49' },
    { code: 'FR', name: 'France', mobileCode: '33' },
    { code: 'JP', name: 'Japan', mobileCode: '81' },
    { code: 'CN', name: 'China', mobileCode: '86' },
    { code: 'BR', name: 'Brazil', mobileCode: '55' }
  ]

  // Disable scroll ONLY on login page
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setApiMessage('')
    setLoginMessage('')
  }

  const toggleMoreSocial = () => setShowMoreSocial(!showMoreSocial)
  const toggleMoreSocialRegister = () => setShowMoreSocialRegister(!showMoreSocialRegister)

  const handleLoginChange = (e) => {
    setLoginData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setLoginMessage('')
  }

  const handleRegisterChange = (e) => {
    setRegisterData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setApiMessage('')
  }

  // Forgot Password Handler
  const handleForgotPassword = () => {
    setShowForgotPassword(true)
    setForgotPasswordMessage('')
  }

  const handleCloseForgotPassword = () => {
    setShowForgotPassword(false)
    setForgotPasswordEmail('')
    setForgotPasswordMessage('')
  }

  const handleCloseOTPVerification = () => {
    setShowOTPVerification(false)
    setOtp(['', '', '', '', '', ''])
    setOtpMessage('')
  }

  const handleCloseResetPassword = () => {
    setShowResetPassword(false)
    setResetPasswordData({ password: '', confirmPassword: '' })
    setResetMessage('')
    setPasswordStrength('')
  }

  // OTP Input Handlers - Updated for 6-digit OTP
  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      if (value && index < 5) {
        otpInputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleEmailOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...emailVerificationOtp]
      newOtp[index] = value
      setEmailVerificationOtp(newOtp)

      if (value && index < 5) {
        emailOtpInputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus()
    }
  }

  const handleEmailOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !emailVerificationOtp[index] && index > 0) {
      emailOtpInputRefs.current[index - 1]?.focus()
    }
  }

  const handleOtpPaste = (e) => {
    e.preventDefault()
    const pasteData = e.clipboardData.getData('text').slice(0, 6)
    if (/^[0-9]*$/.test(pasteData)) {
      const newOtp = [...otp]
      pasteData.split('').forEach((char, index) => {
        if (index < 6) newOtp[index] = char
      })
      setOtp(newOtp)
    }
  }

  const handleEmailOtpPaste = (e) => {
    e.preventDefault()
    const pasteData = e.clipboardData.getData('text').slice(0, 6)
    if (/^[0-9]*$/.test(pasteData)) {
      const newOtp = [...emailVerificationOtp]
      pasteData.split('').forEach((char, index) => {
        if (index < 6) newOtp[index] = char
      })
      setEmailVerificationOtp(newOtp)
    }
  }

  // Number Pad Handler
  const handleNumberPadClick = (number) => {
    const emptyIndex = otp.findIndex(digit => digit === '')
    if (emptyIndex !== -1) {
      const newOtp = [...otp]
      newOtp[emptyIndex] = number.toString()
      setOtp(newOtp)
      
      if (emptyIndex < 5) {
        otpInputRefs.current[emptyIndex + 1]?.focus()
      }
    }
  }

  const handleEmailNumberPadClick = (number) => {
    const emptyIndex = emailVerificationOtp.findIndex(digit => digit === '')
    if (emptyIndex !== -1) {
      const newOtp = [...emailVerificationOtp]
      newOtp[emptyIndex] = number.toString()
      setEmailVerificationOtp(newOtp)
      
      if (emptyIndex < 5) {
        emailOtpInputRefs.current[emptyIndex + 1]?.focus()
      }
    }
  }

  // Clear OTP
  const handleClearOTP = () => {
    setOtp(['', '', '', '', '', ''])
    otpInputRefs.current[0]?.focus()
  }

  const handleClearEmailOTP = () => {
    setEmailVerificationOtp(['', '', '', '', '', ''])
    emailOtpInputRefs.current[0]?.focus()
  }

  // Password strength checker
  const checkPasswordStrength = (password) => {
    if (password.length === 0) return ''
    if (password.length < 6) return 'weak'
    
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumbers = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    
    const strength = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar].filter(Boolean).length
    
    if (strength === 4) return 'strong'
    if (strength >= 2) return 'medium'
    return 'weak'
  }

  const handleResetPasswordChange = (e) => {
    const { name, value } = e.target
    setResetPasswordData(prev => ({ ...prev, [name]: value }))
    
    if (name === 'password') {
      setPasswordStrength(checkPasswordStrength(value))
    }
  }

  // Call Authorization API to send OTP
  const handleAuthorizationAPI = async () => {
    setAuthorizationLoading(true)
    
    try {
      console.log('📤 Calling Authorization API to send OTP...')
      console.log('🔗 API Endpoint: https://zepfinn.xecotech.co/api/authorization')

      const token = localStorage.getItem('authToken') || localStorage.getItem('access_token')
      
      if (!token) {
        setProfileMessage('Authentication token not found. Please login again.')
        setAuthorizationLoading(false)
        return false
      }

      const response = await fetch('https://zepfinn.xecotech.co/api/authorization', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      const result = await response.json()

      console.log('📥 Authorization API Response:', result)
      console.log('📊 Response Status:', response.status)

      if (response.ok && result.status === 'success') {
        console.log('✅ OTP sent successfully via Authorization API')
        return true
      } else {
        console.error('❌ Authorization API failed:', result)
        return false
      }
    } catch (error) {
      console.error('❌ Authorization API network error:', error)
      return false
    } finally {
      setAuthorizationLoading(false)
    }
  }

  // Handle Complete Profile API Call - UPDATED
  const handleCompleteProfile = async () => {
    const { username, mobile, address, city, state, zip } = profileData
    
    // Enhanced validation
    if (!username || !mobile) {
      setProfileMessage('Please fill in all required fields')
      return
    }

    if (mobile.length < 10) {
      setProfileMessage('Please enter a valid mobile number (at least 10 digits)')
      return
    }

    // Validate username format
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      setProfileMessage('Username can only contain letters, numbers, and underscores')
      return
    }

    setProfileLoading(true)
    setProfileMessage('')

    try {
      // Prepare data exactly as API expects
      const apiData = {
        username: username.trim(),
        country_code: profileData.country_code,
        country: profileData.country,
        mobile_code: profileData.mobile_code,
        mobile: mobile.trim().replace(/\D/g, ''), // Remove non-numeric characters
        address: address.trim() || '',
        city: city.trim() || '',
        state: state.trim() || '',
        zip: zip.trim() || ''
      }

      console.log('📤 Sending profile data to API:', apiData)
      console.log('🔗 API Endpoint: https://zepfinn.xecotech.co/api/user-data-submit')

      const token = localStorage.getItem('authToken') || localStorage.getItem('access_token')
      
      if (!token) {
        setProfileMessage('Authentication token not found. Please login again.')
        setProfileLoading(false)
        return
      }

      const response = await fetch('https://zepfinn.xecotech.co/api/user-data-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(apiData)
      })

      const result = await response.json()

      console.log('📥 Profile API Response:', result)
      console.log('📊 Response Status:', response.status)

      if (response.ok && result.status === 'success') {
        setProfileMessage('✅ Profile completed successfully! Sending OTP to your email...')
        
        // Update user data in localStorage
        const userData = JSON.parse(localStorage.getItem('userData') || '{}')
        const updatedUserData = {
          ...userData,
          ...apiData,
          profile_completed: true
        }
        localStorage.setItem('userData', JSON.stringify(updatedUserData))
        
        // Store user email for verification
        const userEmail = userData.email || registerData.email
        setUserEmail(userEmail)
        
        // Call Authorization API to send OTP
        const otpSent = await handleAuthorizationAPI()
        
        if (otpSent) {
          // Show email verification modal after success
          setTimeout(() => {
            setShowCompleteProfile(false)
            setShowEmailVerification(true)
            setProfileData({
              username: '',
              country_code: 'IN',
              country: 'India',
              mobile_code: '91',
              mobile: '',
              address: '',
              city: '',
              state: '',
              zip: ''
            })
          }, 2000)
        } else {
          setProfileMessage('Profile saved but failed to send OTP. Please try again.')
        }
        
      } else {
        // Enhanced error handling
        let errorMessage = 'Profile update failed. Please check your data and try again.'
        
        if (result.message) {
          if (typeof result.message === 'string') {
            errorMessage = result.message
          } else if (typeof result.message === 'object') {
            // Handle validation errors more specifically
            const errorFields = Object.keys(result.message)
            
            if (errorFields.length > 0) {
              const errorDetails = errorFields.map(field => {
                const fieldErrors = Array.isArray(result.message[field]) 
                  ? result.message[field].join(', ')
                  : result.message[field]
                return `${field}: ${fieldErrors}`
              })
              errorMessage = errorDetails.join('; ')
            } else {
              errorMessage = 'Validation error: Please check all required fields'
            }
          }
        } else if (result.remark) {
          errorMessage = `Error: ${result.remark}`
        }

        // Specific error cases
        if (result.message?.username) {
          errorMessage = `Username error: ${Array.isArray(result.message.username) ? result.message.username.join(', ') : result.message.username}`
        }
        if (result.message?.mobile) {
          errorMessage = `Mobile error: ${Array.isArray(result.message.mobile) ? result.message.mobile.join(', ') : result.message.mobile}`
        }

        setProfileMessage(errorMessage)
        console.error('❌ Profile update error:', result)
      }
    } catch (error) {
      console.error('❌ Profile update network error:', error)
      setProfileMessage('Network error. Please check your connection and try again.')
    } finally {
      setProfileLoading(false)
    }
  }

  // Handle Email Verification API Call
  const handleEmailVerification = async () => {
    const otpValue = emailVerificationOtp.join('')
    
    if (otpValue.length !== 6) {
      setEmailVerificationMessage('Please enter the complete 6-digit OTP')
      return
    }

    setEmailVerificationLoading(true)
    setEmailVerificationMessage('')

    try {
      const verifyData = {
        code: otpValue
      }

      console.log('📤 Verifying email OTP with API:', verifyData)
      console.log('🔗 API Endpoint: https://zepfinn.xecotech.co/api/verify-email')

      const token = localStorage.getItem('authToken') || localStorage.getItem('access_token')
      
      if (!token) {
        setEmailVerificationMessage('Authentication token not found. Please login again.')
        setEmailVerificationLoading(false)
        return
      }

      const response = await fetch('https://zepfinn.xecotech.co/api/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(verifyData)
      })

      const result = await response.json()

      console.log('📥 Email Verification Response:', result)
      console.log('📊 Response Status:', response.status)

      if (response.ok && result.status === 'success') {
        setEmailVerificationMessage('✅ Email verified successfully! Redirecting to home page...')
        
        // Update user data in localStorage
        const userData = JSON.parse(localStorage.getItem('userData') || '{}')
        const updatedUserData = {
          ...userData,
          email_verified: true
        }
        localStorage.setItem('userData', JSON.stringify(updatedUserData))
        
        // Close verification modal and redirect to home page
        setTimeout(() => {
          setShowEmailVerification(false)
          setEmailVerificationOtp(['', '', '', '', '', ''])
          navigate('/')
        }, 2000)
        
      } else {
        let errorMessage = 'Invalid OTP. Please try again.'
        
        if (result.message) {
          if (typeof result.message === 'string') {
            errorMessage = result.message
          } else if (typeof result.message === 'object') {
            if (result.message.code) {
              errorMessage = Array.isArray(result.message.code) 
                ? `OTP: ${result.message.code.join(', ')}`
                : `OTP: ${result.message.code}`
            } else {
              const errors = Object.values(result.message).flat()
              errorMessage = errors.join(', ')
            }
          }
        } else if (result.remark) {
          errorMessage = `Error: ${result.remark}`
        }

        setEmailVerificationMessage(errorMessage)
        console.error('❌ Email verification error:', result)
      }
    } catch (error) {
      console.error('❌ Email verification network error:', error)
      setEmailVerificationMessage('Network error. Please check your connection and try again.')
    } finally {
      setEmailVerificationLoading(false)
    }
  }

  // Handle Profile Data Change - UPDATED
  const handleProfileChange = (e) => {
    const { name, value } = e.target
    
    // Validate mobile number to only allow digits
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '') // Remove non-numeric characters
      setProfileData(prev => ({ ...prev, [name]: numericValue }))
    } else {
      setProfileData(prev => ({ ...prev, [name]: value }))
    }
    
    setProfileMessage('')
  }

  // Handle Country Change
  const handleCountryChange = (e) => {
    const selectedCountry = countryOptions.find(country => country.code === e.target.value)
    if (selectedCountry) {
      setProfileData(prev => ({
        ...prev,
        country_code: selectedCountry.code,
        country: selectedCountry.name,
        mobile_code: selectedCountry.mobileCode
      }))
    }
  }

  // Close Complete Profile Modal
  const handleCloseCompleteProfile = () => {
    setShowCompleteProfile(false)
    setProfileData({
      username: '',
      country_code: 'IN',
      country: 'India',
      mobile_code: '91',
      mobile: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    })
    setProfileMessage('')
  }

  // Close Email Verification Modal
  const handleCloseEmailVerification = () => {
    setShowEmailVerification(false)
    setEmailVerificationOtp(['', '', '', '', '', ''])
    setEmailVerificationMessage('')
  }

  // Resend OTP for Email Verification - Using Authorization API
  const handleResendEmailOTP = async () => {
    setEmailVerificationMessage('Sending OTP...')
    
    try {
      const token = localStorage.getItem('authToken') || localStorage.getItem('access_token')
      
      const response = await fetch('https://zepfinn.xecotech.co/api/authorization', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      })

      const result = await response.json()

      if (response.ok && result.status === 'success') {
        setEmailVerificationMessage('✅ New OTP sent to your email!')
      } else {
        setEmailVerificationMessage('Failed to resend OTP. Please try again.')
      }
    } catch (error) {
      console.error('❌ Resend OTP error:', error)
      setEmailVerificationMessage('Network error. Please try again.')
    }
  }

  // Reset Password API Function
  const handleResetPassword = async () => {
    const { password, confirmPassword } = resetPasswordData
    
    // Validation
    if (!password || !confirmPassword) {
      setResetMessage('Please fill in all fields')
      return
    }

    if (password.length < 6) {
      setResetMessage('Password must be at least 6 characters long')
      return
    }

    if (password !== confirmPassword) {
      setResetMessage('Passwords do not match')
      return
    }

    setResetLoading(true)
    setResetMessage('')

    try {
      console.log('🔄 Starting password reset process...')

      // Use the OTP entered by user as token
      const resetToken = otp.join('')
      
      console.log('🔐 Using OTP as token for reset:', resetToken)
      console.log('📧 Email:', forgotPasswordEmail)

      // Prepare reset data - using OTP as token
      const resetData = {
        token: resetToken,
        email: forgotPasswordEmail,
        password: password,
        password_confirmation: confirmPassword
      }

      console.log('📤 Sending reset password data:', resetData)

      // API call for password reset
      let response = await fetch('https://zepfinn.xecotech.co/api/password/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(resetData)
      })

      let result = await response.json()

      console.log('📥 Reset Password Response:', result)
      console.log('📊 Response Status:', response.status)

      // If JSON fails with validation error, try FormData
      if (!response.ok && result.remark === 'validation_error') {
        console.log('🔄 JSON failed, trying FormData...')
        
        const formData = new FormData()
        formData.append('token', resetToken)
        formData.append('email', forgotPasswordEmail)
        formData.append('password', password)
        formData.append('password_confirmation', confirmPassword)

        response = await fetch('https://zepfinn.xecotech.co/api/password/reset', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
          body: formData
        })

        result = await response.json()
        console.log('📥 FormData Response:', result)
      }

      // Handle response
      if (response.ok) {
        setResetMessage('✅ Password reset successfully! You can now login with your new password.')
        
        // Close reset password modal after success
        setTimeout(() => {
          setShowResetPassword(false)
          setResetPasswordData({ password: '', confirmPassword: '' })
          setResetMessage('')
          // Redirect to login tab
          setActiveTab('login')
        }, 3000)
        
      } else {
        // Enhanced error handling
        let errorMessage = 'Password reset failed. '
        
        if (result.message) {
          if (typeof result.message === 'string') {
            errorMessage += result.message
          } else if (typeof result.message === 'object') {
            // Handle validation errors
            if (result.message.success && Array.isArray(result.message.success)) {
              errorMessage += result.message.success.join(', ')
            } else if (result.message.email) {
              errorMessage += Array.isArray(result.message.email) 
                ? `Email: ${result.message.email.join(', ')}`
                : `Email: ${result.message.email}`
            } else if (result.message.password) {
              errorMessage += Array.isArray(result.message.password) 
                ? `Password: ${result.message.password.join(', ')}`
                : `Password: ${result.message.password}`
            } else if (result.message.token) {
              errorMessage += Array.isArray(result.message.token) 
                ? `Token: ${result.message.token.join(', ')}`
                : `Token: ${result.message.token}`
            } else {
              // Extract all validation errors
              const errors = Object.values(result.message).flat()
              errorMessage += errors.join(', ')
            }
          }
        } else if (result.remark) {
          errorMessage += `API Error: ${result.remark}`
        } else {
          errorMessage += 'Please check your information and try again.'
        }

        setResetMessage(errorMessage)
        console.error('❌ Reset password failed:', result)
      }

    } catch (error) {
      console.error('❌ Reset password network error:', error)
      setResetMessage('Network error. Please check your connection and try again.')
    } finally {
      setResetLoading(false)
    }
  }

  // API Forgot Password function - UPDATED FOR 6-DIGIT OTP
  const handleSendResetLink = async () => {
    if (!forgotPasswordEmail) {
      setForgotPasswordMessage('Please enter your email address')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(forgotPasswordEmail)) {
      setForgotPasswordMessage('Please enter a valid email address')
      return
    }

    setForgotPasswordLoading(true)
    setForgotPasswordMessage('')

    try {
      const apiData = {
        value: forgotPasswordEmail.toLowerCase().trim()
      }

      console.log('📤 Sending forgot password data to API:', apiData)
      console.log('🔗 API Endpoint: https://zepfinn.xecotech.co/api/password/email')

      const response = await fetch('https://zepfinn.xecotech.co/api/password/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(apiData)
      })

      const result = await response.json()

      console.log('📥 API Response:', result)
      console.log('📊 Response Status:', response.status)

      if (response.ok) {
        setForgotPasswordMessage('OTP has been sent to your email! Please check your inbox.')
        
        setTimeout(() => {
          setShowForgotPassword(false)
          setShowOTPVerification(true)
        }, 1500)
        
      } else {
        let errorMessage = 'Failed to send OTP. Please try again.'
        
        if (result.message) {
          if (typeof result.message === 'string') {
            errorMessage = result.message
          } else if (typeof result.message === 'object') {
            if (result.message.value) {
              errorMessage = Array.isArray(result.message.value) 
                ? result.message.value.join(', ') 
                : result.message.value
            } else if (result.message.error) {
              errorMessage = Array.isArray(result.message.error) 
                ? result.message.error.join(', ') 
                : result.message.error
            } else {
              const errors = Object.values(result.message).flat()
              errorMessage = errors.join(', ')
            }
          }
        } else if (result.error) {
          errorMessage = result.error
        } else if (result.remark) {
          errorMessage = result.remark
        }

        if (errorMessage.toLowerCase().includes('email') && 
            (errorMessage.toLowerCase().includes('not exist') || 
             errorMessage.toLowerCase().includes('not found') ||
             errorMessage.toLowerCase().includes('invalid'))) {
          errorMessage = 'Email does not exist. Please check your email address.'
        }

        setForgotPasswordMessage(errorMessage)
        console.error('❌ Forgot password error details:', result)
      }

    } catch (error) {
      console.error('❌ Forgot password network error:', error)
      setForgotPasswordMessage('Network error. Please check your connection and try again.')
    } finally {
      setForgotPasswordLoading(false)
    }
  }

  // OTP Verification API function - UPDATED FOR 6-DIGIT OTP
  const handleVerifyOTP = async () => {
    const otpValue = otp.join('')
    
    if (otpValue.length !== 6) {
      setOtpMessage('Please enter the complete 6-digit OTP')
      return
    }

    setOtpLoading(true)
    setOtpMessage('')

    try {
      const verifyData = {
        code: otpValue,
        email: forgotPasswordEmail.toLowerCase().trim()
      }

      console.log('📤 Verifying OTP with API:', verifyData)
      console.log('🔗 API Endpoint: https://zepfinn.xecotech.co/api/password/verify-code')

      const response = await fetch('https://zepfinn.xecotech.co/api/password/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(verifyData)
      })

      const result = await response.json()

      console.log('📥 OTP Verification Response:', result)
      console.log('📊 Response Status:', response.status)

      if (response.ok && result.status === 'success') {
        setOtpMessage('OTP verified successfully! Opening password reset...')
        
        setTimeout(() => {
          setShowOTPVerification(false)
          setShowResetPassword(true)
        }, 1500)
        
      } else {
        let errorMessage = 'Invalid OTP. Please try again.'
        
        if (result.message) {
          if (typeof result.message === 'string') {
            errorMessage = result.message
          } else if (typeof result.message === 'object') {
            if (result.message.success && Array.isArray(result.message.success)) {
              errorMessage = result.message.success.join(', ')
            } else if (result.message.code) {
              errorMessage = Array.isArray(result.message.code) 
                ? `OTP: ${result.message.code.join(', ')}`
                : `OTP: ${result.message.code}`
            } else {
              const errors = Object.values(result.message).flat()
              errorMessage = errors.join(', ')
            }
          }
        } else if (result.remark) {
          errorMessage = `Error: ${result.remark}`
        }

        setOtpMessage(errorMessage)
        console.error('❌ OTP verification error:', result)
      }
    } catch (error) {
      console.error('❌ OTP verification network error:', error)
      setOtpMessage('Network error. Please check your connection and try again.')
    } finally {
      setOtpLoading(false)
    }
  }

  // Helper functions for password strength
  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 'strong': return '#28a745'
      case 'medium': return '#ffc107'
      case 'weak': return '#dc3545'
      default: return '#6c757d'
    }
  }

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 'strong': return 'Strong Password'
      case 'medium': return 'Medium Password'
      case 'weak': return 'Weak Password'
      default: return ''
    }
  }

  // API Login function
  const handleLogin = async () => {
    const { username, password } = loginData
    
    if (!username || !password) {
      setLoginMessage('Please fill in all fields')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(username)) {
      setLoginMessage('Please enter a valid email address')
      return
    }

    setLoginLoading(true)
    setLoginMessage('')

    try {
      const loginApiData = {
        username: username.toLowerCase().trim(),
        password: password
      }

      console.log('📤 Sending login data to API:', loginApiData)

      const response = await fetch('https://zepfinn.xecotech.co/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(loginApiData)
      })

      const result = await response.json()

      console.log('📥 Login API Response:', result)
      console.log('📊 Login Response Status:', response.status)

      if (response.ok && result.status === 'success') {
        setLoginMessage('Login successful!')
        
        console.log('✅ Login successful')
        console.log('👤 User data from login:', result.data.user)
        console.log('🔑 Access token:', result.data.access_token)
        
        // Store token and user data
        if (result.data.access_token) {
          localStorage.setItem('access_token', result.data.access_token)
          localStorage.setItem('authToken', result.data.access_token)
        }
        
        if (result.data.user) {
          localStorage.setItem('userData', JSON.stringify(result.data.user))
          localStorage.setItem('userEmail', result.data.user.email || username.toLowerCase().trim())
        }
        
        const loggedInUser = {
          name: result.data.user?.firstname + ' ' + result.data.user?.lastname,
          email: result.data.user?.email || username,
          firstName: result.data.user?.firstname,
          lastName: result.data.user?.lastname,
          access_token: result.data.access_token,
          token: result.data.access_token,
          ...result.data.user
        }

        console.log('👤 Final user object:', loggedInUser)
        
        // Call parent login handler
        onLogin(loggedInUser)
        
        // Redirect to profile page
        setTimeout(() => {
          navigate('/profile')
        }, 1000)
        
      } else {
        let errorMessage = 'Login failed. Please check your credentials.'
        
        if (result.message) {
          if (typeof result.message === 'string') {
            errorMessage = result.message
          } else if (typeof result.message === 'object') {
            errorMessage = JSON.stringify(result.message)
          }
        } else if (result.remark) {
          errorMessage = `Error: ${result.remark}`
        }

        setLoginMessage(errorMessage)
        console.error('❌ Login error details:', result)
      }
    } catch (error) {
      console.error('❌ Login network error:', error)
      setLoginMessage('Network error. Please check your connection and try again.')
    } finally {
      setLoginLoading(false)
    }
  }

  // API Register function - UPDATED TO SHOW COMPLETE PROFILE
  const handleRegister = async () => {
    const { firstName, lastName, email, password, confirmPassword } = registerData
    
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setApiMessage('Please fill in all fields')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setApiMessage('Please enter a valid email address')
      return
    }

    if (password.length < 6) {
      setApiMessage('Password must be at least 6 characters long')
      return
    }

    if (password !== confirmPassword) {
      setApiMessage('Passwords do not match')
      return
    }
    if (!agreeTerms) {
      setApiMessage('Please agree to the Terms and Conditions')
      return
    }

    setLoading(true)
    setApiMessage('')

    try {
      const apiData = {
        firstname: firstName.trim(),
        lastname: lastName.trim(),
        email: email.toLowerCase().trim(),
        password: password,
        password_confirmation: confirmPassword,
        agree: agreeTerms
      }

      console.log('📤 Sending registration data to API:', apiData)

      const response = await fetch('https://zepfinn.xecotech.co/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(apiData)
      })

      const result = await response.json()

      console.log('📥 API Response:', result)
      console.log('📊 Response Status:', response.status)

      if (response.ok && result.status === 'success') {
        setApiMessage('Registration successful! Please complete your profile.')
        
        console.log('✅ Data successfully stored in API database')
        
        // Store token and user data
        if (result.data.access_token) {
          localStorage.setItem('access_token', result.data.access_token)
          localStorage.setItem('authToken', result.data.access_token)
        }
        
        if (result.data.user) {
          localStorage.setItem('userData', JSON.stringify(result.data.user))
        }
        
        setRegisterData({
          firstName: '',
          lastName: '', 
          email: '',
          password: '',
          confirmPassword: ''
        })
        setAgreeTerms(false)
        
        // Show complete profile modal instead of switching to login
        setTimeout(() => {
          setShowCompleteProfile(true)
        }, 1500)
        
      } else {
        let errorMessage = 'Registration failed. Please try again.'
        
        if (result.message && typeof result.message === 'object') {
          if (result.message.error && Array.isArray(result.message.error)) {
            errorMessage = result.message.error.join(', ')
          } else if (result.message.email) {
            errorMessage = `Email: ${result.message.email.join(', ')}`
          } else if (result.message.password) {
            errorMessage = `Password: ${result.message.password.join(', ')}`
          } else {
            errorMessage = JSON.stringify(result.message)
          }
        } else if (result.message) {
          errorMessage = result.message
        } else if (result.remark) {
          errorMessage = `Error: ${result.remark}`
        }

        setApiMessage(errorMessage)
        console.error('❌ Registration error details:', result)
      }
    } catch (error) {
      console.error('❌ Network error:', error)
      setApiMessage('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  // Social login/register
  const handleSocialAuth = (provider, isRegister = false) => {
    const socialUser = { 
      name: `${provider} User`, 
      email: `user@${provider.toLowerCase()}.com`, 
      provider 
    }
    
    if (isRegister) {
      console.log(`📝 ${provider} Registration - Data would be stored in API`)
    } else {
      console.log(`🔐 ${provider} Login`)
    }
    
    onLogin(socialUser)
    navigate('/profile')
  }

  return (
    <div className="login-page">
      <div className="split-container">
        {/* Left video section */}
        <div className="image-section">
          <video className="bg-video" autoPlay loop muted>
            <source src="/video signin.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="image-content">
            <h2>Welcome to Zepfinn</h2>
            <p>Sign in to access your personalized dashboard and explore all features.</p>
          </div>
        </div>

        {/* Right form section */}
        <div className="form-section">
          <div className="form-container">
            {/* Tabs */}
            <div className="tabs-container">
              <div className="tabs">
                <div 
                  className={`tab ${activeTab === 'login' ? 'active' : ''}`} 
                  onClick={() => handleTabChange('login')}
                >
                  Login
                </div>
                <div 
                  className={`tab ${activeTab === 'register' ? 'active' : ''}`} 
                  onClick={() => handleTabChange('register')}
                >
                  Register
                </div>
              </div>
              <div className={`tab-slider ${activeTab === 'login' ? 'slide-left' : 'slide-right'}`}></div>
            </div>

            {/* Forms Container */}
            <div className="forms-wrapper">
              {/* Login Form */}
              <div className={`form-content ${activeTab === 'login' ? 'active' : ''}`}>
                <div className="form">
                  {loginMessage && (
                    <div className={`api-message ${
                      loginMessage.includes('successful') ? 'success' : 'error'
                    }`}>
                      {loginMessage}
                    </div>
                  )}

                  <div className="input-group">
                    <FaUser className="input-icon" />
                    <input 
                      type="text" 
                      name="username"
                      value={loginData.username}
                      onChange={handleLoginChange}
                      placeholder="Email Address" 
                      required
                    />
                  </div>
                  
                  <div className="input-group">
                    <FaLock className="input-icon" />
                    <input 
                      type="password" 
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      placeholder="Password" 
                      required
                    />
                  </div>

                  <div className="forgot-password-container">
                    <button 
                      className="forgot-password-link" 
                      onClick={handleForgotPassword}
                      type="button"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  
                  <button 
                    className={`btn ${loginLoading ? 'loading' : ''}`} 
                    onClick={handleLogin}
                    disabled={loginLoading}
                  >
                    {loginLoading ? 'Logging in...' : 'Login'}
                  </button>

                  <div className="social-login">
                    <p>Or login with</p>
                    <div className="social-buttons">
                      <div 
                        className="social-btn google" 
                        onClick={() => handleSocialAuth('Google')}
                      >
                        <FaGoogle />
                      </div>
                      <div 
                        className="social-btn facebook" 
                        onClick={() => handleSocialAuth('Facebook')}
                      >
                        <FaFacebookF />
                      </div>
                    </div>
                    
                    {showMoreSocial && (
                      <div className="more-social-buttons">
                        <div 
                          className="social-btn twitter" 
                          onClick={() => handleSocialAuth('Twitter')}
                        >
                          <FaTwitter />
                        </div>
                        <div 
                          className="social-btn yahoo" 
                          onClick={() => handleSocialAuth('Yahoo')}
                        >
                          <FaYahoo />
                        </div>
                        <div 
                          className="social-btn apple" 
                          onClick={() => handleSocialAuth('Apple')}
                        >
                          <FaApple />
                        </div>
                        <div 
                          className="social-btn linkedin" 
                          onClick={() => handleSocialAuth('LinkedIn')}
                        >
                          <FaLinkedinIn />
                        </div>
                      </div>
                    )}
                    
                    <div className="show-more">
                      <button className="show-more-btn" onClick={toggleMoreSocial}>
                        {showMoreSocial ? 'Show less' : 'Show more'} 
                        {showMoreSocial ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Register Form */}
              <div className={`form-content ${activeTab === 'register' ? 'active' : ''}`}>
                <div className="form">
                  {apiMessage && (
                    <div className={`api-message ${
                      apiMessage.includes('successful') ? 'success' : 'error'
                    }`}>
                      {apiMessage}
                    </div>
                  )}

                  <div className="name-fields">
                    <div className="input-group half">
                      <FaIdCard className="input-icon" />
                      <input 
                        type="text" 
                        name="firstName"
                        value={registerData.firstName}
                        onChange={handleRegisterChange}
                        placeholder="First Name" 
                        required
                      />
                    </div>
                    <div className="input-group half">
                      <FaSignature className="input-icon" />
                      <input 
                        type="text" 
                        name="lastName"
                        value={registerData.lastName}
                        onChange={handleRegisterChange}
                        placeholder="Last Name" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="input-group">
                    <FaEnvelope className="input-icon" />
                    <input 
                      type="email" 
                      name="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      placeholder="Your Email" 
                      required
                    />
                  </div>

                  <div className="password-fields">
                    <div className="input-group half">
                      <FaLock className="input-icon" />
                      <input 
                        type="password" 
                        name="password"
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        placeholder="Password (min. 6 characters)" 
                        minLength="6"
                        required
                      />
                    </div>
                    <div className="input-group half">
                      <FaLock className="input-icon" />
                      <input 
                        type="password" 
                        name="confirmPassword"
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                        placeholder="Confirm Password" 
                        minLength="6"
                        required
                      />
                    </div>
                  </div>

                  <div className="terms-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={agreeTerms}
                        onChange={(e) => {
                          setAgreeTerms(e.target.checked)
                          setApiMessage('')
                        }}
                        required
                      />
                      <span className="checkmark"></span>
                      I agree to the Terms and Conditions
                    </label>
                  </div>
                  
                  <button 
                    className={`btn ${loading ? 'loading' : ''}`} 
                    onClick={handleRegister}
                    disabled={loading}
                  >
                    {loading ? 'Registering...' : 'Register'}
                  </button>

                  <div className="social-login">
                    <p>Or register with</p>
                    <div className="social-buttons">
                      <div 
                        className="social-btn google" 
                        onClick={() => handleSocialAuth('Google', true)}
                      >
                        <FaGoogle />
                      </div>
                      <div 
                        className="social-btn facebook" 
                        onClick={() => handleSocialAuth('Facebook', true)}
                      >
                        <FaFacebookF />
                      </div>
                    </div>
                    
                    {showMoreSocialRegister && (
                      <div className="more-social-buttons">
                        <div 
                          className="social-btn twitter" 
                          onClick={() => handleSocialAuth('Twitter', true)}
                        >
                          <FaTwitter />
                        </div>
                        <div 
                          className="social-btn yahoo" 
                          onClick={() => handleSocialAuth('Yahoo', true)}
                        >
                          <FaYahoo />
                        </div>
                        <div 
                          className="social-btn apple" 
                          onClick={() => handleSocialAuth('Apple', true)}
                        >
                          <FaApple />
                        </div>
                        <div 
                          className="social-btn linkedin" 
                          onClick={() => handleSocialAuth('LinkedIn', true)}
                        >
                          <FaLinkedinIn />
                        </div>
                      </div>
                    )}
                    
                    <div className="show-more">
                      <button className="show-more-btn" onClick={toggleMoreSocialRegister}>
                        {showMoreSocialRegister ? 'Show less' : 'Show more'} 
                        {showMoreSocialRegister ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Overlay */}
      {showForgotPassword && (
        <div className="forgot-password-overlay">
          <div className="forgot-password-container-modal">
            <div className="forgot-password-header">
              <h2>Forgot Password</h2>
              <button 
                className="close-btn" 
                onClick={handleCloseForgotPassword}
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="forgot-password-content">
              <p className="forgot-password-description">
                To reset your password enter the registered email. An OTP will be sent on this email to reset your password
              </p>
              
              <div className="divider"></div>
              
              <div className="forgot-password-form">
                <h3 className="email-label">Email</h3>
                
                <div className="input-group">
                  <FaEnvelope className="input-icon" />
                  <input 
                    type="email" 
                    value={forgotPasswordEmail}
                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                    placeholder="Enter your email address" 
                    required
                  />
                </div>

                {forgotPasswordMessage && (
                  <div className={`api-message ${
                    forgotPasswordMessage.includes('sent') ? 'success' : 'error'
                  }`}>
                    {forgotPasswordMessage}
                  </div>
                )}
                
                <button 
                  className={`btn send-link-btn ${forgotPasswordLoading ? 'loading' : ''}`} 
                  onClick={handleSendResetLink}
                  disabled={forgotPasswordLoading}
                >
                  {forgotPasswordLoading ? 'Sending...' : 'CONTINUE'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OTP Verification Overlay */}
      {showOTPVerification && (
        <div className="forgot-password-overlay">
          <div className="otp-verification-container-modal">
            <div className="otp-verification-header">
              <h2>Verification OTP</h2>
              <button 
                className="close-btn" 
                onClick={handleCloseOTPVerification}
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="otp-verification-content">
              <p className="otp-verification-description">
                We have sent OTP to your e-mail,<br /> please type code in here
              </p>

              <div className="divider"></div>
              
              <div className="otp-verification-form">
                <h3 className="otp-label">Enter 6-digit OTP</h3>

                <div className="otp-input-container">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (otpInputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      onPaste={handleOtpPaste}
                      className={`otp-input ${digit ? 'filled' : ''}`}
                    />
                  ))}
                </div>

                {otpMessage && (
                  <div className={`api-message ${
                    otpMessage.includes('successfully') ? 'success' : 'error'
                  }`}>
                    {otpMessage}
                  </div>
                )}
                
                <button 
                  className={`btn verify-otp-btn ${otpLoading ? 'loading' : ''}`} 
                  onClick={handleVerifyOTP}
                  disabled={otpLoading}
                >
                  {otpLoading ? 'Verifying...' : 'CONTINUE'}
                </button>

                <div className="number-pad">
                  <div className="number-row">
                    <button className="number-btn" onClick={() => handleNumberPadClick(1)}>1</button>
                    <button className="number-btn" onClick={() => handleNumberPadClick(2)}>2</button>
                    <button className="number-btn" onClick={() => handleNumberPadClick(3)}>3</button>
                  </div>
                  <div className="number-row">
                    <button className="number-btn" onClick={() => handleNumberPadClick(4)}>4</button>
                    <button className="number-btn" onClick={() => handleNumberPadClick(5)}>5</button>
                    <button className="number-btn" onClick={() => handleNumberPadClick(6)}>6</button>
                  </div>
                  <div className="number-row">
                    <button className="number-btn" onClick={() => handleNumberPadClick(7)}>7</button>
                    <button className="number-btn" onClick={() => handleNumberPadClick(8)}>8</button>
                    <button className="number-btn" onClick={() => handleNumberPadClick(9)}>9</button>
                  </div>
                  <div className="number-row">
                    <button className="number-btn clear-btn" onClick={handleClearOTP}>Clear</button>
                    <button className="number-btn" onClick={() => handleNumberPadClick(0)}>0</button>
                    <button className="number-btn backspace-btn" onClick={() => handleOtpKeyDown(5, {key: 'Backspace'})}>⌫</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reset Password Overlay */}
      {showResetPassword && (
        <div className="forgot-password-overlay">
          <div className="reset-password-container-modal">
            <div className="reset-password-header">
              <h2>Reset Password</h2>
              <button 
                className="close-btn" 
                onClick={handleCloseResetPassword}
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="reset-password-content">
              <p className="reset-password-description">
                Set the new password for your account so you can login and access all features
              </p>

              <div className="divider"></div>
              
              <div className="reset-password-form">
                <h3 className="password-label">Enter New Password</h3>

                <div className="input-group">
                  <FaLock className="input-icon" />
                  <input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={resetPasswordData.password}
                    onChange={handleResetPasswordChange}
                    placeholder="Enter password" 
                    required
                  />
                  <button 
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* Password Strength Indicator */}
                {resetPasswordData.password && (
                  <div className="password-strength">
                    <div 
                      className="strength-bar"
                      style={{
                        width: passwordStrength === 'weak' ? '33%' : 
                               passwordStrength === 'medium' ? '66%' : '100%',
                        backgroundColor: getPasswordStrengthColor()
                      }}
                    ></div>
                    <span 
                      className="strength-text"
                      style={{ color: getPasswordStrengthColor() }}
                    >
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                )}

                <div className="input-group">
                  <FaLock className="input-icon" />
                  <input 
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={resetPasswordData.confirmPassword}
                    onChange={handleResetPasswordChange}
                    placeholder="Confirm Password" 
                    required
                  />
                  <button 
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* Password Requirements */}
                <div className="password-requirements">
                  <h4>Password Requirements:</h4>
                  <ul>
                    <li className={resetPasswordData.password.length >= 6 ? 'met' : ''}>
                      <FaCheck /> At least 6 characters long
                    </li>
                    <li className={/[A-Z]/.test(resetPasswordData.password) ? 'met' : ''}>
                      <FaCheck /> One uppercase letter
                    </li>
                    <li className={/[a-z]/.test(resetPasswordData.password) ? 'met' : ''}>
                      <FaCheck /> One lowercase letter
                    </li>
                    <li className={/\d/.test(resetPasswordData.password) ? 'met' : ''}>
                      <FaCheck /> One number
                    </li>
                  </ul>
                </div>

                {/* Reset Password API Response Message */}
                {resetMessage && (
                  <div className={`api-message ${
                    resetMessage.includes('successfully') ? 'success' : 'error'
                  }`}>
                    {resetMessage}
                  </div>
                )}
                
                <button 
                  className={`btn reset-password-btn ${resetLoading ? 'loading' : ''}`} 
                  onClick={handleResetPassword}
                  disabled={resetLoading}
                >
                  {resetLoading ? 'Resetting Password...' : 'Reset Password'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Complete Profile Overlay */}
      {showCompleteProfile && (
        <div className="forgot-password-overlay">
          <div className="complete-profile-container-modal">
            <div className="complete-profile-header">
              <h2>Complete Your Profile</h2>
              <p>You need to complete your profile by providing below information.</p>
              <button 
                className="close-btn" 
                onClick={handleCloseCompleteProfile}
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="complete-profile-content">
              <div className="divider"></div>
              
              <div className="complete-profile-form">
                {/* Username */}
                <div className="form-group">
                  <label className="form-label">
                    Username <span className="required">*</span>
                  </label>
                  <div className="input-group">
                    <FaUser className="input-icon" />
                    <input 
                      type="text" 
                      name="username"
                      value={profileData.username}
                      onChange={handleProfileChange}
                      placeholder="Enter your username (letters, numbers, underscores only)" 
                      pattern="[a-zA-Z0-9_]+"
                      title="Username can only contain letters, numbers, and underscores"
                      required
                    />
                  </div>
                  {profileData.username && !/^[a-zA-Z0-9_]+$/.test(profileData.username) && (
                    <span className="field-error">Username can only contain letters, numbers, and underscores</span>
                  )}
                </div>

                {/* Country and Mobile */}
                <div className="form-row">
                  <div className="form-group half">
                    <label className="form-label">
                      Country <span className="required">*</span>
                    </label>
                    <div className="input-group">
                      <FaGlobe className="input-icon" />
                      <select 
                        name="country_code"
                        value={profileData.country_code}
                        onChange={handleCountryChange}
                        className="country-select"
                      >
                        {countryOptions.map(country => (
                          <option key={country.code} value={country.code}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group half">
                    <label className="form-label">
                      Mobile <span className="required">*</span>
                    </label>
                    <div className="mobile-input-group">
                      <div className="mobile-code">
                        <FaPhone className="mobile-icon" />
                        <span>+{profileData.mobile_code}</span>
                      </div>
                      <input 
                        type="tel" 
                        name="mobile"
                        value={profileData.mobile}
                        onChange={handleProfileChange}
                        placeholder="Enter mobile number" 
                        maxLength="15"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        required
                      />
                    </div>
                    {profileData.mobile && profileData.mobile.length < 10 && (
                      <span className="field-error">Mobile number must be at least 10 digits</span>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <div className="input-group">
                    <FaMapMarkerAlt className="input-icon" />
                    <input 
                      type="text" 
                      name="address"
                      value={profileData.address}
                      onChange={handleProfileChange}
                      placeholder="Enter your address" 
                    />
                  </div>
                </div>

                {/* City, State, Zip Code */}
                <div className="form-row">
                  <div className="form-group third">
                    <label className="form-label">State</label>
                    <div className="input-group">
                      <FaBuilding className="input-icon" />
                      <input 
                        type="text" 
                        name="state"
                        value={profileData.state}
                        onChange={handleProfileChange}
                        placeholder="Enter state" 
                      />
                    </div>
                  </div>

                  <div className="form-group third">
                    <label className="form-label">Zip Code</label>
                    <div className="input-group">
                      <FaFlag className="input-icon" />
                      <input 
                        type="text" 
                        name="zip"
                        value={profileData.zip}
                        onChange={handleProfileChange}
                        placeholder="Enter zip code" 
                      />
                    </div>
                  </div>

                  <div className="form-group third">
                    <label className="form-label">City</label>
                    <div className="input-group">
                      <FaCity className="input-icon" />
                      <input 
                        type="text" 
                        name="city"
                        value={profileData.city}
                        onChange={handleProfileChange}
                        placeholder="Enter city" 
                      />
                    </div>
                  </div>
                </div>

                {/* API Response Message */}
                {profileMessage && (
                  <div className={`api-message ${
                    profileMessage.includes('successfully') ? 'success' : 'error'
                  }`}>
                    {profileMessage}
                  </div>
                )}
                
                <button 
                  className={`btn complete-profile-btn ${profileLoading ? 'loading' : ''}`} 
                  onClick={handleCompleteProfile}
                  disabled={profileLoading}
                >
                  {profileLoading ? 'Saving Profile...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Email Verification Overlay */}
      {showEmailVerification && (
        <div className="forgot-password-overlay">
          <div className="email-verification-container-modal">
            <div className="email-verification-header">
              <div className="email-verification-icon">
                <FaShieldAlt />
              </div>
              <h2>Verify Your Email</h2>
              <p>We've sent a 6-digit verification code to your email address</p>
              <button 
                className="close-btn" 
                onClick={handleCloseEmailVerification}
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="email-verification-content">
              <div className="email-info">
                <FaEnvelope className="email-icon" />
                <span className="email-address">{userEmail}</span>
              </div>

              <div className="divider"></div>
              
              <div className="email-verification-form">
                <h3 className="otp-label">Enter Verification Code</h3>

                <div className="otp-input-container">
                  {emailVerificationOtp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (emailOtpInputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleEmailOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleEmailOtpKeyDown(index, e)}
                      onPaste={handleEmailOtpPaste}
                      className={`otp-input ${digit ? 'filled' : ''}`}
                    />
                  ))}
                </div>

                {emailVerificationMessage && (
                  <div className={`api-message ${
                    emailVerificationMessage.includes('successfully') ? 'success' : 'error'
                  }`}>
                    {emailVerificationMessage}
                  </div>
                )}
                
                <button 
                  className={`btn verify-email-btn ${emailVerificationLoading ? 'loading' : ''}`} 
                  onClick={handleEmailVerification}
                  disabled={emailVerificationLoading}
                >
                  {emailVerificationLoading ? 'Verifying...' : 'Verify Email'}
                </button>

                <div className="number-pad">
                  <div className="number-row">
                    <button className="number-btn" onClick={() => handleEmailNumberPadClick(1)}>1</button>
                    <button className="number-btn" onClick={() => handleEmailNumberPadClick(2)}>2</button>
                    <button className="number-btn" onClick={() => handleEmailNumberPadClick(3)}>3</button>
                  </div>
                  <div className="number-row">
                    <button className="number-btn" onClick={() => handleEmailNumberPadClick(4)}>4</button>
                    <button className="number-btn" onClick={() => handleEmailNumberPadClick(5)}>5</button>
                    <button className="number-btn" onClick={() => handleEmailNumberPadClick(6)}>6</button>
                  </div>
                  <div className="number-row">
                    <button className="number-btn" onClick={() => handleEmailNumberPadClick(7)}>7</button>
                    <button className="number-btn" onClick={() => handleEmailNumberPadClick(8)}>8</button>
                    <button className="number-btn" onClick={() => handleEmailNumberPadClick(9)}>9</button>
                  </div>
                  <div className="number-row">
                    <button className="number-btn clear-btn" onClick={handleClearEmailOTP}>Clear</button>
                    <button className="number-btn" onClick={() => handleEmailNumberPadClick(0)}>0</button>
                    <button className="number-btn backspace-btn" onClick={() => handleEmailOtpKeyDown(5, {key: 'Backspace'})}>⌫</button>
                  </div>
                </div>

                <div className="resend-otp-section">
                  <p>Didn't receive the code?</p>
                  <button 
                    className="resend-otp-btn" 
                    onClick={handleResendEmailOTP}
                  >
                    Resend OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login