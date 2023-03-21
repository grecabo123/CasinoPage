import React from 'react'
import { FaCoins, FaHeart, FaSearch, FaStar, FaTrophy } from 'react-icons/fa'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import jackpot from '../../assets/logo/jackpot.PNG'
import jsonfile from '../../assets/PRAGMATICPLAY-gamelist.json'


function FindGame() {
    return (
        <React.Fragment>
            <div className='bg-bottom-nav'>
                <nav class="navbar">
                    <div class="container">
                        <div className="login-nav">
                            <FaSearch id='search' />
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
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <img src={jackpot} alt="Loggo" width={100} height={150} />
                </div>
            </div>
            <div className="container mt-4">
                <div className="row justify-content-center item-center">
                    <div className="col-lg-3">
                        <div className="sidebar">
                            <li>
                                <span>featured </span> <FaStar size={18} className='mt-1 text-light' />
                            </li>
                            <li>
                                <span>top games </span> <FaTrophy size={18} className='mt-1 text-light' />
                            </li>
                            <li>
                                <span>video slots </span> <FaCoins size={18} className='mt-1 text-light' />
                            </li>
                            <li>
                                <span>classic slots </span> <FaCoins size={18} className='mt-1 text-light' />
                            </li>
                            <li>
                                <span>3d slots </span> <FaSearch size={18} className='mt-1 text-light' />
                            </li>
                            <li>
                                <span>live casino </span> <FaSearch size={18} className='mt-1 text-light' />
                            </li>
                            <li>
                                <span>black jack </span> <FaSearch size={18} className='mt-1 text-light' />
                            </li>
                            <li>
                                <span>roulette </span> <FaSearch size={18} className='mt-1 text-light' />
                            </li>
                            <li>
                                <span>table games </span> <FaSearch size={18} className='mt-1 text-light' />
                            </li>
                            <li>
                                <span>video poker </span> <FaSearch size={18} className='mt-1 text-light' />
                            </li>
                            <li>
                                <span>jackpot </span> <FaSearch size={18} className='mt-1 text-light' />
                            </li>
                            <li>
                                <span>other games </span> <FaSearch size={18} className='mt-1 text-light' />
                            </li>
                            <li>
                                <span>favourite games </span> <FaHeart size={18} className='mt-1 text-light' />
                            </li>
                            <li>
                                <span>all games </span> <FaSearch size={18} className='mt-1 text-light' />
                            </li>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row justify-content-evenly item-center">
                            {
                                jsonfile.map((data, id) => {
                                    return (
                                        <div className="col-md-4">
                                            <div className="d-flex justify-content-between">
                                                <div key={id} className="mb-3 box-relative">
                                                    <img src={data.game_image} alt="image" className='img-bg' />
                                                    <div className="d-none">
                                                        <div className="transition-box">
                                                            <div className="colmn">
                                                                <button>Play Now</button>
                                                                <button>Demo</button>
                                                                <span>{data.game_provider}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-around">
                                                        <span>{data.game_name_cn}</span>
                                                        <span>star</span>
                                                    </div>
                                                    {data.is_new === "Y" ? <span className='newtag'> <p>NEW</p></span> : ""}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FindGame