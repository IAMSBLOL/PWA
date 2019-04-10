import React, { Component } from 'react';
import './layout.module.scss';
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types';
import Navigation from '../../../container/navigation'
// import { createBrowserHistory } from 'history'
// const history = createBrowserHistory()
class Layout extends Component {
    componentDidMount () {
        this.props.history.push('/home/resume', { some: 'state' });
    }
    match=() => {
        console.log(this.props)
        const { route } = this.props
        // const branch = matchRoutes(route, '/');
        // console.log(branch)
        return renderRoutes(route.routes)
    }
    render () {
        return (
            <div styleName='Layout' className='Layout'>
                <Navigation />
                {
                    this.match()
                }

            </div>
        );
    }
}

Layout.propTypes = {
    route: PropTypes.any.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
}

export default Layout;
