import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Carousel from '../common/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {

	render() {
		return (
			<div id='home-page' className='has-background-white'>
				<Helmet>
					<title>Home - A Deeper Love Marriage Retreat</title>
				</Helmet>
				<Carousel images={[
            {src: 'https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2Fcouple-piggyback.jpg?1542489921589', alt:'Couple Piggyback'},
            {src: 'https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2Fadult-adventure-baby.jpg?1542489922625', alt: 'Adventure & Baby'},
            {src: 'https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2FSpiritual-intimacy.png?1542491566701', alt: 'Spiritual Intimacy'},
            {src: 'https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2Fanniversary.jpg?1542489922589', alt: 'Anniversary'}
          ]} />
        <section className='section'>
          <div className='columns'>
            <div className='column'/>
            <div className='column is-two-fifths'>
              <figure className='image is-3by1'>
                <img src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2FMarriage%20Retreat%20Logo%203.png?1547356049327' alt='Horizontal Logo'/>
              </figure>
            </div>
            <div className='column'/>
          </div>
        </section>
        <section className='section'>
                    <div className='container' style={{backgroundColor:'#96858F', padding:'1em', borderRadius:'4px'}}>
            <div style={{backgroundColor:'#D5D5D5', padding:'.8em'}}>
              <p className='title has-text-centered is-uppercase is-size-3-desktop is-size-5-touch'>
                Join us in Fall 2019 for our 3rd Annual Marriage Retreat
              </p>
            </div>
          </div>
        <section className='section'>
          <div className='columns'>
            <div className='column'>
                <p className='subtitle has-text-centered is-size-4' style={{color:'#6D7993'}}><FontAwesomeIcon icon={faQuoteLeft} alt='Quote Left' />&nbsp;We enjoyed taking some time for to focus on just us and not the needs
                  of the kids for a day. It was also great to be surrounded by so many other faithful couples. 
                  What a relaxing day to reconnect!&nbsp;<FontAwesomeIcon icon={faQuoteRight} alt='Quote Right' /> 
                </p>
                  <p className='subtitle has-text-centered is-italic is-uppercase'style={{color:'#6D7993'}}> -Jessica and Ryan </p>
            </div>
            <div className='column'>
              <Link to='/testimonials' className='button is-size-4-desktop is-size-6-touch has-text-weight-semibold is-uppercase' style={{margin:'auto', display:'flex'}}>More Testimonials!</Link>
            </div>
          </div>
          </section>
                  

        </section>
        <section className='section'>
          <div className='columns'>
            <div className='column is-one-third is-offset-one-third'>
                <figure className='image is-square'>
                    <img src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2FZelie%20and%20Louie.jpg?1544392032858' 
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