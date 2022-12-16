import React, { useState, useEffect } from 'react';
import profilePicture from '../Images/character_image.png';
import Stats from '../Components/Stats.js';

const CharacterInfo = () => {

    const [info, setInfo] = useState(null);

    function fetchCharacterInformations() {
        console.log("fetch")
        fetch("https://rpgsheet.herokuapp.com/stats?id=0").then((response) => response.json()).then(json => {
            setInfo(json.data);
        })

    }

    useEffect(() => {
        fetchCharacterInformations();
    }, [])

    return (
        <div className='flex flex-col align-center rounded-lg w-[fit_-_5rem] md:mt-4 md:w-fit md:mx-auto lg:m-0 lg:w-fit dark:bg-[#21262D] bg-white drop-shadow-md'>

            <div className=' flex flex-row gap-1 p-1 align-center justify-center text-white w-fit flex-wrap '>


                <img src={profilePicture} alt='CharacterPfp' className="m-auto lg:m-8 rounded-lg bg-gradient-to-b dark:from-[#f576769c] dark:to-[#ffc87cdf] from-[#7A96FF] to-[#B07CFF] w-24 h-24  md:w-64 md:h-64"></img>

                <div className='m-8 flex flex-row lg:flex-col flex-wrap justify-center align-center place-items-center basis-32'>
                    {info && info.map((data) => <React.Fragment>
                    <div>

                            <h1 className='font-varela dark:text-white  dark:placeholder-gray-400 text-black text-center text-2xl'>{data.FIRSTNAME} {data.LASTNAME}</h1>
                            <h1 className='font-varela dark:text-zinc-200 text-zinc-500 text-center text-md'>{data.ROLE}</h1>
                        <br />
                    </div>

                    <div className='flex flex-row gap-1 w-full'>
                    <div className="group hover:scale-110 hover:h-5 duration-300 ease-out hover:mx-2 w-1/2 h-3 self-start dark:bg-gray-600  bg-gray-200 rounded-full"> <div style={{width: `${(data.AHEALTH/data.MAXHEALTH)*100}%`}} className={"bg-red-600 dark:bg-[#ef44069c] group-hover:visible group-hover:h-5 duration-300 ease-out h-3 font-varela rounded-lg"}><h1 className='text-center justify-center group-hover:visible invisible'>{data.AHEALTH}/{data.MAXHEALTH}</h1></div> </div>
                        <div className="group hover:scale-110 hover:h-5 duration-300 ease-out hover:mx-2 w-1/2 h-3 self-start dark:bg-gray-600  bg-gray-200 rounded-full"> <div style={{width: `${(data.ASANITY/data.MAXSANITY)*100}%`}} className={"bg-blue-600 dark:bg-[#2564eb9a group-hover:visible group-hover:h-5 duration-300 ease-out h-3 font-varela rounded-lg"}><h1 className='text-center justify-center group-hover:visible invisible'>{data.ASANITY}/{data.MAXSANITY}</h1></div> </div>
                    </div>
                    <div className='flex justify-center flex-row'>
                        <ul>
                            <Stats displayText="Força" skill="FOR" value={data.FORC}/>
                            <Stats displayText="Constituição" skill="CON" value={data.CON} />
                        </ul>
                        <ul>
                            <Stats displayText="Aparência" skill="APA" value={data.APA} />
                            <Stats displayText="Inteligência" skill="INT" value={data.INTL} />
                        </ul>
                        <ul>
                            <Stats displayText="Tamanho" skill="TAM" value={data.TAM} />

                            <Stats displayText="Destreza" skill="DES" value={data.DES} />
                        </ul>
                        <ul>
                            <Stats displayText="Poder" skill="POD" value={data.POD} />
                            <Stats displayText="Educação" skill="EDU" value={data.EDU}/>
                        </ul>
                    </div>

                    </React.Fragment> )}
                </div>
              
            </div>
        </div>
    )
}

export default CharacterInfo;