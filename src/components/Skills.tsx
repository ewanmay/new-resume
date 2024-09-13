import React from 'react';
import { resumeData } from './resumeData';

const Skills: React.FC = () => {
  return (
    <div className="mb-6">
      <h2 className="text-md font-medium mb-2 text-[#276B88]">Skills</h2>

      {/* Languages Section */}
      <div className="flex flex-row">
      <div className="pr-8">
        <h3 className="text-sm font-semibold">Languages:</h3>
        <div className="flex flex-row flex-wrap">
          {resumeData.skills.languages.map((lang, index) => (
            <p key={index} className="text-sm font-light pr-2">{lang}</p>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div>
        <h3 className="text-sm font-semibold">Tools:</h3>
        <div className="flex flex-row flex-wrap">
          {resumeData.skills.tools.map((tool, index) => (
            <p key={index} className="text-sm font-light pr-2">{tool}</p>
          ))}
          </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;