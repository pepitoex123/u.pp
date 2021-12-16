import {FaDiscord,FaTwitter,FaTwitch} from "react-icons/fa";



const HomeCard = ({cardTitle,cardIcon,cardHover}) => {
    return(
        <div className="homecard">
            {cardIcon === "discord" && (<FaDiscord className={"homecard__svg"}/>)}
            {cardIcon === "twitter" && (<FaTwitter className={"homecard__svg"}/>)}
            {cardIcon === "twitch" && (<FaTwitch className={"homecard__svg"}/>)}
            <div className="homecard__text">
                <h4>{cardTitle}</h4>
                <p>
                    {cardIcon === "discord" ? "Join the server!" : `Follow me on ${cardTitle}!`}
                </p>
                {cardIcon === "twitch" ? (<p>Currently Offline</p>) : ""}
            </div>
        </div>
    )
}


export default HomeCard;