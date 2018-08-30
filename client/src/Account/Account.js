import React, { Component } from 'react';
import { connect } from 'react-redux';

import Friends from '../_components/Friends';
import Requests from '../_components/Requests';
import * as actions from '../_actions/actions';

class Account extends Component {
    componentDidMount() {
        this.props.getConnections();
    }

    renderContent() {
        if (this.props.nav) {
            return (
                <Requests />
            );
        } else {
            return (
                <Friends />
            );
        }
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className="row mt-4">
                    <div className='col-3'>
                        <div className="btn-group-vertical w-100 ml-4" role='group'>
                            <button className="btn btn-outline-primary btn-block" onClick={ this.props.handleClickConnections } type='button'>Друзья</button>
                            <button className="btn btn-outline-primary btn-block" onClick={ this.props.handleClickRequests } type='button'>Заявки</button>
                        </div>
                    </div>

                    { this.renderContent() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nav: state.account.nav
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClickConnections: () => {
            dispatch({type: 'CONNECTIONS'});
        },

        handleClickRequests: () => {
            dispatch({type: 'REQUESTS'});
        },

        getConnections: () => {
            dispatch(actions.getConnections());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);