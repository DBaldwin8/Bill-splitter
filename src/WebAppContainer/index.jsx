import { useEffect, useState } from "react";

import Button from "../Button"
import NumberInputs from "../NumberInputs"
// FONT SPACE MONO

function WebAppContainer() {

    const [tipStatus, setTipStatus] =  useState(0);
    const [bill, setBill] = useState('');
    const [numOfPeep, setNumOfPeep] = useState(0);
    const [tipPerPerson, setTipPerPerson] = useState(0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);

    function handle5Perc(e) {
        e.preventDefault();
        setTipStatus(5);
    }

    function handle10Perc(e) {
        e.preventDefault();
        setTipStatus(10);
    }

    function handle15Perc(e) {
        e.preventDefault();
        setTipStatus(15);
    }
    
    function handle25Perc(e) {
        e.preventDefault();
        setTipStatus(25);
    }
    
    function handle50Perc(e) {
        e.preventDefault();
        setTipStatus(50);
    }
    
    function handleBillChange(event) {
        setBill(event.target.value);
    }

    function handleNumOfPeepChange(e) {
        setNumOfPeep(e.target.value);
    }

    useEffect( () => {
        let amount = ((bill / 100)*tipStatus)/numOfPeep;
        setTipPerPerson(amount.toFixed(2));
        }, [bill, tipStatus, numOfPeep]);

    useEffect( () => {
        let amount = (bill/numOfPeep)+(((bill / 100)*tipStatus)/numOfPeep);
        setTotalPerPerson(amount.toFixed(2));
        }, [bill, tipStatus, numOfPeep]);


    return (
    <div className="font-mono">
        <div className='flex flex-col items-center mt-12 mb-12'>
            <p className='text-3xl text-slate-500'>SPLI</p>
            <p className='text-3xl text-slate-500'>TTER </p>
        </div>
        <div className="bg-white w-1/2 mx-auto rounded-3xl">
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
                        <button className="bg-slate-50 text-slate-500 rounded-md h-8 w-24 text-center" id='tip'>Custom</button>
                        </p>
                    </div>
                    <NumberInputs id="numPeople" name="Number of People" step='1' handleChange={handleNumOfPeepChange}/>
                </form>
                <div className='bg-teal-900 rounded-2xl w-1/2'>
                    <div className='p-6'>
                        <div className="flex flex-row justify-between py-6">
                            <div className="">
                                <h3 className='text-white text-sm'>Tip Amount</h3>
                                <p className='text-slate-400 text-xs'>/ person</p>
                            </div>
                            <div>
                                <div className="text-teal-400 text-4xl">{tipPerPerson}</div>
                            </div>
                        </div>
                        <div  className="flex flex-row justify-between">
                            <div>
                                <h3 className='text-white text-sm'>Total</h3>
                                <p className='text-slate-400 text-xs'>/ person</p>
                            </div>
                            <div className="text-teal-400 text-4xl">{totalPerPerson}</div>
                        </div>
                        <div className="pt-20">
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