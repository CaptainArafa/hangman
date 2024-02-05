

type HangmanWordProps = {
  word:string,
  guessed:string[]
}
export const HangmanWord = ({word,guessed}:HangmanWordProps) => {
  return (
    <div className="wordContainer">
      {word.split("").map((letter,index)=>{
        return <span className="letter" key={index}><span style={{visibility:guessed.includes(letter)?'visible':"hidden"}}>{letter}</span></span>
      })}
    </div>
  )
}
