import "./NewExpenses.css";
import NewForm from "./NewForm";
const NewExpenses = (porps) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    porps.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <NewForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
