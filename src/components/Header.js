import React, { Fragment } from 'react';
import PropTypes from 'prop-types';





const Header = (props) => {

    return (
        <Fragment>
            <h2>{props.title}</h2>
        </Fragment>
    )
}



Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: 'Expense Tracker',
}


export default Header
