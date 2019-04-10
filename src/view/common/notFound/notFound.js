import React, { Component } from 'react';
import './notFound.module.scss';
import PropTypes from 'prop-types';

class Layout extends Component {
    render () {
        console.log(this.props)
        return (
            <div styleName='Layout' className='Layout'>
                404
                123
            </div>
        );
    }
}

Layout.propTypes = {
    route: PropTypes.any.isRequired
}

export default Layout;
