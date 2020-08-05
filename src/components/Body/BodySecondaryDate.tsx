
import React from 'react';

interface TitleProps {
    date: string,
    location: string
}

export const BodySecondaryDate = ({date, location}: TitleProps) => {
    return (
        <div className="body-date">
           {location} | {date}
        </div>
    );
}


