// A reducer is a way to change your state and send it down to your component/application
export default (state, action) => {
	switch (action.type) {
		case 'DELETE_TRANSACTION':
			return {
				// we cant just change it, we have to create a new state and send it down.. we could use a spread op
				...state,
				transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
			};
		case 'ADD_TRANSACTION':
			return {
				...state,
				transactions: [ action.payload, ...state.transactions ]
			};
		default:
			return state;
	}
};
