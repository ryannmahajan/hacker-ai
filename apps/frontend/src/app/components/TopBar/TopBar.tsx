import search_icon from '../icons/Search_icon.png'
import user_icon from '../icons/User_logo.png'
import './TopBar.scss'
import logo from '../icons/ByteBook_LOGO.png'


function TopBar(){

    return(

        <>
            <div id="box10">
            <div id='logo1'>
                    <img id='logo2' src={logo}></img>
                </div>
                <div id='search1'>
                    <img src={search_icon} id='icon1'></img>
                    <input type='text' id='searBar' placeholder='Search'></input>
                </div>
                <div id='icon2'>
                    <img src={user_icon} id='user1'></img>
                </div>
            </div>
        
        
        </>
    )
}
export default TopBar