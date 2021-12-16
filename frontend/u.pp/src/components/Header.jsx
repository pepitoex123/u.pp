import React from "react";
import LogoSrc from "../media/img/logo.png";
import Searchbar from "./Searchbar";
import {AiFillHome} from "react-icons/ai";
import {IoMdChatbubbles} from "react-icons/io";
import {MdOutlinePlayCircleFilled,MdLogin,MdMonetizationOn,MdShoppingCart} from "react-icons/md";


const Header = () => {
    return(
        <header className="header">
            <div className="header__logo">
                <img src={LogoSrc} alt="U.PP Logo"/>
            </div>
            <div className="header__searchbar">
                <Searchbar/>
            </div>
            <div className="header__navmenu">
                <div className="header__navmenu__item" data-shadow="home">
                    <AiFillHome/>
                    <p>Home</p>
                </div>
                <div className="header__navmenu__item" data-shadow="chat">
                    <IoMdChatbubbles/>
                    <p>Chat</p>
                </div>
                <div className="header__navmenu__item header__navmenu__item__subscribe">
                    <MdOutlinePlayCircleFilled/>
                    <p>Subscribe</p>
                </div>
                <div className="header__navmenu__item">
                    <MdMonetizationOn/>
                    <p>Donate</p>
                </div>
                <div className="header__navmenu__item">
                    <MdLogin/>
                    <p>Sign In</p>
                </div>
                <div className="header__navmenu__item">
                    <MdShoppingCart/>
                    <p>Shop</p>
                </div>
            </div>
        </header>
    )
}

export default Header;