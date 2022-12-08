import './App.css';

import Stats from './Components/Stats.js';
import Skills from './Components/Skills.js';
import MenuItem from './Components/MenuItem';

import { DarkModeSwitch } from 'react-toggle-dark-mode';
const [isDarkMode, setDarkMode] = React.useState(false);


import profilePicture from './Images/character_image.png';
import dice from './Images/dice.png'


function closeBackground() {
  document.getElementById('diceBackground').style = "visibility: invisible"
}



function App() {

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

return (
  <div>
    <div onClick={() => closeBackground()} id='diceBackground' className='fixed invisible top-0 z-10 bg-opacity-40 m-0 w-full h-full bg-black'>
      <div className='flex flex-col h-full w-full  place-items-center self-center justify-content-center align-center'>
      <h1 id='skillType'className='text-xl lg:text-4xl text-white font-varela mt-auto'>SkillName</h1>
        <img src={dice} className='animate-spin-slow w-24 lg:w-56' alt='dice'></img>
        <h1 id='successType'className='text-xl lg:text-4xl text-white font-varela mb-auto'>Sucess Type (Number)</h1>
      </div>
    </div>

    <div className='lg:m-20 flex flex-col lg:flex-row flex-shrink basis-full h-screen w-screen gap-4'>

      <div className='flex-col items-center rounded-lg w-screen hidden lg:flex lg:w-4/12  bg-gradient-to-b dark:from-[#f576769c] dark:to-[#ffc87cdf] from-[#7A96FF] to-[#B07CFF] drop-shadow-md'>

        <h1 className='hover:scale-110 duration-200 ease-out relative top-40 basis-auto text-top text-6xl rounded-lg py-2 px-5 dark:bg-[#21262D] bg-white text-white font-varela'><div className='text-transparent text-white bg-clip-text bg-gradient-to-b dark:from-[#f576769c] dark:to-[#ffc87cdf] from-[#7A96FF] to-[#B07CFF]'>Player Sheet</div></h1>
        <ul className='leading-relaxed relative top-60 list-none basis-auto text-2xl text-white font-varela text-center'>
          <MenuItem text="Ficha do Jogador"/>
          <MenuItem text="Inventário"/>
          <MenuItem text="Anotações"/>
          <li className='hover:text-white dark:hover:bg-[#21262D]  hover:bg-white rounded-lg hover:scale-125 duration-300 ease-out px-2  relative top-20'> <div className='hover:text-transparent dark:text-zinc-700 text-white hover:bg-clip-text hover:bg-gradient-to-b dark:from-[#f576769c] dark:to-[#ffc87cdf] from-[#7A96FF] to-[#B07CFF]'>Configurações</div>
        </li>
        </ul>
      </div>

      <div className='flex flex-col flex-shrink basis-full gap-4'>

        <div className='flex flex-col align-center rounded-lg w-[fit_-_5rem] md:mt-4 md:w-fit md:mx-auto lg:m-0 lg:w-fit dark:bg-[#21262D] bg-white drop-shadow-md'>

          <div className=' flex flex-row gap-1 p-1 align-center justify-center text-white w-fit flex-wrap '>


            <img src={profilePicture} alt='CharacterPfp' className="m-auto lg:m-8 rounded-lg bg-gradient-to-b dark:from-[#f576769c] dark:to-[#ffc87cdf] from-[#7A96FF] to-[#B07CFF] w-24 h-24  md:w-64 md:h-64"></img>

            <div className='m-8 flex flex-row lg:flex-col flex-wrap justify-center align-center place-items-center basis-32'>

            <div>
                
                <h1 className='font-varela dark:text-white  dark:placeholder-gray-400 text-black text-center text-2xl'>Evans Brown</h1>
        
              <h1 className='font-varela dark:text-zinc-200 text-zinc-500 text-center text-md'>Investigator</h1><br/></div>
                
                
              <div className='flex flex-row gap-1 w-full'>
                <div className="group hover:scale-110 hover:h-5 duration-300 ease-out hover:mx-2 w-1/2 h-3 self-start dark:bg-gray-600  bg-gray-200 rounded-full"> <div className="bg-red-600 dark:bg-[#ef44069c] group-hover:visible group-hover:h-5 duration-300 ease-out h-3 font-varela rounded-lg"><h1 className='text-center justify-center group-hover:visible invisible'>10/10</h1></div> </div>
                <div className="group hover:scale-110 hover:h-5 duration-300 ease-out hover:mx-2 w-1/2 h-3 self-start dark:bg-gray-600 bg-gray-200 rounded-full"> <div className="bg-blue-600 dark:bg-[#2564eb9a] group-hover:visible group-hover:h-5 duration-300 ease-out h-3 font-varela rounded-lg"><h1 type="text" className='text-center justify-center group-hover:visible invisible'>10/10</h1></div> </div>
              </div>
              <div className='flex justify-center flex-row'>
                <ul>
                  <Stats skill="FOR" value='40'/>
                  <Stats skill="CON" value='50'/>
                </ul>
                <ul>
                  <Stats skill="APA" value='60'/>
                  <Stats skill="INT" value='70'/>
                </ul>
                <ul>
                  <Stats skill="TAM" value='50'/>

                  <Stats skill="DES" value='80'/>
                </ul>
                <ul>
                  <Stats skill="POD" value='50'/>
                  <Stats skill="EDU" value='60'/>
                </ul>
              </div>
            </div>
            <textarea id="notes" rows="1" className="overflow-hidden mb-4 md:w-full md:m-4 lg:w-64 lg:m-auto p-5 w-64 h-64 text-s dark:bg-gray-700 rounded-lg border  dark:border-gray-800 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 dark:placeholder-gray-400 placeholder-gray-800 dark:text-zinc-200 text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Space for Some Quick Notes"></textarea>
          </div>
        </div>


        <div className='flex flex-row flex-wrap flex-shrink md:self-center lg:self-start justify-center md:justify-center lg:justify-start gap-1 p-8 rounded-lg w-fit lg:w-10/12 dark:bg-[#21262D] bg-white drop-shadow-md'>
          <Skills skill="Artes Marciais" value='50'/>
          <Skills skill="Chaveiro" value='21'/>
          <Skills skill="Crédito" value='40'/>
          <Skills skill="Direito" value='40'/>
          <Skills skill="Dirigir Cavalos" value='40'/>
          <Skills skill="Lábia" value='70'/>
          <Skills skill="Localizar" value='50'/>
          <Skills skill="Navegar" value='10'/>
        </div>
      </div>
    </div>
  </div>);
}

export default App;
