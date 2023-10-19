import React from 'react'
import Navbar from './elements/Navbar'
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

const Accueil = () => {
  return (
    <>
    <Navbar />
    <div className={`${classes.MainContainer} container-fluid`}>
      <div className={`container`}>
        <div className='row'>
          <section className={`${classes.IntroSection} col-12`}>
              <div className={`${classes.camionSection}`}>
                <img src={backgroundCamion} alt="" className={`${classes.backgroundCamion}`}/>
                <div className={`${classes.camionText}`}>
                  <h1>illuminez</h1>
                  <p>votre&nbsp;marque</p>
                </div>
                <img src={camionImg} alt="" className={`${classes.camionImg}`} />
              </div>
              <div className={`${classes.IntroText}`}>
                  <h2>vivez une experience phygitale unique</h2>
                  <p>
                    luciole media, specialiste en solutions d'affichages difitales et dynamiques, propose les meilleurs services pour vos operations street marketing
                  </p>
              </div>  
          </section>
          <section className={`${classes.SecondSection} col-12`}>
            <div>
              <div className={`${classes.proprietiesElements}`}>
                <div className={`${classes.frstCharacter}`}>
                  <h1>1&nbsp;<span>million&nbsp;de&nbsp;led</span></h1>
                  <div>
                    <hr />
                    <p>aux couleurs vives et une luminosite exceptionelle</p>
                  </div>
                </div>
                <div className={`${classes.scndCharacter}`}>
                  <img src={speakersImg} alt="" />
                    <div>
                      <h2>hauts&nbsp;parleurs</h2>
                      <h2>ultra&nbsp;performants</h2>
                    </div>
                  <hr />
                </div>
                <div className={`${classes.thrdCharacter}`}>
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
          <section className={`${classes.ThirdSetion} col-12`}>
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
          <section className={`${classes.FourthSection} col-12`}>
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
          <section className={`${classes.FivethSection} col-12`}>
            <div>

            </div>
            <div>
              
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Accueil