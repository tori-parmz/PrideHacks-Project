import * as React from 'react';
import MessagesIcon from './MessagesIcon';


function LeftHandNav() {
    return (
    <div className='left-hand-nav'>
    <ul className='left-nav-list'>
        <li><MessagesIcon /></li>
        <li><a href='#'><p>Two</p></a></li>
        <li><a href='#'><p>Three</p></a></li>
    </ul>
    
    </div>

    );
}

export default LeftHandNav;