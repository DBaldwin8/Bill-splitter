function NumberInputs({id, name}) {
    return (
        <>
            <div className='flex flex-col'>
                <label htmlFor={id}>{name}</label>
                <input id={id} type='number' placeholder='0' className="placeholder:text-right"/>
            </div>
        </>
    )
}

export default NumberInputs