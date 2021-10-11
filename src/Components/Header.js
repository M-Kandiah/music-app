import React from 'react'
import { useState } from 'react'


const Header = () => {

let [inputted,change] = useState('')

const display = (input) => {
  
    change(inputted = `Hi ${input}, I'm Beyonce`)
}


    return (
        <div>
            <h1 aria-label="header" data-testid='header'>Beyonce</h1>

            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png"></img>

        <h2>Beyonce wants to say Hi</h2>
        {/* display(e.target.value) */}
        <form  onSubmit={(e) => {
            e.preventDefault()
            display(e.target[0].value)}}>
            <label/>
            <input>
            </input>
            
            <button type="submit"></button>

        </form>

        <h1>{inputted}</h1>


        </div>
    )
}

export default Header
