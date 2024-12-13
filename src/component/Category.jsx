import { useExpenseContext } from "../context/ExpenseContext";

function Category() {
  const [state, dispatch] = useExpenseContext();

  const { expense } = state;

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch({ type: "set_value", payload: { name, value } });
  }

  const categories = ['Alimentation', 'Logement', 'Transport', 'Divertissement', 'Santé', 'Éducation', 'Autres'];

  return (
    <div>
      <label>Sélectionnez une catégorie : </label>
      <select
        onChange={handleChange}
        name={"category"}
        id={"category"}
        value={expense.category}
      >
        <option value="">-- Select category --</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Category;