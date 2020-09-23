import React from 'react'

type ViewDataType = {
    value: string | number
}

const ViewData: React.FC<ViewDataType> = ({value}) => {
    return (
        <div>
            <span>{value}</span>
        </div>
    )
}

export default ViewData