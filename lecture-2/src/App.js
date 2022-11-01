import React, { Component } from 'react';
import Display from './Display';

class App extends Component {
    state = {
        name: 'alex',
        age: 35,
        designation: 'developer',
        contact: {
            email: 'admin@gmail.com',
        },
        employeeData: [{
            empId: 1,
            name: 'alex',
            age: 34
        }, {
            empId: 2,
            name: 'harry',
            age: 30
        }, {
            empId: 3,
            name: 'alina',
            age: 90
        }]
    }

    render() {
        return (
            //jsx
            <>
                <p>{this.state.name}</p>
                <p> {this.state.age}</p>
                <p> {this.state.contact.email}</p>

                <Display employeeData={this.state.employeeData} name={this.state.name} />
            </>
        )
    }
}

export default App;

// babel

// React.createElement(App, Display (employeeData) {

// })


//parametrized function
// add = (a, b) => {

// }

// add(10, 20)