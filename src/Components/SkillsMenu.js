import React, { useState, useEffect } from "react";
import Skills from '../Components/Skills.js';


const SkillsMenu = () => {

    const [info, setInfo] = useState(null);




    function fetchCharacterInformations() {
        fetch("https://rpgsheet.herokuapp.com/pericias?id=0").then((response) => response.json()).then(json => {
            setInfo(json.data);
        }).catch((e) => console.log(e))

    }

    useEffect(() => {
        fetchCharacterInformations();
    }, [])



    return (<React.Fragment>
        <div className='flex flex-row flex-wrap flex-shrink md:self-center lg:self-start justify-center md:justify-center lg:justify-start gap-1 p-8 rounded-lg dark:bg-[#21262D] bg-white drop-shadow-md'>
            <React.Fragment>
                <Skills skill="Antropologia" value={1} />
                <Skills skill="Pistola" value={1} />
                <Skills skill="Rifle" value={1} />
                <Skills skill="Arqueologia" value={1} />
                <Skills skill="Arremessar" value={1} />
                <Skills skill="Arte" value={1} />
                <Skills skill="Avaliação" value={1} />
                <Skills skill="Cavalgar" value={1} />
                <Skills skill="Charme" value={1} />
                <Skills skill="Chaveiro" value={1} />
                <Skills skill="Ciência" value={1} />
                <Skills skill="Concertos Eletricos" value={1} />
                <Skills skill="Concertos Mecanicos" value={1} />
                <Skills skill="Direito" value={1} />
                <Skills skill="Contabilidade" value={1} />
                <Skills skill="Dirigir Automoveis" value={1} />
                <Skills skill="Disfarce" value={1} />
                <Skills skill="Encontrar" value={1} />
                <Skills skill="Escutar" value={1} />
                <Skills skill="Escalar" value={1} />
                <Skills skill="Esquivar" value={1} />
                <Skills skill="Labia" value={1} />
                <Skills skill="Intimidação" value={1} />
                <Skills skill="Historia" value={1} />
                <Skills skill="Furtividade" value={1} />
                <Skills skill="Outra Lingua" value={1} />
                <Skills skill="Lutar" value={1} />
                                </React.Fragment>
        </div></React.Fragment>)
}

export default SkillsMenu;