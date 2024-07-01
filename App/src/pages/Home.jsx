import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Resultado from '../components/Resultado';
import mainAlbums from '../components/mainAlbums';



class Home extends Component {


  getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      return "Bom dia";
    } else if (hour >= 12 && hour < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };
  
  render() {
    return (
      <div data-testid="page-search" className='bg-black text-white font-bold flex'>
        <aside className='p-4 font-semibold text-zinc-400 w-1/6 p-4 font-semibold min-h-screen text-zinc-400 bg-opacity-10 bg-white'>
          <nav className=' p-2 text-xs font-semibold '>
            <Header />
            
          </nav>
          <nav class="mt-10 pt-10 p-4 border-t border-zinc-800 flex flex-col gap-2 ">

            <Link to="/album/1417380654" class="hover:text-zinc-100 text-sm hover:scale-110">Caju Pra Baixo</Link>
            <Link to="/album/80815644" class="hover:text-zinc-100 text-sm hover:scale-110">Madonna</Link>
            <Link to="/album/1423284802" class="hover:text-zinc-100 text-sm hover:scale-110">Bon Jovi</Link>
            <Link to="/album/1644728613" class="hover:text-zinc-100 text-sm hover:scale-110">Guns N' Roses</Link>


          </nav>

        </aside>
        <main>

          <Resultado
                  termoBusca={`${this.getGreeting()} , aqui estão os álbuns mais populares do momento!`}
                  albumList={mainAlbums}
          
          />
          </main>

      </div>
    );
  }
}

export default Home;
