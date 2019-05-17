import React from 'react'
import GenericTable from '../GenericTable'
import {ajax} from 'rxjs/ajax'

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        }
    }

    componentDidMount() {
        //creamos un observable del json que tira el endpoint,
        // de ahi el dolar del final
        // el flujo es de [ 1json ] al igual que el de un array de [1] elemento.
        const usersJson$ = ajax.getJSON('http://localhost:6969/users');
        const observerDeUsers = {
            next: (next) => this.setState( {isLoaded: true, users: next} ),
            error: (error) => console.log(error),
            complete: () => {}
        };
        usersJson$.subscribe(observerDeUsers);
    }

    render() {
        const {error, isLoaded, users} = this.state;
        if (error) {
            return <div>Error: {error}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (<GenericTable arrObj={users}/>)
        }
    }
}