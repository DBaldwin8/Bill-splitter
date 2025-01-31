function NumberInputs({id, name, placeholder, step, min, value, handleChange, width}) {

    return (
        <>
            <div className='flex flex-col'>
                <label htmlFor={id} className="text-xs pb-2 text-slate-500">{name}</label>
                <input id={id} type='number' step={step} min={min} value={value} onChange={handleChange} className={`text-right bg-slate-50 h-8 rounded-md ${(width || 'w-full')}`}/>
            </div>
        </>
    )
}

export default NumberInputs
