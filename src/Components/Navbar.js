import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
  
//   {/* ======= Home ======= */}
 <header id="header" className="fixed-top d-flex align-items-center">
  <div className="container d-flex align-items-center">
    <h1 className="logo me-auto"><Link to="index.html">Presento<span>.</span></Link></h1>
    {/* <Link to="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt /></Link> */}
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
        <li><Link className="nav-link scrollto" to="/about">About</Link></li>
        <li><Link className="nav-link scrollto" to="/services">Services</Link></li>
        <li><Link className="nav-link scrollto " to="/portfolio">Portfolio</Link></li>
        <li><Link className="nav-link scrollto" to="/team">Team</Link></li>
        <li><Link to="/">Blog</Link></li>
     
        <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
    <Link to="/about" className="get-started-btn scrollto">Get Started</Link>
  </div>
</header>


  )
}

export default Navbar