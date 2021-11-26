import React from 'react'

export default function ReuseableCode() { 
const joke1=(
        <>
      <p id="question1"> Why did Yankee Doodle go to town?</p>
      <p id="answer1"> He forgot to pick up supper!</p>
        </>
)
  // @give both new files a frame. and show return on example
  return (
    <>
    <div>
        <p>{joke1}</p>
    </div>
    <footer>
      <br/>
      <center><a href="/react/reuseable-code/example"><button id="homeButton">See code in action!</button></a></center>
    </footer>
    </>
  )
}
