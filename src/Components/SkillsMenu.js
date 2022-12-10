import React, { useState, useEffect } from "react";
import Skills from '../Components/Skills.js';


const SkillsMenu = () => {

    const [info, setInfo] = useState(null);




    function fetchCharacterInformations() {
        console.log("fetch")
        fetch("https://rpgsheet.herokuapp.com/pericias?id=0").then((response) => response.json()).then(json => {
            setInfo(json.data);
        })

    }

    useEffect(() => {
        fetchCharacterInformations();
    }, [])



    return (<React.Fragment>
        <div className='flex flex-row flex-wrap flex-shrink md:self-center lg:self-start justify-center md:justify-center lg:justify-start gap-1 p-8 rounded-lg w-fit lg:w-10/12 dark:bg-[#21262D] bg-white drop-shadow-md'>

            {info && info.map((skill) => <React.Fragment>
                <Skills skill="Antropologia" value={skill.ANTROPOLOGIA} />
                <Skills skill="Pistola" value={skill.PISTOLA} />
                <Skills skill="Rifle" value={skill.RIFLE} />
                <Skills skill="Arqueologia" value={skill.ARQUEOLOGIA} />
                <Skills skill="Arremessar" value={skill.ARREMESSAR} />
                <Skills skill="Arte" value={skill.ARTE} />
                <Skills skill="Avaliação" value={skill.AVALIACAO} />
                <Skills skill="Cavalgar" value={skill.CAVALGAR} />
                <Skills skill="Charme" value={skill.CHARME} />
                <Skills skill="Chaveiro" value={skill.CHAVEIRO} />
                <Skills skill="Ciência" value={skill.CIENCIA} />
                <Skills skill="Concertos Eletricos" value={skill.CONSELECTRICOS} />
                <Skills skill="Concertos Mecanicos" value={skill.CONSMECANICO} />
                <Skills skill="Direito" value={skill.DIREITO} />
                <Skills skill="Contabilidade" value={skill.CONTABILIDADE} />
                <Skills skill="Dirigir Automoveis" value={skill.DIRAUTOMOVEIS} />
                <Skills skill="Disfarce" value={skill.DISFARCE} />
                <Skills skill="Encontrar" value={skill.ENCONTRAR} />
                <Skills skill="Escutar" value={skill.ESCUTAR} />
                <Skills skill="Escalar" value={skill.ESCALAR} />
                <Skills skill="Esquivar" value={skill.ESQUIVAR} />
                <Skills skill="Labia" value={skill.LABIA} />
                <Skills skill="Intimidação" value={skill.INTIMIDACAO} />
                <Skills skill="Historia" value={skill.HISTORIA} />
                <Skills skill="Furtividade" value={skill.FURTIVIDADE} />
                <Skills skill="Outra Lingua" value={skill.LINGUAOUTRA} />
                <Skills skill="Lutar" value={skill.LUTAR} />
                <Skills skill="Medicina" value={skill.MEDICINA} />
                <Skills skill="Mundo Natural" value={skill.MNATURAL} />
                <Skills skill="Natação" value={skill.NATACAO} />
                <Skills skill="Navegação" value={skill.NAVEGACAO} />
                <Skills skill="Ocultismo" value={skill.OCULTISMO} />
                <Skills skill="Maquinario" value={skill.MAQUINARIO} />
                <Skills skill="Persuasão" value={skill.PERSUASAO} />
                <Skills skill="Pilotar" value={skill.PILOTAR} />
                <Skills skill="Prestidigitação" value={skill.PRESTIDIGITACAO} />
                <Skills skill="Primeiros Socorros" value={skill.PSOCORROS} />
                <Skills skill="Psicanalise" value={skill.PSICANALISE} />
                <Skills skill="Psicologia" value={skill.PSICOLOGIA} />
                <Skills skill="Saltar" value={skill.SALTAR} />
                <Skills skill="Rastrear" value={skill.RASTREAR} />
                <Skills skill="Sobrevivencia" value={skill.SOBREVIVENCIA} />
                <Skills skill="Bibliotecas" value={skill.BIBLIOTECAS} />
                                </React.Fragment>)}

        </div></React.Fragment>)
}

export default SkillsMenu;