import { createContext, useContext } from "react";
import { useExpenseReducer } from "../store";

export const ExpenseContext = createContext()

export function ExpenseProvider({ children }) {

    const expenseContext = useExpenseReducer()

    return (
        <ExpenseContext.Provider value={expenseContext}>
            { children }
        </ExpenseContext.Provider>
    )
}

export function useExpenseContext() {return useContext(ExpenseContext)}