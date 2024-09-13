import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { resumeData } from './resumeData';

const Contact: React.FC = () => {
  const contact = resumeData.contact;
  return (
    <div className="text-left text-xs mb-4">
      <div className="flex flex-col space-y-1">
        {/* Phone */}
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faPhone} className="text-black" />
          <p>{contact.phone}</p>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faEnvelope} className="text-black" />
          <p>{contact.email}</p>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faGithub} className="text-black" />
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-xs">
            github.com/ewanmay
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;