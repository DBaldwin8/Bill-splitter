function Button({tipPerc, clickHandler}){
    /*
    let count = 0;
    const handleClick = (event) => {
        count++;
        console.log(count);
    }

    return <button onClick={handleClick} className="bg-teal-900 rounded-md text-white h-14 w-56 text-center">Clicked {count} times!</button>
    */

   return <button className="bg-teal-900 rounded-md text-white h-8 w-24 text-center" id='tip' onClick={clickHandler}>{tipPerc}%</button>
}

export default Button