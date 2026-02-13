import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import mojs from '@mojs/core'
import gsap from 'gsap'

function LandingPage() {
  const navigate = useNavigate()
  const buttonRef = useRef(null)
  const heartContainerRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    // Create mo.js burst animation
    const scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0')

    const tween1 = new mojs.Burst({
      parent: buttonRef.current,
      radius: { 0: 100 },
      angle: { 0: 45 },
      y: -10,
      count: 10,
      radius: 100,
      children: {
        shape: 'circle',
        radius: 30,
        fill: ['red', 'white'],
        strokeWidth: 15,
        duration: 500,
      }
    })

    const tween2 = new mojs.Tween({
      duration: 900,
      onUpdate: function(progress) {
        const scaleProgress = scaleCurve(progress)
        if (buttonRef.current) {
          buttonRef.current.style.transform = `scale3d(${scaleProgress},${scaleProgress},1)`
        }
      }
    })

    const tween3 = new mojs.Burst({
      parent: buttonRef.current,
      radius: { 0: 100 },
      angle: { 0: -45 },
      y: -10,
      count: 10,
      radius: 125,
      children: {
        shape: 'circle',
        radius: 30,
        fill: ['white', 'red'],
        strokeWidth: 15,
        duration: 400,
      }
    })

    timelineRef.current = new mojs.Timeline()
    timelineRef.current.add(tween1, tween2, tween3)

    // Create hearts
    const container = heartContainerRef.current
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div')
      heart.className = 'heart'
      heart.innerHTML = `
        <svg id="color" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="MyGradient">
              <stop offset="10%" stop-color="#e74c3c" />
              <stop offset="90%" stop-color="#FF3C30" />
            </linearGradient>
          </defs>
          <path d="m11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c4.001-4.053 1.158-11.055-4.532-11.055-3.417 0-4.985 2.511-5.596 2.98-.614-.471-2.172-2.98-5.596-2.98-5.672 0-8.55 6.984-4.531 11.055z"/>
        </svg>
      `
      container.appendChild(heart)
    }

    // GSAP mouse movement
    const handleMouseMove = (e) => {
      gsap.to('.heart', {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.2
      })
    }

    document.body.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleClick = () => {
    if (timelineRef.current) {
      timelineRef.current.play()
    }
    // Navigate to proposal page after 2 seconds
    setTimeout(() => {
      navigate('/proposal')
    }, 2000)
  }

  return (
    <div className="landing-page">
      <div ref={buttonRef} id="heart" className="button" onClick={handleClick}></div>
      <div className="bottom-text"> Find My Heart? </div>

      <div ref={heartContainerRef} className="heart-container"></div>

      <div className="container">
        <div className="sweetestheart-container">
          <div className="sweetestheart heart-1"></div>
        </div>
        <div className="sweetestheart-container">
          <div className="sweetestheart heart-2"></div>
        </div>
        <div className="sweetestheart-container">
          <div className="sweetestheart heart-3"></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
