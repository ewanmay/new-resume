
import React from 'react';

interface BodySecondaryTextProps {
    items: string[],

}

export const BodySecondaryText = ({ items }: BodySecondaryTextProps) => {
    return (
        <div className="body-secondary-text">
            {items.map(o => <div>{o}</div>)}
        </div>
    );
}


