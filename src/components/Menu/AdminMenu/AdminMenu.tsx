import React from 'react';
import './AdminMenu.scss';
import {ReactComponent as TimerIcon} from "assets/icon-timer-white.svg";

function AdminMenu() {

    return (<div className='admin-menu'>
        <div className='admin-menu__items'>
            <button className='admin-menu__item'>
                <TimerIcon className='admin-menu__item-icon'/>
            </button>
            <button className='admin-menu__item'>
                <TimerIcon className='admin-menu__item-icon'/>
            </button>
            <button className='admin-menu__item'>
                <TimerIcon className='admin-menu__item-icon'/>
            </button>
            <button className='admin-menu__item'>
                <TimerIcon className='admin-menu__item-icon'/>
            </button>
        </div>
    </div>);
}

export default AdminMenu;

// <div className={'board__admin-menu'}>
//     <div className={'admin-menu__items'}>
//         <button className={'admin-menu__item'}>
//             <TimerIcon className={'admin-menu__item-icon'}/>
//         </button>
//         <button className={'admin-menu__item'}>
//             <TimerIcon className={'admin-menu__item-icon'}/>
//         </button>
//         <button className={'admin-menu__item'}>
//             <TimerIcon className={'admin-menu__item-icon'}/>
//         </button>
//         <button className={'admin-menu__item'}>
//             <TimerIcon className={'admin-menu__item-icon'}/>
//         </button>
//     </div>
// </div>