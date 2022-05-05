// ------------------------IMPORTS------------------------
import React, {Component} from 'react';


// ------------------------COMPONENTS------------------------
class PersonCard extends Component {
    render() {
        return (
            <>
                <h1 class="shadow">{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            </>
        )
    }
}


// ------------------------EXPORT------------------------
export default PersonCard;