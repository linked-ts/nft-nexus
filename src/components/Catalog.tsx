import Button from './ui/Button';
import { Search } from 'lucide-react';
import ETHIcon from "/assets/ETH_ICON.svg";

const catalogArr = [
    {
        id: 1,
        img: "/assets/Panda Grenade.svg",
        title: "Panda Grenade",
        cost: "0.452.46",
        owner: "Jacob Jones",
        ownerImg: "/assets/Jacob.svg",
    },
    {
        id: 2,
        img: "/assets/Panda Gun.svg",
        title: "Panda Gun",
        cost: "0.452.46",
        owner: "Leslie Alexander",
        ownerImg: "/assets/Leslie.svg",
    },
    {
        id: 3,
        img: "/assets/Panda Sniper.svg",
        title: "Panda Sniper",
        cost: "0.452.46",
        owner: "Arliene McCoy",
        ownerImg: "/assets/Arlene.svg",
    },
    {
        id: 4,
        img: "/assets/Panda Arrow.svg",
        title: "Panda Arrow",
        cost: "0.452.46",
        owner: "Ralph Edwards",
        ownerImg: "/assets/Ralph.svg",
    },
    {
        id: 5,
        img: "/assets/Panda Spear.svg",
        title: "Panda Spear",
        cost: "0.452.46",
        owner: "Jane Cooper",
        ownerImg: "/assets/Jane.svg",
    },
    {
        id: 6,
        img: "/assets/Panda Bazooka.svg",
        title: "Panda Bazooka",
        cost: "0.452.46",
        owner: "Courtney Henry",
        ownerImg: "/assets/Courtney.svg",
    }
]

export const Catalog = () => {
    return (
        <div className='catalog w-full min-h-[150vh] pt-32 bg-[#0A0A0A]'>
            <div className="container mx-auto">
                <div className="btns flex justify-between max-lg:justify-center items-center max-lg:gap-4 max-md:flex-col max-md:gap-4">
                    <div className='flex max-md:flex-col gap-4 flex-wrap max-lg:gap-2'>
                        <Button>ALL</Button>
                        <Button>ART</Button>
                        <Button>GAME</Button>
                        <Button>PHOTOGRAPHY</Button>
                        <Button>ANIMAL</Button>
                    </div>
                    <div>
                        <Button>
                            <Search className='text-white' size={24} />
                        </Button>
                    </div>
                </div>
                

                <div className='grid grid-cols-3 gap-6 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                    {catalogArr.slice(0, 3).map((item) => (
                        <div key={item.id} className="card overflow-hidden">
                            <div className="img-container w-full">
                                <img className='w-full h-full object-cover' src={item.img} alt={item.title} />
                            </div>
                            <div className='bg-[#5224B5] px-6 py-6'>
                                <h3 className='text-2xl font-bold text-white'>{item.title}</h3>
                                <div className="flex items-center mt-1">
                                    <img src={ETHIcon} alt="ETH" className="mr-2" />
                                    <p className='text-xl tracking-wider text-bold text-[#FE8235]'>{item.cost}</p>
                                </div>
                                <div className='flex items-center mt-8'>
                                    <img className='w-10 h-10 rounded-full mr-2' src={item.ownerImg} alt={item.owner} />
                                    <p className='text-lg font-bold truncate'>{item.owner}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                

                <div className='grid grid-cols-3 gap-6 mt-6 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                    {catalogArr.slice(3, 6).map((item) => (
                        <div key={item.id} className="card overflow-hidden">
                            <div className="img-container w-full">
                                <img className='w-full h-full object-cover' src={item.img} alt={item.title} />
                            </div>
                            <div className='bg-[#5224B5] px-6 py-6'>
                                <h3 className='text-2xl font-bold text-white'>{item.title}</h3>
                                <div className="flex items-center mt-1">
                                    <img src={ETHIcon} alt="ETH" className="mr-2" />
                                    <p className='text-xl tracking-wider text-bold text-[#FE8235]'>{item.cost}</p>
                                </div>
                                <div className='flex items-center mt-8'>
                                    <img className='w-10 h-10 rounded-full mr-2' src={item.ownerImg} alt={item.owner} />
                                    <p className='text-lg font-bold truncate'>{item.owner}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};