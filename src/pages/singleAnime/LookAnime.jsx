import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import PerEps from '../../components/PerEps';

function LookAnime() {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [loading, setLoading] = useState(false);

    const [anime, setAnime] = useState({});
    const [isGenre, setIsGenre] = useState([]);





    useEffect(() => {
        const GetAnime = async () => {
            try {
                setLoading(true)
                let response = await axios.get("https://api.jikan.moe/v4/anime/" + path)
                setAnime(response.data.data)
                setIsGenre(response.data.data.genres)
                setLoading(false)
            } catch (error) {
                setLoading(true)
                console.log(error.massage)
            }

        }
        GetAnime()
    }, [path])





    return <div className='dark:bg-gray-700 dark:text-white'>
        <div className='hidden md:block'>
            <Navbar />
        </div>
        {loading ? <div className="flex w-screen h-screen items-center justify-center">
            <svg role="status" className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
        </div> :
            <div className='overflow-hidden'>
                <Link to="/">
                    <div className='fixed z-20 bg-indigo-900 text-white m-3 md:hidden rounded-xl p-2 shadow-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </div>
                </Link>
                <div className='w-screen h-48 md:h-72 bg-slate-600 relative'>
                    <img className='w-full h-full opacity-20 object-cover' src={anime.images?.jpg.image_url} alt="" />
                    <div className='w-full h-max absolute -bottom-1/2 flex justify-center'>
                        <div className='w-1/3 h-48 md:h-72 md:w-[13%]  rounded-xl shadow-xl overflow-hidden'>
                            <img className='h-full w-full object-cover' src={anime.images?.jpg.image_url} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-screen'>
                    <div className=' w-full flex justify-center'>
                        <div className='mt-24 md:mt-40 md:w-[30%] text-center z-3 font-bold text-2xl'>{anime.title}</div>
                    </div>
                    <div className='w-full flex items-center justify-between py-4 px-5 md:px-96'>
                        <div className='basis-2/3 truncate mr-2'>
                            Genre : {isGenre.map((genre, index) => (
                                <span key={index}>
                                    <span>{genre.name}, </span>
                                </span>
                            ))}
                        </div>
                        <div className='basis-1/3 bg-blue-500 text-yellow-100 flex justify-center rounded-lg p-1'>
                            <span>
                            Rating : {anime.score}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-screen'>
                    <div className=' w-full md:flex md:justify-center '>
                        <div className='md:max-w-screen-xl border-t-4'>
                            <div className='w-full mt-3 mb-3 ml-2 flex flex-col '>
                                <span></span>
                                <span className='mr-6 mb-1'>Title : {anime.title}</span>
                                <span></span>
                                <span className='mr-6 mb-1 truncate'>Title Japanese : {anime.title_japanese}</span>
                                <span className='mr-6 mb-1'>Type : {anime.type}</span>
                                <span className='mr-6 mb-1'>Premier : {anime.season} {anime.year}</span>
                                <span className='mr-6 mb-1'>Tayang : {anime.aired?.string} </span>
                                <span className='mr-6 mb-1'>Broadcast : {anime.broadcast?.string} </span>
                                <span className='mr-6 mb-1'>Durasi : {anime.duration} </span>
                                {/* <span>Produser : {anime.producers?.[0].name} </span> */}
                                {/* <span>Studio : {anime.studios.name} </span> */}
                                <span>Source : {anime.source}</span>
                                <span>Rating : {anime.rating}</span>
                            </div>
                            <div className='ml-2 mr-3'>
                                <div className='mb-1 text-md font-semibold'>Sinopsis </div>
                                <p className='p-2 border-t-2 border-slate-900 h-32 overflow-y-scroll mr-3'>
                                    {anime.synopsis}
                                </p>
                            </div>
                            <div className='ml-2 mt-5 w-screen mr-3 '>
                                <h1 className='text-2xl font-semibold'>Trailer</h1>
                                <iframe className='w-[92%] md:w-1/2 aspect-video  rounded-xl shadow-xl' src={anime.trailer?.embed_url} title={anime.title} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                            <div className='text-center mt-10 mb-20'>
                                <h1 className='text-2xl'>Episode </h1>
                                <div>
                                    <PerEps 
                                    path={path}
                                    anime={anime}
                                    setAnime={setAnime}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
    </div>
}

export default LookAnime;
