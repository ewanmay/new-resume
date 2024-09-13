import React from "react";
import { resumeData } from "./resumeData";

const Experience: React.FC = () => {
  return (
    <div className="mb-6">
      <h2 className="text-md font-medium mb-2 text-[#276B88]">Experience</h2>
      {resumeData.experience.map((job, index) => (
        <div key={index} className="mb-2">
          <div className="flex row">
            <div className="flex flex-col flex-1">
              <h3 className="text-sm font-semibold">{job.company}</h3>
              <p className="text-sm mb-1 flex-1 font-light">
                {job.role}
              </p>
            </div>
            <div className="flex flex-col text-right self-bottom">
              <p className="text-secondary text-xs">{job.location}</p>
              <p className="text-secondary text-xs">{job.date}</p>
            </div>
          </div>
          <ul className="list-disc list-outside pl-4 text-secondary text-sm space-y-1">
            {job.accomplishments.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
