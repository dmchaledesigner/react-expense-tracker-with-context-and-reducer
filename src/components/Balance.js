import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from '../store/GlobalContext';






const Balance = (props) => {

    const { transactions } = useContext(GlobalContext);

    // map over the transactions and looks for the amounts
    const amounts = transactions.map((transaction) => transaction.amount);

    //then filter over the amounts and get amount greater than 0, reduce the amount to get the total
    const income = amounts.reduce((total, item) => (total += item), 0).toFixed(2);

    // console.log(income);

    return (
        <Fragment>
            <h4>{props.title}</h4>
            <h1>${income}</h1>
        </Fragment>
    )
}




Balance.defaultProps = {
    title: 'Your Balance',
    price: 0.00,
}



Balance.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}



export default Balance;
