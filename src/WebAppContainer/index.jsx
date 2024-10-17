// import NumberInputs from "../NumberInputs/index.jsx"

import Button from "../Button"
import NumberInputs from "../NumberInputs"
// FONT SPACE MONO

function WebAppContainer() {
    return (
    <div>
        <div className='flex flex-col items-center mt-28 mb-12'>
            <p className='text-3xl'>SPLI</p>
            <p className='text-3xl'>TTER </p>
        </div>
        <div className="bg-white w-3/4 h-1/2 mx-auto rounded-3xl">
            <div className="flex p-8">
                <form className=''>
                    <NumberInputs id="bill" name="Bill"/>
                    <div>
                        <label htmlFor='tip'>Select Tip %</label>
                        <Button tipPerc={"5"} id={'tip'}/>
                        <Button tipPerc={"10"} id={'tip'}/>
                        <Button tipPerc={"15"} id={'tip'}/>
                        <Button tipPerc={"25"} id={'tip'}/>
                        <Button tipPerc={"50"} id={'tip'}/>
                    </div>
                    <NumberInputs id="numPeople" name="Number of People"/>
                </form>
                <div className='bg-teal-900 rounded-xl'>
                    <div className=''>
                        <div className="flex flex-row">
                            <div className="">
                                <h3 className='text-white text-sm'>Tip Amount</h3>
                                <p className='text-slate-400 text-xs'>/ person</p>
                            </div>
                            <div>
                                <div className="text-teal-400 text-5xl">$0.00</div>
                            </div>
                        </div>
                        <div  className="flex flex-row">
                            <div>
                                <h3 className='text-white text-sm'>Total</h3>
                                <p className='text-slate-400 text-xs'>/ person</p>
                            </div>
                            <div className="text-teal-400 text-5xl">$0.00</div>
                        </div>
                        <div>
                            <button className="bg-teal-700 w-72 text-teal-800">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    </div>
    )
}

export default WebAppContainer