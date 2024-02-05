import "./BudgetItem.css"
import { Form, Link } from "react-router-dom";

import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../../helpers";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div
      className="budget"
      style={{
        "--accent": color,
      }}
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} </p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} harcama</small>
      </div>
      {showDelete ? (
        <div className="flex-sm">
          <Form
            method="post"
            action="delete"
            onSubmit={(event) => {
              if (
                !confirm(
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn">
              <span>Sil</span>
            </button>
          </Form>
        </div>
      ) : (
        <div className="flex-sm">
          <Link to={`/budget/${id}`} className="btn">
            <span>Gider Detayı</span>
          </Link>
        </div>
      )}
    </div>
  );
};
export default BudgetItem;
