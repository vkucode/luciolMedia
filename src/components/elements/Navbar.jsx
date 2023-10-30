import React, {useState, useEffect} from 'react'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import '../../assets/css/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'animate.css'


const Navbar = () => {
  const [addAnimationNav, setAddAnimation] = useState('');

  gsap.registerPlugin(ScrollToPlugin)
  function scrollToLink(idSection){
    gsap.to(window, { duration: 1, scrollTo: idSection });
  }

  useEffect(() => {
    const animationNavTimer = setTimeout(() => {
      setAddAnimation('animate__animated');
    }, 3000);
    return () => {
      clearTimeout(animationNavTimer); // curăță timerul când componenta este demontată
    };
  }, []);

  return (
    <>
    <nav className={`${addAnimationNav} animate__fadeInDown navbar navbar-expand-lg navbar-light bg-black`}>
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
              <button className="nav-link" onClick={() => scrollToLink("#informationsLink")}>Le camion</button>
            </li>
            <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToLink("#details")}>Informations</button>
            </li>
            <li className="nav-item">
            <button className="nav-link" onClick={() =>scrollToLink("#contact")}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar