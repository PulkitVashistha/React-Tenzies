import React from "react";

export default function Count() {

    const [starWarsData, setStarWarsData] = React.useState({});
    const [count, setCount] = React.useState(1);

    React.useEffect(() => {
        console.log("Effect function ran");
        async function getData() {
            const res = await fetch('https://swapi.dev/api/people/' + count);
            const data = await res.json();
            setStarWarsData(data)
        }
        getData();
    }, [count])

    function increaseCount() {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div className="count-container">
            <h2>Get info on Star Wars Characters</h2>
            <button onClick={increaseCount}>Get next character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}