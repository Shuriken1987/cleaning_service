import logoImage from "../../img/Logo-renax-1.png";
import Video from "./Video";

const Header = () => {

    return (
        <header className="header">
            <div className="logo">
                <img src={logoImage} alt="Renax" className="logo-img"/>
            </div>
            <div className="video">
                <Video/>
            </div>
        </header>
    )
}
export default Header;