import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Table from "../components/Table";
import { deleteItem, fetchData } from "../helpers";

export async function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("Harcama Silindi!");
    } catch (e) {
      throw new Error("There was a problem deleting your expense.");
    }
  }
}

const ExpensesPage = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
           <small>({expenses.length} )</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>.</p>
      )}
    </div>
  );
};

export default ExpensesPage;
