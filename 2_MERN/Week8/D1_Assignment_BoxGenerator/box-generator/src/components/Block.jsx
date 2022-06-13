import React from 'react';
import styles from './Block.module.css';

const Block = (props) => {
    const dataSet = props.blockColor;
    const [currentColors, currentWidth, currentHeight] = dataSet;

    return (
        <div>
            { currentColors.map( (color, idx) => 
                <div 
                    key={idx} 
                    className={styles.block}
                    style={{
                        backgroundColor: color,
                        width: currentWidth,
                        height: currentHeight
                    }}
                /> 
            )}
        </div>
    );
}

export default Block;