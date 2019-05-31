import React from 'react';
import { withRouter } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

import Footer from './footer/Footer';
import Header from './header/Header';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Registration from './pages/Registration';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Testimonials from './pages/Testimonials';

class App extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <Header location={this.props.location} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/speakers' component={Speakers} />
          <Route exact path='/registration' component={Registration} />
          <Route exact path='/testimonials' component={Testimonials} />
          <Route exact path='/contact-us' component={ContactUs} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
}

export default withRouter(App);
