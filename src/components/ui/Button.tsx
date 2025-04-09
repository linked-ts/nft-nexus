import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, type }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className='bg-[#252525] cursor-pointer tracking-wider text-2xl font-bold px-8 py-4 hover:text-black hover:bg-[#7FFA8A] transition-all duration-300 ease-in-out max-md:text-2xl max-md:px-6 max-md:py-3'
        >
            {children}
        </button>
    );
};

export default Button;