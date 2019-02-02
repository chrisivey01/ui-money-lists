import React from 'react'

const FastFood = (props) => {

    return (
        <div>
            <ul style={{float: 'left', listStyle: 'none', marginTop: '40px'}}>
                <li style={{display: 'inline-block'}}>
                    Days gone without fast food: {props.fastFoodDays}
                </li>
                <li>
                    ${props.fastFoodDollars} Saved
                </li>
                <li>
                    <button onClick={(e) => props.fastFoodClick(e)} style={{margin: '10px'}}>
                        +
                    </button>
                    <button onClick={(e) => props.fastFoodClick(e)} style={{margin: '10px'}}>
                        -
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default FastFood;