// import React from 'react';
// import './prevReport.scss';
// import { Link } from 'react-router-dom';
// import ReportNum from './ReportNum';
// import add from '../../components/icons/add_new.png';

// const PrevReports = (key: number, num: number , date: any , val1: string , val2: string) => {
//   const DataPrevReports = [
//     {
//       reportNo: 1,
//       date: '2023-09-01',
//       hemoglobin: 13.5,
//       whiteBloodCells: 7500,
//     },
//     {
//       reportNo: 2,
//       date: '2023-08-01',
//       hemoglobin: 13.2,
//       whiteBloodCells: 8000,
//     },
//     {
//       reportNo: 3,
//       date: '2023-07-01',
//       hemoglobin: 12.8,
//       whiteBloodCells: 7800,
//     },
//   ];

//   return (
//     <div id='Rep_view'>
//       <div id='sahil1'>
//         <h4 id='txt50'>Your Previous Reports</h4>
//         <Link to='/summary'>
//           <div id='bck1'>
//             <img src={add} id='icon_add1' alt="Add New Report" />
//           </div>
//         </Link>
//       </div>
      
//       {DataPrevReports.map((report) => (
//         <ReportNum
//           key={report.reportNo}
//           num={report.reportNo}
//           date={report.date}
//           val1={report.hemoglobin}
//           val2={report.whiteBloodCells}
//         />
//       ))}
//     </div>
//   );
// };

// export default PrevReports;
