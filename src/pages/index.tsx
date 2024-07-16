import { useState } from 'react'
import fotoUkur from '../assets/fotoukur.png';
import arrowRight from '../assets/arrow-right-line.svg';
import work1 from '../assets/work1.png';
import arrowDown from '../assets/arrow-down-line.svg'
import addBox from '../assets/add-box-fill.svg'

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
            <section id="home" className="pt-28 pb-20">
                <div className="max-w-[1150px] mx-auto">
                    <div className="flex justify-between h-112 px-24">
                        <div className="flex flex-col justify-end pb-12">
                            <p className="text-6xl mb-4 font-semibold">Fursan<br />Nahr</p>
                            <p className="text-2xl relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-[120px] after:h-[3px] after:bg-white">Front-End Developer</p>
                        </div>
                        <img className="h-auto w-auto [mask-image:linear-gradient(to_bottom,_hsla(230,_40%,_16%,_1)_60%,_transparent_100%)]" src={fotoUkur} alt="Foto Ukur" />
                    </div>
                    <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="justify-center mt-16 text-base font-semibold flex cursor-pointer">
                        <div className="h-8 w-8 mr-3 bg-sky-800 flex items-center justify-center overflow-hidden">
                            <img src={arrowDown} className="animate-scroll-down" alt="" />
                        </div>
                        <p className="flex items-center">Recent Works</p>
                    </a>
                </div>
            </section>

            <section id="work" className="bg-Bg pt-28 pb-20 w-full ">
                <div className="max-w-[1150px] mx-auto">
                    <h1 className="text-center text-2xl font-semibold">RECENT WORKS</h1>
                    <div className="grid grid-cols-2 pt-20 gap-10">
                        <div className="bg-bgHover h-fit">
                            <a className="bg-BgContainer px-14 py-8 grid gap-4 relative transition-transform hover:translate-y-[-5px] group">
                                <h3 className="text-xl font-semibold">Absensi SMK 4 Website</h3>
                                <div>
                                    <p>29/2/24</p>
                                    <p>Becomes the Front-end of Absensi SMK 4 website</p>
                                </div>
                                <img src={work1} alt="" />
                                <img src={arrowRight} className="h-8 w-8 absolute right-[3rem] top-[1.5rem] transform transition-transform duration-300 group-hover:translate-x-2" alt="" />
                            </a>
                        </div>
                        <div className="bg-bgHover h-fit">
                            <a className="bg-BgContainer px-14 py-8 grid gap-4 relative transition-transform hover:translate-y-[-5px] group">
                                <h3 className="text-xl font-semibold">Absensi SMK 4 Website</h3>
                                <div>
                                    <p>29/2/24</p>
                                    <p>Becomes the Front-end of Absensi SMK 4 website</p>
                                </div>
                                <img src={work1} alt="" />
                                <img src={arrowRight} className="h-8 w-8 absolute right-[3rem] top-[1.5rem] transform transition-transform duration-300 group-hover:translate-x-2" alt="" />
                            </a>
                        </div>
                        <a className="bg-BgContainer w-full h-[406px] flex justify-center items-center">
                            <img src={addBox} className="h-48 w-48" alt="" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default index;