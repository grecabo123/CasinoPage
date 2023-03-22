import React, { useEffect, useState } from 'react'
import { FaCoins, FaHeart, FaSearch, FaStar, FaTrophy } from 'react-icons/fa'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import jackpot from '../../assets/logo/jackpot.PNG'
import jsonfile from '../../assets/PRAGMATICPLAY-gamelist.json'
import { Rating } from 'primereact/rating';
 



function FindGame() {

    const [hovers, setHover] = useState(false);
    const [searchID, setSearchID] = useState("");
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);


    useEffect(() => {
        Display();
    }, []);
    const Display = (e) => {
        // setHover(true)
        setSelectedItemIndex(e);
    }

    const HideHover = () => {
        setSelectedItemIndex(-1);
    }

    const SearchID = (e) =>{
        setSearchID(e);
    }

    

    return (
        <React.Fragment>
            <div className='bg-bottom-nav'>
                <nav class="navbar">
                    <div class="container">
                        <div className="login-nav">
                            <FaSearch id='search' />
                            <input type="text" className="input-search" onChange={(e) => SearchID(e.target.value)} placeholder='User ID' />
                        </div>
                        <div className='d-none d-lg-block d-xl-none'>
                        <div className="d-flex">
                            <span className='me-4'>new games</span>
                            <span className='me-4'>most popular games</span>
                            <span className='me-4'>game providers</span>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <img src={jackpot} alt="Loggo" className='img-responsive' width={100} height={150} />
                </div>
            </div>
            <div className="container mt-4">
                <div className="row justify-content-center item-center">
                    <div className="col-lg-3 d-md-none d-lg-block d-sm-none">
                        <div className="sidebar">
                            <li>
                                <span>featured </span> <FaStar size={18} className='mt-1  text-light icon-yellow' />
                            </li>
                            <li>
                                <span>top games </span> <FaTrophy size={18} className='mt-1 text-light icon-yellow' />
                            </li>
                            <li>
                                <span>video slots </span> <FaCoins size={18} className='mt-1 text-light icon-yellow' />
                            </li>
                            <li>
                                <span>classic slots </span> <FaCoins size={18} className='mt-1 text-light icon-yellow' />
                            </li>
                            <li>
                                <span>3d slots </span> <FaSearch size={18} className='mt-1 text-light icon-yellow' />
                            </li>
                            <li>
                                <span>live casino </span> <FaSearch size={18} className='mt-1 text-light icon-yellow' />
                            </li>
                            <li>
                                <span>black jack </span> <FaSearch size={18} className='mt-1 text-light icon-yellow' />
                            </li>
                            <li>
                                <span>roulette </span> <FaSearch size={18} className='mt-1 text-light icon-yellow' />
                            </li>
                            <li>
                                <span>table games </span> <FaSearch size={18} className='mt-1 text-light icon-yellow' />
                            </li>
                            <li>
                                <span>video poker </span> <FaSearch size={18} className='mt-1 text-light icon-yellow' />
                            </li>
                            <li>
                                <span>jackpot </span> <FaSearch size={18} className='mt-1 text-light icon-yellow' />
                            </li>
                            <li>
                                <span>other games </span> <FaSearch size={18} className='mt-1 text-light icon-yellow' />
                            </li>
                            <li>
                                <span>favourite games </span> <FaHeart size={18} className='mt-1 text-light icon-yellow' />
                            </li>
                            <li>
                                <span>all games </span> <FaSearch size={18} className='mt-1 text-light icon-yellow' />
                            </li>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-10 ">
                        <div className="row justify-content-evenly item-center">
                            {
                                jsonfile.filter((data) => {
                                    return searchID.toLowerCase() === '' ? data : data.game_name_en.toLowerCase().includes(searchID)
                                }).map((data, id) => {
                                    return (
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="d-flex justify-content-between">
                                                <div key={id} className="mb-3 me-2 box-relative" onMouseEnter={(e) => Display(data.game_id)} onMouseLeave={HideHover}>
                                                    <div className='flex-center'>
                                                        <img src={data.game_image} alt="image" className={selectedItemIndex !== data.game_id ? 'img-bg img-responsive' : 'img-bg show-on'} width={200} />
                                                        <div className={selectedItemIndex !== data.game_id ? 'boxhide' : "transition-box"}>
                                                            <div className="colmn">
                                                                <button>Play Now</button>
                                                                <button>Demo</button>
                                                                <span>{data.game_provider}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-block">
                                                        <div className="d-flex justify-content-around">
                                                            <span className='title-img'>{data.game_name_cn}</span>
                                                            <span><Rating value={data.ranking} className="" cancel={false} /></span>
                                                        </div>
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