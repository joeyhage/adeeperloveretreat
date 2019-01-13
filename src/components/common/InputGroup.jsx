import React from 'react';
import MaskedInput from 'react-text-mask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import * as fieldRegex from '../../properties/fieldRegex';

export default class InputGroup extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hasValue: InputGroup.hasValue(props.value),
      isValid: InputGroup.isValid(props.id, props.value)
    };
    this._handleChange = this._handleChange.bind(this);
  }
  
  render() {
    const { icon, id, label, value } = this.props;
    const controlClass = classNames('control', {
      'has-icons-left': Boolean(icon)
    });
    return (
      <div className='field'>
        <label className='label is-uppercase' htmlFor={id} style={{color:'#6D7993'}}>{label}</label>
        <div className={controlClass}>
          {this._buildControl()}
          {Boolean(icon) &&
            <span className='icon is-small is-left'>
              <FontAwesomeIcon icon={icon} alt={label} />
            </span>
          }
        </div>
        <p className='help is-danger'>
          {Boolean(this.props.submitAttempted && InputGroup.hasError(id, value)) && (
            !this.state.hasValue ? `${label} is required` : `This ${label.toLowerCase()} is invalid`
          )}
        </p>
      </div>
    );
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.submitAttempted !== prevProps.submitAttempted) {
      this.setState({
        hasValue: InputGroup.hasValue(this.props.value),
        isValid: InputGroup.isValid(this.props.id, this.props.value)
      });
    }
  }
  
  _handleChange({target}) {
    const {id, value} = target;
    this.setState({
      hasValue: InputGroup.hasValue(value),
      isValid: InputGroup.isValid(id, value)
    });
    this.props.handleChange(target);
  }
  
  _buildControl() {
    const props = {
      id: this.props.id,
      className: classNames(this.props.className, { 'is-danger': this.props.submitAttempted && !(this.state.hasValue && this.state.isValid) }),
      value: this.props.value,
      placeholder: this.props.label,
      onChange: this._handleChange,
      onBlur: this._handleChange
    };
    
    switch(this.props.controlType) {
      case 'input':
        return (<input type={this.props.type} {...props} />);
      case 'textarea':
        return (<textarea {...props} />);
      case 'maskedInput':
        return (
          <MaskedInput
            mask={this.props.mask}
            guide={true}
            {...props} />
        );
      default:
        throw new Error('Invalid InputGroup controlType: ' + this.props.controlType);
    }
  }
  
  static hasValue(value) {
    return Boolean(typeof value === 'string' && value.length);
  }
  
  static isValid(id, value) {
    return (new RegExp(fieldRegex[id]).test(value));
  }
  
  static hasError(id, value) {
    return !(InputGroup.hasValue(value) && InputGroup.isValid(id, value));
  }
}