function Button(){
    let count = 0;
    const handleClick = (event) => {
        count++;
        console.log(count);
    }

    return <button onClick={handleClick} className="border border-black border-2 bg-teal-900 rounded-sm text-white h-14 p-">Clicked {count} times!</button>
}

export default Button