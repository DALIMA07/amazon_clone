import React, { createContext, useContext, useReducer } from 'react';

//prepare the data layer
export const StateContect = createContext();

//wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContect.Provider value = { useReducer(reducer, initialState)}>
        {children}
    </StateContect.Provider>
);


//pull infomation from the data layer
export const useStateValue = () => useContext(StateContect);