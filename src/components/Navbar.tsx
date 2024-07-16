import { useState, useEffect } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = document.querySelectorAll('[id]') as NodeListOf<HTMLElement>;
            const scrollPosition = window.scrollY;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        <nav className={`fixed font-semibold text-sm z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-20 backdrop-blur-md' : ''}`}>
            <div className="flex w-full justify-between px-5 py-8 max-w-[1150px] mx-auto">
                <p className="flex">Ukur</p>
                <div className="">
                    <ul className="flex gap-16">
                        <li><a
                            href="#home"
                            onClick={(e) => handleNavClick(e, 'home')}
                            className={`hover:text-blue-500 transition-colors duration-400 after:content-[""] after:absolute after:left-0 after:bottom-[-10px] after:h-[3px] after:bg-blue-400
    after:transition-all after:duration-300
    relative
    ${activeSection === 'home'
                                    ? 'text-blue-400 after:w-[40%]'
                                    : 'after:w-0 hover:after:w-[40%]'
                                }
  `}
                        >
                            Home
                        </a></li>
                        <li><a href="#work" onClick={(e) => handleNavClick(e, 'work')} className={`hover:text-blue-500 transition-colors after:transition-all after:duration-300 duration-400 after:content-[""] after:absolute after:hover:h-[3px] after:hover:w-[40%] after:bottom-[-10px] after:hover:bg-blue-400 after:left-0 relative ${activeSection === 'work' ? 'text-blue-400 after:content-[""] after:absolute after:h-[3px] after:w-[40%] after:bottom-[-10px] after:bg-blue-400 after:left-0' : 'after:w-0'}`}>Work</a></li>
                        <li><a href="#info" onClick={(e) => handleNavClick(e, 'info')} className={activeSection === 'info' ? 'text-blue-400' : ''}>Info</a></li>
                        <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={activeSection === 'services' ? 'text-blue-400' : ''}>Services</a></li>
                        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={activeSection === 'contact' ? 'text-blue-400' : ''}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;