import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function EnvelopePage() {
  const navigate = useNavigate()

  useEffect(() => {
    const envelope = document.querySelector('.envelope-wrapper')
    
    if (envelope) {
      const handleClick = () => {
        navigate('/love-letter')
      }
      
      envelope.addEventListener('click', handleClick)
      
      return () => {
        envelope.removeEventListener('click', handleClick)
      }
    }
  }, [navigate])

  return (
    <div className="envelope-page">
      <div className="container">
        <div className="envelope-wrapper">
          <div className="envelope"></div>
          <div className="sweetheart"></div>
        </div>
      </div>
    </div>
  )
}

export default EnvelopePage
