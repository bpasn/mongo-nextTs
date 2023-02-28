import { Action, compose, createStore, applyMiddleware, combineReducers, Reducer, AnyAction, Dispatch } from '@reduxjs/toolkit';
import thunk, { ThunkAction } from 'redux-thunk'
import { userReducer } from './reducer/userReducer';


const initialState = <any>{
    userInfo: null
};


const users = (state: any = {}, action: any) => {
    switch (action.type) {
        case "ACTION_REQUEST":
            return { loading: true }
        case "ACTION_SUCCESS":
            return { ...action.payload, loading: false }
        case "ACTION_FAIL":
            return { ...action.payload, loading: false }
        default:
            return { ...state };
    }
}

const reducers = combineReducers({
    userInfo: userReducer
});



const composeEnhancers = compose;


export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)))


// Infer ther `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type RootStore = ReturnType<typeof reducers>
//Inferred type: {posts:PostsState, comments: CommentsState , users:UsersState}
export type AppDispatch = typeof store.dispatch;
// export declare const useDispatch: <AppDispatch extends Dispatch<AnyAction> = Dispatch<AnyAction>>() => AppDispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;