import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './components/Title/Title';
import { BodyItem } from './components/Body/BodyItem';
import { BodyThirdText } from './components/Body/BodyThirdText';
import { BodySecondaryDate } from './components/Body/BodySecondaryDate';
import { BodySecondaryTitle } from './components/Body/BodySecondaryTitle';
import { BodySecondaryText } from './components/Body/BodySecondaryText';

function App() {
  return (
    <div className="App flex">
      <div className="flex col-4 p-0 column center">
        <Title></Title>
        <div className="flex left column">
          <BodyItem title="CODE">
            <BodyThirdText items={['C# (intermediate)', 'Python (intermediate)', 'Typescript (experienced)', 'C++ (novice)', 'HTML & CSS(experienced)']}></BodyThirdText>
          </BodyItem>

        </div>
      </div>
      <div className="flex col-8 p-0 column left mt-2">
        <BodyItem title="EXPERIENCE">
          <BodySecondaryTitle
            position="Front-End Developer"
            location="Calgary, AB"
            date="Since March 2020"
            organization="SeroTracker"></BodySecondaryTitle>
          <BodySecondaryText items={['Iteratively designed and built the client for serotracker.com in partnership with the Canadian Federal Government', 'Stress tested the client to find bottlenecks', 'Implemented Google Analytics results to increase average session times']}></BodySecondaryText>
          <BodySecondaryTitle
            position="Software Developer Intern"
            location="Calgary, AB"
            date="May 2019 - July 2020"
            organization="Arcurve Inc"></BodySecondaryTitle>
          <BodySecondaryText items={['Implemented a data capture system to allow for reprocessing of data with correct system state for greater than 7 days.','Redesigned a key screen of an application to combine 3 screens into 1.','Profiled functions and removed bottlenecks to shorten queries by up to 90%.']}></BodySecondaryText>

        </BodyItem>
      </div>

    </div>
  );
}

export default App;
