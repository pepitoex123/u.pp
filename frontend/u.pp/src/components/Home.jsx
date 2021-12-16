import HomeCard from "./HomeCard";


const Home = () => {
    return(
        <div className="main home">
            <div className="home__homecardcontainer">
                <HomeCard cardTitle={"Discord"} cardIcon={"discord"}/>
                <HomeCard cardTitle={"Twitch"} cardIcon={"twitch"}/>
                <HomeCard cardTitle={"Twitter"} cardIcon={"twitter"}/>
            </div>
            <div className="home__shopcontainer">

            </div>
        </div>
    )
}

export default Home;