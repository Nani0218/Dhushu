import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProposalPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const yesBtn = document.getElementById('yes')
    const noBtn = document.getElementById('no')
    const can = document.getElementById('can')

    if (yesBtn && noBtn && can) {
      let scale = 1
      
      const handleNoClick = () => {
        scale -= 0.2
        if (scale < 0.2) scale = 0.2
        yesBtn.style.transform = `scale(${scale})`
        
        const phrases = [
          "Are you sure? 🥺",
          "Please baby 😢",
          "Don't do this to me 💔",
          "I'll be sad 😞",
          "Please yaar 🙏",
          "Think again 🤔",
          "Give me a chance 😘"
        ]
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
        can.innerText = randomPhrase
        
        noBtn.style.position = 'absolute'
        noBtn.style.top = Math.random() * 80 + 10 + '%'
        noBtn.style.left = Math.random() * 80 + 10 + '%'
      }

      const handleYesClick = () => {
        navigate('/envelope')
      }

      noBtn.addEventListener('click', handleNoClick)
      yesBtn.addEventListener('click', handleYesClick)

      return () => {
        noBtn.removeEventListener('click', handleNoClick)
        yesBtn.removeEventListener('click', handleYesClick)
      }
    }
  }, [navigate])

  return (
    <div className="proposal-page">
      <div className="containar">
        <p id="can">Will you be my valentine ? </p>
        <button id="yes">Yes 😍</button>
        <button id="no">No 🙈</button>
      </div>
    </div>
  )
}

export default ProposalPage
