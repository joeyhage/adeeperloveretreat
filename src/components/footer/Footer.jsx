import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends React.Component {

	render() {
		return (
      <React.Fragment>
        <div className='container'>
          <h2 className='title has-text-centered is-uppercase is-size-2-desktop is-size-4-touch' id='date-your-spouse'>#DateYourSpouse</h2>
        </div>
        <footer className='footer'>
          <div className='content has-text-centered-touch has-text-left-desktop'>
            <h6>
              <Link className='has-text-dark' to='/contact-us'>
                <span className='icon' title='Contact Us - A Deeper Love Marriage Retreat'>
                  <FontAwesomeIcon icon={faEnvelope} alt='Contact Us - A Deeper Love Marriage Retreat' />
                </span>
                &nbsp;Contact Us
              </Link>
            </h6>
            <p className='is-size-7 has-text-dark'>
              &copy; {new Date().getFullYear()}, <Link className='has-text-dark' to='/'>A Deeper Love Marriage Retreat</Link>
            </p>
          </div>
        </footer>
      </React.Fragment>
		);
	}
}