import { useState } from "react";

import Button from "../Button"
import NumberInputs from "../NumberInputs"
// FONT SPACE MONO

function WebAppContainer() {

    const [tipStatus, setTipStatus] =  useState(0)
    const [bill, setBill] = useState('')
    const [numOfPeep, setNumOfPeep] = useState('')

    function handle5Perc(e) {
        e.preventDefault()
        setTipStatus(5)
    }

    function handle10Perc(e) {
        e.preventDefault()
        setTipStatus(10)
    }

    function handle15Perc(e) {
        e.preventDefault()
        setTipStatus(15)
    }
    
    function handle25Perc(e) {
        e.preventDefault()
        setTipStatus(25)
    }
    
    function handle50Perc(e) {
        e.preventDefault()
        setTipStatus(50)
    }
    
    function handleBillChange(event) {
        setBill(event.target.value)
    }

    function handleNumOfPeepChange(e) {
        setNumOfPeep(e.target.value)
    }

    return (
    <div>
        <div className='flex flex-col items-center mt-12 mb-12'>
            <p className='text-3xl'>SPLI</p>
            <p className='text-3xl'>TTER </p>
        </div>
        <div className="bg-white w-1/2 h-3/4 mx-auto rounded-3xl">
            <div className="flex p-8">
                <form className='w-1/2 pr-8'>
                    <NumberInputs id="bill" name="Bill" step='0.01' handleChange={handleBillChange}/>
                    <div className="py-8">
                        <label htmlFor='tip' className="text-xs text-slate-500">Select Tip %</label>
                        <p className="flex flex-wrap justify-between pt-2 gap-y-2">
                        <Button clickHandler={handle5Perc} tipPerc={"5"}/>
                        <Button clickHandler={handle10Perc} tipPerc={"10"}/>
                        <Button clickHandler={handle15Perc} tipPerc={"15"}/>
                        <Button clickHandler={handle25Perc} tipPerc={"25"}/>
                        <Button clickHandler={handle50Perc} tipPerc={"50"}/>
                        <button className="bg-slate-50 text-slate-500 rounded-md h-8 w-20 text-center" id='tip'>Custom</button>
                        </p>
                    </div>
                    <NumberInputs id="numPeople" name="Number of People" step='1' handleChange={handleNumOfPeepChange}/>
                </form>
                <div className='bg-teal-900 rounded-xl w-1/2'>
                    <div className='border-red-500 p-4 border-2'>
                        <div className="flex flex-row border-blue-500 border-2 justify-between py-6">
                            <div className="border-yellow-500 border-2">
                                <h3 className='text-white text-sm'>Tip Amount</h3>
                                <p className='text-slate-400 text-xs'>/ person</p>
                            </div>
                            <div>
                                <div className="text-teal-400 text-5xl border">$0.00</div>
                            </div>
                        </div>
                        <div  className="flex flex-row justify-between">
                            <div>
                                <h3 className='text-white text-sm'>Total</h3>
                                <p className='text-slate-400 text-xs'>/ person</p>
                            </div>
                            <div className="text-teal-400 text-5xl">$0.00</div>
                        </div>
                        <div className="pt-32">
                            <button className="bg-teal-700 w-72 h-8 block mx-auto text-teal-800 rounded">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        <p>Tip applied is {tipStatus}. The bill is {bill}. The number of people is {numOfPeep}.</p>
    </div>
    )
}

export default WebAppContainer