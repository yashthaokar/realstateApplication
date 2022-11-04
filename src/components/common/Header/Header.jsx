import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { nav } from '../../data/Data'
import Mylist from './Mylist/Mylist'


const Header = () => {
    const [navList, setNavList] = useState(false)
    return (
        <>
            <header>
                <div className='container flex'>
                    <div className='logo'>
                        <h1>CodeSimplifier</h1>
                    </div>
                    <div className='nav'>
                        <ul className={navList ? "small" : "flex"}>
                            {nav.map((list, index) => (
                                <li key={index}>
                                    <Link to={list.path}>{list.text} &nbsp;{list.logo}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='button flex'>
                        <button className='btn1'>
                            <i className='fa fa-sign-out'></i> Sign In
                        </button>
                    </div>

                    <div className='toggle'>
                        <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
