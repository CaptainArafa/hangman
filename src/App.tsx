import { useState } from "react"
import words from '../wordList.json'
import './App.css'
import { Hangman } from "./Components/Hangman"
import { HangmanWord } from "./Components/HangmanWord"
import { Keyboard } from "./Components/Keyboard"

function App() {
  
const [wordtoGuess,setWordtoGuess] = useState(()=>{
  return words[Math.floor(Math.random()*words.length)]
})
const [guessedLetters,setGuessedLetters] = useState<string[]>([])
const AddGuessedLetters = (letter:string) =>{
  if (guessedLetters.includes(letter)) return
  setGuessedLetters(prevletters=>[...prevletters, letter])

}
console.log(guessedLetters)
  return( 
  <div className="Container">
    <div className='GameResult'>Win Lose</div>
    <Hangman />
    <HangmanWord word={wordtoGuess} guessed={guessedLetters}/>
    <Keyboard AddGuessedLetters={AddGuessedLetters} />
  </div>
  )
}

export default App
