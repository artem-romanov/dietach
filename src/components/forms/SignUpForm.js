import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signupRequest } from '../../store/actions/user';

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
  };

  onSubmit = (event) => {
    event.preventDefault();
    const {
      email,
      password,
    } = this.state;
    this.props.signup({
      email,
      password,
    });
  }

  handleChange = (event) => {
    const { target } = event;

    const {
      value,
      name
    } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      email,
      password,
    } = this.state;

    return (
      <div>
        <form
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button
            type="submit"
          >
            Login!
          </button>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  signup: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  signup: signupRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignUpForm);
