import React from 'react'
import NewsletterForm from '../newsletterForm/NewsletterForm'
import cl from './Footer.module.css'
import clApp from '../../App.module.css'
import image1 from '../../images/footer/footer_image1.svg'
import image2 from '../../images/footer/footer_image2.svg'
import image3 from '../../images/footer/footer_image3.svg'
import image4 from '../../images/footer/footer_image4.svg'
import image5 from '../../images/footer/footer_image5.svg'
import image6 from '../../images/footer/footer_image6.svg'
import image7 from '../../images/footer/footer_image7.svg'
import image8 from '../../images/footer/footer_image8.svg'
import image9 from '../../images/footer/footer_image9.svg'

const Footer = () => {
  return (
    <div className={cl.footer}>
      <div className={cl.footer__inner + ' ' + clApp.container}>
        <div className={cl.footer__row}>
          <div className={cl.footer__warning + ' ' + cl.footer__text_left}>
            <h3 className={cl.footer__title}>Proposition 65 Warning</h3>
            <p className={cl.footer__text}>
              WARNING: Drinking distilled spirits, beer, coolers, wine and other
              alcoholic beverages may increase cancer risk, and, during
              pregnancy, can cause birth defects. For more information go to
              www.P65Warnings.ca.gov/alcohol
            </p>
          </div>
          <div className={cl.footer__newsletter + ' ' + cl.footer__text_center}>
            <h3 className={cl.footer__title}>Newsletter</h3>
            <p className={cl.footer__text + ' ' + cl.footer__text_center}>
              Subscribe to be the first to hear about our exclusive offers and
              latest arrivals.
            </p>
            <NewsletterForm></NewsletterForm>
          </div>
          <div className={cl.footer__resources + ' ' + cl.footer__text_right}>
            <h3 className={cl.footer__title}>Resources</h3>
            <ul className={cl.footer__list}>
              <li className={cl.footer__listitem}>
                <a>Terms and Conditions</a>
              </li>
              <li className={cl.footer__listitem}>
                <a>Privacy Policy</a>
              </li>
              <li className={cl.footer__listitem}>
                <a>Shipping & Returns</a>
              </li>
              <li className={cl.footer__listitem}>
                <a>Contact Us</a>
              </li>
              <li className={cl.footer__listitem}>
                <a>Order Tracking</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={cl.footer__payments}>
          <h3 className={cl.footer__paytitle}>
            Accepted <p className={cl.footer__subtitle}>Payments</p>
          </h3>
          <div className={cl.footer__images}>
            <img src={image1} className={cl.footer__image}></img>
            <img src={image2} className={cl.footer__image}></img>
            <img src={image3} className={cl.footer__image}></img>
            <img src={image4} className={cl.footer__image}></img>
            <img src={image5} className={cl.footer__image}></img>
            <img src={image6} className={cl.footer__image}></img>
            <img src={image7} className={cl.footer__image}></img>
            <img src={image8} className={cl.footer__image}></img>
            <img src={image9} className={cl.footer__image}></img>
          </div>
        </div>
        <p className={cl.footer__please}>Please Drink Responsibly</p>
        <p className={cl.footer__copy}>© 2024, DrinkOasis</p>
      </div>
    </div>
  )
}

export default Footer
