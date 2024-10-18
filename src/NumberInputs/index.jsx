function NumberInputs({id, name, placeholder, step, min, handleChange}) {

    return (
        <>
            <div className='flex flex-col'>
                <label htmlFor={id} className="text-xs pb-2 text-slate-500">{name}</label>
                <input id={id} type='number' placeholder={placeholder} step={step} min={min} className="text-right bg-slate-50 h-8 w-full rounded-md" onChange={handleChange}/>
            </div>
        </>
    )
}

export default NumberInputs