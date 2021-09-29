import React from 'react';
import PropTypes from 'prop-types';



const IncomeExpenses = (props) => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>{props.incomeTitle}</h4>
                <p className="money plus">+$0.00</p>
            </div>
            <div>
                <h4>{props.expenseTitle}</h4>
                <p className="money minus">-$0.00</p>
            </div>
        </div>
    )
}



IncomeExpenses.defaultProps = {
    incomeTitle: 'Income',
    expenseTitle: 'Expense',
}


IncomeExpenses.propTypes = {
    incomeTitle: PropTypes.string.isRequired,
    expenseTitle: PropTypes.string.isRequired,
}

export default IncomeExpenses
