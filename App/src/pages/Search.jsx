import React, { Component } from 'react';
import Header from '../components/Header';
import SearchMusic from '../components/SearchMusic';

class Search extends Component {
  render() {
    return (
      <div className='flex bg-black text-white font-bold' data-testid="page-search">
        <aside className='p-4 font-semibold text-zinc-400 w-1/6 p-4 font-semibold min-h-screen text-zinc-400 bg-opacity-10 bg-white'>
          <nav className=' p-2 text-xs font-semibold '>
            <Header />
          </nav>
        </aside>  
        <main className='flex mt-20 justify-center flex-1'>

            <SearchMusic />
            
        </main>

      </div>
    );
  }
}

export default Search;
