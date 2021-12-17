import React, {useState} from "react";
import LogoSrc from "../media/img/logo.png";
import Searchbar from "./Searchbar";
import {AiFillHome} from "react-icons/ai";
import {IoMdChatbubbles} from "react-icons/io";
import {MdOutlinePlayCircleFilled,MdLogin,MdMonetizationOn,MdShoppingCart} from "react-icons/md";
import {GiCancel,GiHamburgerMenu} from "react-icons/gi";


const Header = () => {

    const [mobileNav,setMobileNav] = useState(false);



    const onClickFunction = () => {
        setMobileNav(!mobileNav);
    }

    return(
        <>
                <header className="header">
                    <div className="header__logo">
                        <img src={LogoSrc} alt="U.PP Logo"/>
                    </div>
                    <div className="header__searchbar">
                        <Searchbar/>
                    </div>
                    <div className="header__navmenu">
                        <div className="header__navmenu__item">
                            <AiFillHome/>
                            <p>Home</p>
                        </div>
                        <div className="header__navmenu__item">
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
                        <div className="header__mobilenavmenu__item">
                            {
                                mobileNav ?  (<GiCancel onClick={onClickFunction}/>) : (<GiHamburgerMenu onClick={onClickFunction}/>)
                            }
                        </div>
                    </div>
                </header>


            {
                mobileNav ?
                    (
                        <section className="mobileheader">
                            <div className="mobileheader__navmenu">
                                <div className="mobileheader__navmenu__item">
                                    <AiFillHome/>
                                    <p>Home</p>
                                </div>
                                <div className="mobileheader__navmenu__item">
                                    <IoMdChatbubbles/>
                                    <p>Chat</p>
                                </div>
                                <div className="mobileheader__navmenu__item">
                                    <MdOutlinePlayCircleFilled/>
                                    <p>Subscribe</p>
                                </div>
                                <div className="mobileheader__navmenu__item">
                                    <MdMonetizationOn/>
                                    <p>Donate</p>
                                </div>
                                <div className="mobileheader__navmenu__item">
                                    <MdLogin/>
                                    <p>Sign In</p>
                                </div>
                                <div className="mobileheader__navmenu__item">
                                    <MdShoppingCart/>
                                    <p>Shop</p>
                                </div>
                            </div>
                        </section>
                    ) : ""
            }

        </>
    )
}

export default Header;