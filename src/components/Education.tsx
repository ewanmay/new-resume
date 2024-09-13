import React from 'react';
import { resumeData } from './resumeData';

const Education: React.FC = () => {
  const education = resumeData.education;
  return (
    <div className="mb-6">
      <h2 className="text-md font-medium mb-2 text-[#276B88]">Education</h2>
      <div className="">
        <p className="text-sm font-semibold">{education.degree}</p>
        <p className="italic text-secondary text-sm">{education.school} - {education.location}</p>
        <p className="text-secondary text-sm">{education.years}</p>
        <p className="text-secondary text-sm">GPA: {education.gpa}</p>
      </div>
    </div>
  );
};

export default Education;