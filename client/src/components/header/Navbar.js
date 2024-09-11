import React from 'react'
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar'
const Navbar = () => {
  return (
    <header>
        <nav>
            <div className="left">
                <div className="navlogo">
                    <img src="https://tinyurl.com/tbw5sam2" alt="ulu le pata" />
                </div>
            
            <div className="search">
                <input type="text" name="" id="" />
                <div className="searchicon">
                    <SearchIcon/>
                </div>
            </div>
            </div>
            <div className="right">
                <div className="navbtn">
                    <a href="">Sign in</a>
                </div>
                <div className="cart">
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon id="icon"/>
                    
                </Badge>
                <p>Cart</p>
               
                </div>
                <Avatar className='avatar'/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
