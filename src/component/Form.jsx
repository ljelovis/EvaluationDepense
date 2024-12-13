import { useExpenseContext } from "../context/ExpenseContext";
import Label from './Label'
import Amount from './Amount'
import Category from './Category'

function Form() {
  const [_, dispatch] = useExpenseContext();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "add_expense" });
  }

  return (
    <form onSubmit={handleSubmit} className={"flex gap2"}>
      <Label />
      <Amount />
      <Category />
      <button role={"button"}>Ajouter</button>
      <button type={"button"} onClick={() => dispatch({type: "reset"})} className={"delete"}>Supprimer</button>
    </form>
  );
}

export default Form;