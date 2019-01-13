import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export default class Testimonials extends React.Component {

	render() {
		return (
			<div id='testimonials-page' className='has-background-white'>
				<Helmet>
					<title>Testimonials - A Deeper Love Marriage Retreat</title>
        </Helmet>
        <h1 className='title has-text-centered is-uppercase is-size-1-desktop is-size-3-touch'>Testimonials</h1>
        <div className='container'>
          <div className='tile is-ancestor'>
            <div className='tile is-vertical is-12'>
              <div className='tile'>
                <div className='tile is-parent is-vertical'>
                  <article className='tile is-child notification' style={{backgroundColor:'#8a94a9'}}>
                    <p className='subtitle has-text-justified' style={{color:'#FFF'}}><FontAwesomeIcon icon={faQuoteLeft} alt='Quote Left' /> For the first time in 4 years of marriage my husband & I chose to go on a marriage retreat. 
                    This retreat was life changing for us & taught us the importance of making this an annual occurance.  
                    We enjoyed the time to go out on a date during the retreat, the daycare provided by the planning committee, 
                    & the ability to connect with other married couples with small children.  Some of my favorite parts of the day 
                    were listening to the variety of speakers, the music, but then also the potluck dinner at the end of the day.  
                    For a couple that both work & have a little one, we appreciated a retreat that we could do for just the day.  
                    It made it very manageable, but yet a great experience. <FontAwesomeIcon icon={faQuoteRight} alt='Quote Right' /></p>
                    <p className='subtitle has-text-justified is-italic is-uppercase'style={{color:'#FFF'}}> -Breanne and Sam K. </p>
                  </article>
                  <article className='tile is-child notification'style={{backgroundColor:'#6d7993'}}>
                    <p className='subtitle' style={{color:'#FFF'}}><FontAwesomeIcon icon={faQuoteLeft} alt='Quote Left' /> We enjoyed taking some time for to focus on just us and not the needs
                      of the kids for a day. It was also great to be surrounded by so many other faithful couples. 
                      What a relaxing day to reconnect!<FontAwesomeIcon icon={faQuoteRight} alt='Quote Right' /> </p>
                      <p className='subtitle has-text-justified is-italic is-uppercase'style={{color:'#FFF'}}> -Kayla and Kyle </p>
                  </article>
                  <article className='tile is-child notification'style={{backgroundColor:'#576176'}}>
                    
                    <p className='subtitle'style={{color:'#FFF'}}><FontAwesomeIcon icon={faQuoteLeft} alt='Quote Left' /> My husband and I felt spoiled by a whole day to nourish our relationship! 
                      The marriage retreat provided fun fellowship with other couples, refreshing prayer, inspirational talks, and a long 
                      lunch date to share our hearts with each other in regards to everything we were experiencing. Since we've been back 
                      in the daily grind, I've been motivated to love better by looking back at moments that struck me from the retreat. <FontAwesomeIcon icon={faQuoteRight} alt='Quote Right' /></p>
                    <p className='subtitle has-text-justified is-italic is-uppercase'style={{color:'#FFF'}}> -Tessa and Roberto </p>
                  </article>
                </div>
                <div className='tile is-parent'>
                  <article className='tile is-child notification' style={{backgroundColor:'#9099A2'}}>
                    <figure className='image is-2by3'>
                      <img src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2FWedding_BW_DLRetreat.jpg?1543636255321' alt='Newlyweds' />
                    </figure>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
} 
