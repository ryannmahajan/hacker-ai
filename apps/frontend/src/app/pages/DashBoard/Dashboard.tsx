import Navbar from '../../components/Navbar/Navbar.js'
import './DashBoard.scss'
import TopBar from '../../components/TopBar/TopBar.js'
function DashBoard(){
    return(<>
        <TopBar />
        <Navbar />

        <div id='dashBox'>
            <h3 id='txt1'>Welcome , User</h3>    
            <div id='graphBox'>
                <div id='graphBox1'>
                    <p id='txt2'>Your Recent Test Reports</p>
                    <div id='graph1'>Graph1</div>
                </div>
                <div id='graphBox2'>
                    <p id='txt3'>Your Monthly Report</p>
                    <div id='graph2'>Graph2</div>
                </div>

            </div>
        </div>
    
    </>)
}
export default DashBoard