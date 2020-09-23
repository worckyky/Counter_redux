import React from 'react'

type InputType = {
    value: number
}


const Input: React.FC<InputType> = ({value}) => {
    return (
        <>
            <input type="number" value={value}/>
        </>
    )
}

export default Input