import { useEffect, useState } from "react";
import Modal from "react-modal";
import Button from "../Button"
import NumberInputs from "../NumberInputs"

function WebAppContainer() {

    const [tipStatus, setTipStatus] = useState(0);
    const [bill, setBill] = useState(0);
    const [numOfPeep, setNumOfPeep] = useState(1);
    const [tipPerPerson, setTipPerPerson] = useState(0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [customText, setCustomText] = useState('Custom');

    function handle5Perc(e) {
        setTipStatus(5);
    }

    function handle10Perc(e) {
        setTipStatus(10);
    }

    function handle15Perc(e) {
        setTipStatus(15);
    }

    function handle25Perc(e) {
        setTipStatus(25);
    }

    function handle50Perc(e) {
        setTipStatus(50);
    }

    function handleCustomTip(e) {
        if (e.target.value < 0) {
            setTipStatus(0);
        } else {
            setTipStatus(e.target.value);
        }
    }

    function handleReset(e) {
        setTipStatus(0);
        setBill(0);
        setNumOfPeep(1);
        setCustomText("Custom")
    }

    function handleBillChange(e) {
        if (e.target.value < 0) {
            setBill(0);
        } else {
            setBill(e.target.value);
        }
    }

    function handleNumOfPeepChange(e) {
        if (e.target.value < 1) {
            setNumOfPeep(1);
        } else {
            setNumOfPeep(e.target.value);
        }
    }

    function openModal() {
        setModalVisibility(true);
    }

    function closeModal() {
        setCustomText(tipStatus + "%");
        setModalVisibility(false);
    }

    useEffect(() => {
        const tipPer = ((bill / 100) * tipStatus) / numOfPeep;
        const totalPer = tipPer + (bill / numOfPeep);
        setTotalPerPerson(totalPer.toFixed(2))
        setTipPerPerson(tipPer.toFixed(2));
    }, [bill, tipStatus, numOfPeep]);

    function preventReload(event) {
        event.preventDefault();
    }

    return (
        <>
            <div className='flex flex-col items-center md:my-12 my-6'>
                <p className='text-3xl text-slate-500'>SPLI</p>
                <p className='text-3xl text-slate-500'>TTER </p>
            </div>
            <div className="bg-white md:w-1/2 w-11/12 mx-auto rounded-3xl mb-6">
                <div className="flex md:flex-row flex-col p-8 gap-y-6">
                    <form onClick={preventReload} className='md:w-1/2 w-full md:pr-8 '>
                        <NumberInputs id="bill" name="Bill" step='0.01' min='0' value={bill} handleChange={handleBillChange} />
                        <div className="md:py-8 py-2">
                            <label htmlFor='tip' className="text-xs text-slate-500">Select Tip %</label>
                            <p className="flex md:flex-wrap md:flex-row flex-col md:justify-between md:pt-2 gap-y-2">
                                <Button clickHandler={handle5Perc} tipPerc={"5"} />
                                <Button clickHandler={handle10Perc} tipPerc={"10"} />
                                <Button clickHandler={handle15Perc} tipPerc={"15"} />
                                <Button clickHandler={handle25Perc} tipPerc={"25"} />
                                <Button clickHandler={handle50Perc} tipPerc={"50"} />
                                <button className="bg-slate-50 text-slate-500 rounded-md h-8 md:w-24 w-full text-center" id='modal-open' onClick={openModal}>{customText}</button>
                                <Modal className="fixed inset-0 flex flex-col bg-cyan-500 bg-opacity-50" isOpen={modalVisibility} onRequestClose={closeModal} contentLabel="Modal to enter a custom tip amount">
                                    <div className='flex flex-col md:w-1/4 md:mx-[25%] md:my-[19.5%] md:px-8 w-3/4 my-56 mx-12'>
                                        <NumberInputs id='tip' name="Enter Tip %" step='1' min='0' value={tipStatus} handleChange={handleCustomTip}></NumberInputs>
                                        <button className="bg-slate-50 text-slate-500 rounded-md h-8 text-center mt-2" onClick={closeModal}>Close</button>
                                    </div>
                                </Modal>
                            </p>
                        </div>
                        <NumberInputs id="numPeople" name="Number of People" step='1' min='1' value={numOfPeep} handleChange={handleNumOfPeepChange} />
                    </form>
                    <div className='bg-teal-900 rounded-2xl md:w-1/2 w-full'>
                        <div className='p-6'>
                            <div className="flex flex-row justify-between py-6">
                                <div className="">
                                    <h3 className='text-white text-sm'>Tip Amount</h3>
                                    <p className='text-slate-400 text-xs'>/ person</p>
                                </div>
                                <div>
                                    <div className="text-teal-400 text-4xl">${tipPerPerson}</div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div>
                                    <h3 className='text-white text-sm'>Total</h3>
                                    <p className='text-slate-400 text-xs'>/ person</p>
                                </div>
                                <div className="text-teal-400 text-4xl">${totalPerPerson}</div>
                            </div>
                            <div className="pt-20">
                                <button onClick={handleReset} className="bg-teal-300 w-full h-8 block mx-auto text-teal-800 rounded">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebAppContainer
