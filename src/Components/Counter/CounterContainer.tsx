import React, { Dispatch } from "react";
import Counter from '../Counter/Counter'
import {connect} from 'react-redux'
import { RootStateType } from '../../Redux/counterReducer';
import { ActionType } from '../../Redux/actions';


let mapStateToProps = (state:RootStateType) => {
    return {
        values: state.counter.values
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {

}


export const CounterContainer = connect(mapStateToProps)(Counter)