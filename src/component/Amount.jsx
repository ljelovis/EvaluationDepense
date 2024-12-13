import { useExpenseContext } from "../context/ExpenseContext";

function Amount() {
  const [state, dispatch] = useExpenseContext();

  const { expense } = state;

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch({ type: "set_value", payload: { name, value } });
  }

  return (
    <div>
      <label>Saisir le montant (en €) : </label>
      <input
        onChange={handleChange}
        type={"text"}
        value={expense.amount}
        name={"amount"}
      />
    </div>
  );
}

export default Amount;
