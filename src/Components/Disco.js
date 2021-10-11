import React from 'react'
// import { Card } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import Card6 from './Card6'

const Disco = () => {
    return (
        <div className="justify-content-around row">
            <div className="col-4">
            <Card1/>
            </div>
            <div className="col-4">
            <Card2/>
            </div>
            <div className="col-4">
            <Card3/>
            </div>
            
            
            
            <Card4/>
            <Card5/>
            <Card6/>
                   
        </div>
    )
}

export default Disco
