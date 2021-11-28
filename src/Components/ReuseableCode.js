import React from 'react'

export default function ReuseableCode() { 
const joke1=(
        <>
      <p id="question1"> Why did Yankee Doodle go to town?</p>
      <p id="answer1"> He forgot to pick up supper.</p>
        </>
)

const joke2 =(
  <>
  <p id="question1"> Why did Yankee Doodle go to town?</p>
  <p id="answer1"> Quit asking questions!</p>
  </>
)

const joke3 =(
  <>
  <p id="question1"> Why did Yankee Doodle go to town?</p>
  <p id="answer1"> Do I know you?</p>
  </>
)

const joke4 =(
  <>
  <p id="question1"> Why did Yankee Doodle go to town?</p>
  <p id="answer1"> Whats the number for 9-1-1?</p>
  </>
)

const joke5 =(
  <>
  <p id="question1"> Why did Yankee Doodle go to town?</p>
  <p id="answer1"> I have pepper spray!</p>
  </>
)



  // @give both new files a frame. and show return on both 
  return (
    <>
    <p id="showCodeIntro">This is the actual file.</p>
    <p id="showCode">
    <pre>{`
    import React from 'react'

    export default function ReuseableCode() { 
    const joke1=(
            <>
          <p id="question1"> Why did Yankee Doodle go to town?</p>
          <p id="answer1"> He forgot to pick up supper.</p>
            </>
    )
    
    const joke2 =(
      <>
      <p id="question1"> Why did Yankee Doodle go to town?</p>
      <p id="answer1"> Quit asking questions!</p>
      </>
    )
    
    const joke3 =(
      <>
      <p id="question1"> Why did Yankee Doodle go to town?</p>
      <p id="answer1"> Do I know you?</p>
      </>
    )
    
    const joke4 =(
      <>
      <p id="question1"> Why did Yankee Doodle go to town?</p>
      <p id="answer1"> Whats the number for 9-1-1?</p>
      </>
    )
    
    const joke5 =(
      <>
      <p id="question1"> Why did Yankee Doodle go to town?</p>
      <p id="answer1"> I have pepper spray!</p>
      </>
    )
    
    
    
      return (
        <>
        <p>This code was written line by line as constants and submitted to the return method.</p>
        <br/>
        <div>
            {joke1}
        </div>
        <div>
          {joke2}
        </div>
        <div>
          <p>{joke3}</p>
        </div>
        <div>
          <p>{joke4}</p>
        </div>
        <div>
          <p>{joke5}</p>
        </div>
    
        <footer>
          <br/>
          <center><a href="#"><button>See code reused</button></a></center>
        </footer>
        </>
      )
    }
    
    `}</pre>
    </p>
    <footer id="bottomFooter2">
            <br/>
            <center><a href={"/react/reuseable-code/example"}><button id="homeButton">See code reused</button></a></center> 
        </footer>

    </>
  )
}
