import React from "react";
import {useParams} from 'react-router-dom';

const Input = (props) => {

    const {input, color, backgroundColor} = useParams();

    if(isNaN(+`${input}`)) {
        return (
            <>
                <h1 style={{color: color, backgroundColor: backgroundColor}}>The word is "{input}"</h1>
                <h3>Feel free to change the word being displayed through the URL</h3>
                <h3>See what happens when you change the colors in the URL above?</h3>
                <h3>Try and see what happens if you change the word into a number instead lol</h3>
            </>
        )
    } else {
        return (
            <div>
                <h1 style={{color: color, backgroundColor: backgroundColor}}>The number is "{input}"</h1>
                <h3>You can still change the number using the URL above!</h3>
                <h3>You can also still change the color using the URL above.</h3>
            </div>
        )
    } 

}

export default Input; 