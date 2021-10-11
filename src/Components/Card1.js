import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

const Card1 = () => {

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

<Card data-testid='card1' style={{ width: '18rem' }}>
  <Card.Img variant="top" alt="card1" src="https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png" />
  <Card.Body>
    <Card.Title>Dangerously in Love</Card.Title>
    <Card.Text>
    Dangerously in Love is the debut solo studio album by American singer Beyoncé. 
    It was released on June 20, 2003, through Columbia Records and Music World Entertainment. 
    During the recording of Destiny's Child's third studio album Survivor (2001), the group announced that they would produce solo albums to be released.
    </Card.Text>
    <p></p>
    <Button variant="primary" onClick={changeToLiked}>{likedState}</Button>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default Card1
