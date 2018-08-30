import React from 'react';
import { connect } from 'react-redux';

class Friends extends React.Component {
    render() {
        return(
            <div className="col-6 mr-auto">

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        connectionList: state.account.connectionList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
