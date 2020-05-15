// We can pull anything from our GlobalContext using the useContext hook
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { Transaction } from './Transaction';

export const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<div>
			<h3>History</h3>
			<ul id="list" className="list">
				{transactions.map((transaction, index) => {
					return <Transaction key={transaction.id} transaction={transaction} />;
				})}
			</ul>
		</div>
	);
};
