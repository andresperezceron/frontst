import React from 'react'
import GenericTable from '../GenericTable'

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
        fetch('http://localhost:6969/users').then((response) => {
            return response.json()
        }).then((json) => {
            this.setState({
                isLoaded: true,
                users: json.users,
            })
        }).catch(error => {
            this.setState({
                error: "error en el ajax, arranca el server"
            })
        })

    }
    render() {
        const {error, isLoaded, users} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
              <GenericTable arrObj={users}/>
        );
        }
    }
}


