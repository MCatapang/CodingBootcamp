import React, {useReducer} from 'react';
import './App.css';

const reducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.payload
    }
}

const initialState = {
    firstName: "",
    lastName: "",
    emailAddress: "",
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch({
            type: name, 
            payload: value
        });
    }
    
    const firstNameValidator = () => {
        if((state.firstName === "") || state.firstName.length > 4) {
            return "";
        } else {
            return (<h4>First Name must be at least 4 characters long!</h4>)
        }
    }

    const lastNameValidator = () => {
        if((state.lastName === "") || state.lastName.length > 4) {
            return "";
        } else {
            return (<h4>Last Name must be at least 4 characters long!</h4>)
        }
    }

    const emailValidator = () => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if((state.emailAddress === "") || (emailRegex.test(state.emailAddress))) {
            return "";
        } else {
            return (
                <h4>Invalid email address!</h4>
            )
        }
    }

    return (
        <div>
            <form>
                <label for="firstName">
                    First Name: 
                    <input type="text" name="firstName" placeholder="Michael" value={state.firstName.value} onChange={handleChange}/>
                </label>
                {firstNameValidator()}
                <label for="lastName">
                    Last Name:
                    <input type="text" name="lastName" placeholder="Catapang" value={state.lastName.value} onChange={handleChange}/>
                </label>
                {lastNameValidator()}
                <label for="emailAddress">
                    Email Address:
                    <input type="text" name="emailAddress" placeholder="Michael@Domain.com" value={state.emailAddress.value} onChange={handleChange}/>
                </label>
                {emailValidator()}
            </form>
        </div> 
    )
}

export default App