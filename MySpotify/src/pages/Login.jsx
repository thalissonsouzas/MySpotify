import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Carregando from '../components/Carregando';

class Login extends Component {
  state = {
    disableButton: true,
    usuario: '',
    loading: false,
  };

  changeButton = ({ target }) => {
    const { name, value } = target;
    // const { usuario } = this.state;
    this.setState({
      [name]: value,
    }, () => {
      const { usuario } = this.state;
      const validationButton = usuario.length <= 2;
      this.setState({
        disableButton: validationButton,
      });
    });
    // console.log(usuario);
  };

  saveUser = async (event) => {
    event.preventDefault();
    const { usuario } = this.state;
    const { history } = this.props;

    this.setState({
      loading: true,
    });

    await createUser({ name: usuario });
    history.push('/home');
  };

  render() {
    const { disableButton, loading } = this.state;

    return (
      <div data-testid="page-login">
        {loading ? <Carregando /> : (
          <form> 
            
            <input
              type="text"
              name="usuario"
              id=""
              data-testid="login-name-input"
              onChange={ this.changeButton }
            />

            <button
              data-testid="login-submit-button"
              disabled={ disableButton }
              onClick={ this.saveUser }
            >
              Entrar
            </button>
          </form>

        )}
      </div>

    );
  }
}

Login.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default Login;
