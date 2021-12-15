import userPic from "./../media/img/avatariconplaceholder.png";

import {GiLockedChest} from "react-icons/gi";

import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs"

import {useState} from "react";


const UserInterface = () => {

    let isUserLoggedIn = false;

    const [isUserInterfaceShown,setIsUserInterfaceShown] = useState(false);


    const onClickArrow = (event) => {
        setIsUserInterfaceShown(!isUserInterfaceShown);
    }


    return(
        <>
            {
                isUserLoggedIn ? (
                    <section className={`userinterface ${isUserInterfaceShown ? "userinterface__active" : ""}`}>
                        <div className="userinterface__userprofile">
                            <img src={userPic} alt="User Profile Picture" className="userinterface__userprofile__img"/>
                        </div>
                        <div className="userinterface__usermessages">

                        </div>
                    </section>
                ) : (
                    <section className={`userinterfaceblocked ${isUserInterfaceShown ? "userinterfaceblocked__active" : ""}`}>
                        <div className="userinterfaceblocked__lock">
                            <h3>You are not logged in!</h3>
                            <p>Log in to see your account settings</p>
                            <GiLockedChest/>
                        </div>
                    </section>
                )
            }
            {
                isUserInterfaceShown ? (<><div className="userinterface__arrow userinterface__arrow__left">
                    <BsFillArrowLeftCircleFill onClick={onClickArrow}/>
                </div></>) : (<><div className="userinterface__arrow userinterface__arrow__right">
                    <BsFillArrowRightCircleFill onClick={onClickArrow}/>
                </div></>)
            }
        </>
    )
}


export default UserInterface;