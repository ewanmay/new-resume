
import React from 'react';
import {BodyTitle} from './BodyTitle'
import './styles.scss'

interface RightBodyItemProps {
    children?: any,
    title: string
}

export const BodyItem = (props: RightBodyItemProps) => {
    return (
        <div className="body-item">
            <BodyTitle title={props.title} />
            <div className="flex left">
                {props.children}
            </div>
        </div>
    );
}


