export const Discover: React.FC = () => {
    return (
        <section className="discover w-full min-h-[70vh] pt-32 bg-[#0A0A0A]">
            <div className="discover-container container mx-auto">
                <div className="flex flex-col max-md:px-4 gap-8 max-md:ml-8">
                    <h2 className="font-bold text-6xl max-md:text-4xl text-white">
                        Are you ready to join <br /> the NFT revolution?
                    </h2>
                    <div className="flex flex-col gel gap-6 text-gray-300">
                        <p className="text-2xl tracking-wider max-md:text-lg font-normal">
                            NFT Nexus is here to help you explore the exciting <br /> world of Non-Fungible Tokens and unlock their full <br /> potential.
                        </p>
                        <p className="text-2xl tracking-wider max-md:text-lg font-normal">
                            Our platform provides you with a safe and secure <br /> environment to buy, sell, and trade unique digital <br /> assets like never before.
                        </p>
                        <p className="text-2xl tracking-wider max-md:text-lg font-normal">
                            With our user-friendly interface, you can discover <br /> and own one-of-a-kind digital collectibles with <br /> ease. Join us today and start your NFT journey!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
