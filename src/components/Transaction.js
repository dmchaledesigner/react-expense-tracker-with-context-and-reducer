import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../store/GlobalContext';


// function moneyFormatter(num) {
//     let p = num.toFixed(2).split('.');
//     return (
//         '$ ' +
//         p[0]
//             .split('')
//             .reverse()
//             .reduce(function (acc, num, i, orig) {
//                 return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
//             }, '') +
//         '.' +
//         p[1]
//     );
// }




const Transaction = ({ transaction }) => {

    // get emoveItem key that holds the removeItemHandler from context api
    const { removeItem } = useContext(GlobalContext);



    const sign = transaction.amount < 0 ? '-' : '+';

    // Math.abs returns a positive number! and removes the minus from the data received

    return (
        <Fragment>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text} <span>{sign}{Math.abs(transaction.amount)}</span>
                <button
                    onClick={() => removeItem(transaction.id)}
                    className="delete-btn">x</button>
            </li>


        </Fragment>
    )
}




export default Transaction
