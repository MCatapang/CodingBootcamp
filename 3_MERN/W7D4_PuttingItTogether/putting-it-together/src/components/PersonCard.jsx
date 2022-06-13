// ------------------------IMPORTS------------------------
import React, {Component} from 'react';


// ------------------------COMPONENTS------------------------
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    increaseAge = () => {
        this.setState({age: this.state.age + 1});
    }
    
    render() {
        return (
            <>
                <h1 className="shadow">{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.increaseAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </>
        )
    }
}


// ------------------------EXPORT------------------------
export default PersonCard;