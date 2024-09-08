import React, { useState } from 'react';
import Arrow from '../../components/icons/arrow.svg';
import './prevReport.scss';
import TopBar from '../../components/TopBar/TopBar';
import NavBar from '../../components/Navbar/Navbar';


interface ReportNumProps {
  num: number;
  date: string;
  val1: string;
  val2: string;
}

const ReportNum: React.FC<ReportNumProps> = ({ num, date, val1, val2 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <TopBar />
      <NavBar />
      <div id="repBox" className={isExpanded ? 'expanded' : ''}>
        <div id='mainbox1'>
          <div id="repLHS">
            <div id="repNum">Report No. {num}</div>
            <div id="repDate">Date {date}</div>
          </div>
          <img
            src={Arrow}
            id="arr1"
            alt="Arrow Icon"
            onClick={toggleExpand}
          />
          <div id="repValue">
            <div id="repValue1">{val1}</div>
            <div id="repValue2">{val2}</div>
          </div>
        </div>
        <div id="hiddenContent">
          {isExpanded && <p>Lorem ipsum dolor sit amet...</p>}
        </div>
      </div>
    </>
  );
};

export default ReportNum;
