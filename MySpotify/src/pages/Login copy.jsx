import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Carregando from '../components/Carregando';
import SpotfyLogo from '../components/logoSpot'
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
<div data-testid="page-login" className='flex items-center justify-center min-h-screen bg-gradient-to-t from-black via-black/90 to-customGray'>
<form className='flex flex-col items-center justify-center shadow-lg w-1/2 h-[500px] rounded-lg bg-gradient-to-b from-black via-black-90 to-customGray '>
  <SpotfyLogo width={30} height={30} />
  <h1 className="text-3xl font-bold text-white mt-4 mb-6">
    Entrar no Spotify
  </h1>
  <div className="w-full max-w-xs">
    <h3 className='text-white font-bold'>Digite seu nome</h3>
    <input
      type="text"
      name="usuario"
      id="usuario"
      onChange={this.changeButton}
      className="px-4 py-3 rounded-lg mb-4 w-full"
      placeholder="Digite seu nome"
    />
    <button
      data-testid="login-submit-button"
      disabled={disableButton}
      onClick={this.saveUser}
      className="bg-green-500 px-4 py-3 rounded-full w-full font-bold hover:scale-110"
    >
      Entrar
    </button>
  </div>
</form>

</div>


    );
  }
}

Login.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default Login;
