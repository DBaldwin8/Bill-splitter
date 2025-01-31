function Button({tipPerc, clickHandler}){
   return <button className="bg-teal-900 rounded-md text-white h-8 w-24 text-center" id='tip' onClick={clickHandler}>{tipPerc}%</button>
}

export default Button
