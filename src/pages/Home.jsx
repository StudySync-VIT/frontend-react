import React from 'react';
import img from '../assets/logo.jpg';
import Typewriter from '../components/Typewriter';

function Home() {
    
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center font-poppins">
            <div className="max-w-2xl p-8 mx-4">
                <h1 className="text-4xl md:text-8xl mb-4 font-bold text-blue-500 font-poppins">StyleSync</h1>
                <p className="text-xl md:text-3xl mb-4 text-purple-700">
                <Typewriter text="My React App" delay={100} />
                </p>
            </div>
            <div>
                <img src={img} className="max-w-full h-auto" alt="Logo" />
            </div>
        </div>
    );
}

export default Home;
