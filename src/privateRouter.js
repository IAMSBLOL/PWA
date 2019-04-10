import {
    Route,
    Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
const fakeAuth = { // cookie set httponly
    isAuthenticated: false,
    authenticate (cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout (cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};
export default class PrivateRoute extends Component {
    render () {
        const { component, ...rest } = this.props
        return (
            <Route {...rest} render={props => fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}
                />
            )
            }
            />
        )
    }
}

PrivateRoute.propTypes = {
    component: PropTypes.any.isRequired,
}

// match router也是可以匹配相关路由render的。这样基本能实现路由权鉴。这样也是可以实现，不过有点恶心
