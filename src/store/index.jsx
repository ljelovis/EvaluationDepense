import { useReducer } from "react";

const initialState = {
  expense: {
    label: "",
    amount: "",
    category: "",
  },
  expenses: [],
};

function expenseReducer(state, action) {
  switch (action.type) {
    case "set_value":
      return {
        ...state,
        expense: {
          ...state.expense,
          [action.payload.name]: action.payload.value,
        },
      };
    case "add_expense":
      return state.expense.label !== "" &&
        state.expense.amount !== "" &&
        state.expense.category !== ""
        ? {
            ...state,
            expense: {
              label: "",
              amount: "",
              category: "",
            },
            expenses: state.expenses.concat([state.expense]),
          }
        : state;
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export function useExpenseReducer() {
  return useReducer(expenseReducer, initialState);
}
