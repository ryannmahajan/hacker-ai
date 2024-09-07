import Navbar from '../../components/Navbar/Navbar.js'
import './DashBoard.scss'
import TopBar from '../../components/TopBar/TopBar.js'

function DashBoard(){
    return(<>


        <div id='dashBox'>
            {/* <h3 id='title'>Welcome , User</h3>     */}
            <div id='graphBox'>
                <div id='graphBox1' className='card'>
                    <p className='txt'>Your Recent Test Reports</p>
                    <div id='graph1'>Graph1</div>
                </div>
                <div id='graphBox2' className='card'>
                    <p className='txt'>Your Monthly Report</p>
                    <div id='graph2'>Graph2</div>
                </div>

            </div>
        </div>
    
    </>)
}
export default DashBoard