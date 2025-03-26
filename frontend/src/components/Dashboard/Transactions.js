import Header from "./Header";

const Transactions = () => {
  const transactions = [
    { id: 1, amount: "$200", date: "2025-03-01", status: "Completed" },
    { id: 2, amount: "$150", date: "2025-03-05", status: "Pending" },
    { id: 3, amount: "$320", date: "2025-03-10", status: "Failed" },
  ];

  return (
    <div className="p-5">
      <Header title="Transactions" />
      <div className="mt-5 space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="bg-white p-4 rounded shadow-md">
            <p className="text-lg font-semibold">{tx.amount}</p>
            <p className="text-gray-600">Date: {tx.date}</p>
            <p className="text-gray-600">Status: {tx.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
