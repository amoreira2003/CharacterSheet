import './App.css';

import CharacterInfo from './Components/CharacterInfo.js'
import SkillsMenu from './Components/SkillsMenu';

import DiceRollBackground from './Components/DiceRollBackground';
import ScrollMenu from './Components/ScrollMenu';
import React from 'react';




function App() {

  return (<React.Fragment>

    <DiceRollBackground />

    <div className='lg:m-20 flex flex-col lg:flex-row flex-shrink basis-full h-fit w-screen gap-4'>

      <ScrollMenu />

      <div className='flex flex-col flex-shrink basis-full gap-4'>

        <CharacterInfo />

        <SkillsMenu />

      </div>
    </div>

  </React.Fragment>
  );
}

export default App;
