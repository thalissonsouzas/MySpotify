import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Carregando from './Carregando';

export default class MusicsCard extends Component {
  state = ({
    loading: false,
    favorite: false,
  });

  componentDidMount() {
    this.handleChecked();
  }

  handleChecked = async () => {
    const { trackId } = this.props;
    const favoritesLocalStorage = await getFavoriteSongs();
    if (favoritesLocalStorage) {
      this.setState({ favorite: favoritesLocalStorage
        .some((track) => track.trackId === trackId),
      });
    }
  };

  adicionarFavorito = async (e) => {
    const { trackName, previewUrl, trackId } = this.props;
    this.setState({ loading: true });
    const { target: { checked } } = e;
    if (checked) {
      await addSong({ trackName, previewUrl, trackId });
    } else {
      await removeSong({ trackName, previewUrl, trackId });
    }
    await this.handleChecked();
    this.setState({ loading: false });
  };

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { loading, favorite } = this.state;

    return (
      <div className='m-2'>
        <h3 className='m-2'>{trackName}</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        {/* {loading ? <Carregando />
          : (
            <label data-testid={ `checkbox-music-${trackId}` }>
              <input
                type="checkbox"
                onChange={ this.adicionarFavorito }
                checked={ favorite }
                className='m-2'
                
              />
              Favorita
            </label>
          )} */}

      </div>
    );
  }
}

MusicsCard.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
}.isRequired;
