import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';
import { Home, Home as HomeIcon, LogOut, Search } from 'lucide-react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Header extends Component {
  state = ({
    usuario: '',
    loading: true,
  });

  async componentDidMount() {
    const retorno = await getUser();
    console.log(retorno);
    this.setState({
      usuario: retorno,
      loading: false,
    });
  }

  render() {
    const { usuario, loading } = this.state;
    return (

      <div className='' data-testid="header-component">
        {loading ? <Carregando /> : (
          <h1 data-testid="header-user-name" className='mb-4'>
            Olá,
            {' '}
            { usuario.name }
            {' '}!
          </h1>)}

          <ul className='flex flex-col'>
  <li>
    <Link className='flex items-center p-2 text-xs font-semibold transition-transform duration-500 transform hover:scale-110' data-testid="link-to-profile" to="/home">
      <HomeIcon className='mr-2' /> 
      Home
    </Link>
  </li>
  <li>
    <Link className='flex items-center p-2 text-xs font-semibold transition-transform duration-500 transform hover:scale-110' data-testid="link-to-search" to="/search">
      <Search className='mr-2' /> 
      Search
    </Link>
  </li>
  <li>
    <Link className='flex items-center p-2 text-xs font-semibold transition-transform duration-500 transform hover:scale-110' data-testid="link-to-search" to="/">
      <LogOut className='mr-2' /> 
      Logout
    </Link>
  </li>
  {/* <li>
    <Link className='flex items-center p-2 text-xs font-semibold transition-transform duration-500 transform hover:scale-110' data-testid="link-to-favorites" to="/favorites">
      <Library className='mr-2' /> 
      Favoritos
    </Link>
  </li> */}
</ul>

      </div>
    );
  }
}

export default Header;
