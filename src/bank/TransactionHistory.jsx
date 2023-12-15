// TransactionHistory.js
import React from 'react';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className='TransactionHistory'>
      <h2>Lịch sử giao dịch</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type}: {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
