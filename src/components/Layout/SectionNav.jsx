import React from 'react'
import { FaHome } from 'react-icons/fa'
import second from '../../assets/logo/banner.PNG'

function SectionNav() {
    return (
        <React.Fragment>
            <div className='container'>
                <ul className='section-list'>
                    <FaHome size={20} />
                    <li><span>sports</span></li>
                    <li><span>Live casino</span></li>
                    <li><span>slots</span></li>
                    <li><span>games</span></li>
                    <li><span>lotrery</span></li>
                    <li><span>super ball</span></li>
                    <li><span>poker</span></li>
                    <li><span>promos</span></li>
                </ul>
                
            </div>
           
        </React.Fragment>
    )
}

export default SectionNav