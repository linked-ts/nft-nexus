import BitcoinImg from "/assets/Bitcoin.svg"
import BlockchainImg from "/assets/Blockchain.svg"
import TetherImg from "/assets/Tether.svg"
import EthereumImg from "/assets/Ethereum.svg"

export const Cryptocurrencies = () => {
    return (
        <section className="discover w-full">
            <div className="bg-[#7FFA8A] min-h-[400px] px-8 max-md:py-8 flex md:gap-16 gap-6 justify-center flex-wrap items-center">
                <img className="w-full max-w-[300px]" src={BitcoinImg} alt="Bitcoin" />
                <img className="w-full max-w-[300px]" src={BlockchainImg} alt="Blockchain" />
                <img className="w-full max-w-[300px]" src={TetherImg} alt="Tether" />
                <img className="w-full max-w-[300px]" src={EthereumImg} alt="Ethereum" />
            </div>
        </section>
    );
};
