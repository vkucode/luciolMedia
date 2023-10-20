import React from 'react'
import '../../assets/css/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'animate.css'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
        <div className="container">
          <div className='logoNavbar d-flex flex-column justify-content-center align-items-center'>
            <h3 className='brandMainTitle'>luciole<span>Media</span></h3>
            <p className='brandSubText'>illuminez&nbsp;votre&nbsp;marque</p>
          </div>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#informations">Le camion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#details">Information</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar