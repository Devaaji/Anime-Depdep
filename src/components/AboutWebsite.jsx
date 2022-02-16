import React from 'react'
import Navbar from './Navbar'

function AboutWebsite() {
    return (
        <>
            <Navbar />
            <div className=' w-full h-screen flex justify-center items-center flex-col'>
                <div className='text-center text-xl font-bold mb-3'>About Website</div>
                <p className='text-center'>Website Ini saya Buat Seorang diri, dan ingin belajar menggunakan API Jikan</p>
                <p className='text-center'>Terimakasih yang telah melihat dan membaca website saya</p>
            </div>
        </>
    )
}

export default AboutWebsite