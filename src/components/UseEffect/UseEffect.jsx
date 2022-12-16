
import './UseEffect.css'



import React, { useState } from 'react'



export default function UseEffect() {

    const [vorname, setVorname] = useState('')
    const [nachname, setNachname] = useState('')
    const [email, setEmail] = useState('')


    return (
        <section className='box'>

            <article className='article1'>

                <input type="text" placeholder='Vorname' onChange={event => setVorname(event.target.value)} />
                <input type="text" placeholder='Nachname' onChange={event => setNachname(event.target.value)} />
                <input type="text" placeholder='Email' onChange={event => setEmail(event.target.value)} />

            </article>

            <article className='article2'>

                <h3>Vorname: </h3><span> {vorname} </span> <br /> <br />
                <h3>Nachname: </h3><span> {nachname}</span><br /><br />
                <h3>Email: </h3><span> {email}</span> <br /><br />

            </article>

        </section>
    )
}
