import React from 'react';
import './AdminMenu.scss';
import {ReactComponent as TimerIconWhite} from "assets/icon-timer-white.svg";
import {ReactComponent as TimerIconRed} from "assets/icon-timer-red.svg";
import MenuButton from "../MenuButton/MenuButton";

function AdminMenu() {

    return (<div className='admin-menu'>
        <div className='admin-menu__items'>
            <button className='admin-menu__item'>
                <TimerIconWhite className='admin-menu__item-icon--white'/>
                <TimerIconRed className='admin-menu__item-icon--red'/>
            </button>
            <button className='admin-menu__item'>
                <TimerIconWhite className='admin-menu__item-icon--white'/>
                <TimerIconRed className='admin-menu__item-icon--red'/>
            </button>
            <button className='admin-menu__item'>
                <TimerIconWhite className='admin-menu__item-icon--white'/>
                <TimerIconRed className='admin-menu__item-icon--red'/>
            </button>
            <MenuButton toggle={true} onToggle={(toggle: boolean) => undefined} toggleStartLabel={"START TIMER"} toggleEndLabel={"END TIMER"}>
                <TimerIconWhite className='menu-button__icon menu-button__icon--white'/>
                <TimerIconRed className='menu-button__icon menu-button__icon--red'/>
            </MenuButton>
        </div>
    </div>);
}

export default AdminMenu;