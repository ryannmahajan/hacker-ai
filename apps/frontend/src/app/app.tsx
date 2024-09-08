
import DashBoard from './pages/DashBoard/Dashboard';
import { Route, Routes } from 'react-router-dom';

import Blood from './components/Drag_andDrop/Blood'

import HomePage from './pages/HomePage/HomePage';
import ImageUploaderliver from './components/Drag_andDrop/Liver';
import ImageUploaderblood from './components/Blood';
export function App() {
  return (
    <>
{
        // <DataFetchingComponent />
        <Routes>
          <Route path="/" element={<HomePage someNumber={0} />} />
          <Route path="/home" element={<HomePage someNumber={0} />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/liver_reports" element={<ImageUploaderliver />} />
          <Route path="/blood_reports" element={<ImageUploaderblood />} />
          <Route path="/add_report" element={<Blood />} />

      </Routes> 
      }

      
    </>
  );
}

export default App;
