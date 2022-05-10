import React, {useState} from 'react';

const Form = (props) => {
    const [inputColor, setInputColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const submitFunction = (e) => {
        e.preventDefault();
        const dataSet = [inputColor, width, height];
        props.propsSet(dataSet);
        setInputColor("");
        setWidth("");
        setHeight("");
    }

    return (
        <form onSubmit={submitFunction}>
            <label htmlFor="color">
                Color: 
                <input type="text" value={inputColor} onChange={ (e) => setInputColor(e.target.value) }/>
            </label>
            <label htmlFor="width">
                Width: 
                <input type="text" value={width} onChange={ (e) => setWidth(e.target.value) }/>
            </label>
            <label htmlFor="height">
                Height: 
                <input type="text" value={height} onChange={ (e) => setHeight(e.target.value) }/>
            </label>
            <button type="submit">Add</button>
        </form>
    )
}





export default Form