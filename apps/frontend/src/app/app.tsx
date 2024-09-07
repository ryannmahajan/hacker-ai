import PrevReports from './pages/prevReport/PrevReport';
import DashBoard from './pages/DashBoard/Dashboard';
import {Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import Navbar from './components/Navbar/Navbar';
export function App() {
  return (
    <>
        <TopBar />
        <Navbar />

        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/reports" element={<PrevReports />} />
        </Routes>
      
    </>
  );
}

export default App;
