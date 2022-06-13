import React, {useState} from 'react';
import styles from './Form.module.css';

const Form = (e) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");  
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, emailAddress, password, confirmPassword};
        alert(`Welcome ${firstName} ${lastName} \nYour account details are: ${JSON.stringify(newUser)}`);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={createUser}>        
                <div className="inputField">
                    <label for="firstName">First Name: </label>
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) }/>
                </div>
                <div className="inputField">
                    <label for="lastName">Last Name: </label>
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) }/>
                </div>
                <div className="inputField">
                    <label for="emailAddress">Email Address: </label>
                    <input type="text" value={emailAddress} onChange={ (e) => setEmailAddress(e.target.value) }/>
                </div>
                <div className="inputField">
                    <label for="password">Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
                </div>
                <div className="inputField">
                    <label for="confirmPassword">Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) }/>
                </div>
                <button type="submit">Create User!</button>
            </form>
            <div className={styles.accountDetails}>
                <h3>Account Details:</h3>
                <ul>
                    <li>First Name: {firstName}</li>
                    <li>Last Name: {lastName}</li>
                    <li>Email Address: {emailAddress}</li>
                    <li>Password: {password}</li>
                    <li>Confirm Password: {confirmPassword}</li>
                </ul>
            </div>
        </div>
    )
}

export default Form;