import { useExpenseContext } from "../context/ExpenseContext";

function Calcul() {
  const [state, _] = useExpenseContext();

  const total = state.expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0
  );

  const expensesCategory = state.expenses.reduce((acc, expense) => {
    if (acc[expense.category] !== undefined) {
        acc[expense.category] = parseFloat(expense.amount) + acc[expense.category];
    } else {
        acc[expense.category] = parseFloat(expense.amount);
    }
    
    return acc;
  }, {});

  return (
    <div className={"flex column box"}>
      <h2>Résumé des dépenses</h2>
      <p>Total : {total} €</p>
      <h3>Par catégorie :</h3>
      <ul className={"flex column flex-start"}>
        {Object.entries(expensesCategory).map(([category, amount]) => (
          <li key={category}>
            {category} : {amount} €
          </li>
        ))}
        </ul>
    </div>
  );
}

export default Calcul;
