
import DashBoard from './pages/DashBoard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ReportNum from './pages/prevReport/ReportNum';
import BloodReports from './components/DataFetch';
import Blood from './components/Drag_andDrop/Blood'

import HomePage from './pages/HomePage/HomePage';
import ImageUploaderliver from './components/Drag_andDrop/Liver';
export function App() {
  return (
    <>
{
        // <DataFetchingComponent />
        <Routes>
          <Route path="/" element={<HomePage someNumber={0} />} />
          <Route path="/home" element={<HomePage someNumber={0} />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/reports" element={<BloodReports />} />
          <Route path="/login" element={<ImageUploaderliver />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add_report" element={<Blood />} />

      </Routes> 
      }

      
    </>
  );
}

export default App;
