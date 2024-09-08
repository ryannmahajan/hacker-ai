import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReportNum from '../pages/prevReport/ReportNum';
import add from './icons/add_new.png';

// Define the interface for the Report object
interface Report {
  id: number;
  userId: number;
  reportDate: string;
  hemoglobin: string;
  packedCellVolume: string;
  rbcCount: string;
  mcv: string | null;
  lymphocytesDiff: string | null;
  neutrophils: string | null;
  lymphocytes: string | null;
  summary: string;
}

const BloodReports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]); // Store the array of JSON objects
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Store error as string or null

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the token from localStorage

        if (!token) {
          throw new Error('No token found. Please log in.');
        }

        const response = await axios.get('http://13.60.46.23:3000/api/v1/user/fetchbloodreports', {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
          }
        });

        setReports(response.data); // Save the array of reports to the state
        setLoading(false); // Data fetching is complete
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  // If data is still loading, display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there is an error, display the error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Once data is fetched, render each report in a box
  return (
    <div id='Rep_view'>
      <div id='sahil1'>
        <h4 id='txt50'>Your Previous Reports</h4>
        <Link to='/summary'>
          <div id='bck1'>
            <img src={add} id='icon_add1' alt="Add New Report" />
          </div>
        </Link>
      </div>

      {reports.map((report) => (
        <ReportNum
          key={report.id}
          num={report.id}
          date={report.reportDate}
          val1={report.hemoglobin}
          val2={report.rbcCount}
        />
      ))}
    </div>
  );
};

export default BloodReports;
