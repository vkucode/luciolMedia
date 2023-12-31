import React, {useState, useEffect} from 'react'
import axios from 'axios'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Footer from './elements/Footer'
import classes from '../assets/css/accueil.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import backgroundCamion from '../assets/img/Fond_Illumibez.png'
import camionImg from '../assets/img/Camion.png'
import camionTopCamera from '../assets/img/Camion_Top.png'
import speakersImg from '../assets/img/Icon_HautParleur.png'
import dimensionImg from '../assets/img/Icon_3ecrans.png'
import frstimgCamionTHRDSection from '../assets/img/LUCIOLE MEDIA IMAGE CAMION.png'
import scndimgCamionTHRDSection from '../assets/img/LUCIOLE MEDIA CAMION 2.png'
import imgcamionBack from '../assets/img/Camion_3.png'
import FVTHimgCamion from '../assets/img/Camion_4.png'


const Accueil = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [addAnimation, setAddAnimation] = useState('');

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setAddAnimation('animate__animated');
    }, 3200);
    return () => {
      clearTimeout(animationTimer); // curăță timerul când componenta este demontată
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://luciolemedia.fr/send.php', formData)
      .then(response => {
        if (response.data.sent) {
          alert('Le message a été envoyé avec succès ! Merci.');
        } else {
          alert("Erreur lors de l'envoi du message.");
        }
      })
      .catch(error => {
        console.error('There was an error sending the message!', error);
      });
  };

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true)

// create the smooth scroller FIRST!
ScrollSmoother.create({
  smooth: 2,
  effects: true,
});

/*GSAP ANIMATIONS*/
  gsap.to("#informations", {
    scrollTrigger: {
      trigger: "#informations",
      start: "top center",
      end: "bottom center",
      // markers: true,
      scrub: 2,
    },
    y: 200,
    opacity: 1,
  });

  gsap.to("#frstCharacter", {
    scrollTrigger: {
      trigger: "#informations",
      start: "top center",
      end: "bottom center",
      // markers: true,
      scrub: 2,
    },
    x: -100,
    display: "flex",
    opacity: 1,
  });
  gsap.to("#scndCharacter", {
    scrollTrigger: {
      trigger: "#informations",
      start: "top center",
      end: "bottom center",
      // markers: true,
      scrub: 2,
    },
    x: 100,
    display: "flex",
    opacity: 1,
  });
  gsap.to("#thrdCharacter", {
    scrollTrigger: {
      trigger: "#informations",
      start: "top center",
      end: "bottom center",
      // markers: true,
      scrub: 2,
    },
    x: 150,
    display: "flex",
    opacity: 1,
  });

  gsap.to("#details", {
    scrollTrigger: {
      trigger: "#details",
      start: "top center",
      end: "bottom center",
      // markers: true,
      scrub: 2,
    },
    y: 120,
    opacity: 1,
  });
  gsap.to("#fourthSection", {
    scrollTrigger: {
      trigger: "#fourthSection",
      start: "top center",
      end: "bottom center",
      // markers: true,
      scrub: 2,
    },
    y: 120,
    opacity: 1,
  });

  gsap.to("#fivethSection", {
    scrollTrigger: {
      trigger: "#fivethSection",
      start: "top center",
      end: "bottom center",
      // markers: true,
      scrub: 2,
    },
    y: 50,
    opacity: 1,
  });

  gsap.to("#contact", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top center",
      end: "bottom center",
      // markers: true,
      scrub: 2,
    },
    y: 50,
    opacity: 1,
  });

/*GSAP ANIMATIONS*/

  return (
    <>
    <div id="smooth-wrapper">
      <div id="smooth-content">

    <div className={`${classes.MainContainer} container-fluid`}>
      <div className={`container`}>
        <div className='row'>
          <section className={`${classes.IntroSection} col-12`}>
              <div className={`${classes.camionSection}`}>
                <img src={backgroundCamion} alt="" className={`${classes.backgroundCamion} ${addAnimation} animate__fadeIn`}/>
                <div className={`${classes.camionText}`}>
                  <h1 className={`${addAnimation} animate__fadeInLeft`}>illuminez</h1>
                  <p className={`${addAnimation} animate__fadeInRight`}>votre&nbsp;marque</p>
                </div>
                <img src={camionImg} alt="" className={`${classes.camionImg} ${addAnimation} animate__fadeInRight`} />
              </div>
              <div className={`${classes.IntroText} ${addAnimation} animate__fadeInUp`} id='informationsLink'>
                  <h2>vivez une experience digitale unique</h2>
                  <p>
                    luciole media, specialiste en solutions d'affichages digitales et dynamiques, propose les meilleurs services pour vos operations street marketing
                  </p>
              </div>  
          </section>
          <section className={`${classes.SecondSection} col-12`} id='informations'>
            <div>
              <div className={`${classes.proprietiesElements}`}>
                <div className={`${classes.frstCharacter}`} id='frstCharacter'>
                  <h1>1&nbsp;<span>million&nbsp;de&nbsp;led</span></h1>
                  <div>
                    <hr />
                    <p>aux couleurs vives et une luminosite exceptionelle</p>
                  </div>
                </div>
                <div className={`${classes.scndCharacter}`} id='scndCharacter'>
                  <img src={speakersImg} alt="" />
                    <div>
                      <h2>hauts&nbsp;parleurs</h2>
                      <h2>ultra&nbsp;performants</h2>
                    </div>
                  <hr />
                </div>
                <div className={`${classes.thrdCharacter}`} id='thrdCharacter'>
                <img src={dimensionImg} alt="" />
                    <div>
                      <h2><span>diffusion&nbsp;sur</span></h2>
                      <h2>3&nbsp;<span>ecrans&nbsp;de&nbsp;</span>20m<sup>2</sup></h2>
                    </div>
                  <hr />
                </div>
              </div>

              <img src={camionTopCamera} alt="" className={`${classes.SCNDcamionTop}`} /> 
               
            </div>
          </section>
          <section className={`${classes.ThirdSetion} col-12`} id='details'>
            <div>
              <h1>pourquoi&nbsp;nous&nbsp;choisir?</h1>
            </div>
            <div className={`${classes.THRDcontentContainer} row`}>
              <div className={`${classes.THRDimgContainer} col-12 col-lg-6`} >
                <img src={frstimgCamionTHRDSection} alt="" style={{rotate: "-5deg"}} />
                <img src={scndimgCamionTHRDSection} alt="" style={{rotate: "5deg"}}/>
              </div>
              <div className={`${classes.THRDtextContainer} col-12 col-lg-6`}>
                <h1>un&nbsp;ciblage&nbsp;geographique</h1>
                <span>94%</span>
                <h3>taux&nbsp;de&nbsp;sensibilisation et&nbsp;perception&nbsp;affichage&nbsp;statique</h3>
                <p>choisissez les itineraires strategiques pour atteindre votre public cible exactement la ou ils se trouvent.</p>
              </div>
            </div>
          </section>
          <section className={`${classes.FourthSection} col-12`} id='fourthSection'>
            <div className={`${classes.FRTHTextContainer}`} >
              <h1>un&nbsp;impact&nbsp;memorable</h1>
              <div className={`${classes.FRTHNumbers}`}>
                <div>
                  <span>59%</span>
                  <h4>taux de <br />memorisation</h4>
                </div>
                <div>
                <span>75%</span>
                  <h4>taux <br /> d'attention</h4>
                </div>
              </div>
              <p>avec <span>20m<sup>2</sup> d'affichage digital dynamique et un systeme audio stereo performant. marques les espirits avec une publicite innovante et moderne</span></p>
            </div>
            <div className={`${classes.FRTHimgContainer}`}>
              <img src={imgcamionBack} alt="" />
            </div>
            
          </section>
          <section className={`${classes.FivethSection} col-12`} id='fivethSection'>
            <div className={`${classes.FVTHimgContainer}`}>
              <img src={FVTHimgCamion} alt="" />
            </div>
            <div className={`${classes.FVTHtextContainer}`}>
              <h1>statique&nbsp;ou&nbsp;mobile</h1>
              <span>-29%</span>
              <h5>cout contact versus affichage statique</h5>
              <p>les videos et les animations dynamiques sur nos camions led restent graves dans l'espirit des spectateurs. Generant un imapact durable.</p>
            </div>
          </section>
          <section className={`${classes.ContactSection} col-12`} id='contact'>
            <div>
              <h1>Nous Contacter</h1>
              <p>Collaborons et transformons vos idées en réalité.</p>
              <hr />
              </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                </div>
                <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Telephone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <input
                  type="text"
                  name="message"
                  placeholder="Message (optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></input>
                </div>
                <button className={`${classes.SendButton}`} type="submit">Envoyer</button>
              </form>
            </div>
          
          </section>
        </div>
      </div>
    </div>

          <Footer />
        </div>
    </div>
    </>
  )
}

export default Accueil