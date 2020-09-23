import React, { Dispatch } from "react";
import Counter from '../Counter/Counter'
import {connect} from 'react-redux'
import { stateType } from '../../Redux/counterReducer';
import { ActionType } from '../../Redux/actions';




let mapStateToProps = (state: stateType) => {
    return {
        values: state.values
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {

}


export const CounterContainer = connect(mapStateToProps)(Counter)