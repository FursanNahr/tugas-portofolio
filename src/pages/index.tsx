// const cors = require('cors');
// app.use(cors());

import RecentWorks from '../components/RecentWork';

import { useState } from 'react'
import fotoUkur from '../assets/fotoukur.png';
import arrowDown from '../assets/arrow-down-line.svg'

const index = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };
    return (
        <>
            <section id="home" className="pt-28 pb-20 md:pb-7">
                <div className="max-w-[1150px] mx-auto sm-desktop:max-w-[900px]">
                    <div className="md:max-w-[23rem] md:mx-auto">
                        <div className="flex justify-between h-112 px-24 sm-desktop:h-72 md:inline md:w-10 md:mx-auto md:px-0">
                            <img className="h-auto w-auto [mask-image:linear-gradient(to_bottom,_hsla(230,_40%,_16%,_1)_60%,_transparent_100%)] order-2 md:h-72 md:mx-auto" src={fotoUkur} alt="Foto Ukur" />
                            <div className="flex flex-col justify-end pb-12 order-1 md:w-fit md:mt-8 md:pl-5">
                                <p className="text-6xl mb-4 font-semibold md:w-fit md:text-5xl">Fursan<br />Nahr</p>
                                <p className="text-2xl relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-[120px] after:h-[3px] after:bg-white md:w-fit">Front-End Developer</p>
                            </div>
                        </div>
                    </div>
                    <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="justify-center mt-16 text-base font-semibold flex cursor-pointer">
                        <div className="h-8 w-8 mr-3 bg-sky-800 flex items-center justify-center overflow-hidden">
                            <img src={arrowDown} className="animate-scroll-down sm-desktop:h-6 sm-desktop:w-6" alt="" />
                        </div>
                        <p className="flex items-center sm-desktop:text-[15px]">Recent Works</p>
                    </a>
                </div>
            </section>

            <section id="work" className="bg-Bg pt-28 pb-20 w-full ">
                <RecentWorks />
            </section>
        </>
    );
};

export default index;