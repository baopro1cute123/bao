import React, { useState } from 'react';
import AccountInfo from "./AccountInfo";
import TransactionHistory from "./TransactionHistory";
import MenuProfile from '../profile/MenuProfile';
import "./Bank.css"
const BankPage = ({ }) => {
  const [accountInfo, setAccountInfo] = useState({
    accountNumber: '123456789',
    balance: 1000,
    ownerName: 'Người Dùng',
  });

  const [transactions, setTransactions] = useState([
    { type: 'Nạp tiền', amount: 500 },
    { type: 'Rút tiền', amount: -200 },
    // Thêm giao dịch khác nếu cần
  ]);
    return (
        <>
            <section className='shop background'>
                <div className='container d_flex'>
                    <MenuProfile />

                    <div className='contentWidth'>

                        <div className='heading d_flex'>
                            <div className='heading-left row  f_flex'>
                            <h1>Ngân hàng của tôi</h1>
                            </div>

                        </div>
                        <div className='product-content'>
                        <div>
      <AccountInfo {...accountInfo} />
      <TransactionHistory transactions={transactions} />
    </div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BankPage;
