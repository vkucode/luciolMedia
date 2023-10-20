import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from '../../assets/css/footer.module.css'
import { Link } from 'react-router-dom'
import persoconceptLogo from '../../assets/img/persoconceptLogo.png'
import vkucodeLogo from '../../assets/img/vkucodeLogo.png'
import {SiMaildotru} from 'react-icons/si'
import {MdEmail} from 'react-icons/md'
import {FaInstagram, FaTiktok, FaLinkedinIn, FaRegCopyright, FaPhoneAlt} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={`container-fluid`}> 
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <div className={`${classes.logoNavbar} d-flex flex-column justify-content-center align-items-start`}>
              <h3 className='brandMainTitle'>luciole<span>Media</span></h3>
              <p className='brandSubText'>illuminez&nbsp;votre&nbsp;marque</p>
            </div>
            <div className={`${classes.SuivezNous}`}>
              <h3>Suivez-nous</h3>
              <div>
                <a href="https://www.instagram.com/luciolemedia.fr/"><FaInstagram/></a>
                <a href="#1"><FaTiktok/></a>
                <a href="#1"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
          <div className={`${classes.linksFooter} col-12 col-md-4 mt-4 mt-md-0`}>
            <h2>
              liens&nbsp;utiles
            </h2>
            <a href="#informations">informations</a>
            <a href="#contact">contact</a>
            <Link to="/legales">legales</Link>
          </div>
          <div className={`${classes.linksFooter} col-12 col-md-4 mt-4 mt-md-0`}>
            <h2>
              nous-contacter
            </h2>
            <a href="mailto: contact@luciolemedia.fr"><MdEmail/>&nbsp;contact<SiMaildotru/>luciolemedia.fr</a>
            <a href="tel: +33161308603"><FaPhoneAlt/>&nbsp;<span>01 61 30 86 03</span></a>
          </div>
        </div>
        <div className={`${classes.copyrightSection} row`}>
          <p><FaRegCopyright />LucioleMedia. Tous droits réservés | Designed by <a href="https://www.persoconcept.fr/"><img src={persoconceptLogo} alt="" /></a>&nbsp;Powered by <a href="https://vkucode.com/"><img src={vkucodeLogo} alt="" /></a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer