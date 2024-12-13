import { useExpenseContext } from '../context/ExpenseContext';

function Display() {

  const [state, _] = useExpenseContext();

  return (
    <div className={"flex column box"}>
      <h2>Dépenses</h2>
      <ul className={"flex column flex-start"}>
      {state.expenses.map((expense, i) => (
          <li key={i}>
            {expense.label} - {expense.amount} € ({expense.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Display;