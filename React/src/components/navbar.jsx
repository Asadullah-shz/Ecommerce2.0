import React from 'react'

const navbar = () => {
  return (
    <div className='parent'>
       <nav class="navbar">
        <a href="#" class="logo">
            <i>✦</i> FloatNav
        </a>
        
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div class="nav-buttons">
            <button class="btn btn-login">Login</button>
            <button class="btn btn-signup">Sign Up</button>
        </div>
        
        <div class="hamburger">☰</div>
    </nav>
    </div>
  )
}

export default navbar 
