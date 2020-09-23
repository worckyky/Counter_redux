import React from 'react';
import Input from '../Input/Input'
import Button from '../Button/Button'
import ViewData from '../ViewData/ViewData'
import {valuesType} from '../../Redux/counterReducer';


type CounterType = {
    values: valuesType
}

const Counter: React.FC<CounterType> = ({values}) => {
    return (
        <div className={'Counter__container'}>
            <div className={'Counter__data'}>
                <div className="Data__maxValue">
                    <span>Максимальное значения</span>
                    <Input value={values.maxValue}/>
                </div>
                <div className="Data__minValue">
                    <span>Минимальное значение значения</span>
                    {/*<Input value={dataValues.values.minValue}/>*/}
                </div>
                <div className={'Set__data'}>
                    <Button>Задать значение</Button>
                </div>
            </div>
            <div className={'Counter__view'}>
                {/*<ViewData value={dataValues.values.minValue}/>*/}
            </div>
        </div>
    )
}

export default Counter