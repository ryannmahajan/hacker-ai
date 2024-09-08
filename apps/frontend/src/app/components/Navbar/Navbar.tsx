import dashboard_icon from '../icons/Dashboard_Icon.png';
import report_icon from '../icons/Report_icon3.png';
import chat_icon from '../icons/Doctor_talk.png';
import './NavBar.scss';
import {  Link , useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    if (location.pathname === '/' || location.pathname === '/home' || location.pathname === '/login' || location.pathname === '/signup') {
        return null; // Don't render the navbar on the homepage
    }


    return (
        <>
            <div className="nav1">

                <div id='box5'>
                    <Link to="/dashboard" className="navele1">
                    <div id="box1">
                        <img src={dashboard_icon} id="img1" alt="Dashboard"></img>
                        <p id="txt10" className="nav-text">Dashboard</p>
                    </div>
                    </Link>
                    <Link to="/reports" className="navele1">
                    <div id="box2">
                        <img src={report_icon} id="img2" alt="Reports"></img>
                        <p id="txt20" className="nav-text">Reports</p>
                    </div>
                    </Link>
                    <Link to="/reports" className="navele1">
                    <div id="box3">
                        <img src={chat_icon} id="img3" alt="Chat with Psychiatrist"></img>
                        <p id="txt30" className="nav-text">Chat with Psychiatrist</p>
                    </div>
                    </Link>
                </div>    
            </div>
        </>
    );
}

export default Navbar;
