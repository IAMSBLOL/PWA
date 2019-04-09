import React, { Component } from 'react';
import './discribtion.module.scss';
import * as homeAction from '../../../action/globalAction'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class Discribtion extends Component {
    componentDidMount () {
        const { homeAction } = this.props
        homeAction.TEST('hahahaha')
        homeAction.SAGATEST('saga是否接收', 'REQ')
    }
    render () {
        const { home, saga } = this.props
        return (
            <div styleName='discribtion' className='discribtion'>
                discribtiona
                {home}
                {saga}asd
                <img src='http://pic29.nipic.com/20130601/12122227_123051482000_2.jpg' />
            </div>
        );
    }
}

Discribtion.propTypes = {
    home: PropTypes.string,
    homeAction: PropTypes.object,
    saga: PropTypes.string,
}

const mapStateToProps = (state) => {
    console.log(state, 26)
    const { home, saga } = state.homeReducer
    return {
        home, saga
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        homeAction: bindActionCreators(homeAction, dispatch),
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discribtion);
