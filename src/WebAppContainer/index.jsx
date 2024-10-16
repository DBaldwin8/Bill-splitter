// import NumberInputs from "../NumberInputs/index.jsx"


function WebAppContainer() {
    return (
    <div>
            <div className='flex flex-col items-center mt-28 mb-12'>
                <p className='text-3xl'>SPLI</p>
                <p className='text-3xl'>TTER </p>
            </div>
            <div className="bg-white w-3/4 h-1/2 mx-auto rounded-3xl flex place-content-around">
                <form className=''>
                    <div className='flex flex-col'>
                        <label htmlFor=''>Bill</label>
                        <input id='' type='number' placeholder='0' className="placeholder:text-right"/>
                    </div>
                    <div>
                        <label htmlFor=''>Select Tip %</label>
                        
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor=''>Number of People</label>
                        <input id='' type='number' placeholder='0' className="placeholder:text-right"/>
                    </div>
                </form>
                <div className=''>
                    <div>
                        <h3>Tip Amount</h3>
                        <p>/ person</p>

                    </div>
                    <div>
                        <h3>Total</h3>
                        <p>/ person</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
    </div>
    )
}

export default WebAppContainer