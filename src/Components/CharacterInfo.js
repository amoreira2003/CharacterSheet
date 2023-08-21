import React, { useState, useEffect } from 'react';
import profilePicture from '../Images/character_image.png';
import Stats from '../Components/Stats.js';

const CharacterInfo = () => {

    const [info, setInfo] = useState(null);

    function fetchCharacterInformations() {
        fetch("https://rpgsheet.herokuapp.com/stats?id=0").then((response) => response.json()).then(json => {
            setInfo(json.data);
        })

    }

    useEffect(() => {
        fetchCharacterInformations();
    }, [])

    return (
        <div className='flex flex-col align-center rounded-lg dark:bg-[#21262D] bg-white drop-shadow-md'>

            <div className='flex flex-row gap-1 p-1 align-center justify-center text-white flex-wrap '>


                <img src={profilePicture} alt='CharacterPfp' className="m-auto lg:m-8 rounded-lg  bg-gradient-to-b dark:from-[#f576769c] dark:to-[#ffc87cdf] from-[#7A96FF] to-[#B07CFF] w-28 h-28 sm:w-48 sm:h-48 md:w-64 md:h-64"></img>

                <div className='m-8 flex flex-row lg:flex-col flex-wrap justify-center align-center place-items-center basis-32'>
            <React.Fragment>
                        <div>

                            <h1 className='font-varela dark:text-white  dark:placeholder-gray-400 text-black text-center text-2xl'>{"Alexandre"} {"Moreira"}</h1>
                            <h1 className='font-varela dark:text-zinc-200 text-zinc-500 text-center text-md'>{"Investigador"}</h1>
                            <br />
                        </div>

                        <div className='flex flex-row gap-1 w-full'>
                            <div className="group hover:scale-110 hover:h-5 duration-300 ease-out hover:mx-2 w-1/2 h-3 self-start dark:bg-gray-600  bg-gray-200 rounded-full"> <div style={{ width: `${(10 / 100) * 100}%` }} className={"bg-red-600 dark:bg-[#ef44069c] group-hover:visible group-hover:h-5 duration-300 ease-out h-3 font-varela rounded-lg"}><h1 className='text-center justify-center group-hover:visible invisible'>{10}/{100}</h1></div> </div>
                            <div className="group hover:scale-110 hover:h-5 duration-300 ease-out hover:mx-2 w-1/2 h-3 self-start dark:bg-gray-600  bg-gray-200 rounded-full"> <div style={{ width: `${(5 / 5) * 100}%` }} className={"bg-blue-600 dark:bg-[#2564eb9a group-hover:visible group-hover:h-5 duration-300 ease-out h-3 font-varela rounded-lg"}><h1 className='text-center justify-center group-hover:visible invisible'>{5}/{5}</h1></div> </div>
                        </div>
                        <div className='flex justify-center mt-8 flex-row'>
                            <ul>
                                <Stats displayText="Força" skill="FOR" value={10} />
                            </ul>
                            <ul>
                                <Stats displayText="Inteligência" skill="INT" value={10} />
                            </ul>
                            <ul>
                                <Stats displayText="Agilidade" skill="AGI" value={10} />
                            </ul>
                            <ul>
                                <Stats displayText="Presença" skill="PRE" value={10} />
                            </ul>
                            <ul>
                                <Stats displayText="Vigor" skill="VIG" value={10} />
                            </ul>
                        </div>

                    </React.Fragment>

                </div>
            </div>
        </div>
    )
}

export default CharacterInfo;