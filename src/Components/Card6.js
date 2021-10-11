import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

const Card6 = () => {
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

<Card data-testid='card6' style={{ width: '18rem' }}>
  <Card.Img variant="top" alt="Card6" src="https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png" />
  <Card.Body>
    <Card.Title>Lemonade</Card.Title>
    <Card.Text>
    4 is the fourth solo studio album by American singer Beyoncé. 
    It was released on June 24, 2011, by Parkwood Entertainment and Columbia Records. 
    Following a career hiatus that reignited her creativity, Beyoncé was inspired to create a record with a basis in traditional rhythm and blues that stood apart from contemporary popular music. 
    </Card.Text>
    <Button variant="primary" onClick={changeToLiked}>{likedState}</Button>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default Card6
