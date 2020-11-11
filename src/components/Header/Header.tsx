import React from 'react';
import './Header.scss';

export interface HeaderProps {
    children?: React.ReactNode;
}

const Header = ({children}:HeaderProps) => {
    return (
        <section className='header'>
            <div className='header__logo'> 

            </div>
            <div className='header__board-info'>
                {children}
            </div>
            <div className='header__users'>
                
            </div>
        </section>
    );
};
export default Header;