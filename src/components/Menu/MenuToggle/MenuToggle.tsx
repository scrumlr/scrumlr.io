import React, { useState } from 'react';
import {ReactComponent as CloseIcon} from "assets/icon-close-white.svg";
import './MenuToggle.scss';

type MenuToggleProps = {
    children: React.ReactNode;
    index: number;
    direction: 'left' | 'right';
    toggleStartLabel: string;
    toggleStopLabel: string;
}

function MenuToggle(props: MenuToggleProps) {

    const [status, setStatus] = useState(false);

    return (<button 
                className={`menu-toggle menu-toggle${props.index} menu-toggle${status ? '--active' : '--disabled'}`}
                onClick={_ => setStatus(prevValue => !prevValue)}
            >
        <div className='menu-toggle__tooltip'>
            <span className='tooltip__text'>
                {status ? props.toggleStopLabel : props.toggleStartLabel}
            </span>
        </div>
        <CloseIcon className='menu-toggle__icon menu-toggle__icon--end'/>
        {props.children}
    </button>);
}

export default MenuToggle;