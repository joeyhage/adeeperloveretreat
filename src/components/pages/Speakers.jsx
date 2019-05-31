import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Speakers extends Component {

  render() {
    return (
      <div id='speakers-page' className='has-background-white'>
        <Helmet>
          <title>Speakers - A Deeper Love Marriage Retreat</title>
        </Helmet>
        <h1 className='title has-text-centered is-size-1-desktop is-size-3-touch'>Speakers</h1>
        <div className='container'>
          <div className='tile is-ancestor'>
            <div className='tile is-12'>
              <div className='tile is-parent is-4'>
                <article className='tile is-child' style={{ backgroundColor: 'hsl(324,7%,41%)' }}>
                  <img src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2Fwheeler.jpg?1557956603451'
                       alt='Tyler and Lynette Wheeler' />
                  <p className='heading is-uppercase is-size-5 has-text-weight-bold has-text-white has-text-centered'>
                    Tyler &amp; Lynette Wheeler
                  </p>
                  <p className='subtitle has-text-white has-text-centered'>Tyler and Lynette have been married for 11
                    years. They have 5 children: Isaiah, Dominic, Philip, Maria, and Clare. They live on a farm in
                    Northeast Iowa where the kids can swim in the river, chase chickens, and tame barn cats. Tyler works
                    as a pastoral associate for St. Benedict parish in Decorah and Lynette homeschools the children.</p>
                </article>
              </div>
              <div className='tile is-parent is-4'>
                <article className='tile is-child' style={{ backgroundColor: 'hsl(324,7%,41%)' }}>
                  <img src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2Fschmidt.png?1557956605019'
                       alt='Deacon Joel and Lisa Schmidt' />
                  <p className='heading is-uppercase is-size-5 has-text-weight-bold has-text-white has-text-centered'>
                    Deacon Joel &amp; Lisa Schmidt
                  </p>
                  <p className='subtitle has-text-white has-text-centered'>
                    One is a non-practicing public administrator; the other is a non-practicing biochemist. More
                    importantly, they are married, practicing Catholics with four children. Feeling
                    called to do their share in evangelizing the digital continent, Deacon Joel and Lisa launched The
                    Practicing Catholic in 2010 where they write about living an intentional, joyful Catholic life.
                    In their presentations, they provide witness to the adventure of living an integrated Catholic life
                    24 hours a day, 7 days a week, 365 days a year.
                  </p>
                </article>
              </div>
              <div className='tile is-parent is-4'>
                <article className='tile is-child notification' style={{ backgroundColor: 'hsl(324,7%,41%)' }}>
                  <img src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2FFB_IMG_1557852950179.jpg?1559270096046'
                       alt='Pat and Mindy Stahr' />
                  <p className='heading is-uppercase is-size-5 has-text-weight-bold has-text-white has-text-centered'>
                    Pat &amp; Mindy Stahr
                  </p>
                  <p className='subtitle has-text-white has-text-centered'>
                    Great communication in marriage is a skill that you can learn. It takes practice. Pat and Mindy
                    Stahr have been practicing the skill for over 30 years. By no means have they perfected it! Their
                    marriage has born the fruit of 5 amazing children, Isaac (21), Joel (19), Elijah (17), Peter (15),
                    and Clare (13). Their marriage has taken them across the planet to serve in the Peace Corps
                    and with Bana Ba Ditlou in Botswana. Their particular passion has been to serve in various
                    capacities with young Catholics through Life Teen, Confirmation formation, Y Disciple, coaching,
                    mentoring, and through Scouting. They are involved with many ministries at St. Cecilia Church in
                    Ames.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;