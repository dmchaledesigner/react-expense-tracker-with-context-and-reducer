import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';


import { GlobalContext } from '../store/GlobalContext';

import Transaction from './Transaction';




const TransactionList = (props) => {

    //we can output the entire initial state by saying
    // const context = useContext(GlobalContext)
    // then we can say context.transactions to get the transaction
    //however we can destructure by doing the below and add other objects in the {} if we need to
    const { transactions } = useContext(GlobalContext);


    return (
        <Fragment>

            <h3>{props.title}</h3>
            <ul className="list">

                {transactions.map((transaction) => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}



            </ul>

        </Fragment>
    )
}



TransactionList.defaultProps = {
    title: 'History',
}

TransactionList.propTypes = {
    title: PropTypes.string.isRequired,
}

export default TransactionList
