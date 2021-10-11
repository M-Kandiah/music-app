import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

const Card3 = () => {
  let [likedState,change] = useState('Like Here!')

  const changeToLiked = () => {

    if(likedState === 'Like Here!') {
      change(likedState = 'Liked')
    } else {
      change(likedState = 'Like Here!')
    }
    
  }
    return (
        <div>

<Card data-testid='card3' style={{ width: '18rem' }}>
  <Card.Img variant="top" alt="card3" src="https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png" />
  <Card.Body>
    <Card.Title>I Am... Sasha Fierce</Card.Title>
    <Card.Text>
    I Am... Sasha Fierce is the third studio album by American singer Beyoncé. 
    It was released on November 12, 2008, by Columbia Records and Music World Entertainment. 
    In its original release, the album was formatted as a double album, intending to market Beyoncé's dichotomous artistic persona. 
    </Card.Text>
    <Button variant="primary" onClick={changeToLiked}>{likedState}</Button>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default Card3
