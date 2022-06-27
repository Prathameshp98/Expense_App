import React from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {
      id: "1",
      title: "Car Insurance",
      amount: "294.59",
      date: new Date(2022, 5, 22)
    },
    {
      id: "2",
      title: "Milk",
      amount: "294.59",
      date: new Date(2022, 5, 11)
    },
    {
      id: "3",
      title: "Bike",
      amount: "1254.69",
      date: new Date(2022, 3, 22)
    },
    {
      id: "4",
      title: "Food",
      amount: "4.59",
      date: new Date(2022, 0, 12)
    },
    {
      id: "1",
      title: "Groceries",
      amount: "24.59",
      date: new Date(2022, 4, 2)
    }
  ];

  return (
    <div>
      <NewExpense />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
