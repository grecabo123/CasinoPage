import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function FindGame() {
    return (
        <div>
            <nav class="navbar navbar-light">
                <div class="container">
                    <div className="login-nav">
                        <FaSearch id='search'  />
                        <input type="text" className="input-search" placeholder='User ID' />
                    </div>
                    <div className="d-flex">
                        <span className='me-4'>new games</span>
                        <span className='me-4'>most popular games</span>
                        <span className='me-4'>game providers</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default FindGame