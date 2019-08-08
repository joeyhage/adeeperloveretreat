import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {

  render() {
    return (
      <div id='home-page' className='has-background-white'>
        <Helmet>
          <title>A Deeper Love Marriage Retreat</title>
          <meta name='description'
                content='A Deeper Love Marriage Retreat - Ames, IA. The next retreat is August 17th, 2019!' />
        </Helmet>
        <Carousel autoplay wrapAround pauseOnHover={false} autoplayInterval={10000} initialSlideHeight={400}>
          <img className='is-background'
               src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2Fcouple-piggyback.jpg?1542489921589'
               alt='Couple Piggyback' />
          <img className='is-background'
               src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2Fadult-adventure-baby.jpg?1542489922625'
               alt='Adventure & Baby' />
          <img className='is-background'
               src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2FSpiritual-intimacy.png?1542491566701'
               alt='Spiritual Intimacy' />
          <img className='is-background'
               src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2Fanniversary.jpg?1542489922589'
               alt='Anniversary' />
        </Carousel>
        <section className='section'>
          <div className='columns is-centered'>
            <div className='column is-two-fifths'>
              <figure className='image is-3by1'>
                <img
                  src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2FMarriage%20Retreat%20Logo%203.png?1547356049327'
                  alt='Horizontal Logo' />
              </figure>
            </div>
          </div>
        </section>
        <div style={{ backgroundColor: 'hsl(221, 15%, 85%)', padding: '9vh 0' }}>
          <section className='section'>
            <div className='container' style={{ backgroundColor: '#6d7993', padding: '1em', borderRadius: '10px' }}>
              <div style={{ padding: '.8em' }}>
                <p
                  className='title has-text-centered is-uppercase is-size-3-desktop is-size-5-touch has-text-white-bis'>
                  Join us in August 2019 for our 3rd Annual Marriage Retreat
                </p>
                <div className='columns is-centered'>
                  <div className='column is-6'>
                    <img
                      src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2FSaveTheDate_Aug17_2019.png?1550114730928'
                      alt='Save the Date - August 17th, 2019'
                      style={{ maxHeight: '30em', display: 'block', margin: 'auto' }} />
                  </div>
                  <div className='column is-6 has-text-white-bis has-text-centered' id='retreat-details'>
                    <p>Click <Link to='/registration'>here</Link> to register!</p>
                    <hr />
                    <p><a href='https://bit.ly/2EJKJPd' target='_blank' rel='noopener noreferrer'>
                      Order t-shirts</a> for you and your spouse! All proceeds
                      will be used to pay for speakers at this year's event or held for next year's retreat
                    </p>
                    <hr />
                    <p>
                      Please consider donating food, drinks, supplies, or your time by completing our <a
                      href='https://bit.ly/2YXXkWs' target='_blank' rel='noopener noreferrer'>sign-up genius form
                    </a>. Thank you in advance!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr style={{
            width: '90vw',
            margin: 'auto',
            backgroundColor: 'hsl(0,0%,80%)',
            color: 'hsl(0,0%,70%)',
            borderStyle: 'dotted'
          }} />
          <section className='section'>
            <div className='columns is-centered'>
              <div className='column is-two-fifths'>
                <p className='subtitle has-text-centered is-size-4' style={{ color: '#6d7993' }}>
                  <FontAwesomeIcon icon={faQuoteLeft} alt='Quote Left' />&nbsp;
                  It was so refreshing to reconnect with each other through prayer, fellowship, and date time. It helped
                  us realize how important it is to find time to
                  focus for our marriage while raising our <span style={{ whiteSpace: 'nowrap' }}>children.&nbsp;
                  <FontAwesomeIcon icon={faQuoteRight} alt='Quote Right' /></span>
                </p>
                <p className='subtitle has-text-centered is-italic is-uppercase' style={{ color: '#6d7993' }}> -Jessica
                  and Ryan </p>
              </div>
              <div className='column is-1' />
              <div className='column is-one-third'>
                <Link to='/testimonials' className='button is-size-4 has-text-weight-semibold is-uppercase'
                      style={{ color: '#6d7993', margin: 'auto', display: 'flex' }}>
                  More Testimonials
                </Link>
              </div>
            </div>
          </section>
        </div>
        <section className='section'>
          <div className='columns'>
            <div className='column is-one-third is-offset-one-third'>
              <figure className='image is-square'>
                <img
                  src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2FZelie%20and%20Louie.jpg?1544392032858'
                  alt='A Call to a Deeper Love' />
              </figure>
            </div>
          </div>
        </section>
      </div>
    );
  }

  componentDidMount() {
    window.bulmaCarousel.attach();
  }
}