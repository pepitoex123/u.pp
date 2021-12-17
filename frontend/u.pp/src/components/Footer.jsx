import LogoSrc from "./../media/img/logofooter.png";
import {AiFillGithub} from "react-icons/ai";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__logo">
                <img src={LogoSrc} alt="Footer Logo"/>
            </div>
            <div className="footer__text">
                <h3 className="footer__text__title">Community</h3>
                <div className="footer__text__paragraphs">
                    <p>
                        Source code for <span className="footer__text__paragraphs--red">website</span>
                    </p>
                    <p>
                        All payments on this website use <span className="footer__text__paragraphs--red">Paypal</span>
                    </p>
                    <p>
                        Creator of the project: <span className="footer__text__paragraphs--red"><AiFillGithub/> pepitoex123</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}


export default Footer;