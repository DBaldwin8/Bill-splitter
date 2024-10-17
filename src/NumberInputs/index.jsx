function NumberInputs({id, name, step, handleChange}) {

    return (
        <>
            <div className='flex flex-col'>
                <label htmlFor={id}>{name}</label>
                <input id={id} type='number' placeholder='0' step={step} className="text-right bg-slate-50 w-2/5 rounded-md" onChange={handleChange}/>
            </div>
        </>
    )
}

export default NumberInputs