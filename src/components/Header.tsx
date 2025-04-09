import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header bg-[url('/assets/Background.svg')] h-[120vh] bg-no-repeat max-lg:bg-center md:bg-cover relative flex flex-col">
            <div className="container w-full mx-auto max-lg:px-8 max-md:px-4 md:px-4 md:pt-10">
                <nav className="navbar flex justify-between max-md:mt-5 items-center py-8 px-8 bg-[#0A0A0A]/70 shadow-lg">
                    <div className="navbar-left-side flex gap-12 items-center max">
                        <div className="logo flex items-center gap-2 shrink-0">
                            <div className="ellipse-logo text-white bg-[#FE8235] w-12 h-12 rounded-full flex justify-center items-center font-bold text-2xl cursor-pointer">
                                N
                            </div>
                            <h1 className="text-2xl font-bold sm:text-3xl text-[#FE8235] cursor-pointer">
                                NFT NEXUS
                            </h1>
                        </div>
                        <ul className="nav-links flex flex-wrap max-md:hidden max-lg:gap-4 gap-12 text-lg md:px-8">
                            <li className="cursor-pointer text-[#939393] hover:text-white transition duration ease-out">
                                Home
                            </li>
                            <li className="cursor-pointer text-[#939393] hover:text-white transition duration ease-out">
                                Discover
                            </li>
                            <li className="cursor-pointer text-[#939393] hover:text-white transition duration ease-out">
                                Download
                            </li>
                            <li className="cursor-pointer text-[#939393] hover:text-white transition duration ease-out">
                                Community
                            </li>
                            <li className="cursor-pointer text-[#939393] hover:text-white transition duration ease-out">
                                Explore
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="nav-imgs max-md:hidden flex gap-8">
                            <Search
                                className="text-white cursor-pointer hover:text-blue-500 transition duration ease-out"
                                size={24}
                            />
                            <ShoppingCart
                                className="text-white cursor-pointer hover:text-blue-500 transition duration ease-out"
                                size={24}
                             />
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} aria-label="Toggle menu">
                                {isMenuOpen ? (
                                    <X className="text-white" size={24} />
                                ) : (
                                    <Menu className="text-white" size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Мобильное меню */} 
                <div
                    className={`max-md:flex fixed top-0 left-0 w-full h-full bg-[#0A0A0A]/90 z-50 transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="flex flex-col items-center mx-auto justify-center h-full gap-8">
                        <ul className="flex flex-col items-center gap-8 text-lg">
                            <button className="" onClick={toggleMenu} aria-label="Close menu">
                                <X className="bg-[#FE8235] rounded-full w-8 h-8 text-white" size={24} />
                            </button>
                            <li
                                onClick={toggleMenu}
                                className="cursor-pointer text-[#939393] hover:text-white transition duration ease-out"
                            >
                                Home
                            </li>
                            <li
                                onClick={toggleMenu}
                                className="cursor-pointer text-[#939393] hover:text-white transition duration ease-out"
                            >
                                Discover
                            </li>
                            <li
                                onClick={toggleMenu}
                                className="cursor-pointer text-[#939393] hover:text-white transition duration ease-out"
                            >
                                Download
                            </li>
                            <li
                                onClick={toggleMenu}
                                className="cursor-pointer text-[#939393] hover:text-white transition duration ease-out"
                            >
                                Community
                            </li>
                            <li
                                onClick={toggleMenu}
                                className="cursor-pointer text-[#939393] hover:text-white transition duration ease-out"
                            >
                                Explore
                            </li>
                        </ul>
                        <div className="flex gap-8">
                            <Search
                                className="text-white cursor-pointer hover:text-blue-500 transition duration ease-out"
                                size={24}
                            />
                            <ShoppingCart
                                className="text-white cursor-pointer hover:text-blue-500 transition duration ease-out"
                                size={24}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero секция с градиентом на всю ширину */}
            <div className="hero-section relative w-full flex-1 flex items-end">
                {/* Градиентный оверлей на всю ширину страницы */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-[#5224B5]/10 via-60% to-[#5224B5] to-80% z-0"></div>
                
                {/* Сплошной фиолетовый фон для нижней части */}
                <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-[#5224B5] z-0"></div>
                
                {/* Контент с ограниченной шириной */}
                <div className="hero-content container mx-auto flex gap-14 max-lg:flex-col py-12 max-lg:py-6 text-left relative z-10">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-5 max-lg:gap-3">
                            <h1 className="text-8xl max-lg:text-6xl py-4 font-bold text-white leading-tight tracking-wider">
                                DISCOVER<br />THE WORLD OF NFT<br />WITH NFT NEXUS
                            </h1>
                            <p className="text-2xl shrink-0 text-white tracking-wider">
                                Unlock the Power of Digital Collectibles with <br /> Our Revolutionary Platform
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end gap-6 ml-auto max-lg:ml-0 max-lg:flex-row max-lg:justify-start max-lg:gap-4">
                        <button className="text-2xl cursor-pointer tracking-widest bg-[#FE8235] w-[300px] h-[70px] text-white font-bold py-3 px-6 hover:bg-[#E6722E] transition duration-300">
                            LOGIN
                        </button>
                        <button className="text-2xl cursor-pointer tracking-widest border-2 w-[300px] h-[70px] border-[#FE8235] text-[#FE8235] font-bold py-3 px-6 hover:bg-[#FE8235] hover:text-white transition duration-300">
                            REGISTER
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Header;