import dice from '../Images/dice.png'

function rollDice(value,skill) {
    let random = Math.floor(Math.random() * 100) + 1;
    let result;
    console.log(random)
    if (random === 1) {
        result = 'Sucesso Critico'
    } else if (random < Math.round(value / 5)) {
        result = 'Sucesso Extremo'
    } else if (random < Math.round(value / 2)) {
        result = 'Sucesso Bom'
    } else if (random <= value) {
        result = 'Sucesso Regular'
    } else if (random > value && random < 96) {
        result = 'Fracasso'
    } else {
        result = 'Desastre'
    }
    document.getElementById("skillType").innerText = skill;
    document.getElementById("successType").innerText = result + " (" + random +")";
    document.getElementById("diceBackground").style = "visibility: visible"

    return {result,random}

}


const Skills = params => {
    return (
        <div onClick={() => rollDice(params.value,params.skill)} className='group flex flex-col hover:scale-105 m-1 px-4 duration-300 ease-out align-items-center min-w-[40%] max-w-[40%] md:min-w-[20%] md:max-w-[20%] lg:min-w-0 lg:max-w-none h-auto p-2 rounded-lg bg-gradient-to-b dark:from-[#f576769c] dark:to-[#ffc87cdf] from-[#7A96FF] to-[#B07CFF] '>
            <img src={dice} className='w-6 lg:w-8 group-hover:animate-spin-slow ease-out self-center' alt='dice'></img>
            <h4 className='text-white text-lg lg:text-sm text-center'>{params.skill} <br/></h4> <h4 className='text-white text-lg lg:text-xs text-center'>{params.value}</h4>
        </div>);

}

export default Skills;