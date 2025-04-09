import Shield from "/assets/Shield.svg";
import Scan from "/assets/Scan.svg";
import Profile from "/assets/Shield.svg";
import Call from "/assets/Call.svg";
import Unlock from "/assets/Unlock.svg";
import Document from "/assets/Document.svg";

export const Advantages: React.FC = () => {
    return (
        <section className="advantages min-h-[150vh] pt-32 bg-[#0A0A0A]">
            <div className="advantages-container container w-full mx-auto">
                <div className="">
                    <h2 className="font-bold text-6xl max-md:text-center text-white">
                        Why NFT Nexus?
                    </h2>
                </div>
                <div className="rows flex flex-col gap-8 mt-10">
                    <div className="row1 flex max-md:flex-col items-center gap-8 max-md:gap-4">
                        <div className="card bg-[#FE8235] w-full max-w-[400px] h-[250px] max-md:h-[200px] flex flex-col gap-4 items-center justify-center">
                            <img src={Shield} alt="Shield icon" />
                            <h3 className="text-2xl max-lg:text-lg text-white tracking-widest text-center">
                                Safe and secure <br /> platform for NFT <br /> transactions
                            </h3>
                        </div>
                        <div className="card bg-[#5224B5] w-full max-w-[400px] h-[250px] max-md:h-[200px] flex flex-col gap-4 items-center justify-center">
                            <img src={Scan} alt="Scan icon" />
                            <h3 className="text-2xl max-lg:text-lg text-white tracking-widest text-center">
                                Wide selection of <br /> unique digital <br /> collectibles
                            </h3>
                        </div>
                        <div className="card bg-[#5224B5] w-full max-w-[400px] h-[250px] max-md:h-[200px] flex flex-col gap-4 items-center justify-center">
                            <img src={Profile} alt="Profile icon" />
                            <h3 className="text-2xl max-lg:text-lg text-white tracking-widest text-center">
                                User-friendly <br /> interface for easy <br /> navigation
                            </h3>
                        </div>
                    </div>
                    <div className="row1 flex max-md:flex-col items-center gap-8 max-md:gap-4">
                        <div className="card bg-[#5224B5] w-full max-w-[400px] h-[250px] max-md:h-[200px] flex flex-col gap-4 items-center justify-center">
                            <img src={Call} alt="Call icon" />
                            <h3 className="text-2xl max-lg:text-lg text-white tracking-widest text-center">
                                24/7 customer support <br /> to assist you with any <br /> questions
                            </h3>
                        </div>
                        <div className="card bg-[#5224B5] w-full max-w-[400px] h-[250px] max-md:h-[200px] flex flex-col gap-4 items-center justify-center">
                            <img src={Unlock} alt="Unlock icon" />
                            <h3 className="text-2xl max-lg:text-lg text-white tracking-widest text-center">
                                Access to the latest NFT <br /> market trends and <br /> insights
                            </h3>
                        </div>
                        <div className="card bg-[#5224B5] w-full max-w-[400px] h-[250px] max-md:h-[200px] flex flex-col gap-4 items-center justify-center">
                            <img src={Document} alt="Document icon" />
                            <h3 className="text-2xl max-lg:text-lg text-white tracking-widest text-center">
                                Regular newsletters with <br /> the latest NFT news and <br /> analysis
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="max-md:ml-0">
                    <h2 className="pt-32 font-bold text-6xl max-md:text-4xl max-md:text-center text-white mb-10">
                        Discover the Best Rare NFTs on NFT Nexus
                    </h2>
                    <div className="flex max-md:flex-col gap-20 max-md:gap-4 max-md:text-center">
                        <p className="text-2xl tracking-wider max-md:text-lg max-md:leading-relaxed font-normal text-gray-300 w-[300px] max-md:w-full whitespace-pre-line">
                            Find the Most Unique and Valuable Digital Collectibles in the World
                        </p>
                        <p className="text-2xl tracking-wider max-md:text-lg max-md:leading-relaxed font-normal text-gray-300 flex-1 whitespace-pre-line">
                            At NFT Nexus, we are dedicated to bringing you the best and rarest NFTs in the world. Our platform showcases a wide selection of one-of-a-kind digital collectibles that are sure to impress even the most discerning of collectors. From rare digital art to collectible virtual items, you'll find it all here. Take a look at some of our top picks and find your next must-have NFT.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};