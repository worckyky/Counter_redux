enum CONS {
    CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE',
    CHANGE_MIN_VALUE = 'CHANGE_MIN_VALUE',
    SET_VALUE_DATA = 'SET_VALUE_DATA',
}

export const ChangeMaxValueAC = (maxValue: number) => {
    return {
        type: CONS.CHANGE_MAX_VALUE,
        maxValue: maxValue
    }
}

export const ChangeMinValueAC = (minValue: number) => {
    return {
        type: CONS.CHANGE_MIN_VALUE,
        minValue: minValue
    }
}


export const SetValueDataAC = (minValue: number, maxValue: number) => {
    return {
        type: CONS.SET_VALUE_DATA,
        payload: {
            minValue: minValue,
            maxValue: maxValue
        }
    }
}

export type ActionType =
    ReturnType<typeof SetValueDataAC>
    | ReturnType<typeof ChangeMaxValueAC>
    | ReturnType<typeof ChangeMinValueAC>