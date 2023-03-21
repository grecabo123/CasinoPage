import React from 'react'
import logo from '../../assets/logo/logo.png'
import { FaHome, FaLock, FaUser } from 'react-icons/fa'
import Banner from './Banner'

function NavBar() {
    return (
        <React.Fragment>
            <nav class="navbar navbar-light">
                <div class="container">
                    <a class="navbar-brand"><img src={logo} height={40} alt="" /></a>
                    <div className="d-flex">
                        <div className="login-nav">
                            <FaUser size={12} id='user' />
                            <input type="text" className="input-field" placeholder='User ID' />
                        </div>
                        <div className="login-nav">
                            <FaLock size={12} id='user' />
                            <input type="password" className="input-field" placeholder='******' />
                        </div>
                        <div className="login-nav">
                            <button className='button-nav btn-yellow'>Login</button>
                        </div>
                        <div className="login-nav">
                            <button className='button-nav btn-red'>Join</button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Section Nav */}
            <div className="colornav">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="/"><FaHome /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Sports</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Live casino</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">slots</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">games</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">lottery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">super bull</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">poker</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">promos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
            <Banner />
        </React.Fragment>
    )
}

export default NavBar