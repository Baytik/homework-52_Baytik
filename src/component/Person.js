import React, {Component} from 'react';

class Person extends Component{
    render() {
        return (
            <div className="person">
                <h1>{this.props.name}</h1>
                <p>{this.props.age}</p>
                <p>{this.props.children}</p>
            </div>
        );
    };
}

export default Person;