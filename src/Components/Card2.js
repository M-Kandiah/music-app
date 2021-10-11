import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

const Card2 = () => {
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

<Card data-testid='card2' style={{ width: '18rem' }}>
  <Card.Img variant="top" alt="card2" src="https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png" />
  <Card.Body>
    <Card.Title>B'Day</Card.Title>
    <Card.Text>
    Dangerously in Love is the debut solo studio album by American singer Beyoncé. 
    It was released on June 20, 2003, through Columbia Records and Music World Entertainment. 
    During the recording of Destiny's Child's third studio album Survivor (2001), the group announced that they would produce solo albums to be released.
    </Card.Text>
    <Button variant="primary" onClick={changeToLiked}>{likedState}</Button>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default Card2
