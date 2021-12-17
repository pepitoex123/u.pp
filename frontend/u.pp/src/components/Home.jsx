import HomeCard from "./HomeCard";
import HomeContainer from "./HomeContainer";


const Home = () => {
    return(
        <div className="main home">
            <div className="home__homecardcontainer">
                <HomeCard cardTitle={"Discord"} cardIcon={"discord"}/>
                <HomeCard cardTitle={"Twitch"} cardIcon={"twitch"}/>
                <HomeCard cardTitle={"Twitter"} cardIcon={"twitter"}/>
            </div>
            <div className="home__shopcontainer">
                <HomeContainer title={"Shop"} link={"#"} linkcontent={"Buy.More.Now"}/>
            </div>
            <div className="home__youtubetwitchcontainer">
                <HomeContainer title={"Videos"} link={"#"} linkcontent={"youtube.com"}/>
                <HomeContainer title={"Broadcasts"} link={"#"} linkcontent={"twitch.tv"}/>
            </div>
            <div className="home__spotifycontainer">
                <HomeContainer title={"Top Tracks"} link={"#"} linkcontent={"Spotify"}/>
                <HomeContainer title={"Recently Played"} link={"#"} linkcontent={"Spotify"}/>
            </div>
        </div>
    )
}

export default Home;