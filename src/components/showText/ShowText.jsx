

import React, { useState } from 'react'

export default function ShowText() {

    const [shown, setShow] = useState(false)


    function showMe() {

        if (shown === true) {
            setShow(false)
        } else if (shown === false) {
            setShow(true)
        }

    }

    return (
        <div>

            <h1>Hallo</h1>

            <button onClick={showMe} >Show me</button>
            <p style={shown === false ? { display: 'none' } : { display: 'block' }} >Text</p>

        </div>
    )
}
