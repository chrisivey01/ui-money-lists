import React from 'react'

const Starbucks = (props) => {

    return (
        <div>
            <ul style={{float: 'left', listStyle: 'none', marginTop: '40px'}}>
                <li style={{display: 'inline-block'}}>
                    Days gone without Starbucks: {props.starBucks.starBucksDays}
                </li>
                <li>
                    ${props.starBucks.starBucksDollars} Saved
                </li>
                <li>
                    <button onClick={(e) => props.starbucksClick(e)} style={{margin: '10px'}}>
                        +
                    </button>
                    <button onClick={(e) => props.starbucksClick(e)} style={{margin: '10px'}}>
                        -
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Starbucks;