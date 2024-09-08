import Navbar from '../../components/Navbar/Navbar'
import TopBar from '../../components/TopBar/TopBar'
import './DashBoard.scss'

function DashBoard(){
    return(<>

        <TopBar />
        <Navbar />
        <div id='dashBox3'>
           
            <div id='graphBox3'>
                <div id='graphBox13' className='card3'>
                    <p className='txt3'>Your Recent Test Reports</p>
                    <div id='graph13'>Graph1</div>
                </div>
                <div id='graphBox23' className='card3'>
                    <p className='txt3'>Your Monthly Report</p>
                    <div id='graph23'>Graph2</div>
                </div>

            </div>
        </div>
    
    </>)
}
export default DashBoard