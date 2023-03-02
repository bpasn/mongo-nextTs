import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { Action, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk'
import { combindReducer } from './reducer/combind';

const reducer: typeof combindReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        return nextState;
    } else {
        return combindReducer(state, action);
    }
};

const makeStore = configureStore({ reducer });

// export type Store = ReturnType<typeof makeStore['dispatch']>;

export type RootState = ReturnType<typeof makeStore['getState']>;
export type AppDispatch = typeof makeStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const wrapper = makeStore