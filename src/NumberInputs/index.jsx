function NumberInputs({id, name, step, handleChange}) {

    return (
        <>
            <div className='flex flex-col'>
                <label htmlFor={id} className="text-xs pb-2">{name}</label>
                <input id={id} type='number' placeholder='0' step={step} className="text-right bg-slate-50 h-8 w-full rounded-md" onChange={handleChange}/>
            </div>
        </>
    )
}

export default NumberInputs