


const HomeContainer = ({title,link,linkcontent}) => {
    return(
        <div className="homecontainer">
            <div className="homecontainer__text">
                <h3 className="homecontainer__text__title">{title}</h3>
                <p className="homecontainer__text__link">
                    {
                        link && linkcontent ? (
                            <a href={link}>{linkcontent}</a>
                        ) : ""
                    }
                </p>
            </div>

            <div className="homecontainer__content">

            </div>
        </div>
    )
}

export default HomeContainer