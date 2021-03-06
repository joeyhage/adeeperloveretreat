import React from 'react';
import { withRouter } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

import Footer from './footer/Footer';
import Header from './header/Header';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Event from './pages/Event';
import About from './pages/About';
import OurTeam from './pages/OurTeam';
import Testimonials from './pages/Testimonials';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header location={this.props.location} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/our-team' component={OurTeam} />
          <Route exact path='/event' component={Event} />
          <Redirect exact from='/registration' to='/event' />
          <Route exact path='/testimonials' component={Testimonials} />
          <Route exact path='/contact-us' component={ContactUs} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
}

export default withRouter(App);
