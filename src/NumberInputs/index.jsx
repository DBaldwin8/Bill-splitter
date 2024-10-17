function NumberInputs({id, name}) {
    return (
        <>
            <div className='flex flex-col'>
                <label htmlFor={id}>{name}</label>
                <input id={id} type='number' placeholder='0' className="placeholder:text-right bg-slate-50 w-2/5  rounded-md"/>
            </div>
        </>
    )
}

export default NumberInputs