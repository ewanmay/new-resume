
import React from 'react';
import { BodySecondaryDate } from './BodySecondaryDate';

interface TitleProps {
    organization: string,
    position: string,
    date: string,
    location: string
}

export const BodySecondaryTitle = ({ organization, position, date, location }: TitleProps) => {
    return (
        <div className="body-header flex column left">
            <div className="secondary-title flex">
                {organization}
                <div className="secondary-position pl-2 right flex">
                    {position}
                </div>
            </div>
            <BodySecondaryDate date={date} location={location}></BodySecondaryDate>
        </div>
    );
}


