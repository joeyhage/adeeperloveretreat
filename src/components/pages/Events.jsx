import React from 'react';
import { Helmet } from 'react-helmet';

export default class Events extends React.Component {

	render() {
		return (
			<div id='events-page' className='has-background-white'>
				<Helmet>
					<title>Events - A Deeper Love Marriage Retreat</title>
				</Helmet>
        <section className='hero is-medium'>
          <img className='is-background' src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2FDeeperLoveRetreat.JPG?1543365322759' alt='A Deeper Love Retreat' />
        </section>
        <section className='section' style={{marginRight:'15vw', marginLeft:'15vw'}}>       
            <p className='title has-text-justified is-size-4-desktop is-size-6-touch'>
              With busy and chaotic lives, we often forget to focus on our marriages. Whether you 
              are newly married or have been married a long time, we would love for you and your spouse
              to leave behind the distractions of everyday life and come to the tranquility
              of the Weber Farm for the day and focus on the beauty God gave us in nature and 
              within our marriages. 
            </p>
            <p className='title has-text-justified is-size-4-desktop is-size-6-touch'>
              Due to the new venue and wanting to maintain the peacefulness of the farm, we 
              will not have babysitting provided this year. However, if you need assistance in 
              finding a reliable sitter, you may contact us for suggestions. 
            </p>
            <p className='title has-text-justified is-size-4-desktop is-size-6-touch'>
              Please stay tuned for further details and a confirmed date. We look forward
              to helping you find A Deeper Love in your marriage!
            </p>
        </section>
        <section className='section'>
          <div className='container' style={{backgroundColor:'#96858F', padding:'.8em', borderRadius:'4px'}}>
            <div style={{backgroundColor:'#D5D5D5', padding:'.8em'}}>
              <p className='title has-text-centered is-uppercase is-size-2-desktop is-size-4-touch'>MORE INFORMATION COMING SOON!</p>
            </div>
          </div>
        </section>

        <section className='column'> </section>
			</div>
		);
	}
}