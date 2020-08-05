
import React from 'react';

interface TitleProps {
    title: string
}

export const BodyTitle = ({title}: TitleProps) => {
    return (
        <div className="body-title">
            {title}
        </div>
    );
}


