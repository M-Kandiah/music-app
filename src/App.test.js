import { render, screen } from '@testing-library/react';
import App from './App';


for(let i=1 ; i<7 ; i++) {

  test(`tests if all card${i} exists`, () => {
    render(<App/>)
    const card = screen.getByTestId(`card${i}`)
    expect(card).toBeInTheDocument()
})


}

test('tests if header is beyonce', () => {
  render(<App/>)
  const header = screen.getByTestId('header')
  expect(header).toHaveTextContent('Beyonce')
})

