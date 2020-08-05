
import React from 'react';
import FontAwesome from 'react-fontawesome'

export const Title = () => {
    return (
        <div className="flex left column">
            <h1 className="overall-title">
                Ewan May
            </h1>
            <a className="website-link fit" href="https://ewanmay.me" target="__blank" rel="noopener noreferrer">
                https://ewanmay.me
            </a>
            <a className="social-link fit flex center" href="https://linkedin.com/in/ewan-may" target="__blank" rel="noopener noreferrer">
                <FontAwesome
                    name="linkedin"
                    size="lg"
                    className="px-2"
                />
                linkedin.com/in/ewan-may
            </a>
            <a className="social-link flex center" href="https://github.com/ewanmay" target="__blank" rel="noopener noreferrer">
                <FontAwesome
                    name="github-square"
                    size="lg"
                    className="px-2"
                />
                github.com/ewanmay
            </a>
            <a className="social-link flex center" href="mailto:ewan.may@ucalgary.ca" rel="noopener noreferrer">
                <FontAwesome
                    name="envelope"
                    size="lg" 
                    className="px-2"
                />
                ewan.may@ucalgary.ca
            </a>
        </div>
    );
}


