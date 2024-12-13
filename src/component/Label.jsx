import { useExpenseContext } from "../context/ExpenseContext";

function Label() {
  const [state, dispatch] = useExpenseContext();

  const { expense } = state;

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch({ type: "set_value", payload: { name, value } });
  }

  return (
    <div>
      <label>Saisir le label : </label>
      <input
        onChange={handleChange}
        type={"text"}
        value={expense.label}
        name={"label"}
      />
    </div>
  );
}

export default Label;
