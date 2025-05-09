import React from 'react';
import './custom.css'
import { ContactMe } from '../ContactMe';

interface NestedDivsProps {
  level: number;
}

const NestedDivs: React.FC<NestedDivsProps> = ({ level }) => {
  if (level === 0) {
    return null;
  }
  return (
    <div className={`circles-container w-full h-full circle${level}`}>
      <NestedDivs level={level - 1} />
    </div>
  );
};

const NestedCirclesContainer: React.FC = () => {
  return (
    <div className="figure-align relative flex justify-center overflow-hidden my-20 w-full">
      <div className='flex justify-center items-center max-w-(--circle-size) max-h-(--circle-size)'>
          <NestedDivs level={20} />
      </div>
      <ContactMe/>
    </div>
  );
};

export default NestedCirclesContainer;