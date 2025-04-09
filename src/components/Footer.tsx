import TwitterIcon from '/assets/Twitter.svg';
import FacebookIcon from '/assets/Facebook.svg';
import TelegramIcon from '/assets/Telegram.svg';

export const Footer = () => {
    return (
        <div className='footer bg-[#5224B5] min-h-[50vh] text-white py-24 px-8'>
            <div className='container mx-auto flex max-lg:flex-wrap justify-between'>
                {/* Logo and Address */}
                <div className='w-full md:w-1/4 mb-8 md:mb-0'>
                    <div className='flex items-center mb-6'>
                        <div className='h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mr-2'>
                            <span className='text-white text-2xl font-bold'>N</span>
                        </div>
                        <span className='text-orange-500 text-2xl font-bold'>NFT NEXUS</span>
                    </div>
                    <address className='not-italic text-gray-300 text-lg tracking-wider'> 
                        3894 Ranchview Dr.<br />
                        Richardson, California<br />
                        62639
                    </address>
                </div>

                {/* Company Column */}
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='font-bold text-xl tracking-widest mb-4'>Company</h3>
                    <ul className='space-y-2 text-md tracking-widest'>
                        <li>About Us</li>
                        <li>Discover</li>
                        <li>Download</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Services Column */}
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='font-bold text-xl tracking-widest mb-4'>Services</h3>
                    <ul className='space-y-2 text-md tracking-widest'>
                        <li>Pricing</li>
                        <li>Products</li>
                        <li>Customers</li>
                        <li>Portfolio</li>
                        <li>Success Stories</li>
                        <li>More</li>
                    </ul>
                </div>

                {/* Support Column */}
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='font-bold text-xl tracking-widest mb-4'>Support</h3>
                    <ul className='space-y-2 text-md tracking-widest'>
                        <li>About us</li>
                        <li>Legal</li>
                        <li>Career</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Follow Us Column */}
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='font-bold text-xl tracking-widest mb-4'>Follow Us</h3>
                    <div className='flex space-x-4'>
                        <a href="#" className='h-8 w-8'>
                            <img src={TwitterIcon} alt="Twitter" className='h-full w-full' />
                        </a>
                        <a href="#" className='h-8 w-8'>
                            <img src={FacebookIcon} alt="Facebook" className='h-full w-full' />
                        </a>
                        <a href="#" className='h-8 w-8'>
                            <img src={TelegramIcon} alt="Telegram" className='h-full w-full' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};