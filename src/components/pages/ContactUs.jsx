import React from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import InputGroup from '../common/InputGroup';

let submitSuccess = false;
export default class ContactUs extends React.Component {
  
  constructor(props) {
      super(props);
      this.state = {
        submitSuccess: submitSuccess,
        submitAttempted: false,
        submitting: false,
        numErrors: 0,
        serverError: false,
        contactInfo: {
          name: '',
          emailAddress: '',
          phoneNumber: '',
          message: ''
        }
      };
      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleReset = this._handleReset.bind(this);
  }

	render() {
    const submitBtnClasses = classNames('button', 'is-link', { 'is-loading': this.state.submitting });
		return (
      <div style={{backgroundColor:'hsl(325,7%,87%)'}}>
      <div className='container is-fluid'>
        <Helmet>
          <title>Contact Us - A Deeper Love Marriage Retreat</title>
        </Helmet>
        <h1 className='title has-text-centered is-size-1-desktop is-size-3-touch'>
            Contact Us
        </h1>
        {this.state.serverError &&
          <div className='columns is-centered'>
            <div className='is-6'>
              <article className='message is-danger'>
                <div className='message-header'>
                  <p className='is-uppercase'>Error</p>
                </div>
                <div className='message-body'>
                  Our apologies; an error occurred. Please contact us at&nbsp; 
                  <a href='mailto:adeeperloveretreat@gmail.com?subject=A Deeper Love Marriage Retreat' target='_blank'>
                    adeeperloveretreat@gmail.com
                  </a>
                </div>
              </article>
            </div>
          </div>
        }
        {this.state.submitSuccess ?
          <div className='columns is-centered'>
            <div className='is-6'>
              <article className='message is-success'>
                <div className='message-header'>
                  <p className='is-uppercase'>Success</p>
                </div>
                <div className='message-body'>
                  Thank you! We will be in touch soon.
                </div>
              </article>
            </div>
          </div> :
            <div id='contactus-page' className='tile is-ancestor'>
              <div className='tile is-vertical is-12'>
                <div className='tile'>
                  <div className='tile is-3'></div>
                  <div className='tile is-parent is-vertical is-6' style={{marginBottom:'10vh', backgroundColor:'#96858F', borderRadius:'10px'}}>
                    <article className='tile is-child notification'>
                      <form onSubmit={this._handleSubmit} onReset={this._handleReset}>
                        <InputGroup controlType='input' id='name' className='input' type='text' label='Name' icon={faUser}
                                    value={this.state.contactInfo.name} handleChange={this._handleChange} submitAttempted={this.state.submitAttempted} />
                        <InputGroup controlType='input' id='emailAddress' className='input' type='email' label='Email' icon={faEnvelope}
                                    value={this.state.contactInfo.emailAddress} handleChange={this._handleChange} submitAttempted={this.state.submitAttempted} />
                        <InputGroup controlType='maskedInput' id='phoneNumber' className='input' type='tel' label='Phone Number' icon={faPhone}
                                    mask={['(', /[2-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                    value={this.state.contactInfo.phoneNumber} handleChange={this._handleChange} submitAttempted={this.state.submitAttempted} />
                        <InputGroup controlType='textarea' id='message' className='textarea' label='Message'
                                    value={this.state.contactInfo.message} handleChange={this._handleChange} submitAttempted={this.state.submitAttempted} />
                        <div className='field is-grouped'>
                          <div className='control'>
                            <button className={submitBtnClasses} type='submit' disabled={this.state.submitting} style={{backgroundColor:'#96858F'}}>
                              Submit
                            </button>
                          </div>
                          <div className='control' style={{color:'#96858F'}}>
                            <button className='button is-text' type='reset' disabled={this.state.submitting}>
                              Reset
                            </button>
                          </div>
                        </div>
                    </form>  
                    </article>
                  </div>
                </div>
            </div>
          </div>
        }
      </div>
      </div>
		);
	}
  
  _handleChange({id, value}) {
    this.setState({
      contactInfo: {
          ...this.state.contactInfo,
          [id]: value
      }
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
    const numErrors = this._getErrorCount();
    this.setState({ numErrors, submitAttempted: true, submitting: true });

    if (numErrors === 0) {
      const { name, emailAddress, phoneNumber, message } = this.state.contactInfo;
      fetch('https://www.jmhage.com/api/mail/adeeperloveretreat/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          emailAddress,
          phoneNumber,
          message
        })
      }).then(res => {
        this.setState({ submitting: false });
        if (res.ok) {
          this.setState({ submitSuccess: true });
          submitSuccess = true;
        } else {
          this.setState({ serverError: true });
        }
        window.scrollTo(0, 0);
      }).catch(err => {
        this.setState({ submitting: false, serverError: true });
        console.error(err);
        window.scrollTo(0, 0);
      });
    } else {
      window.scrollTo(0, 0);
      this.setState({ submitting: false });
    }
  }
  
  _handleReset(event) {
    event.preventDefault();
    this.setState({
      submitAttempted: false,
      contactInfo: {
        name: '',
        emailAddress: '',
        phoneNumber: '',
        message: ''
      }
    });
  }
  
  _getErrorCount() {
    let errorCount = 0;
    for (const id in this.state.contactInfo) {
      if (InputGroup.hasError(id, this.state.contactInfo[id])) {
        errorCount++;
      }
    }
    return errorCount;
  }
}