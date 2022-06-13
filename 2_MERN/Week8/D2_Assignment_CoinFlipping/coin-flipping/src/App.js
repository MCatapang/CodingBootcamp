import './App.css';

function App() {
    function fiveHeadsSync() {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        return `It took ${attempts} tries to flip five "heads"`;
    }
    console.log( fiveHeadsSync() );

    const fiveHeads = () => {
        return new Promise( (resolve, reject) => {
        
        });
    }

    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) )
    
    return (
        <>
            <h1>Hello!</h1>
        </>
    );
}

export default App;
