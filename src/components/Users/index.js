import React from 'react'
import GenericTable from '../GenericTable'
import {ajax} from 'rxjs/ajax'
console.log('ajax', ajax);//TODO: borrame.

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
        //creamos un observable del json que tira el endpoint,
        // de ahi el dolar del final
        // el flujo es de [ 1json ] al igual que el de un array de [1] elemento.
        const usersJson$ = ajax.getJSON('http://localhost:6969/users')

        //nos subscribimos a ese flujo como observadores, para ello , le pasamos
        //3 callbacks ...
        usersJson$.subscribe(
            console.log, //onSuccess,
            console.error, //onError
            console.log('completado') //onComplete , que este se usa poco xD
        )
        //y asincronia a tomar x culo .

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
            return <div>Error: {error}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
              <GenericTable arrObj={users}/>
        );
        }
    }
}


