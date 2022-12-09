import React from "react";
import Skills from '../Components/Skills.js';


const SkillsMenu = () => {
    return (<React.Fragment>       
         <div className='flex flex-row flex-wrap flex-shrink md:self-center lg:self-start justify-center md:justify-center lg:justify-start gap-1 p-8 rounded-lg w-fit lg:w-10/12 dark:bg-[#21262D] bg-white drop-shadow-md'>
        <Skills skill="Artes Marciais" value='50' />
        <Skills skill="Chaveiro" value='21' />
        <Skills skill="Crédito" value='40' />
        <Skills skill="Direito" value='40' />
        <Skills skill="Dirigir Cavalos" value='40' />
        <Skills skill="Lábia" value='70' />
        <Skills skill="Localizar" value='50' />
        <Skills skill="Navegar" value='10' />
    </div></React.Fragment>)
}

export default SkillsMenu;