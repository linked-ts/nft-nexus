import ShieldDoneIcon from '/assets/Shield Done.svg'; // Предполагаем, что у тебя есть иконка

export const HowToUpload = () => {
    return (
        <section className="how-to-upload w-full bg-[#1A1919] min-h-[200vh] pt-32 bg-[#0A0A0A]">
            <div className="container mx-auto">
                {/* Заголовок и подзаголовок */}
                <div className="text-center">
                    <h2 className="text-5xl max-md:text-4xl font-bold text-white">
                        How to Upload Your Art as an NFT on NFT Nexus
                    </h2>
                    <p className="text-2xl max-md:text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
                        Bring your artwork to life as a Non-Fungible Token on [Brand Name]. Our platform makes it easy for artists and collectors alike to upload and sell their unique digital creations.
                    </p>
                    <p className="text-xl max-md:text-base text-gray-300 mt-2">
                        Follow these simple steps to get started:
                    </p>
                </div>

                {/* Контейнер для карточек */}
                <div className="relative mt-16">
                    {/* Step 1 */}
                    <div className="absolute left-0 top-0">
                        <div className="flex">
                            <div className="flex flex-col">
                                <span className="text-green-400 font-medium mb-3 text-xl">Step 1</span>
                                <div className="bg-[#5224B5] rounded py-10 px-14 flex flex-col justify-center">
                                    <img src={ShieldDoneIcon} alt="ShieldDoneIcon" className="mb-2 w-16 h-16" />
                                    <p className="text-white text-xl tracking-wider mt-5 mb-5">
                                        Create an account on <br /> NFT Nexus
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Arrow from Step 1 to Step 2 */}
                        <div className="absolute top-1/16 left-1/4 -translate-y-1/2">
                            <div className="relative w-82 h-0.5 bg-[#FE8235]">
                                {/* Вертикальная линия */}
                                <div className="absolute right-0 top-0 w-0.5 h-14 bg-[#FE8235]">
                                    {/* Наконечник стрелки (указывает вниз) */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-t-[8px] border-l-[5px] border-r-[5px] border-t-[#FE8235] border-l-transparent border-r-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="absolute top-20 left-40% translate-x-1/1">
                        <div className="flex">
                            <div className="flex flex-col">
                                <span className="text-green-400 font-medium mb-3 text-xl">Step 2</span>
                                <div className="bg-[#5224B5] rounded py-14 px-12 flex flex-col justify-center">
                                    <img src={ShieldDoneIcon} alt="ShieldDoneIcon" className="mb-2 w-16 h-16" />
                                    <p className="text-white text-xl tracking-wider mt-5 mb-5">
                                        Click on the 'Upload Art' <br /> button from the main menu
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-1/16 left-1/5 -translate-y-1/2">
                            <div className="relative w-96 h-0.5 bg-[#FE8235]">
                                {/* Вертикальная линия */}
                                <div className="absolute right-0 top-0 w-0.5 h-12 bg-[#FE8235]">
                                    {/* Наконечник стрелки (указывает вниз) */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-t-[8px] border-l-[5px] border-r-[5px] border-t-[#FE8235] border-l-transparent border-r-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="absolute ml-12 top-40 left-60% translate-x-4/2">
                        <div className="flex">
                            <div className="flex flex-col">
                                <span className="text-green-400 font-medium mb-3 text-xl">Step 3</span>
                                <div className="bg-[#5224B5] rounded py-10 px-14 flex flex-col justify-center">
                                    <img src={ShieldDoneIcon} alt="ShieldDoneIcon" className="mb-2 w-16 h-16" />
                                    <p className="text-white text-xl tracking-wider mt-5 mb-5">
                                        Select the image file of <br /> your artwork and provide <br /> a detailed description, <br /> including the title, artist <br /> name, and any other <br /> relevant information.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-1/16 left-1/12 -translate-y-1/2">
                            
                                <div className="absolute right-0 top-96  w-0.5 h-12 bg-[#FE8235]">
                                    {/* Наконечник стрелки (указывает вниз) */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-t-[8px] border-l-[5px] border-r-[5px] border-t-[#FE8235] border-l-transparent border-r-transparent" />
                                </div>
                            
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="absolute ml-12 top-90 left-60% translate-x-4/2 translate-y-3/4">
                        <div className="flex">
                            <div className="flex flex-col">
                                <span className="text-green-400 font-medium mb-3 text-xl">Step 4</span>
                                <div className="bg-[#5224B5] rounded py-10 px-14 flex flex-col justify-center">
                                    <img src={ShieldDoneIcon} alt="ShieldDoneIcon" className="mb-2 w-16 h-16" />
                                    <p className="text-white text-xl tracking-wider mt-5 mb-5">
                                        Choose the type of NFT <br /> you want to create, such <br /> as a single edition or a <br /> limited series.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Arrow from Step 1 to Step 2 */}
                        <div className="absolute top-1/16 left-1/4 -translate-y-1/2">
                            <div className="relative w-14 right-40 h-0.5 bg-[#FE8235]">
                                {/* Вертикальная линия */}
                                <div className="absolute left-0 top-0 w-0.5 h-23 bg-[#FE8235]">
                                    {/* Наконечник стрелки (указывает вниз) */}
                                </div>
                                <div className='relative w-72 top-22.5 right-72 h-0.5 bg-[#FE8235]'>
                                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-0 h-0 border-r-[8px] border-t-[5px] border-b-[5px] border-r-[#FE8235] border-t-transparent border-b-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="absolute ml-12 top-108 left-60% translate-x-5/6 translate-y-3/4">
                        <div className="flex">
                            <div className="flex flex-col">
                                <span className="text-green-400 font-medium mb-3 text-xl">Step 5</span>
                                <div className="bg-[#5224B5] rounded py-10 px-14 flex flex-col justify-center">
                                    <img src={ShieldDoneIcon} alt="ShieldDoneIcon" className="mb-2 w-16 h-16" />
                                    <p className="text-white text-xl tracking-wider mt-5 mb-5">
                                    Set your asking price for <br /> the NFT and choose any <br /> additional options, such <br /> as a bidding process or a <br /> fixed price sale.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Arrow from Step 1 to Step 2 */}
                        <div className="absolute top-1/16 left-1/4 -translate-y-1/2">
                            <div className="relative w-12 right-40 h-0.5 bg-[#FE8235]">
                                {/* Вертикальная линия */}
                                <div className="absolute left-0 top-0 w-0.5 h-24 bg-[#FE8235]">
                                    {/* Наконечник стрелки (указывает вниз) */}
                                </div>
                                <div className='relative w-58 top-23.5 right-58 h-0.5 bg-[#FE8235]'>
                                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-0 h-0 border-r-[8px] border-t-[5px] border-b-[5px] border-r-[#FE8235] border-t-transparent border-b-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div className="absolute ml-12 top-138 translate-x-[-20%] translate-y-3/4">
                        <div className="flex">
                            <div className="flex flex-col">
                                <span className="text-green-400 font-medium mb-3 text-xl">Step 6</span>
                                <div className="bg-[#5224B5] rounded py-10 px-14 flex flex-col justify-center">
                                    <img src={ShieldDoneIcon} alt="ShieldDoneIcon" className="mb-2 w-16 h-16" />
                                    <p className="text-white text-xl tracking-wider mt-5 mb-5">
                                        Review and confirm the <br /> details of your NFT <br /> listing and hit the <br /> "Submit" button.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};