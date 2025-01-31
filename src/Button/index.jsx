function Button({tipPerc, clickHandler}){
   return <button className="bg-teal-900 rounded-md text-white h-8 md:w-24 md:w-full text-center" id='tip' onClick={clickHandler}>{tipPerc}%</button>
}

export default Button
