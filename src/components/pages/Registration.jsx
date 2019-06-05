import React from 'react';
import { Helmet } from 'react-helmet';

export default class Registration extends React.Component {

  render() {
    return (
      <div id='events-page' className='has-background-white'>
        <Helmet>
          <title>Registration - A Deeper Love Marriage Retreat</title>
          <meta name='description'
                content='Registration - A Deeper Love Marriage Retreat. The next retreat is August 17th, 2019!' />
        </Helmet>
        <section className='hero is-medium has-bg-img' />
        <h1 className='title is-size-1-desktop is-size-3-touch has-text-centered'>August 17th, 2019 Retreat</h1>
        <div className='columns is-centered' style={{ minHeight: '1250px' }}>
          <div className='column is-5'>
            <iframe
              style={{ height: '1250px' }}
              title='A Deeper Love Marriage Retreat Registration'
              src='https://docs.google.com/forms/d/e/1FAIpQLSciZyyoEvxHpVRstDKuYmF4dbn7MmAd4oE4jFu4Lxk5LaTRBg/viewform?embedded=true'
              width='640' height='1250' marginWidth='0'>Loading...
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}
