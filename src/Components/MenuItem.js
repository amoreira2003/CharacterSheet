
const MenuItem = params => {

    return (<div><li className='hover:text-white hover:bg-white rounded-lg hover:scale-125 duration-300 ease-out px-2'>
        <div className='hover:text-transparent text-white hover:bg-clip-text hover:bg-gradient-to-b from-[#7A96FF] to-[#B07CFF]'>{params.text}</div>
        </li>
    </div>);

}

export default MenuItem;