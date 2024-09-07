import React, { useState } from 'react';
import Arrow from '../../components/icons/arrow.svg';
import './prevReport.scss';

interface ReportNumProps {
  num: number;
  date: string;
  val1: number;
  val2: number;
}

const ReportNum: React.FC<ReportNumProps> = ({ num, date, val1, val2 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
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
          {isExpanded && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae sed, ad aliquid pariatur minima dolorum repellendus a reiciendis tempore facilis numquam ullam culpa dolorem nostrum. Asperiores harum a obcaecati!LoremLorem
            
            
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.</p>}
        </div>
      
      </div>
    </>
  );
};

export default ReportNum;