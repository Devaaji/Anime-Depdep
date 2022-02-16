import Menu from '../../components/menu';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DoneSearch from './DoneSearch'

function ListSearch() {


    const [animeList, setAnimeList] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false)

    const HandleSearch = e => {
        e.preventDefault();
        FetchAnime(search);
    }

    const FetchAnime = async (query) => {
        try {
            setLoading(true)
            let response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc`)
            setAnimeList(response.data.data)
            setLoading(false)

        } catch (error) {
            setLoading(true)
            console.log(error.massagge)
        }
    }
    

    useEffect(() => (
        FetchAnime()
    ),[])

    return <div className='dark:bg-gray-700 dark:text-white'>
    <div className='opacity-95 z-30 w-screen bg-gray-800 fixed text-white p-5 flex justify-center shadow-xl '>
        <div className=" max-w-screen-xl w-full">
            <div className="flex items-center">
                <div className='mr-1 md:mr-5'>
                    <Menu />
                </div>
                <Link to="/">
                    <button className='mr-2 rounded-md p-2 md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </button>
                </Link>
                <div className="hidden md:flex md:items-center md:justify-between md:text-2xl md:mr-6">
                    <Link to="/">Depdep</Link>
                </div>
                <div className='flex w-full'>
                    <label className="relative block w-full">
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <Link to="/listSearch">
                            <form onSubmit={HandleSearch}>
                                <input className="placeholder:italic text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="Search Anime ..." type="search" name="search"
                                    autoComplete='off'
                                    value={search}
                                    autoFocus
                                    onChange={e => setSearch(e.target.value)} />
                            </form>
                        </Link>
                    </label>
                </div>
                <div className="flex ml-6 justify-end">
                    <button className="flex cursor-pointer hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <Link className='hidden md:block' to="/login">
                            Masuk
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <DoneSearch 
    loading={loading}
    animeList={animeList}/>
    </div>
}

export default ListSearch;
