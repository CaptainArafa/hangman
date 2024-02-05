import { useState } from "react"

const letters =[
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
type KeyboardProps ={
  AddGuessedLetters: (letter:string) => void
}
export const Keyboard = ({AddGuessedLetters}:KeyboardProps) => {
  const [active,setActive] = useState(false)
  return (
    <div className="keyboardContainer">{letters.map(letter=>{
      return <button key={letter} onClick={()=>AddGuessedLetters(letter)}  className="keyboardKey ">{letter}</button>
    })}</div>
  )
}
