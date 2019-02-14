import React from 'react';
import { Helmet } from 'react-helmet';

export default class Registration extends React.Component {

	render() {
		return (
			<div id='events-page' className='has-background-white'>
				<Helmet>
					<title>Registration - A Deeper Love Marriage Retreat</title>
          <meta name='description' content='Registration - A Deeper Love Marriage Retreat. The next retreat is August 17th, 2019!' />
				</Helmet>
        <section className='hero is-medium has-bg-img'></section>
        <h1 className='title is-size-1-desktop is-size-3-touch has-text-centered'>August 17th, 2019 Retreat</h1>
        <section className='section' style={{marginRight:'15vw', marginLeft:'15vw'}}> 
            <p className='subtitle is-size-4-desktop is-size-4-touch has-text-centered'>
              Please stay tuned for further details and a confirmed date.
              <br/> We look forward to helping you find A Deeper Love in your marriage!
            </p>
          <p className='subtitle is-size-4-desktop is-size-4-touch has-text-centered'>Please use the form below or click <a href='https://goo.gl/forms/BL2ADtGp64duZN2l1' target='_blank'>here</a> to register</p>
        </section>
        <div className='columns is-centered'>
          <div className='column is-5'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSciZyyoEvxHpVRstDKuYmF4dbn7MmAd4oE4jFu4Lxk5LaTRBg/viewform?embedded=true" 
                width="100%" height="1250">Loading...</iframe>
          </div>
        </div>
			</div>
		);
	}
}