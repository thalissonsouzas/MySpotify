import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicsCard from '../components/MusicsCard';
import getMusics from '../services/musicsAPI';
import Carregando from '../components/Carregando';

class Album extends Component {
  state = ({
    loading: true,
    musicasAlbum: [],
  });

  componentDidMount() {
    this.retornaMusicas();
  }

  retornaMusicas = async () => {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    const musicas = await getMusics(id);
    console.log(musicas);
    this.setState({
      musicasAlbum: musicas,
      loading: false,
    });
  };

  render() {
    const { musicasAlbum, loading } = this.state;
    return (
      <div data-testid="page-album" className='flex bg-black text-white font-bold'>
        <aside className='p-4 font-semibold text-zinc-400 w-1/6 p-4 font-semibold min-h-screen text-zinc-400 bg-opacity-10 bg-white'>
          <nav className=' p-2 text-xs font-semibold '>
            <Header />
            
          </nav>


        </aside>
 
        {loading && <Carregando />}
        <section className='flex flex-col items-start w-full ml-16'>
          {musicasAlbum.map((musica, i) => {
            if (i === 0) {
              return (
                <div key={musica.collectionId} className='flex pt-10 flex-col'>
                  <p className='ml-40 '>Álbum</p>
                  <section className='flex'>
                    <div>
                      <img src={musica.artworkUrl100} alt="Capa do Álbum" className='rounded m-6' style={{ width: '130px', height: '130px' }} />
                    </div>
                    <div className='flex flex-col'>
                      <h1 data-testid="album-name" className='text-7xl font-semibold'>{musica.collectionName}</h1>
                      <p data-testid="artist-name">{musica.artistName}</p>
                    </div>
                  </section>
                </div>
              );
            }
            return (
              <MusicsCard
                key={musica.trackId}
                {...musica}
                className='m-40'
              />
            );
          })}
        </section>

      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }) }.isRequired;

export default Album;
