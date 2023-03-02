import { Action, compose, createStore, applyMiddleware, combineReducers, Reducer, AnyAction, Dispatch } from '@reduxjs/toolkit';
import thunk, { ThunkAction } from 'redux-thunk'
import { userReducer } from './reducer/userReducer';


const initialState = {
    userSignin: {
        userInfo: null
    }
};

const reducers = combineReducers({
    userSignin: userReducer
});


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


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