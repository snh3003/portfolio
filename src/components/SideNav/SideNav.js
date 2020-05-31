import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://avatars3.githubusercontent.com/u/46817090?s=460&u=2aa01c6c387008d829921455ec4e7fb4c128cf3e&v=4"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Shahab Hashmi</h2>
            <p className="subtitle">"Dont let your dreams die!!!"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};