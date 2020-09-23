import { ActionType } from "./actions"


export type valuesType = {
    minValue: number,
    maxValue: number
}

type setValuesType = {
    setMinValue: number,
    setMaxValue: number
}

type viewDataType = {
    data: number,
    setData: string,
    noSimilar: string,
    badData: string
}

export type stateType = {
    values: valuesType,
    setValues: setValuesType,
    viewData: viewDataType
}


let initialState: stateType = {
    values: {
        minValue: 0,
        maxValue: 10
    },
    setValues: {
        setMinValue: 0,
        setMaxValue: 0,
    },
    viewData: {
        data: 0,
        setData: 'Укажите данные счетчика и нажмите на кнопку: "Задать значение"',
        noSimilar: 'Значения не могут быть одинаковыми!',
        badData: 'Параметры счетчика указаны неверно!'
    }
}


export const counterReducer = (state:stateType = initialState, actions: ActionType) => {
    let copyState = {...state}
    return copyState
};