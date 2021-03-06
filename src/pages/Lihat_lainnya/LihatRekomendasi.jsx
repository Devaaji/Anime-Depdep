import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function LihatRekomendasi() {


    const [fullAnime, setFullAnime] = useState([]);
    const [loading, setLoading] = useState(false);

    const GetAllAnime = async () => {
        try {
            setLoading(true)
            let response = await axios.get("https://api.jikan.moe/v4/recommendations/anime")
            setFullAnime(response.data.data.slice(0, 30))
            setLoading(false)

        } catch (error) {
            setLoading(true)
            console.log(error.massage)
        }
    }

    useEffect(() => {
        GetAllAnime()
    }, [])

    console.log(fullAnime)




    return <div className='dark:bg-gray-700 text-white'>
        <Navbar />
        <div className='pt-24 w-max flex justify-center'>
            <div className='h-full max-w-screen-xl w-full'>
                <div className='font-bold text-1xl md:text-2xl mx-5 md:pl-28 '>Terbaru Lainnya :</div>
            </div>
        </div>
        {loading ? <div className='h-screen'>
            <div className="flex items-center p-7 justify-center">
                <svg role="status" className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div>
        </div> : <div className='flex justify-center'>
            <div className="mt-4 w-full md:max-w-screen-xl mx-3 pl-1 flex">
                <div className='flex flex-wrap justify-center '>
                    {fullAnime.map((topanime, index) => (
                        <div className='md:basis-2/12' key={index}>
                            <div className='basis-2/6 md:basis-2/12 mb-3 md: mr-1  w-[125px] md:w-48'>
                                <Link to={`/anime/${topanime.entry[0].mal_id}`}>
                                    <div className=' cursor-pointer shadow-sm rounded-xl overflow-hidden flex relative'>
                                        <img className='transition delay-150 duration-300 ease-in-out rounded-xl shadow-md w-36 h-40 md:w-48 md:h-80 object-cover hover:scale-110' src={topanime.entry[0].images.jpg.image_url} alt="" />
                                        <div className='absolute bg-gradient-to-r from-indigo-900 z-10 bottom-0 w-full'>
                                        </div>
                                    </div>
                                    <div className='w-full pr-2 truncate text-sm hover:font-medium hover:text-yellow-600'>{topanime.entry[0].title}</div>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>}

    </div>
}

export default LihatRekomendasi;
