import React from "react"

export default function Main() {
    const [temp,setTemp] = React.useState(1);

    // function add(){
    //     setTemp(tempValue => tempValue % 2 === 0 ? tempValue * 10 + 1 : tempValue + 1);
    // }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"/>
                <input type="text" placeholder="Bottom text" className="form--input"/>
                <button className="form--input">
                    Get a new meme image
                </button>
            </div>
        </main>
    )
}