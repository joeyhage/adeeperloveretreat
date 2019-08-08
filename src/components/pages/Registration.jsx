import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

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
          <div className='column is-4'>
            <div className='tile is-ancestor'>
              <div className='tile is-vertical is-12'>
                <div className='tile'>
                  <div className='tile is-parent is-vertical is-12'>
                    <article className='tile is-child notification' style={{ backgroundColor: 'hsl(324,7%,41%)' }}>
                      <p className='heading is-uppercase is-size-5 has-text-weight-bold'>Details</p>
                      <p className='subtitle'>
                        The retreat this year will run from approximately 9am to 8pm and will include adoration,
                        confession,
                        speakers, one-on-one time with your spouse, lots of food, a group date, and mass! Check out our
                        speakers and the rest of the team <Link to='/our-team'>here</Link>.
                      </p>
                    </article>
                    <article className='tile is-child notification' style={{ backgroundColor: 'hsl(324,7%,51%)' }}>
                      <p className='heading is-uppercase is-size-5 has-text-weight-bold'>FAQ</p>
                      <div className='subtitle'>
                        <ol className='is-size-6'>
                          <li>What should we wear?</li>
                          Comfortable clothes that you can play yard games in and have a picnic lunch
                          with spouse but nice enough for mass.
                          <li>Can babies or kid come?</li>
                          Babies are welcome. We will have some baby swings, bouncers, and one crib.
                          We are trying to keep the retreat as quiet and calm as possible so we will not have
                          babysitting this year.
                          <li>Will food being provided and what if I have allergies</li>
                          We will have snacks. We also have an amazing donor who is donating our picnic lunch date with spouse.
                          We will have gluten free and dairy free options. but please feel free to bring anything you need.
                          Couples who signed up on sign-up genius also has donated food for the retreat.
                          Every couple will bring a side dish to share for dinner.
                          <li>What will our date include during lunch?</li>
                          We will have a picnic lunch provided. There will be yard games, archery, a trampoline, a zipline,
                          an above ground pool, and plenty of space to walk on the road, in between corn fields, or the property.
                          We will also have directions so you can go to the berry patch or a fun place to go explore on
                          a nature walk.
                          You can also go into Ames or Nevada since you will have two hours but time goes by fast!
                          <li>If we have other plans can we come late or leave early?</li>
                          You can leave whenever you need to. But we would like for you to pray about coming the full
                          day. If you still can’t stay for the whole day, pray about having another couple fill in your spots.
                          <li>If I bring my baby, can I have a quiet place to rock, nurse, or pump?</li>
                          Yes, babies are welcome. Please let me know beforehand so we can have a special room set up
                          for you to feel comfortable and a crib and baby monitor ready for you. We will have baby
                          bouncy seats and a Rock 'n Play if needed.
                          <li>I can’t find a babysitter. What should we do?</li>
                          <Link to='/contact-us'>Contact us</Link> and we will find you one!
                          <li>Do we need to come to confession, adoration, praise, and worship?</li>
                          You do not. If you prefer to not participate in any of the morning prayer service, please
                          let me know because we would love your help with parking and welcoming people.
                          <li>What if it's too hot for me or babies to be outside for our date?</li>
                          We would love to provide a game in our house for you. Or if you just want to rest in one
                          of our beds, please do! We have two spare bedrooms and plenty of couches inside.
                          <li>Do we have to be there right at 9am?</li>
                          Adoration, confession, and praise and worship are come when you can. We just don’t want Father
                          waiting around to hear confessions. A final schedule will go out closer to the retreat.
                          <li>When is mass and does it count for Sunday?</li>
                          Mass will be Saturday night after Father Andrew is done at his church closer to 7pm.
                          Mass will count for Sunday and will include the Sunday readings.
                          <li>Have a question not answered here?</li>
                          <Link to='/contact-us'>Contact us!</Link>
                        </ol>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='column is-narrow'>
            <iframe
              style={{ height: '1350px' }}
              title='A Deeper Love Marriage Retreat Registration'
              src='https://docs.google.com/forms/d/e/1FAIpQLSciZyyoEvxHpVRstDKuYmF4dbn7MmAd4oE4jFu4Lxk5LaTRBg/viewform?embedded=true'
              width='640' height='1350' marginWidth='0'>Loading...
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}
