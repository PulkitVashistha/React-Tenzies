import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Tenzies() {
    const { width, height } = useWindowSize()
    const [completion,setCompletion] = React.useState(false);
    const [numberSet, setNumberSet] = React.useState(() => Array.from({ length: 8 }, () => ({
        "val": Math.floor(Math.random() * 8),
        "id": nanoid(),
        "active": false
    })));
    const [selectedNum, setSelectedNum] = React.useState(null);

    function numberClickHandler(event, val) {
        const { className, id } = event.target;
        if (selectedNum == null) {
            setSelectedNum(() => val);
            setNumberSet((prevSet) => {
                return prevSet.map((num) => {
                    return num.id === id ? { ...num, "active": true } : num
                });
            })
        } else if (!className.includes("active") && selectedNum == val) {
            setNumberSet((prevSet) => {
                return prevSet.map((num) => {
                    return num.id === id ? { ...num, "active": true } : num
                });
            })
        }
    }

    function rollButtonClick() {
        setNumberSet((prevNumSet) => {
            return prevNumSet.map((prevNum) => {
                return !prevNum.active ? { ...prevNum, "val": Math.floor(Math.random() * 8) } : prevNum
            })
        })
    }

    function resetNumberSet() {
        setNumberSet(Array.from({ length: 8 }, () => ({
            "val": Math.floor(Math.random() * 8),
            "id": nanoid(),
            "active": false
        })));
        setSelectedNum(() => null)
    }

    React.useEffect(() => {
        if (numberSet.filter((num) => !num.active).length == 0) {
            setCompletion(true);
            document.getElementById("roll-button").addEventListener("click", resetNumberSet);
        }
        return () => {
            setCompletion(false);
            document.getElementById("roll-button").removeEventListener("click", resetNumberSet);
        }
    }, [numberSet]);

    return (
        <div className="card" id="tenzies">
            {completion && <Confetti display="none" width={width} height={height}/>}
            <h1>Tenzies</h1>
            <h2>Roll until all the dice are the same. Click each die to freeze it at its current value between rolls.</h2>
            <div className="grid-container">
                {
                    numberSet.map(num =>
                        <div key={num.id} className={`grid-item ${num.active ? "active" : ""}`}
                            id={num.id}
                            onClick={(event) => numberClickHandler(event, num.val)}>{num.val}
                        </div>
                    )
                }
            </div>
            <button className="roll-button" id="roll-button" onClick={rollButtonClick}>{completion?"Reset Game" : "Roll"}</button>
        </div>
    )
}