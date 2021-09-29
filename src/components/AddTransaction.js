import React, { Fragment } from 'react';




const AddTransaction = (props) => {


    return (

        <Fragment>

            <h3>{props.title}</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text <br /></label>
                    <input type="text" name="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /></label>
                    <input type="number" name="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>



        </Fragment>
    )
}



AddTransaction.defaultProps = {
    title: 'Add new transaction',
}






export default AddTransaction;
