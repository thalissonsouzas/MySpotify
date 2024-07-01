import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class AlbumCard extends Component {
  render() {
    const { artistName, artworkUrl100, collectionId, collectionName } = this.props;
    return (
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
        className='hover:bg-zinc-700 rounded-lg'
      >
        <div className='rounded-lg m-4'>
          <img src={ artworkUrl100 } alt={ `Capa do album ${collectionName}` } className='w-full rounded-lg ' style={{ width: '130px', height: '130px' }} />
          <h3>
            {collectionName}
            {' '}
          </h3>
          <p>{artistName}</p>
        </div>
      </Link>
    );
  }
}

AlbumCard.propTypes = {
  artistName: PropTypes.string,
  artworkUrl100: PropTypes.string,
  collectionId: PropTypes.number,
  collectionName: PropTypes.string,
}.isRequired;
