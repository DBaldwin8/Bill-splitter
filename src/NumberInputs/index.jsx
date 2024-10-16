function NumberInputs({id}) {
    return (
        <>
            <label htmlFor='{id}'>Bill</label>
            <input id='{id}' type='number' placeholder='0'/>
        </>
    )
}

export default NumberInputs