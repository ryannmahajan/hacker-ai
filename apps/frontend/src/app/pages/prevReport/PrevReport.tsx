import React, { useState } from 'react';
import Arrow from '../../components/icons/arrow.svg';
import './prevReport.scss';
import ReportNum from './ReportNum';


const PrevReports: React.FC = () => {
  const DataPrevReports = [
    {
      reportNo: 1,
      date: '2023-09-01',
      hemoglobin: 13.5, // g/dL
      whiteBloodCells: 7500, // cells/µL
    },
    {
      reportNo: 2,
      date: '2023-08-01',
      hemoglobin: 13.2, // g/dL
      whiteBloodCells: 8000, // cells/µL
    },
    {
      reportNo: 3,
      date: '2023-07-01',
      hemoglobin: 12.8, // g/dL
      whiteBloodCells: 7800, // cells/µL
    },
  ];

  return (
    <div id='Rep_view'>
      {DataPrevReports.map((report) => (
        <ReportNum
          key={report.reportNo}
          num={report.reportNo}
          date={report.date}
          val1={report.hemoglobin}
          val2={report.whiteBloodCells}
        />
      ))}
    </div>
  );
};

export default PrevReports;
