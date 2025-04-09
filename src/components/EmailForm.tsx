
export const EmailForm = () => {
    return (
        <div className="email-form w-full pt-32 bg-[#0A0A0A] bg-gradient-to-b from-transparent from-0% via-[#0A0A0A]/0 via-70% to-[#7FFA8A] to-80% z-2">
            <div className="container mx-auto max-lg:pt-20">
                <div className="flex flex-col justify-center items-center gap-8">
                    <h2 className="font-bold tracking-wider text-center text-6xl">Updates on upcoming events and <br /> activities related to NFTs</h2>
                    <div className="form flex gap-6 max-lg:flex-col max-lg:gap-4">
                        <input type="email" placeholder="YOUR EMAIL" className="w-full text-xl min-w-[400px] py-4 px-6 bg-[#0A0A0A] tracking-widest text-[#FE8235] placeholder:text-[#FE8235] border-[#FE8235] border-2 focus:outline-none focus:ring-2 focus:ring-[#FE8235] transition duration ease-out" />
                        <button className="bg-[#FE8235] text-white tracking-widest text-xl py-4 px-8 font-bold hover:bg-[#5224B5] cursor-pointer transition duration ease-out">SUBMIT</button>
                    </div>
                </div>
                <div className="mt-10">
                <div className="footer-panda-bg bg-no-repeat bg-[center_top_-100%] h-[90vh] relative bg-[url('/assets/Panda_Footer.svg')] ">
                    
                </div>
                </div>
            </div>
        </div>
    );
};