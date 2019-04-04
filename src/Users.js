import React from 'react';

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:6969/users")
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.setState({
                    isLoaded: true,
                    users: json.users
                });
            })
    }
    render() {
        const {error, isLoaded, users} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            let rows = [];
            this.state.users.forEach(function(user) {
                rows.push(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.login}</td>
                    <td>{user.password}</td>
                    </tr>
            );
            }.bind(this));
            return (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Login</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                <tbody>{rows}</tbody>
                </table>
        );
        }
    }
}