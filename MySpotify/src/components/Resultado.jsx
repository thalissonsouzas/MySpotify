import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

const Resultado = ({ termoBusca, albumList }) => {
  return (
    <>
      <h2 className='text-2xl m-4'>
        {albumList.length > 0
          ? `${termoBusca}`
          : 'Nenhum álbum foi encontrado'}
      </h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {albumList.map((album) => (
          <AlbumCard key={album.collectionId} {...album} />
        ))}
      </section>
    </>
  );
};

Resultado.propTypes = {
  termoBusca: PropTypes.string,
  albumList: PropTypes.arrayOf(
    PropTypes.shape({
      collectionId: PropTypes.number,
      artistName: PropTypes.string,
      collectionName: PropTypes.string,
      artworkUrl100: PropTypes.string,
    })
  ),
}.isRequired;

export default Resultado;
