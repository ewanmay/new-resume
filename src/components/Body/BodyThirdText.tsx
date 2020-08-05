
import React from 'react';

interface BodyThirdText {
    items: string[],

}

export const BodyThirdText = ({ items }: BodyThirdText) => {
    return (
        <div className="body-third-text">
            {items.map(o => <div>{o}</div>)}
        </div>
    );
}


