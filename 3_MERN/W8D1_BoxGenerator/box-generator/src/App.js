import React, {useState} from 'react';
import Block from './components/Block';
import Form from './components/Form';
import './App.css';

function App() {
    const [currentColors, setCurrentColors] = useState([]);
    const [currentWidth, setCurrentWidth] = useState(20);
    const [currentHeight, setCurrentHeight] = useState(20);
    
    const onNewChanges = (dataSet) => {
        console.log(dataSet);
        const [inputColor, width, height] = dataSet;
        setCurrentColors([...currentColors, inputColor]);
        setCurrentWidth(width);
        setCurrentHeight(height);
    }

    const dataSet = [currentColors, currentWidth, currentHeight];

    return (
        <>
            <Form propsSet={onNewChanges}/> 
            <Block blockColor={dataSet}/>       
        </>
    );
    // Setting Height and Weight values not accomplished
}

export default App;
