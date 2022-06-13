import React, {useState} from "react";
import styles from "./Form.module.css"

const Form = () => {
    const [headerMessage, setHeaderMessage] = useState("Enter your information below");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [buttonMessage, setButtonMessage] = useState("Create User")

    const createUser = (e) => {
        e.preventDefault();
        alert("Your account has been created");
        setHeaderMessage("Your account info is as follows:")
        setButtonMessage("Update User Info");
    }

    return (
        <form className={styles.form} onSubmit={createUser}>

            {/* Header */}
            <h1>Welcome!</h1>
            <h2>{headerMessage}</h2>

            {/* Input: First Name */}
            <label for={firstName}>
                First Name: 
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </label>
            {
                firstName < 2 ?
                    <h4>First Name must be at least 2 characters</h4> :
                    ""
            }

            {/* Input: Last Name */}
            <label for={lastName}>
                Last Name:
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </label>
            {
                lastName.length < 2 ?
                <h4>Last Name must be at least 2 characters long</h4>:
                ""
            }

            {/* Input: Email Address */}
            <label for={emailAddress}>
                Email Address: 
                <input type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
            </label>
            {
                emailAddress.length < 2 ?
                <h4>Email Address must be at least 2 characters long</h4>:
                ""
            }

            {/* Input: Password */}
            <label for={password}>
                Password: 
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            {
                password.length < 8 ?
                <h4>Password must be at least 8 characters long</h4>:
                ""
            }

            {/* Input: Confirm Password */}
            <label for={confirmPassword}>
                Confirm Password: 
                <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
            {
                confirmPassword !== password ?
                <h4>Passwords must match</h4>:
                ""
            }

            {/* Button: Submit */}
            <button type="submit" className={styles.button}>{buttonMessage}</button>
        </form>
    )
}

export default Form;