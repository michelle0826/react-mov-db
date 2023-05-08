import siteLogo from "../images/SLATE-logo.png";

function Footer() {
    return (
        <footer>
            <img src={siteLogo} alt="SLATE logo"/>
            <p>An API-powered movie database <br /> &copy; 2023</p>
        </footer>
    )
}

export default Footer