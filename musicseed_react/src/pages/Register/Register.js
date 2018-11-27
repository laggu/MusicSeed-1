import React, {Component} from 'react';
import { connect } from 'react-redux';
import { checkEmail, checkPassword, confirmPassword } from "../../actions/index";

class Register extends Component {

  confirmPasswordOnChange(){
    if(this.props.checkedPassword === this.props.confirmedPassword){
      console.log('OK');
    }
  }

  componentDidUpdate(){
    this.confirmPasswordOnChange();
  }

  render() {
    return (
      <form className="ui form" onSubmit={e => onFormSubmit(e) }>
        <div className="field">
          <h1>Register</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={ e => this.props.checkEmail(e.target.value) }
            value={ this.props.checkedEmail }
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            onChange={ e => this.props.checkPassword(e.target.value) }
            value={ this.props.checkedPassword }
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password Confirm"
            onChange={ e => this.props.confirmPassword(e.target.value) }
            value={ this.props.confirmedPassword }
          />
        </div>
        <div className="field">
          <input type="text"placeholder="Name"/>
        </div>
        <div className="field">
          <input type="text" placeholder="Nick Name"/>
        </div>
        <button className="ui button" type="submit">REGISTER</button>
      </form>
    );
  }
}

const onFormSubmit = (event) => {
  event.preventDefault();
};

const mapStateToProps = state => {
  return {
    checkedEmail: state.checkedEmail,
    checkedPassword: state.checkedPassword,
    confirmedPassword: state.confirmedPassword,
  }
};

export default connect(
  mapStateToProps,
  { checkEmail, checkPassword, confirmPassword }
)(Register);