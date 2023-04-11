import React from 'react'
import BoxesInfo from '../resources/boxes'
import Box from './Box';

export default function Boxes() {


    const [boxesData, setBoxesData] = React.useState(BoxesInfo.map(el => {
        return { id: el.id, on: el.on }
    }));

    function toggleOn(id) {
        setBoxesData((boxes) => {
            return boxes.map((box) => {
                return box.id === id ? { ...box, on: !box.on } : box;
            })
        })
    }

    const boxesMap = boxesData.map(function (box) {
        return <Box handleToggle={()=>toggleOn(box.id)} on={box.on} />;
    })


    return (
        <div className='boxes-wrapper'>
            {boxesMap}
        </div>
    );
}