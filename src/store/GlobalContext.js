import React, { useReducer, createContext } from "react";


const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ],
}


export const GlobalContext = createContext(initialState);




const AppReducer = (state, action) => {
    switch (action.type) {
        default:
            return {
                state
            };
    }

}




const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);



    const values = {
        transactions: state.transactions
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalProvider;

