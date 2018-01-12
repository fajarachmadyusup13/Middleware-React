import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class UserList extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    renderListUsers(user) {
        return (
            <div key={user.name} className="card card-block">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">Cheese Factory</p>
                <a className="btn btn-primary">Email</a>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.props.users.map(this.renderListUsers)}        
            </div>
        );
    }
}

function mapStateToProps({users}) {
    return {
        users
    };
}

export default connect(mapStateToProps, {fetchUsers})(UserList);