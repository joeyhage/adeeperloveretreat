import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActiveNavbar: false
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  render() {
    const burgerClass = classNames('navbar-burger', 'burger', {
      'is-active': this.state.isActiveNavbar
    });
    const navigationClass = classNames('navbar-menu', {
      'is-active': this.state.isActiveNavbar
    });
    return (
      <nav className='navbar is-light'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              <img
                src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2FDeeper%20Love%20Logo.png?1543364449888'
                alt='A Deeper Love Marriage Retreat' width='100px' />
            </Link>
            <div className={burgerClass} data-target='navigation' onClick={this.toggleNavbar}>
              <span />
              <span />
              <span />
              <br />
              <p>Menu</p>
            </div>
          </div>
          <div id='navigation' className={navigationClass}>
            <div className='navbar-start' />
            <div className='navbar-end'>
              <NavItem to='/' location={this.props.location}>
                Home
              </NavItem>
              <NavItem to='/about' location={this.props.location}>
                About
              </NavItem>
              <NavItem to='/our-team' location={this.props.location}>
                Our Team
              </NavItem>
              <NavItem to='/registration' location={this.props.location}>
                Registration
              </NavItem>
              <NavItem to='/testimonials' location={this.props.location}>
                Testimonials
              </NavItem>
              <NavItem to='/contact-us' location={this.props.location}>
                Contact Us
              </NavItem>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({ isActiveNavbar: false });
    }
  }

  toggleNavbar() {
    this.setState(prevState => ({ isActiveNavbar: !prevState.isActiveNavbar }));
  }
}

export default Header;
