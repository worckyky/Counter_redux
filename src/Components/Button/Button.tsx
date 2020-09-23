import React from 'react'

type ButtonType = {
    children: string
}

const Button: React.FC<ButtonType> = ({children}) => {

    return (
        <>
            <button>{children}</button>
        </>
    )
}

export default Button