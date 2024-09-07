
import DashBoard from './pages/DashBoard/Dashboard';
import {Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      
      

        <Routes>
          <Route path="/" element={<DashBoard />} />
        </Routes>
      
    </>
  );
}

export default App;
