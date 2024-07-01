import React, { Component } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Carregando from './Carregando';
import Resultado from './Resultado';
import { Home, Home as HomeIcon, Library, Search } from 'lucide-react';

class SearchMusic extends Component {
  state = {
    albumList: [],
    clicado: false,
    disableButton: true,
    inputBusca: '',
    termoBusca: '',
    loading: false,
  };

  handleChange = ({ target }) => {
    const { value } = target;
    const validate = value.length > 1;

    this.setState({
      disableButton: !validate,
      termoBusca: value,
      inputBusca: value,
      clicado: false,
    });
  };

  buscar = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    const { termoBusca } = this.state;
    const resultApi = await searchAlbumsAPI(termoBusca);
    this.setState({
      clicado: true,
      inputBusca: '',
      albumList: resultApi,
      loading: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.buscar(e);
  };

  render() {
    const { disableButton, clicado, termoBusca, inputBusca, loading, albumList } = this.state;

    return (
      loading ? <Carregando />
        : (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="inputBusca"
              id="pesquisa"
              data-testid="search-artist-input"
              onChange={this.handleChange}
              value={inputBusca}
              placeholder="🔎 O que você quer ouvir?"
              className='px-4 py-3 rounded-full mb-4 w-full text-black'
            />
            <button
              type="submit"
              data-testid="search-artist-button"
              disabled={disableButton}
              className="bg-green-500 px-4 py-3 rounded-full w-full font-bold hover:scale-110"
            >
              Pesquisar
            </button>
            {!clicado
              ? <p />
              : (
                console.log(albumList),
                <Resultado
                  termoBusca={termoBusca}
                  albumList={albumList}
                />
              )}
          </form>
        )
    );
  }
}

export default SearchMusic;

