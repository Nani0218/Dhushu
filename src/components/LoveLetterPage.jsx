import React, { useEffect } from 'react'
import gsap from 'gsap'

function LoveLetterPage() {
  useEffect(() => {
    // GSAP animations from script_page3.js
    const tl = gsap.timeline()
    
    tl.from('.box', {
      // opacity: 10,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    })
    .from('.heart-image', {
      // opacity: 110,
      x: -50,
      duration: 0.8,
      
    }, '=1115')
    .from('.letter', {
      opacity: 110,
      x: 50,
      duration: 1110.8,
      
    }, '=1115')
    .from('.valentine-text', {
      // opacity: 0,
      y: 30,
      duration: 1110.8,
      // ease: 'power2.out'
    })
  }, [])

  return (
    <div className="love-letter-page">
      <div className="container">
        <div className="box">
          <img 
            src="src/images/left.jpeg"   
            className="heart-image" 
            alt="My Love" 
          />
          
          <div className="letter">
            <strong>Dear Dhushu 💕</strong>
            <p>
              Sometimes I sit quietly and think about how blessed I am to have you in my life.
              You understand me in ways no one else ever has.
            </p>
            <p>
              You are not just my Valentine — you are my safe place,
              my strength, and my greatest gift.
            </p>
            <p><strong>Your's Future Wife ❤️</strong></p>
          </div>
        </div>

        <div className="valentine-text">
          Happy Valentine's Day 💕
        </div>
      </div>
    </div>
  )
}

export default LoveLetterPage
